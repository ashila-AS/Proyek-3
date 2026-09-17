'use strict';

const tombolNavigasi = document.querySelector('#tombol-navigasi');
const navigasi = document.querySelector('#navigasi');
const daftarMenu = document.querySelector('#daftar-menu');
const filterMenu = document.querySelector('#filter-menu');
const faqQuestions = document.querySelectorAll('.faq-question');
const formKontak = document.querySelector('#form-kontak');
const namaInput = document.querySelector('#nama');
const emailInput = document.querySelector('#email');
const pesanInput = document.querySelector('#isi-pesan');
const errorNama = document.querySelector('#error-nama');
const errorEmail = document.querySelector('#error-email');
const errorPesan = document.querySelector('#error-pesan');
const pesanBerhasil = document.querySelector('#pesan-berhasil');
const tombolAtas = document.querySelector('#kembali-atas');
const tombolTema = document.querySelector('#ganti-tema');

const menu = [
    {
        nama: 'Ayam Bakar',
        kategori: 'bakar',
        deskripsi: 'Ayam bakar dengan pilihan sambal sesuai selera.'
    },
    {
        nama: 'Ayam Goreng',
        kategori: 'goreng',
        deskripsi: 'Ayam goreng yang bisa request digeprek.'
    },
    {
        nama: 'Ayam Krikil',
        kategori: 'lainnya',
        deskripsi: 'Ayam krikil dengan pilihan sambal.'
    },
    {
        nama: 'Ayam Krispi',
        kategori: 'lainnya',
        deskripsi: 'Ayam krispi yang bisa request digeprek.'
    },
    {
        nama: 'Ayam Suir',
        kategori: 'lainnya',
        deskripsi: 'Ayam suir yang praktis dan cocok untuk makan bersama nasi.'
    }
];

tombolNavigasi.addEventListener('click', function() {
    const sedangTerbuka = navigasi.classList.toggle('is-open');

    tombolNavigasi.setAttribute('aria-expanded', sedangTerbuka);

    if (sedangTerbuka) {
        tombolNavigasi.textContent = 'Tutup';
    } else {
        tombolNavigasi.textContent = 'Navigasi';
    }
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navigasi.classList.remove('is-open');
        tombolNavigasi.setAttribute('aria-expanded', 'false');
        tombolNavigasi.textContent = 'Navigasi';
    });
});

function tampilkanMenu(dataMenu) {
    daftarMenu.replaceChildren();

    if (dataMenu.length === 0) {
        const pesanKosong = document.createElement('p');

        pesanKosong.className = 'menu-empty';
        pesanKosong.textContent = 'Menu tidak ditemukan.';

        daftarMenu.appendChild(pesanKosong);
        return;
    }

    dataMenu.forEach(function(item) {
        const menuItem = document.createElement('article');
        const namaMenu = document.createElement('h3');
        const deskripsiMenu = document.createElement('p');

        menuItem.className = 'menu-item';
        namaMenu.textContent = item.nama;
        deskripsiMenu.textContent = item.deskripsi;

        menuItem.appendChild(namaMenu);
        menuItem.appendChild(deskripsiMenu);
        daftarMenu.appendChild(menuItem);
    });
}

tampilkanMenu(menu);

filterMenu.addEventListener('change', function() {
    const kategori = filterMenu.value;

    if (kategori === 'semua') {
        tampilkanMenu(menu);
        return;
    }

    const menuTerfilter = menu.filter(function(item) {
        return item.kategori === kategori;
    });

    tampilkanMenu(menuTerfilter);
});

faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
        const sedangTerbuka =
            question.getAttribute('aria-expanded') === 'true';

        faqQuestions.forEach(function(item) {
            item.setAttribute('aria-expanded', 'false');

            const jawaban = document.querySelector(
                '#' + item.getAttribute('aria-controls')
            );

            jawaban.hidden = true;
        });

        if (!sedangTerbuka) {
            const jawaban = document.querySelector(
                '#' + question.getAttribute('aria-controls')
            );

            question.setAttribute('aria-expanded', 'true');
            jawaban.hidden = false;
        }
    });
});

formKontak.addEventListener('submit', function(event) {
    event.preventDefault();

    errorNama.textContent = '';
    errorEmail.textContent = '';
    errorPesan.textContent = '';

    namaInput.removeAttribute('aria-invalid');
    emailInput.removeAttribute('aria-invalid');
    pesanInput.removeAttribute('aria-invalid');

    pesanBerhasil.hidden = true;

    let formValid = true;

    if (namaInput.value.trim() === '') {
        errorNama.textContent = 'Nama wajib diisi.';
        namaInput.setAttribute('aria-invalid', 'true');
        formValid = false;
    }

    if (emailInput.value.trim() === '') {
        errorEmail.textContent = 'Email wajib diisi.';
        emailInput.setAttribute('aria-invalid', 'true');
        formValid = false;
    } else if (!emailInput.validity.valid) {
        errorEmail.textContent = 'Masukkan alamat email yang valid.';
        emailInput.setAttribute('aria-invalid', 'true');
        formValid = false;
    }

    if (pesanInput.value.trim() === '') {
        errorPesan.textContent = 'Pesan wajib diisi.';
        pesanInput.setAttribute('aria-invalid', 'true');
        formValid = false;
    }

    if (!formValid) {
        return;
    }

    formKontak.reset();
    pesanBerhasil.hidden = false;
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        tombolAtas.classList.add('is-visible');
    } else {
        tombolAtas.classList.remove('is-visible');
    }
});

tombolAtas.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

tombolTema.addEventListener('click', function() {
    const temaGelapAktif =
        document.body.classList.toggle('tema-gelap');

    if (temaGelapAktif) {
        tombolTema.textContent = 'Tema Terang';
    } else {
        tombolTema.textContent = 'Tema Gelap';
    }
});