# ANOA TIC-TAC-TOE Game

A modern, accessible, and feature-rich Tic-Tac-Toe game built with HTML5, CSS3, JavaScript (ES6+), Vue.js, and jQuery.

## 🎮 Features

### Core Gameplay
- **Classic Tic-Tac-Toe**: Play the traditional 3x3 grid game
- **Two Player Mode**: Play against another human player
- **AI Opponent**: Challenge a smart computer opponent
- **Random First Player**: Fair gameplay with random turn selection
- **Score Tracking**: Keep track of victories for both players

### User Experience
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Avatar System**: Choose from 20+ unique animal avatars for players
- **Custom Nicknames**: Personalize your gaming experience
- **Background Music**: Immersive audio with toggle controls
- **Keyboard Navigation**: Full keyboard support for accessibility
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### Accessibility Features
- **ARIA Labels**: Screen reader support
- **Keyboard Controls**: Arrow keys for navigation, Enter/Space for selection
- **High Contrast Mode**: Support for users with visual impairments
- **Reduced Motion**: Respects user's motion preferences
- **Focus Indicators**: Clear visual feedback for keyboard users

### Technical Improvements
- **Modern JavaScript**: ES6+ features and best practices
- **Modular Architecture**: Clean, maintainable code structure
- **Error Handling**: Robust error management
- **Performance Optimized**: Efficient DOM manipulation and animations
- **Cross-browser Compatible**: Works on all modern browsers

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start playing!

### Quick Start
1. **Choose Game Mode**: Select between "Pemain 2" (Human) or "Komputer" (AI)
2. **Customize Players**: Enter nicknames and choose avatars
3. **Select Symbols**: Use the exchange button to swap X and O symbols
4. **Start Playing**: Click "OKE" to begin the game
5. **Enjoy**: Use mouse or keyboard to make your moves

## 🎯 How to Play

### Basic Rules
- Players take turns placing their symbol (X or O) on the 3x3 grid
- First player to get 3 symbols in a row (horizontally, vertically, or diagonally) wins
- If all squares are filled without a winner, the game is a draw

### Controls
- **Mouse**: Click on any empty square to place your symbol
- **Keyboard**: 
  - Arrow keys to navigate between squares
  - Enter or Space to select a square
  - 'M' key to toggle music
- **Touch**: Tap on squares for mobile devices

### Game Modes
- **Player vs Player**: Classic two-player mode
- **Player vs Computer**: Challenge the AI opponent
- **Random Start**: Fair random selection of who goes first

## 🛠️ Technical Details

### Architecture
```
├── index.html          # Main HTML structure
├── style.css           # Modern CSS with variables and responsive design
├── script.js           # ES6+ JavaScript with modular classes
└── README.md           # Documentation
```

### Key Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS variables and Grid/Flexbox
- **JavaScript ES6+**: Classes, arrow functions, destructuring, modules
- **Vue.js 2.3.4**: Reactive UI components
- **jQuery 3.2.1**: DOM manipulation and animations

### Code Structure
- **AudioController**: Manages background music and audio controls
- **GameController**: Handles game logic, AI, and user interactions
- **Utils**: Utility functions for common operations
- **Vue App**: Manages modal and UI state

## 🎨 Customization

### Colors
The game uses CSS custom properties for easy theming:
```css
:root {
  --primary-color: #3a8e1f;
  --secondary-color: #2d6b16;
  --background-color: #404040;
  --text-color: #ffffff;
  /* ... more variables */
}
```

### Avatars
Add new avatars by updating the `AVATARS` object in `script.js`:
```javascript
const AVATARS = {
  PLAYER1: [
    'url-to-new-avatar.svg',
    // ... more avatars
  ]
};
```

### Game Configuration
Modify game settings in the `GAME_CONFIG` object:
```javascript
const GAME_CONFIG = {
  WINNING_COMBINATIONS: [...],
  DEFAULT_NICKNAMES: {...},
  ANIMATION_DELAYS: {...}
};
```

## 🔧 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

- Audio autoplay may be blocked by browser policies (user interaction required)
- Some older browsers may not support all CSS Grid features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original game concept and design
- Font Awesome for icons
- Google Fonts for typography
- Cloudinary for avatar hosting

## 📞 Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure you're using a supported browser
3. Try refreshing the page
4. Report issues with detailed information

---

**Enjoy playing ANOA TIC-TAC-TOE! 🎮**
