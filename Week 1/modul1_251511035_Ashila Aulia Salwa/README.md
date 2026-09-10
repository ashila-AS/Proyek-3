# Praktikum Modul 1 
Nama: Ashila Aulia Salwa 
NIM: 251511035
Kelas: 2B

## Ringkasan halaman
Halaman ini merupakan profil mahasiswa sederhana yang terdiri dari header, navigasi, tiga section utama, dan footer. Section tersebut berisi Tentang Saya, Keterampilan, dan Kontak. Halaman dibangun menggunakan HTML semantik dan CSS murni tanpa framework. Layout dirancang responsif untuk layar mulai dari 320px hingga desktop. 

## Tiga keputusan teknis
1. Menggunakan custom properties untuk menyimpan empat warna utama, yaitu --color-primer, --color-sekunder, --color-tersier, dan --color-kuartener. Penggunaan variabel ini memudahkan pengaturan warna secara konsisten.
2. Menggunakan Flexbox dengan pendekatan mobile-first. .card-list menggunakan flex-direction: column pada layar kecil, kemudian berubah menjadi row melalui media query. Penggunaan flex: 1 1 16rem dan flex-wrap: wrap membuat card menyesuaikan ruang yang tersedia.
3. Breakpoint 768px dipilih berdasarkan hasil pengujian langsung pada beberapa ukuran layar.

## Masalah, diagnosis, dan perbaikan
1. Navigasi mengalami overflow pada lebar 320px. Penyebabnya adalah nilai gap: 11rem yang terlalu besar. Setelah diperiksa menggunakan DevTools, nilai tersebut diubah menjadi 1.5rem, sehingga ketiga tautan dapat tampil tanpa overflow.
2. Warna teks pada body tidak berubah. Setelah diperiksa, ditemukan kesalahan penulisan variabel --color-terier yang seharusnya --color-tersier. Browser mengabaikan aturan karena variabel yang dipanggil tidak ditemukan.

## Hasil pengujian empat viewport
Lebar	Susunan Card    Nav	                                Overflow
320px	Satu kolom	    Tiga tautan muat dalam satu baris	Tidak ada
375px	Satu kolom 	    Tiga tautan muat dalam satu baris	Tidak ada
768px	2  card sejajar	Muat dalam satu baris	            Tidak ada
1024px	Satu Baris  	Muat dalam satu baris	            Tidak ada

## Refleksi belajar
Melalui praktikum ini, saya lebih memahami custom properties, perbedaan padding dan margin, serta penggunaan Flexbox untuk membuat layout responsif. Kesalahan typo pada nama variabel juga mengajarkan pentingnya ketelitian karena browser tidak selalu menampilkan error.

## Log AI atau sumber bantuan
AI digunakan sebagai tutor untuk membantu mendiagnosis masalah overflow dan kesalahan variabel. Semua saran kemudian diverifikasi sendiri menggunakan DevTools sebelum diterapkan pada kode.