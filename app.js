const express = require('express');
const app = express();
const fs = require('fs'); // Modul untuk membaca file
const port = process.env.PORT || 3000;

// Mengatur EJS sebagai mesin tampilan
app.set('view engine', 'ejs');

// Mengatur folder 'public' agar bisa diakses (untuk CSS/Gambar)
app.use(express.static('public'));

// Rute Halaman Utama (Home)
app.get('/', (req, res) => {
    // 1. Baca data dari file data.json
    const rawData = fs.readFileSync('data.json');
    const myData = JSON.parse(rawData);

    // 2. Kirim data tersebut ke file index.ejs
    res.render('index', { 
        data: myData 
    });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Website portofolio berjalan di http://localhost:${port}`);
});