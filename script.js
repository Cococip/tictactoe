// ===== GAME CONFIGURATION AND CONSTANTS =====
const GAME_CONFIG = {
  AVATAR_URLS: {
    player1: [
      'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/angler-fish-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/bear-head-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/bee-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/dragonfly-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146973/Tic-Tac-Toe/duck-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146973/Tic-Tac-Toe/eagle-emblem-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146974/Tic-Tac-Toe/earwig-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146974/Tic-Tac-Toe/lion-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146977/Tic-Tac-Toe/octopus-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146976/Tic-Tac-Toe/pig-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146978/Tic-Tac-Toe/rabbit-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146977/Tic-Tac-Toe/scorpion-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146980/Tic-Tac-Toe/seahorse-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146978/Tic-Tac-Toe/snail-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146980/Tic-Tac-Toe/seahorse-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146981/Tic-Tac-Toe/snake-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146978/Tic-Tac-Toe/sperm-whale-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146973/Tic-Tac-Toe/tortoise-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/vulture-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146973/Tic-Tac-Toe/wasp-sting-rg.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/wolf-head-rg.svg'
    ],
    cpu: [
      'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/android-mask_mc0mbt.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/artificial-intelligence_c1pdjn.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/circuitry_xghxt7.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/mechanical-arm_rc8rfn.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/microchip_p8wiyd.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/processor_yxn9qo.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507142545/Tic-Tac-Toe/robot-golem_au90ds.svg'
    ],
    player2: [
      'http://res.cloudinary.com/azametzin/image/upload/v1507555989/Tic-Tac-Toe/angler-fish.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555989/Tic-Tac-Toe/bear-head.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555989/Tic-Tac-Toe/bee.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555989/Tic-Tac-Toe/dragonfly.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555989/Tic-Tac-Toe/duck.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555989/Tic-Tac-Toe/eagle-emblem.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555996/Tic-Tac-Toe/earwig.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555996/Tic-Tac-Toe/lion.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555996/Tic-Tac-Toe/octopus.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555996/Tic-Tac-Toe/pig.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555996/Tic-Tac-Toe/rabbit.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507555996/Tic-Tac-Toe/scorpion.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507556000/Tic-Tac-Toe/seahorse.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507556000/Tic-Tac-Toe/snail.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507556001/Tic-Tac-Toe/snake.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507556000/Tic-Tac-Toe/sperm-whale.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507556001/Tic-Tac-Toe/tortoise.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507556002/Tic-Tac-Toe/vulture.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507556003/Tic-Tac-Toe/wasp-sting.svg',
      'http://res.cloudinary.com/azametzin/image/upload/v1507556003/Tic-Tac-Toe/wolf-head.svg'
    ]
  },
  CPU_NICKNAMES: ['Anoa', 'Anoa 1', 'Anoa 2', 'Anoa 3', 'Anoa 4', 'Anoa 5', 'Anoa 6', 'Anoa 7', 'Anoa 8', 'Anoa 9', 'Anoa 10'],
  WINNING_POSITIONS: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]],
  ALL_SQUARES: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  SIGNS: {
    CIRCLE: '<i class="fa fa-circle-o" aria-hidden="true"></i>',
    CROSS: '<i class="fa fa-times" aria-hidden="true"></i>'
  }
};

// ===== GAME STATE MANAGEMENT =====
class GameState {
  constructor() {
    this.reset();
  }

  reset() {
    this.signPlayer1 = '';
    this.signPlayer2 = '';
    this.player2MarkData = '';
    this.player1MarkData = '';
    this.victories1 = 0;
    this.victories2 = 0;
    this.player1Circle = true;
    this.player2Activated = true;
    this.nicknamePlayer1 = '';
    this.nicknamePlayer2 = '';
    this.toBeChecked1 = [];
    this.toBeChecked2 = [];
    this.usedSquaresPlayer1 = [];
    this.usedSquaresPlayer2 = [];
    this.usedSquaresTotal = [];
    this.weHaveAWinner = false;
    this.randomBoolean = false;
    this.indexWinner = null;
    this.triIndexWinner = [];
    this.isPlaying = false;
  }

  updateScores(winner) {
    if (winner === 1) {
      this.victories1++;
    } else if (winner === 2) {
      this.victories2++;
    }
  }
}

// ===== UTILITY FUNCTIONS =====
const GameUtils = {
  getRandomAvatar(type) {
    const avatars = GAME_CONFIG.AVATAR_URLS[type];
    return avatars[Math.floor(Math.random() * avatars.length)];
  },

  getRandomCpuNickname() {
    const nicknames = GAME_CONFIG.CPU_NICKNAMES;
    return nicknames[Math.floor(Math.random() * nicknames.length)];
  },

  getFreeSquares(usedSquares) {
    return GAME_CONFIG.ALL_SQUARES.filter(square => !usedSquares.includes(square));
  },

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  async animateText(selector, text, duration = 600) {
    $(selector).html(text);
    await this.delay(duration);
    $(selector).append('.');
    await this.delay(duration);
    $(selector).append('.');
    await this.delay(duration);
    $(selector).append('.');
    await this.delay(duration);
  }
};

// ===== AUDIO MANAGER =====
class AudioManager {
  constructor() {
    this.audioElement = document.getElementById('playMusic');
    this.isPlaying = false;
    this.audioContext = null;
    this.setupEventListeners();
    this.initializeAudio();
  }

  setupEventListeners() {
    const btnSound = document.getElementById('btnSound');
    if (btnSound) {
      btnSound.addEventListener('click', () => this.toggleMusic());
    }
  }

  async initializeAudio() {
    try {
      // Initialize Web Audio Context for sound effects
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Handle browser autoplay policies
      if (this.audioElement) {
        this.audioElement.volume = 0.3; // Set reasonable volume
        
        // Try to play background music (will fail if user hasn't interacted)
        const playPromise = this.audioElement.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.isPlaying = true;
            this.updateButtonState(true);
          }).catch(() => {
            // Autoplay prevented - that's okay
            this.isPlaying = false;
            this.updateButtonState(false);
          });
        }
      }
    } catch (error) {
      console.warn('Audio initialization failed:', error);
    }
  }

  async toggleMusic() {
    try {
      if (!this.audioElement) return;

      // Handle audio context resume (required by some browsers)
      if (this.audioContext && this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      if (this.audioElement.paused) {
        const playPromise = this.audioElement.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.isPlaying = true;
            this.updateButtonState(true);
          }).catch((error) => {
            console.warn('Play failed:', error);
          });
        }
      } else {
        this.audioElement.pause();
        this.isPlaying = false;
        this.updateButtonState(false);
      }
    } catch (error) {
      console.warn('Audio control failed:', error);
    }
  }

  updateButtonState(isPlaying) {
    const btnSound = document.getElementById('btnSound');
    if (btnSound) {
      if (isPlaying) {
        btnSound.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>&nbsp;Musik&nbsp;';
        btnSound.setAttribute('aria-label', 'Matikan musik latar belakang');
      } else {
        btnSound.innerHTML = '<span style="opacity: 0.25 !important"><i class="fa fa-volume-off" aria-hidden="true"></i></span>&nbsp;Musik&nbsp;';
        btnSound.setAttribute('aria-label', 'Nyalakan musik latar belakang');
      }
    }
  }

  getAudioContext() {
    return this.audioContext;
  }
}

// ===== AI STRATEGY =====
class AIStrategy {
  constructor(gameState) {
    this.gameState = gameState;
  }

  getNextMove() {
    const freeSquares = GameUtils.getFreeSquares(this.gameState.usedSquaresTotal);
    
    // First move: take center or corner
    if (this.gameState.usedSquaresTotal.length === 0) {
      return 5; // Center
    }
    
    if (this.gameState.usedSquaresTotal.length === 1 && this.gameState.usedSquaresPlayer1.length === 1) {
      return freeSquares.includes(5) ? 5 : 1;
    }

    // Check if CPU can win
    const winningMove = this.findWinningMove(this.gameState.usedSquaresPlayer2);
    if (winningMove) return winningMove;

    // Block player from winning
    const blockingMove = this.findWinningMove(this.gameState.usedSquaresPlayer1);
    if (blockingMove) return blockingMove;

    // Strategic moves based on current board state
    const strategicMove = this.getStrategicMove();
    if (strategicMove) return strategicMove;

    // Fallback: random free square
    return freeSquares[0];
  }

  findWinningMove(playerSquares) {
    for (const position of GAME_CONFIG.WINNING_POSITIONS) {
      const matchingSquares = position.filter(square => playerSquares.includes(square));
      if (matchingSquares.length === 2) {
        const winningSquare = position.find(square => !playerSquares.includes(square));
        if (GameUtils.getFreeSquares(this.gameState.usedSquaresTotal).includes(winningSquare)) {
          return winningSquare;
        }
      }
    }
    return null;
  }

  getStrategicMove() {
    const freeSquares = GameUtils.getFreeSquares(this.gameState.usedSquaresTotal);
    
    // Prefer center
    if (freeSquares.includes(5)) return 5;
    
    // Prefer corners
    const corners = [1, 3, 7, 9];
    const freeCorners = corners.filter(corner => freeSquares.includes(corner));
    if (freeCorners.length > 0) {
      return freeCorners[Math.floor(Math.random() * freeCorners.length)];
    }
    
    // Take any edge
    const edges = [2, 4, 6, 8];
    const freeEdges = edges.filter(edge => freeSquares.includes(edge));
    if (freeEdges.length > 0) {
      return freeEdges[Math.floor(Math.random() * freeEdges.length)];
    }

    return null;
  }
}

// ===== MAIN GAME CLASS =====
class TicTacToeGame {
  constructor() {
    try {
      this.gameState = new GameState();
      this.audioManager = new AudioManager();
      this.ai = new AIStrategy(this.gameState);
      this.isInitialized = false;
      this.init();
    } catch (error) {
      console.error('Failed to initialize game:', error);
      this.showErrorMessage('Gagal memulai permainan. Silakan refresh halaman.');
    }
  }

  init() {
    try {
      this.setupVueApp();
      this.setupEventListeners();
      this.setupPerformanceOptimizations();
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize game components:', error);
      this.showErrorMessage('Terjadi kesalahan saat memuat komponen permainan.');
    }
  }

  setupPerformanceOptimizations() {
    // Debounce rapid clicks
    this.clickDebounceTime = 300;
    this.lastClickTime = 0;
    
    // Preload critical elements
    this.preloadCriticalElements();
    
    // Setup intersection observer for animations
    this.setupIntersectionObserver();
  }

  preloadCriticalElements() {
    // Cache frequently used jQuery objects
    this.cachedElements = {
      squares: $('.squares'),
      items: $('.item'),
      playerMessages: $('#player-1-Msg, #player-2-Msg'),
      optionsOverlay: $('#optionsOverlay'),
      gameBoard: $('.container')
    };
  }

  setupIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-bottom');
          }
        });
      });
      
      document.querySelectorAll('.item').forEach(item => {
        observer.observe(item);
      });
    }
  }

  showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-accent-red);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      z-index: 10000;
      animation: slideInFromTop 0.5s ease-out;
    `;
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.parentNode.removeChild(errorDiv);
      }
    }, 5000);
  }

  setupVueApp() {
    this.vueApp = new Vue({
      el: '#contentVue',
      data: {
        showModal: true
      },
      methods: {
        okButtonClicked: () => this.startGame(),
        backToOptions: () => this.showOptions()
      }
    });
  }

  setupEventListeners() {
    // Exchange button
    $(document).on('click', '#exchangeBtn', () => this.toggleSignSelection());
    
    // Player selection
    $(document).on('click', '#cpuSelect', () => this.selectCpu());
    $(document).on('click', '#player2Select', () => this.selectPlayer2());
  }

  toggleSignSelection() {
    this.gameState.player1Circle = !this.gameState.player1Circle;
    
    const first = this.gameState.player1Circle ? $('.sign1') : $('.sign2');
    const second = this.gameState.player1Circle ? $('.sign2') : $('.sign1');
    
    $('.sign1, .sign2').fadeTo(150, 0.1).promise().done(() => {
      first.html(GAME_CONFIG.SIGNS.CIRCLE);
      second.html(GAME_CONFIG.SIGNS.CROSS);
      $('.sign1, .sign2').fadeTo(150, 1);
    });
  }

  selectCpu() {
    $('#player2, #selMarkPlayer2').css('color', '#333');
    $('#cpu').css('color', 'white');
    $('#selMarkCPU').css('color', '#3a8e1f');
    this.gameState.player2Activated = false;
    $('#nick2Input').prop('disabled', true).fadeTo(200, 0.2);
  }

  selectPlayer2() {
    $('#player2').css('color', 'white');
    $('#cpu, #selMarkCPU').css('color', '#333');
    $('#selMarkPlayer2').css('color', '#3a8e1f');
    this.gameState.player2Activated = true;
    $('#nick2Input').prop('disabled', false).fadeTo(200, 1);
  }

  async startGame() {
    this.setupGameConfiguration();
    this.vueApp.showModal = false;
    this.setupPlayerDisplay();
    await this.startRandomPlay();
  }

  setupGameConfiguration() {
    const firstNick = $('#nick1Input').val() || 'Anoa 1';
    const secondNick = $('#nick2Input').val() || 'Anoa 2';
    
    this.gameState.nicknamePlayer1 = firstNick;
    this.gameState.nicknamePlayer2 = secondNick;

    if (this.gameState.player1Circle) {
      this.gameState.signPlayer1 = GAME_CONFIG.SIGNS.CIRCLE;
      this.gameState.signPlayer2 = GAME_CONFIG.SIGNS.CROSS;
      this.gameState.player1MarkData = 'circle';
      this.gameState.player2MarkData = 'cross';
    } else {
      this.gameState.signPlayer1 = GAME_CONFIG.SIGNS.CROSS;
      this.gameState.signPlayer2 = GAME_CONFIG.SIGNS.CIRCLE;
      this.gameState.player1MarkData = 'cross';
      this.gameState.player2MarkData = 'circle';
    }
  }

  setupPlayerDisplay() {
    const avatar1 = GameUtils.getRandomAvatar('player1');
    const avatar2 = this.gameState.player2Activated ? 
      GameUtils.getRandomAvatar('player2') : 
      GameUtils.getRandomAvatar('cpu');
    
    const nick2 = this.gameState.player2Activated ? 
      this.gameState.nicknamePlayer2 : 
      GameUtils.getRandomCpuNickname();

    // Update player titles
    $('#player-1').html(`Pemain 1<br>${this.gameState.signPlayer1}<br>Menang: <span id="victoriesPlayer1">0</span>`);
    $('#player-2').html(`Pemain 2<br>${this.gameState.signPlayer2}<br>Menang: <span id="victoriesPlayer2">0</span>`);

    // Update player info
    $('#player1-info-inside').html(`<span class="nick">${this.gameState.nicknamePlayer1}</span><br><img src="${avatar1}" class="avatar-icon" />`);
    $('#player2-info-inside').html(`<span class="nick">${nick2}</span><br><img src="${avatar2}" class="avatar-icon" />`);

    // Fade in player information
    $('#player-1, #player-2, #player1-info-inside, #player2-info-inside').delay(500).fadeIn(3000);
  }

  async startRandomPlay() {
    this.resetBoard();
    this.gameState.randomBoolean = Math.random() < 0.5;
    
    await GameUtils.animateText('#player-1-Msg, #player-2-Msg', 'Mengacak<br>Giliran<br>');
    
    $('#player-1-Msg, #player-2-Msg').fadeOut(800).promise().done(() => {
      if (this.gameState.randomBoolean) {
        $('#player-1-Msg').html('Pemain 1<br>mulai!').fadeIn(200);
        $('#player-2-Msg').html('&nbsp;').delay(100).fadeIn(200);
      } else {
        $('#player-2-Msg').html('Pemain 2<br>mulai!<br>').fadeIn(200);
        $('#player-1-Msg').html('&nbsp;').delay(100).fadeIn(200);
      }
      $('#btnOptionsChild').fadeIn(1000);
      $('#optionsOverlay').hide();
      this.setupGamePlay();
    });
  }

  resetBoard() {
    // Clear squares and remove all animation classes
    $('.squares').html('').show()
      .removeClass('winning-square draw-square animate-bounce-in');
    $('.item').off('click')
      .removeClass('animate-bounce-in animate-slide-in-top animate-slide-in-bottom');
    
    // Reset game state
    this.gameState.toBeChecked1 = [];
    this.gameState.toBeChecked2 = [];
    this.gameState.usedSquaresPlayer1 = [];
    this.gameState.usedSquaresPlayer2 = [];
    this.gameState.usedSquaresTotal = [];
    this.gameState.weHaveAWinner = false;
    
    // Reset accessibility status
    for (let i = 1; i <= 9; i++) {
      $(`#square${i}-status`).text('Kosong');
    }
    
    // Remove overlay
    $('#optionsOverlay').removeClass('active');
    
    // Reset messages
    $('#player-1-Msg, #player-2-Msg')
      .removeClass('animate-slide-in-top animate-slide-in-bottom');
  }

  setupGamePlay() {
    this.gameState.isPlaying = true;
    
    if (this.gameState.player2Activated) {
      $('.item').on('click', (e) => this.handlePlayerMove(e));
    } else {
      if (!this.gameState.randomBoolean) {
        // CPU starts
        this.handleCpuMove();
      } else {
        // Player starts against CPU
        $('.item').on('click', (e) => this.handlePlayerVsCpuMove(e));
      }
    }
  }

  handlePlayerMove(event) {
    if (!this.isInitialized || !this.gameState.isPlaying) return;
    
    // Debounce rapid clicks
    const now = Date.now();
    if (now - this.lastClickTime < this.clickDebounceTime) return;
    this.lastClickTime = now;
    
    try {
      const markIndex = $(event.currentTarget.children).data('mark');
      
      if (!markIndex || this.gameState.usedSquaresTotal.includes(markIndex)) return;

      if (this.gameState.randomBoolean) {
        // Player 1's turn
        this.makeMove(markIndex, 1);
      } else {
        // Player 2's turn
        this.makeMove(markIndex, 2);
      }
    } catch (error) {
      console.error('Error handling player move:', error);
      this.showErrorMessage('Terjadi kesalahan saat memproses gerakan.');
    }
  }

  handlePlayerVsCpuMove(event) {
    if (!this.gameState.isPlaying) return;
    
    const markIndex = $(event.currentTarget.children).data('mark');
    
    if (this.gameState.usedSquaresTotal.includes(markIndex)) return;

    // Player 1 move
    this.makeMove(markIndex, 1);
    
    // CPU move after delay
    if (!this.gameState.weHaveAWinner && this.gameState.usedSquaresTotal.length < 9) {
      setTimeout(() => this.handleCpuMove(), 500);
    }
  }

  handleCpuMove() {
    if (!this.gameState.isPlaying || this.gameState.weHaveAWinner) return;

    const cpuMove = this.ai.getNextMove();
    this.makeMove(cpuMove, 2);
  }

  makeMove(square, player) {
    if (this.gameState.usedSquaresTotal.includes(square)) return;

    const sign = player === 1 ? this.gameState.signPlayer1 : this.gameState.signPlayer2;
    const playerArray = player === 1 ? this.gameState.toBeChecked1 : this.gameState.toBeChecked2;
    const usedArray = player === 1 ? this.gameState.usedSquaresPlayer1 : this.gameState.usedSquaresPlayer2;

    // Update UI with animation
    const squareElement = $(`#square${square}`);
    squareElement.addClass('animate-bounce-in');
    squareElement.html(sign);
    $(`.item-${square}`).off('click');

    // Update accessibility
    $(`#square${square}-status`).text(player === 1 ? 'Diisi oleh Pemain 1' : 'Diisi oleh Pemain 2');

    // Update game state
    playerArray.push(square);
    usedArray.push(square);
    this.gameState.usedSquaresTotal.push(square);

    // Add sound effect
    this.playMoveSound();

    // Check for winner
    this.checkWinner(`Pemain ${player}`, playerArray, player);

    // Toggle turn
    this.gameState.randomBoolean = !this.gameState.randomBoolean;
  }

  playMoveSound() {
    // Create a simple click sound using Web Audio API
    try {
      const audioContext = this.audioManager.getAudioContext();
      if (!audioContext) return;

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Fallback: no sound if Web Audio API is not supported
      console.log('Sound not available');
    }
  }

  checkWinner(playerName, playerMoves, playerIndex) {
    let winningCombination = null;

    for (const combination of GAME_CONFIG.WINNING_POSITIONS) {
      const matches = combination.filter(pos => playerMoves.includes(pos));
      if (matches.length === 3) {
        winningCombination = combination;
        break;
      }
    }

    if (winningCombination) {
      this.gameState.weHaveAWinner = true;
      this.gameState.indexWinner = playerIndex;
      this.gameState.triIndexWinner = winningCombination;
      this.gameState.isPlaying = false;
      $('.item').off('click');
      this.showWinner();
    } else if (this.gameState.usedSquaresTotal.length === 9) {
      this.gameState.isPlaying = false;
      this.showDraw();
    } else {
      this.updateTurnMessage(playerIndex);
    }
  }

  updateTurnMessage(lastPlayer) {
    if (lastPlayer === 1) {
      $('#player-1-Msg').fadeOut(200);
      $('#player-2-Msg').html('Giliranmu!').fadeIn(200);
    } else {
      $('#player-2-Msg').fadeOut(200);
      $('#player-1-Msg').html('Giliranmu!').fadeIn(200);
    }
  }

  showWinner() {
    this.gameState.updateScores(this.gameState.indexWinner);
    $(`#victoriesPlayer${this.gameState.indexWinner}`).html(this.gameState[`victories${this.gameState.indexWinner}`]);

    // Highlight winning squares with animation
    this.gameState.triIndexWinner.forEach((square, index) => {
      setTimeout(() => {
        const squareElement = $(`#square${square}`);
        squareElement.addClass('winning-square');
        squareElement.parent().addClass('animate-bounce-in');
      }, index * 200);
    });

    // Play winning sound
    this.playWinSound();

    $('#player-1-Msg, #player-2-Msg').fadeOut(500).promise().done(() => {
      $(`#player-${this.gameState.indexWinner}-Msg`).html('🎉 Menang! 🎉').addClass('animate-slide-in-top').fadeIn(500);
      setTimeout(() => this.restartGame(), 2000);
    });

    $('#optionsOverlay').addClass('active');
  }

  playWinSound() {
    try {
      const audioContext = this.audioManager.getAudioContext();
      if (!audioContext) return;
      
      // Play a sequence of celebratory notes
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      notes.forEach((frequency, index) => {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.3);
        }, index * 150);
      });
    } catch (error) {
      console.log('Win sound not available');
    }
  }

  showDraw() {
    $('#optionsOverlay').addClass('active');
    
    // Apply draw effects to all squares
    $('.squares').addClass('draw-square');
    $('.item').addClass('animate-slide-in-bottom');
    
    $('#player-1-Msg, #player-2-Msg').fadeOut(500).promise().done(() => {
      $('#player-1-Msg, #player-2-Msg').html('🤝 Seri! 🤝').addClass('animate-slide-in-top').fadeIn(500);
      setTimeout(() => this.restartGame(), 2000);
    });
  }

  async restartGame() {
    await GameUtils.animateText('#player-1-Msg, #player-2-Msg', 'Restart<br>');
    
    $('#player-1-Msg, #player-2-Msg').fadeOut(1000);
    $('.squares').fadeOut(1000);
    
    setTimeout(() => this.startRandomPlay(), 1200);
  }

  showOptions() {
    $('#player1-info-inside, #player2-info-inside, #player-1, #player-2, #btnOptionsChild').fadeOut(500);
    this.resetBoard();
    this.gameState.reset();
    this.vueApp.showModal = true;
    
    setTimeout(() => {
      $('#exchangeBtn').on('click', () => this.toggleSignSelection());
      $('#cpuSelect').on('click', () => this.selectCpu());
    }, 300);
  }
}

// ===== INITIALIZATION =====
$(document).ready(() => {
  window.ticTacToeGame = new TicTacToeGame();
});