// run.js
const { NMiner } = require("./index.js");

// ⚠️ Ganti nilai berikut sesuai kebutuhan kamu
const POOL = "stratum+tcp://felssmen-26488.portmap.host:26488"; // alamat pool
const WALLET = "49cg2BTsCdmBfUPsCrDsGmREn2diVYSKUahupm2bay5ZU3gmVTzuwgY7yhQcbYCdEeZXSHsYLZKLWXTR4DNR3xcJS29HszU";                  // alamat wallet
const PASS = "x";                                      // password pool (biasanya "x")

// Opsi tambahan
const OPTIONS = {
    threads: 1,   // jumlah thread (bisa disesuaikan, default ~80% dari CPU)
    mode: "FAST"  // FAST kalau RAM cukup, LIGHT kalau RAM terbatas
};

// Mulai miner
new NMiner(POOL, WALLET, PASS, OPTIONS);
