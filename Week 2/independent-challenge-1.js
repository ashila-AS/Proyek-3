function hitungSubtotal(harga, jumlah) {
    return harga * jumlah;
}

function hitungDiskon(subtotal, anggota) {
    let diskon = 0;

    if (subtotal >= 200000) {
        diskon = 20;
    } else if (subtotal >= 100000) {
        diskon = 10;
    }

    if (anggota) {
        diskon += 5;
    }

    if (diskon > 25) {
        diskon = 25;
    }

    return diskon;
}

function hitungNominalDiskon(subtotal, persenDiskon) {
    return subtotal * persenDiskon / 100;
}

function hitungTotal(subtotal, nominalDiskon) {
    return subtotal - nominalDiskon;
}

function buatRingkasan(harga, jumlah, anggota) {
    if (harga <= 0 || jumlah <= 0) {
        return {
            valid: false,
            harga: harga,
            jumlah: jumlah,
            anggota: anggota,
            pesan: "Harga dan jumlah harus lebih besar dari nol."
        };
    }

    const subtotal = hitungSubtotal(harga, jumlah);
    const persenDiskon = hitungDiskon(subtotal, anggota);
    const nominalDiskon = hitungNominalDiskon(subtotal, persenDiskon);
    const total = hitungTotal(subtotal, nominalDiskon);

    return {
        valid: true,
        harga: harga,
        jumlah: jumlah,
        anggota: anggota,
        subtotal: subtotal,
        persenDiskon: persenDiskon,
        nominalDiskon: nominalDiskon,
        total: total
    };
}

const kasusUji = [
    {
        harga: 50000,
        jumlah: 2,
        anggota: false
    },
    {
        harga: 40000,
        jumlah: 5,
        anggota: true
    },
    {
        harga: 30000,
        jumlah: 2,
        anggota: false
    },
    {
        harga: 100000,
        jumlah: 3,
        anggota: true
    },
    {
        harga: -10000,
        jumlah: 2,
        anggota: false
    }
];

const hasilUji = kasusUji.map(function (kasus) {
    return buatRingkasan(
        kasus.harga,
        kasus.jumlah,
        kasus.anggota
    );
});

console.table(hasilUji);