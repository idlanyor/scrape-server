const { generateAIFilter } = require('./scraper.js');

// Path gambar yang akan diubah
const imagePath = './image.png';  // Sesuaikan dengan path gambar Anda

// Generate filter anime
async function generateAnimeStyle() {
    console.log('Memulai proses convert ke anime style...');
    
    const result = await generateAIFilter(imagePath, 'Janpan Anime');
    
    if (result) {
        console.log('✅ Berhasil! URL gambar hasil:');
        console.log(result);
    } else {
        console.log('❌ Gagal menggenerate gambar');
    }
}

// Jalankan fungsi
generateAnimeStyle(); 