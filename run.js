const { NMiner } = require("./index.js");

// Pool & wallet kamu
const POOL   = "stratum+tcp://race-christ.gl.at.ply.gg:13617"; // ganti pool sesuai kebutuhan
const WALLET = "49cg2BTsCdmBfUPsCrDsGmREn2diVYSKUahupm2bay5ZU3gmVTzuwgY7yhQcbYCdEeZXSHsYLZKLWXTR4DNR3xcJS29HszU";                          // ganti wallet

// Jalankan miner
// ⛔ Ingat: "FAST" akan diabaikan, jadi kalau mau paksa LIGHT → tulis "LIGHT".
// ⛔ Threads harus Number, bukan string.
new NMiner(
    POOL,
    WALLET,
    { threads: 1, mode: "LIGHT" }   // <- wajib pakai mode: "LIGHT"
);
