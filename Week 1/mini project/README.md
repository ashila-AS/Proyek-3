# Mini project
Nama: Ashila Aulia Salwa  
NIM: 251511035  
Kelas: 2B

## Ringkasan halaman
Halaman ini merupakan landing page sederhana untuk Ay-Nyang!, usaha makanan ayam. Halaman terdiri dari header, navigasi, hero, benefit, menu, informasi, kontak, dan footer. Halaman menggunakan HTML semantik dan CSS murni tanpa framework. Layout dibuat responsif untuk berbagai ukuran layar.

## Tiga keputusan teknis
1. Menggunakan custom properties untuk menyimpan warna merah, coklat, putih, kuning, dan warna border. 
2. Menggunakan Flexbox dengan pendekatan mobile-first. `.card-list` menggunakan `flex-direction: column` pada layar kecil dan berubah menjadi `row` pada breakpoint 768px. Class `.hero` digunakan untuk memberikan tampilan khusus pada bagian hero.

## Masalah, diagnosis, dan perbaikan
1. Warna tombol mengalami konflik dengan selector `.card a`. Karena tombol menggunakan elemen `<a>`, aturan tersebut ikut memengaruhi tombol. Konflik diperbaiki tanpa menggunakan `!important`.
2. Styling hero sebelumnya menggunakan selector `#tentang`. Perbaikan dilakukan dengan menambahkan class `.hero`, sehingga ID tetap digunakan untuk navigasi dan class digunakan untuk styling.
3. Warna border sebelumnya ditulis langsung menggunakan kode hex. Warna tersebut kemudian dijadikan custom property agar lebih konsisten.
4. Hero sebelumnya belum memiliki CTA. Ditambahkan tombol `Lihat Menu`, sedangkan kontak menggunakan tombol nomor telepon dengan `href="tel:"`.

## Hasil pengujian empat viewport
Lebar       Susunan Konten          Overflow
320px       Satu kolom              Tidak ada
375px       Satu kolom              Tidak ada
768px       2 bagian berjajar       Tidak ada
1024px      4/5 bagian sejajar      Tidak ada
Catatan: satu bagian dibuat untuk selalu sendiri, jadi dia tidak berjajar dengan section yang lain. 

## Refleksi belajar
Melalui UI Polishing, saya memahami bahwa tampilan dapat diperbaiki tanpa mengubah struktur HTML. Saya juga lebih memahami custom properties, Flexbox, cascade, dan specificity. Penggunaan class `.hero` membantu memisahkan fungsi ID untuk navigasi dan class untuk styling.

## Log AI atau sumber bantuan
AI digunakan sebagai tutor untuk mereview CSS dan membantu menemukan konflik selector, serta penggunaan custom properties. Semua saran diperiksa dan diterapkan sendiri, kemudian diuji melalui browser dan DevTools.