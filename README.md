# 📱 Aspect Ratio Calculator (Pengukur Rasio Layar Video)

Aplikasi kalkulator konversi dimensi rasio layar video (*Aspect Ratio Calculator*) berbasis JavaScript murni untuk menghitung proporsi ukuran lebar dan tinggi resolusi layar secara otomatis berdasarkan standar rasio populer (*16:9*, *9:16*, *4:3*, *1:1*).

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Aspect Ratio Mathematical Scaling:**
   Menerapkan rumus proporsi silang (`Height = (Width × RatioH) / RatioW`) guna menyelaraskan dimensi ukuran piksel secara otomatis.
2. **Two-way Input Synchronization:**
   Menghubungkan event listener pada kotak input lebar dan tinggi secara timbal balik disertai pengaman *flag* (`isUpdating`) guna mencegah perulangan tak terbatas (*infinite loop*).
3. **Dynamic Visual Box Proportioning:**
   Menyesuaikan properti `style.width` dan `style.height` elemen kotak pratinjau secara proporsional agar merepresentasikan bentuk rasio secara akurat.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Pilihan tombol rasio, input lebar/tinggi, tombol tukar, & preview
├── style.css        # Desain Neobrutalism biru-pop, kotak pratinjau, & bayangan keras
└── script.js        # Logika perhitungan rasio silang, event input dua arah, & DOM state
