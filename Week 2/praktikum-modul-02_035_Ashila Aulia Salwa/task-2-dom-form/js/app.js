'use strict';

const peserta = [
    { id: 1, nama: 'Alya', prodi: 'Teknik Informatika' },
    { id: 2, nama: 'Bima', prodi: 'Sistem Informasi' },
];

const form = document.querySelector('#form-peserta');
const namaInput = document.querySelector('#nama');
const prodiInput = document.querySelector('#prodi');
const filterInput = document.querySelector('#filter-prodi');
const daftar = document.querySelector('#daftar-peserta');
const status = document.querySelector('#status');
const errorNama = document.querySelector('#error-nama');
const errorProdi = document.querySelector('#error-prodi');

function validasiPeserta(calon) {
    const error = {
        errorNama: '',
        errorProdi: ''
    };

    if (calon.nama.trim().length < 3) {
        error.errorNama = 'Nama minimal 3 karakter.';
    }

    if (calon.prodi === '') {
        error.errorProdi = 'Program studi wajib dipilih.';
    }

    return {
        valid: error.errorNama === '' && error.errorProdi === '',
        errorNama: error.errorNama,
        errorProdi: error.errorProdi
    };
}

function buatKartuPeserta(item) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    article.classList.add('kartu');

    h2.textContent = item.nama;
    p.textContent = `Program Studi: ${item.prodi}`;

    article.append(h2, p);

    return article;
}

function renderPeserta(data) {
    daftar.replaceChildren();

    if (data.length === 0) {
        status.textContent = 'Tidak ada peserta';
        return;
    }

    status.textContent = `Jumlah peserta: ${data.length}`;

    const fragment = document.createDocumentFragment();

    data.forEach(function (item) {
        const kartu = buatKartuPeserta(item);
        fragment.append(kartu);
    });

    daftar.append(fragment);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const calon = {
        nama: namaInput.value,
        prodi: prodiInput.value
    };

    const hasilValidasi = validasiPeserta(calon);

    errorNama.textContent = hasilValidasi.errorNama;
    errorProdi.textContent = hasilValidasi.errorProdi;

    namaInput.setAttribute(
        'aria-invalid',
        hasilValidasi.errorNama !== '' ? 'true' : 'false'
    );

    prodiInput.setAttribute(
        'aria-invalid',
        hasilValidasi.errorProdi !== '' ? 'true' : 'false'
    );

    if (!hasilValidasi.valid) {
        return;
    }

    const pesertaBaru = {
        id: Date.now(),
        nama: calon.nama.trim(),
        prodi: calon.prodi
    };

    peserta.push(pesertaBaru);

    form.reset();

    errorNama.textContent = '';
    errorProdi.textContent = '';

    namaInput.setAttribute('aria-invalid', 'false');
    prodiInput.setAttribute('aria-invalid', 'false');

    renderPeserta(peserta);
});

filterInput.addEventListener('change', () => {
    const nilaiFilter = filterInput.value;

    if (nilaiFilter === 'semua') {
        renderPeserta(peserta);
        return;
    }

    const hasilFilter = peserta.filter(function (item) {
        return item.prodi === nilaiFilter;
    });

    renderPeserta(hasilFilter);
});

renderPeserta(peserta);