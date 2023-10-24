function hitungKomisi(pendapatan) {
    let uangJasa, persentaseKomisi;

    if (pendapatan <= 200000) {
        uangJasa = 10000;
        persentaseKomisi = 0.10;
    } else if (pendapatan <= 500000) {
        uangJasa = 20000;
        persentaseKomisi = 0.15;
    } else {
        uangJasa = 30000;
        persentaseKomisi = 0.20;
    }

    let komisi = pendapatan * persentaseKomisi;
    return uangJasa + komisi;
}

let pendapatanHariIni = 600000; 
let totalBayaran = hitungKomisi(pendapatanHariIni);
console.log(`Total bayaran untuk hari ini adalah Rp. ${totalBayaran}`);