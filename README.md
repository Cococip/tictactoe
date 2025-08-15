# 🎮 ANOA TIC-TAC - Game Tic Tac Toe Modern

![Game Screenshot](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vue.js&logoColor=white)

Game Tic Tac Toe modern dengan grafis menarik, animasi halus, efek suara, dan musik latar belakang. Mainkan melawan teman atau komputer dengan AI yang cerdas!

## ✨ Fitur Utama

### 🎯 Gameplay
- **Pemain vs Pemain**: Mainkan melawan teman di device yang sama
- **Pemain vs Komputer**: Lawan AI dengan strategi cerdas
- **Pilihan Simbol**: Tukar antara X dan O sebelum bermain
- **Skor Otomatis**: Tracking kemenangan untuk kedua pemain

### 🎨 Visual & Audio
- **Animasi Modern**: Smooth animations menggunakan CSS3
- **Efek Suara**: Sound effects untuk setiap gerakan dan kemenangan
- **Musik Latar**: Background music yang dapat di-toggle
- **Responsive Design**: Kompatibel dengan semua ukuran layar
- **Dark Theme**: Design yang eye-friendly dengan tema gelap

### ♿ Accessibility
- **Screen Reader Friendly**: ARIA labels dan semantic HTML
- **Keyboard Navigation**: Dapat dimainkan menggunakan keyboard
- **High Contrast Mode**: Support untuk pengguna dengan kebutuhan visual khusus
- **Reduced Motion**: Respect untuk preferensi motion pengguna

### 🚀 Performance
- **Optimized Code**: Modern JavaScript dengan class-based architecture
- **Error Handling**: Robust error handling dan graceful fallbacks
- **Fast Loading**: Minimal dependencies dan efficient asset loading
- **Cross-Browser**: Kompatibel dengan browser modern

## 🛠️ Teknologi

- **Frontend**: HTML5, CSS3 (Grid, Flexbox, Custom Properties)
- **JavaScript**: ES6+ Classes, Async/Await, Web Audio API
- **Framework**: Vue.js 2.7 untuk reactive components
- **Build Tools**: Vanilla setup tanpa complex build process
- **Icons**: Font Awesome 6.4 untuk iconography
- **Fonts**: Nova Mono untuk typography yang modern

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/username/anoa-tic-tac.git
cd anoa-tic-tac
```

### 2. Jalankan Game
```bash
# Buka index.html di browser
open index.html

# Atau gunakan local server
python -m http.server 8000
# Lalu buka http://localhost:8000
```

### 3. Mulai Bermain!
1. Pilih mode: Pemain vs Pemain atau Pemain vs Komputer
2. Masukkan nama pemain (opsional)
3. Pilih simbol (X atau O)
4. Klik "MULAI" dan nikmati permainan!

## 🎮 Cara Bermain

### Setup Game
1. **Pilih Mode**: 
   - Klik "Pemain 2" untuk main berdua
   - Klik "Komputer" untuk lawan AI
2. **Masukkan Nama**: Input nama pemain (maksimal 8 karakter)
3. **Tukar Simbol**: Klik tombol exchange untuk menukar X/O
4. **Mulai**: Klik tombol "MULAI"

### Gameplay
- Klik kotak kosong untuk menempatkan simbol
- Tujuan: Buat garis 3 simbol (horizontal, vertikal, atau diagonal)
- Game akan otomatis mendeteksi pemenang atau seri
- Skor akan terupdate secara real-time

### Kontrol
- **Toggle Musik**: Klik tombol "Musik" di atas
- **Game Baru**: Klik "Permainan Baru" saat sedang bermain
- **Keyboard**: Gunakan Tab untuk navigasi, Enter/Space untuk select

## 🏗️ Struktur Kode

### Arsitektur
```
├── index.html          # Main HTML structure
├── style.css           # CSS dengan modern features
├── script.js           # Game logic dan classes
└── README.md          # Dokumentasi
```

### JavaScript Classes
- **`GameState`**: Manages game state dan scoring
- **`AudioManager`**: Handles musik dan sound effects
- **`AIStrategy`**: Implementasi AI untuk computer opponent
- **`TicTacToeGame`**: Main game controller
- **`GameUtils`**: Utility functions dan helpers

### CSS Organization
- **CSS Variables**: Centralized theming system
- **Responsive Grid**: Flexible layout untuk semua devices
- **Animation System**: Reusable animation classes
- **Accessibility**: Screen reader dan high contrast support

## 🎯 AI Strategy

Komputer menggunakan strategi yang cerdas:

1. **Prioritas Menang**: Cari peluang untuk menang
2. **Blok Lawan**: Cegah pemain dari menang
3. **Strategi Posisi**: 
   - Ambil center jika kosong
   - Pilih corner sebagai prioritas kedua
   - Ambil edge sebagai pilihan terakhir
4. **Pattern Recognition**: Deteksi dan respon terhadap pattern pemain

## 🔧 Kustomisasi

### Mengubah Theme
Edit CSS variables di `:root`:
```css
:root {
  --color-bg-primary: #your-color;
  --color-accent-green: #your-accent;
  /* ... */
}
```

### Menambah Sound Effects
Extend `AudioManager` class:
```javascript
playCustomSound(frequency, duration) {
  // Implementation
}
```

### Modifikasi AI
Edit `AIStrategy` class untuk mengubah tingkat kesulitan:
```javascript
getStrategicMove() {
  // Custom AI logic
}
```

## 📱 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome 80+ | ✅ Full | Recommended |
| Firefox 75+ | ✅ Full | All features |
| Safari 13+ | ✅ Full | Requires user interaction for audio |
| Edge 80+ | ✅ Full | Chromium-based |
| IE 11 | ❌ No | Not supported |

## 🐛 Troubleshooting

### Audio Issues
- **Musik tidak play**: Browser memblok autoplay, klik tombol musik
- **Sound effects tidak work**: Refresh page dan interact dulu dengan game

### Performance Issues
- **Animasi lag**: Check browser performance, disable di DevTools jika perlu
- **Slow loading**: Pastikan internet connection stable untuk external resources

### Visual Issues
- **Layout broken**: Check browser zoom level dan screen resolution
- **Fonts tidak load**: Fallback fonts akan digunakan automatically

## 🤝 Contributing

Kontribusi sangat welcome! Silakan:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Development Guidelines
- Follow ES6+ conventions
- Use semantic HTML
- Maintain accessibility standards
- Test di multiple browsers
- Comment complex logic

## 📄 License

Project ini open source dan tersedia under [MIT License](LICENSE).

## 👨‍💻 Author

**ANOA Games**
- Website: [your-website.com](https://your-website.com)
- Email: your-email@domain.com
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- **Font Awesome**: Untuk icon system
- **Google Fonts**: Untuk Nova Mono typography
- **Vue.js Team**: Untuk reactive framework
- **Web Audio API**: Untuk sound system
- **CSS Grid**: Untuk modern layout system

---

<div align="center">

**Dibuat dengan ❤️ untuk komunitas gaming Indonesia**

[⭐ Star Repository](../../stargazers) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues)

</div>
