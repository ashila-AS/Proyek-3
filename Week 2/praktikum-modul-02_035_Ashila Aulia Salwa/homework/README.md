# Interactive Profile Card

## Deskripsi

Interactive Profile Card adalah halaman web interaktif yang menampilkan profil mahasiswa dan daftar keterampilan. Data profil dan keterampilan awal diambil dari file JSON lokal secara asynchronous menggunakan JavaScript.

Pengguna dapat melihat detail profil, mengganti tema halaman, menambahkan keterampilan baru, serta menghapus keterampilan yang tersedia. Program juga memiliki beberapa state, yaitu loading, success, empty, dan error.

## Cara Menjalankan

Program menggunakan `fetch()` untuk membaca file `profile.json`, sehingga halaman perlu dijalankan melalui **local server** dan tidak dapat langsung dibuka menggunakan `file://`.

### Menggunakan Live Server di VS Code

1. Buka folder project di **Visual Studio Code**.
2. Pastikan extension **Live Server** sudah terpasang.
3. Buka file `index.html`.
4. Klik kanan pada file `index.html`.
5. Pilih **Open with Live Server**.
6. Browser akan terbuka secara otomatis.
7. Jalankan program melalui halaman yang dibuka oleh Live Server.

Pastikan struktur folder tetap seperti berikut:

```text
interactive-profile-card/
├── index.html
├── css/
│   └── style.css
├── data/
│   └── profile.json
├── js/
│   └── app.js
└── README.md
```

### Catatan

Jangan membuka `index.html` secara langsung dari File Explorer. Gunakan alamat yang diberikan oleh Live Server agar `fetch()` dapat membaca file `data/profile.json` dengan benar.