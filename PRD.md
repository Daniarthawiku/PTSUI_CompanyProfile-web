# Product Requirements Document (PRD)
**Project Name:** Website Company Profile PT. Sahabat Utama Industri
**Version:** 1.0
**Date:** July 30, 2026

---

## 1. Problem Statement
PT. Sahabat Utama Industri (SUI), sebagai perusahaan manufaktur pengolahan kayu berskala menengah yang telah merambah pasar ekspor (Asia dan Timur Tengah), saat ini belum memiliki representasi digital yang memadai. Tidak adanya website *company profile* profesional menyulitkan calon klien (*buyers*), mitra bisnis, dan *supplier* (terutama dari luar negeri) untuk mengakses informasi resmi mengenai kapasitas produksi, legalitas, spesifikasi produk (Bare Core & Block Board), dan fasilitas infrastruktur yang dimiliki perusahaan. Hal ini dapat menghambat peluang ekspansi bisnis dan menurunkan tingkat kepercayaan (*trust*) dari calon mitra B2B global.

## 2. Goals
*   **Membangun Presensi Digital:** Membuat website *company profile* yang profesional, responsif, dan representatif bagi PT. SUI.
*   **Meningkatkan Kredibilitas:** Menampilkan informasi legalitas, standar mutu (IHPA), dan komitmen lingkungan untuk membangun kepercayaan *buyer* internasional.
*   **Katalog Informasi Produk & Fasilitas:** Menyediakan informasi yang terstruktur mengenai spesifikasi produk (Bare Core, Block Board, Plywood) dan infrastruktur pabrik (kapasitas Kiln Dry, luas lahan, dsb).
*   **Fasilitasi Kontak:** Memudahkan calon klien (B2B) untuk menghubungi pihak perusahaan terkait kerja sama, penawaran, maupun ekspor.

## 3. Target User
1.  **Calon Pembeli (Buyers) Internasional:** Perusahaan atau broker dari luar negeri (seperti China, Taiwan, Singapura, dll) yang mencari pasokan kayu olahan dalam skala besar.
2.  **Mitra B2B Domestik:** Perusahaan dalam negeri yang membutuhkan pasokan Bare Core, Block Board, atau Plywood.
3.  **Supplier Lokal:** UMKM atau pemasok bahan baku (Balken, Veneer) yang ingin bermitra dengan PT. SUI.
4.  **Pemerintah & Auditor Lingkungan:** Pihak yang membutuhkan gambaran umum mengenai profil operasional dan legalitas perusahaan.

## 4. User Stories
*   *Sebagai calon buyer internasional, saya ingin* melihat spesifikasi produk dan standar mutu yang diterapkan, *agar* saya yakin produk tersebut memenuhi standar pasar negara saya (misal: IHPA Standard).
*   *Sebagai calon mitra bisnis, saya ingin* mengetahui kapasitas produksi bulanan dan infrastruktur pabrik, *agar* saya bisa mengukur kemampuan suplai PT. SUI untuk pesanan skala besar.
*   *Sebagai eksportir/broker, saya ingin* membaca informasi mengenai sistem pembayaran (L/C) dan pengiriman (FoB, CFR) yang didukung perusahaan, *agar* saya bisa menghitung estimasi biaya logistik.
*   *Sebagai pengunjung website, saya ingin* menemukan kontak perusahaan dengan mudah, *agar* saya dapat segera mengirimkan *inquiry* atau mengajukan pertanyaan.

## 5. Functional Requirements
*(Catatan: Berdasarkan scope, aplikasi hanya berupa frontend statis/semi-statis)*

*   **Navigasi Global:** Harus terdapat menu navigasi yang jelas (Home, About Us, Products, Facilities, Export Info, Contact).
*   **Halaman Beranda (Home):** Menampilkan *Hero Image* (foto pabrik/produk), *tagline* perusahaan, dan ringkasan profil singkat.
*   **Halaman Tentang Kami (About Us):** Menampilkan sejarah perusahaan, visi/misi, dan informasi legalitas (AMDAL, UKL-UPL).
*   **Halaman Produk:** Menampilkan katalog produk (Bare Core, Block Board) dengan tabel spesifikasi (dimensi, bahan baku, lem, kapasitas).
*   **Halaman Fasilitas:** Menampilkan informasi luas lahan pabrik dan teknologi yang digunakan (Thermal Oil Heater, Kiln Dry, Mesin Produksi).
*   **Halaman Informasi Ekspor:** Menampilkan negara tujuan ekspor, sistem *delivery* (FoB, CFR), dan sistem pembayaran.
*   **Halaman Kontak:** Menyediakan informasi alamat (dengan integrasi Google Maps statis/link), nomor telepon, dan email. (Catatan: Form kontak di-*mockup* secara statis di frontend).
*   **Lokalisasi Bahasa (Opsional/Future Scope):** Struktur *routing* harus mendukung multi-bahasa (ID/EN) mengingat target audiens adalah pasar internasional.

## 6. Non-Functional Requirements
*   **Performance:** Website harus memuat secara cepat (Time to Interactive < 3 detik) menggunakan optimasi gambar dan *server components* Next.js.
*   **Responsive Design:** Antarmuka harus menyesuaikan (responsive) untuk perangkat *mobile*, *tablet*, dan *desktop*.
*   **Accessibility:** Memastikan kontras warna sesuai dengan panduan desain dan elemen navigasi mudah diakses.
*   **SEO:** Implementasi *metadata*, *Open Graph tags*, dan struktur semantik HTML untuk pencarian organik.
*   **Tech Stack:** 
    *   **Framework:** Next.js 16.2.12 (App Router)
    *   **Styling:** Tailwind CSS (atau CSS Modules) sesuai palet warna yang ditentukan.
    *   **Deployment:** Platform hosting statis (Vercel, Netlify, atau sejenisnya).

## 7. Scope
*   **In-Scope:** Pengembangan antarmuka pengguna (Frontend) saja. Meliputi implementasi desain (UI/UX) berdasarkan dokumen *company profile* ke dalam komponen React/Next.js. 
*   **Out-of-Scope:** Tidak termasuk pengembangan sistem Backend (CMS), *database*, autentikasi pengguna, atau integrasi form kontak dengan API email (hanya antarmuka form statis).

---

## 8. Design Guidelines (Theme)
Pengembangan UI harus merujuk pada skema warna berikut:

### Primary Color (Green Tones)
*   **Base:** `#056839` (Digunakan untuk tombol utama, teks *heading* dominan)
*   **Dark:** `#034224` (Digunakan untuk efek *hover* tombol, elemen footer)
*   **Mid:** `#3C8B60` (Digunakan untuk ikon, *badge*, elemen aksen)
*   **Soft Tint:** `#E6F0EC` (Digunakan untuk latar belakang *section* sekunder, *highlight* baris tabel)

### Secondary Color (Wood/Brown Tones)
*   **Base:** `#8A5F3C` (Digunakan untuk *heading* sekunder, aksen grafis produk kayu)
*   **Dark:** `#593C25` (Digunakan untuk teks penekanan khusus, garis batas kuat)
*   **Mid:** `#B38968` (Digunakan untuk ilustrasi, tombol sekunder)
*   **Soft Tint:** `#F5EFEA` (Digunakan untuk *background* kartu spesifikasi produk)

### Neutral Colors
*   **Background Base:** `#F8F9F6` (Latar belakang utama website)
*   **Card Background:** `#EFECE6` (Latar belakang elemen *card* atau kontainer)
*   **Text:** `#212523` (Warna teks utama / *body copy*)
*   **Border:** `#D8D5CD` (Garis batas *section*, tabel, pembatas)