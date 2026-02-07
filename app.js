const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Panggil data langsung di sini (PENTING!)
const myData = require('./data.json');

// Mengatur EJS sebagai mesin tampilan
app.set('view engine', 'ejs');

// Mengatur folder 'public' agar bisa diakses (untuk CSS/Gambar)
app.use(express.static('public'));

// Rute Halaman Utama (Home)
app.get('/', (req, res) => {
    // Langsung kirim myData yang sudah di-load di atas
    res.render('index', { 
        data: myData 
    });
});

// Menjalankan server
// Simpan server dalam variabel
const server = app.listen(port, () => {
  console.log(`Website portofolio berjalan di http://localhost:${port}`);
});

// PENTING: Export app agar Vercel bisa membacanya
module.exports = app;