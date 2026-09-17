'use strict';

const status = document.querySelector('#status');
const tombolMuat = document.querySelector('#muat');
const tombolCobaLagi = document.querySelector('#coba-lagi');

const profil = document.querySelector('#profil');
const namaProfil = document.querySelector('#nama-profil');
const prodiProfil = document.querySelector('#prodi-profil');
const deskripsiProfil = document.querySelector('#deskripsi-profil');
const emailProfil = document.querySelector('#email-profil');

const tombolDetail = document.querySelector('#tombol-detail');
const detailProfil = document.querySelector('#detail-profil');

const formSkill = document.querySelector('#form-skill');
const inputSkill = document.querySelector('#input-skill');
const errorSkill = document.querySelector('#error-skill');
const daftarSkill = document.querySelector('#daftar-skill');

const tombolTema = document.querySelector('#ganti-tema');

let dataProfil = null;
let sedangMemuat = false;

function aturState(state, pesan) {
    status.dataset.state = state;
    status.textContent = pesan;
    tombolCobaLagi.hidden = state !== 'error';
}

async function ambilProfil() {
    const response = await fetch('data/profile.json');

    if (!response.ok) {
        throw new Error(
            `Gagal memuat data. Status HTTP: ${response.status}`
        );
    }

    return await response.json();
}

function tampilkanProfil(data) {
    namaProfil.textContent = data.nama;
    prodiProfil.textContent = `Program Studi: ${data.prodi}`;
    deskripsiProfil.textContent = data.deskripsi;
    emailProfil.textContent = `Email: ${data.email}`;

    profil.hidden = false;
}

function renderSkill() {
    daftarSkill.replaceChildren();

    if (dataProfil.keterampilan.length === 0) {
        const pesan = document.createElement('li');
        pesan.textContent = 'Belum ada keterampilan.';
        daftarSkill.append(pesan);
        return;
    }

    dataProfil.keterampilan.forEach(function (skill, index) {
        const item = document.createElement('li');
        const teks = document.createElement('span');
        const tombolHapus = document.createElement('button');

        teks.textContent = skill;

        tombolHapus.textContent = 'Hapus';
        tombolHapus.type = 'button';

        tombolHapus.addEventListener('click', function () {
            dataProfil.keterampilan.splice(index, 1);
            renderSkill();
        });

        item.append(teks, tombolHapus);
        daftarSkill.append(item);
    });
}

async function muatProfil() {
    if (sedangMemuat) {
        return;
    }

    sedangMemuat = true;

    aturState('loading', 'Memuat profil...');
    tombolMuat.disabled = true;
    profil.hidden = true;

    try {
        const data = await ambilProfil();

        if (!data || !Array.isArray(data.keterampilan)) {
            throw new Error('Format data profil tidak valid.');
        }

        dataProfil = data;

        if (dataProfil.keterampilan.length === 0) {
            tampilkanProfil(dataProfil);
            renderSkill();
            aturState('empty', 'Profil berhasil dimuat, tetapi skill kosong.');
            return;
        }

        tampilkanProfil(dataProfil);
        renderSkill();
        aturState('success', 'Profil berhasil dimuat.');
    } catch (error) {
        console.error(error);
        aturState(
            'error',
            `Terjadi kesalahan: ${error.message}`
        );
    } finally {
        sedangMemuat = false;
        tombolMuat.disabled = false;
    }
}

tombolDetail.addEventListener('click', function () {
    const sedangTerbuka =
        tombolDetail.getAttribute('aria-expanded') === 'true';

    detailProfil.classList.toggle('is-open');

    tombolDetail.setAttribute(
        'aria-expanded',
        String(!sedangTerbuka)
    );

    tombolDetail.textContent =
        !sedangTerbuka
            ? 'Sembunyikan Detail'
            : 'Lihat Detail';
});

formSkill.addEventListener('submit', function (event) {
    event.preventDefault();

    const skillBaru = inputSkill.value.trim();

    if (skillBaru === '') {
        errorSkill.textContent =
            'Keterampilan tidak boleh kosong.';
        return;
    }

    errorSkill.textContent = '';

    dataProfil.keterampilan.push(skillBaru);

    inputSkill.value = '';

    renderSkill();

    aturState('success', 'Keterampilan berhasil ditambahkan.');
});

tombolCobaLagi.addEventListener('click', muatProfil);
tombolMuat.addEventListener('click', muatProfil);

tombolTema.addEventListener('click', function () {
    document.body.classList.toggle('tema-gelap');
});