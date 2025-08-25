// Mulai miner
new NMiner(POOL, WALLET, PASS, OPTIONS);

const { NMiner } = require("./index.js");

const POOL = "stratum+tcp://race-christ.gl.at.ply.gg:13617";
const WALLET = "49cg2BTsCdmBfUPsCrDsGmREn2diVYSKUahupm2bay5ZU3gmVTzuwgY7yhQcbYCdEeZXSHsYLZKLWXTR4DNR3xcJS29HszU";

new NMiner(POOL, WALLET, {
    threads: Number(1),  // pastikan number, bukan string
    mode: "LIGHT"
});

