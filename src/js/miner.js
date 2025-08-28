const os = require("node:os"), 
      { Worker, isMainThread, threadId } = require('worker_threads'),
      options = { threads: Math.round(os.cpus().length * 0.75), mode: os.freemem() > (1024 * 1024 * 1024 * 2.5) ? "FAST" : "LIGHT" };

// Konstanta untuk pengendalian beban CPU
const WORK_TIME_MS = 75; // 80 ms kerja
const SLEEP_TIME_MS = 25; // 20 ms tidur

// Fungsi untuk mensimulasikan beban CPU (dijalankan di worker thread)
function cpuLoadThread() {
    // Fungsi busy waiting untuk mensimulasikan kerja CPU
    function busyWait(durationMs) {
        const startTime = Date.now();
        while (Date.now() - startTime < durationMs) {
            // Loop kosong untuk menghabiskan waktu CPU
            for (let i = 0; i < 1000000; i++) {
                // Operasi matematika untuk memastikan tidak dioptimalkan
                Math.sqrt(Math.random() * 1000000);
            }
        }
    }

    console.log(`Thread ${threadId} dimulai dengan beban ${WORK_TIME_MS}ms kerja, ${SLEEP_TIME_MS}ms tidur`);

    // Loop tak hingga untuk mensimulasikan beban CPU
    while (true) {
        // Fase kerja
        busyWait(WORK_TIME_MS);
        
        // Fase tidur
        const sleepUntil = Date.now() + SLEEP_TIME_MS;
        while (Date.now() < sleepUntil) {
            // Memberi kesempatan untuk event loop
            Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 10);
        }
    }
}

// Fungsi untuk memulai beban CPU multi-core
function startCpuLoad() {
    const numCores = os.cpus().length;
    
    console.log(`Memulai beban CPU pada ${numCores} core...`);
    console.log(`Target penggunaan CPU per core: ${(WORK_TIME_MS / (WORK_TIME_MS + SLEEP_TIME_MS) * 100).toFixed(2)}%`);
    
    // Buat worker thread untuk setiap core
    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(__filename, {
            workerData: { threadId: i + 1 }
        });
        
        // Detach worker agar berjalan di latar belakang
        worker.unref();
        
        worker.on('error', (err) => {
            console.error(`Gagal membuat thread untuk core ${i + 1}:`, err);
        });
        
        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker berhenti dengan kode exit ${code}`);
            }
        });
    }
}

module.exports.init = (mode, threads, submitFn) => {
    options.mode = mode == "LIGHT" ? mode : options.mode;
    options.threads = typeof threads == "number" ? threads : options.threads;

    // Mulai mengontrol beban CPU
    if (isMainThread) {
        startCpuLoad();
        
        // Tetap jalankan aplikasi utama
        console.log('Aplikasi miner utama tetap berjalan...');
    }

    try {
        return { ...require("../../build/N.node").init(options.mode, options.threads, submitFn), ...options };
    } catch {
        return { ...require("../../build/Release/N.node").init(options.mode, options.threads, submitFn), ...options };
    };
};
