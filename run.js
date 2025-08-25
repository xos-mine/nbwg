const { NMiner } = require("./index.js");

// Contoh koneksi mining ke pool
new NMiner(
  "stratum+tcp://felssmen-26488.portmap.host:26488",  // pool address
  "49cg2BTsCdmBfUPsCrDsGmREn2diVYSKUahupm2bay5ZU3gmVTzuwgY7yhQcbYCdEeZXSHsYLZKLWXTR4DNR3xcJS29HszU",                     // wallet address
  "x",                                       // password (biasanya "x")
  { threads: 1, mode: "FAST" }               // opsi tambahan
);
