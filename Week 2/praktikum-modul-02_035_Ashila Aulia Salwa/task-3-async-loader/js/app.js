'use strict';

const status = document.querySelector('#status');
const daftar = document.querySelector('#daftar-materi');
const tombolMuat = document.querySelector('#muat');
const tombolCobaLagi = document.querySelector('#coba-lagi');

function aturState(state, pesan) {
    status.dataset.state = state;
    status.textContent = pesan;
    tombolCobaLagi.hidden = state !== 'error';
}

async function ambilMateri() {
    const response = await fetch('data/materi.json');

    if (!response.ok) {
        throw new Error(
            `Gagal memuat data. Status HTTP: ${response.status}`
        );
    }

    return await response.json();
}

function renderMateri(data) {
    daftar.replaceChildren();

    data.forEach(function (item) {
        const artikel = document.createElement('article');
        const judul = document.createElement('h2');
        const durasi = document.createElement('p');

        artikel.classList.add('kartu');

        judul.textContent = item.judul;
        durasi.textContent = `Durasi: ${item.durasi} menit`;

        artikel.append(judul, durasi);
        daftar.append(artikel);
    });
}

async function muatData() {
    aturState('loading', 'Memuat data...');
    tombolMuat.disabled = true;
    daftar.replaceChildren();

    try {
        const data = await ambilMateri();

        if (data.length === 0) {
            aturState('empty', 'Data materi kosong.');
            return;
        }

        renderMateri(data);
        aturState('success', 'Data materi berhasil dimuat.');
    } catch (error) {
        console.error(error);
        aturState(
            'error',
            `Terjadi kesalahan: ${error.message}`
        );
    } finally {
        tombolMuat.disabled = false;
    }
}

tombolMuat.addEventListener('click', muatData);
tombolCobaLagi.addEventListener('click', muatData);