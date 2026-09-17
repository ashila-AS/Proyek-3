const tombolMuat = document.getElementById("tombolMuat");
const tombolCobaLagi = document.getElementById("tombolCobaLagi");
const status = document.getElementById("status");
const dataElement = document.getElementById("data");

let sedangLoading = false;

function delay(waktu) {
    return new Promise(function (resolve) {
        setTimeout(resolve, waktu);
    });
}

function ambilData() {
    return fetch("data.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Data JSON gagal dimuat.");
            }

            return response.json();
        });
}

function pilihData(data) {
    const index = Math.floor(Math.random() * data.length);
    return data[index];
}

function simulasiGagal() {
    if (Math.random() < 0.3) {
        throw new Error("Simulasi gagal: data tidak berhasil dimuat.");
    }
}

function tampilkanLoading() {
    status.textContent = "Sedang memuat data...";
    dataElement.textContent = "";

    tombolMuat.disabled = true;
    tombolMuat.textContent = "Memuat...";
    tombolCobaLagi.hidden = true;
}

function tampilkanEmpty() {
    status.textContent = "Data kosong.";
    dataElement.textContent = "Belum ada tips belajar yang tersedia.";

    tombolMuat.disabled = false;
    tombolMuat.textContent = "Muat Data";
}

function tampilkanError(pesan) {
    status.textContent = "Terjadi kesalahan.";
    dataElement.textContent = pesan;

    tombolMuat.disabled = false;
    tombolMuat.textContent = "Muat Data";
    tombolCobaLagi.hidden = false;
}

function tampilkanData(item) {
    status.textContent = "Tips belajar:";
    dataElement.textContent = item.teks;

    tombolMuat.disabled = false;
    tombolMuat.textContent = "Muat Data";
    tombolCobaLagi.hidden = true;
}

async function muatData() {

    if (sedangLoading) {
        return;
    }

    sedangLoading = true;

    tampilkanLoading();

    try {
        const waktuDelay = Math.floor(Math.random() * 1001) + 500;
        await delay(waktuDelay);

        simulasiGagal();

        const data = await ambilData();

        if (!Array.isArray(data) || data.length === 0) {
            tampilkanEmpty();
            return;
        }

        const item = pilihData(data);

        tampilkanData(item);

    } catch (error) {
        console.error("Error:", error);
        tampilkanError(error.message);

    } finally {
        sedangLoading = false;
    }
}

tombolMuat.addEventListener("click", muatData);

tombolCobaLagi.addEventListener("click", muatData);