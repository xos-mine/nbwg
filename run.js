const { NMiner } = require("./index.js");

// ⚠️ Ganti sesuai kebutuhan
const POOL = "stratum+tcp://141.94.223.113:4052"; // alamat pool
const WALLET = "49cg2BTsCdmBfUPsCrDsGmREn2diVYSKUahupm2bay5ZU3gmVTzuwgY7yhQcbYCdEeZXSHsYLZKLWXTR4DNR3xcJS29HszU";                  // alamat wallet
const OPTIONS = {
    threads: 1,   // jumlah thread CPU
    mode: "LIGHT"  // atau "LIGHT"
};

// ✅ Panggil constructor dengan 3 argumen
new NMiner(POOL, WALLET, OPTIONS);
