/**
 * ANOA TIC-TAC-TOE Game
 * Improved version with modern JavaScript practices
 */

// Game Configuration
const GAME_CONFIG = {
  WINNING_COMBINATIONS: [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
    [1, 5, 9], [3, 5, 7]             // Diagonals
  ],
  DEFAULT_NICKNAMES: {
    PLAYER1: 'Anoa 1',
    PLAYER2: 'Anoa 2'
  },
  ANIMATION_DELAYS: {
    SHORT: 200,
    MEDIUM: 500,
    LONG: 1000
  }
};

// Avatar URLs
const AVATARS = {
  PLAYER1: [
    'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/angler-fish-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/bear-head-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/bee-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146973/Tic-Tac-Toe/dragonfly-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146973/Tic-Tac-Toe/duck-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146974/Tic-Tac-Toe/eagle-emblem-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146974/Tic-Tac-Toe/earwig-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146974/Tic-Tac-Toe/lion-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146977/Tic-Tac-Toe/octopus-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146976/Tic-Tac-Toe/pig-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146978/Tic-Tac-Toe/rabbit-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146977/Tic-Tac-Toe/scorpion-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146980/Tic-Tac-Toe/seahorse-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146978/Tic-Tac-Toe/snail-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146981/Tic-Tac-Toe/snake-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146978/Tic-Tac-Toe/sperm-whale-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146973/Tic-Tac-Toe/tortoise-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/vulture-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146973/Tic-Tac-Toe/wasp-sting-rg.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/wolf-head-rg.svg'
  ],
  PLAYER2: [
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
  ],
  CPU: [
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/android-mask_mc0mbt.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/artificial-intelligence_c1pdjn.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/circuitry_xghxt7.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/mechanical-arm_rc8rfn.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/microchip_p8wiyd.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/processor_yxn9qo.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142545/Tic-Tac-Toe/robot-golem_au90ds.svg'
  ]
};

// CPU Nicknames
const CPU_NICKNAMES = [
  'Anoa', 'Anoa 1', 'Anoa 2', 'Anoa 3', 'Anoa 4', 
  'Anoa 5', 'Anoa 6', 'Anoa 7', 'Anoa 8', 'Anoa 9', 'Anoa 10'
];

// Game State
let gameState = {
  player1Circle: true,
  player2Activated: true,
  randomBoolean: false,
  victories1: 0,
  victories2: 0,
  weHaveAWinner: false,
  usedSquaresPlayer1: [],
  usedSquaresPlayer2: [],
  usedSquaresTotal: [],
  toBeChecked1: [],
  toBeChecked2: [],
  indexWinner: null,
  triIndexWinner: null
};

// Game Symbols
let gameSymbols = {
  circleSign: '<i class="fa fa-circle-o" aria-hidden="true"></i>',
  timesSign: '<i class="fa fa-times" aria-hidden="true"></i>',
  signPlayer1: '',
  signPlayer2: '',
  player1MarkData: '',
  player2MarkData: ''
};

// Player Names
let playerNames = {
  nicknamePlayer1: '',
  nicknamePlayer2: ''
};

// Utility Functions
const Utils = {
  getRandomElement: (array) => array[Math.floor(Math.random() * array.length)],
  
  getRandomBoolean: () => Boolean(Math.floor(Math.random() * 2)),
  
  delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
  
  fadeIn: (element, duration = 300) => {
    $(element).fadeIn(duration);
  },
  
  fadeOut: (element, duration = 300) => {
    $(element).fadeOut(duration);
  },
  
  setTextShadow: (element, color) => {
    $(element).css('text-shadow', color);
  }
};

// Audio Controller
class AudioController {
  constructor() {
    this.audio = document.getElementById('playMusic');
    this.btnSound = document.getElementById('btnSound');
    this.isPlaying = true;
    this.init();
  }

  init() {
    this.btnSound.addEventListener('click', () => this.toggleAudio());
    this.setupKeyboardControls();
  }

  toggleAudio() {
    if (this.audio.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    this.audio.play().catch(error => {
      console.warn('Audio autoplay blocked:', error);
    });
    this.updateButtonState(true);
  }

  pause() {
    this.audio.pause();
    this.updateButtonState(false);
  }

  updateButtonState(playing) {
    this.isPlaying = playing;
    const icon = this.btnSound.querySelector('i');
    const span = this.btnSound.querySelector('span');
    
    if (playing) {
      icon.className = 'fa fa-volume-up';
      span.textContent = 'Musik';
      this.audio.animate({ volume: 1 }, 1500);
    } else {
      icon.className = 'fa fa-volume-off';
      span.textContent = 'Musik';
      this.audio.animate({ volume: 0 }, 1500);
    }
  }

  setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'm' || e.key === 'M') {
        this.toggleAudio();
      }
    });
  }
}

// Game Logic Controller
class GameController {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.resetGame();
  }

  setupEventListeners() {
    // Exchange button
    $("#exchangeBtn").on("click", () => this.toggleCircleCross());
    
    // CPU/Player selection
    $("#cpuSelect").on("click", () => this.cpuClicked());
    $("#player2Select").on("click", () => this.player2Click());
    
    // Keyboard navigation for game board
    this.setupKeyboardNavigation();
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (gameState.weHaveAWinner || !gameState.player2Activated) return;
      
      const currentSquare = document.querySelector('.squares:focus');
      if (!currentSquare) return;

      const currentMark = parseInt(currentSquare.dataset.mark);
      let nextMark;

      switch(e.key) {
        case 'ArrowUp':
          nextMark = currentMark > 3 ? currentMark - 3 : currentMark + 6;
          break;
        case 'ArrowDown':
          nextMark = currentMark < 7 ? currentMark + 3 : currentMark - 6;
          break;
        case 'ArrowLeft':
          nextMark = currentMark % 3 === 1 ? currentMark + 2 : currentMark - 1;
          break;
        case 'ArrowRight':
          nextMark = currentMark % 3 === 0 ? currentMark - 2 : currentMark + 1;
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          this.handleSquareClick(currentMark);
          return;
        default:
          return;
      }

      const nextSquare = document.querySelector(`[data-mark="${nextMark}"]`);
      if (nextSquare) {
        nextSquare.focus();
      }
    });
  }

  handleSquareClick(markIndex) {
    if (gameState.weHaveAWinner || gameState.usedSquaresTotal.includes(markIndex)) return;
    
    if (gameState.randomBoolean) {
      this.makeMove(markIndex, 1);
    } else {
      this.makeMove(markIndex, 2);
    }
  }

  makeMove(markIndex, player) {
    const sign = player === 1 ? gameSymbols.signPlayer1 : gameSymbols.signPlayer2;
    const square = $(`#square${markIndex}`);
    
    square.html(sign);
    $(`.item-${markIndex}`).off('click');
    
    gameState.usedSquaresTotal.push(markIndex);
    
    if (player === 1) {
      gameState.usedSquaresPlayer1.push(markIndex);
      gameState.toBeChecked1.push(markIndex);
      this.winnerChecker("Pemain 1", gameState.toBeChecked1, 1);
    } else {
      gameState.usedSquaresPlayer2.push(markIndex);
      gameState.toBeChecked2.push(markIndex);
      this.winnerChecker("Pemain 2", gameState.toBeChecked2, 2);
    }
    
    gameState.randomBoolean = !gameState.randomBoolean;
  }

  toggleCircleCross() {
    const first = gameState.player1Circle ? $('.sign1') : $('.sign2');
    const second = gameState.player1Circle ? $('.sign2') : $('.sign1');
    
    $(".sign1, .sign2").fadeTo(150, 0.1).promise().done(() => {
      first.html('<i class="fa fa-times" aria-hidden="true"></i>');
      second.html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
      $(".sign1, .sign2").fadeTo(150, 1);
    });
    
    gameState.player1Circle = !gameState.player1Circle;
  }

  cpuClicked() {
    $('#player2, #selMarkPlayer2').css("color", "#333");
    $('#cpu').css("color", "white");
    $('#selMarkCPU').css("color", "#3a8e1f");
    gameState.player2Activated = false;
    $("#cpuSelect").off("click");
    $("#player2Select").on("click", () => this.player2Click());
    $("#nick2Input").prop("disabled", true).fadeTo(200, 0.2);
  }

  player2Click() {
    $('#player2').css("color", "white");
    $('#cpu, #selMarkCPU').css("color", "#333");
    $('#selMarkPlayer2').css("color", "#3a8e1f");
    gameState.player2Activated = true;
    $("#player2Select").off("click");
    $("#cpuSelect").on("click", () => this.cpuClicked());
    $("#nick2Input").prop("disabled", false).fadeTo(200, 1);
  }

  resetGame() {
    gameState = {
      player1Circle: true,
      player2Activated: true,
      randomBoolean: false,
      victories1: gameState.victories1,
      victories2: gameState.victories2,
      weHaveAWinner: false,
      usedSquaresPlayer1: [],
      usedSquaresPlayer2: [],
      usedSquaresTotal: [],
      toBeChecked1: [],
      toBeChecked2: [],
      indexWinner: null,
      triIndexWinner: null
    };
  }

  winnerChecker(player, arrayChecked, indexPlayer) {
    let proof = [];
    
    for (let i = 0; i < GAME_CONFIG.WINNING_COMBINATIONS.length; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < arrayChecked.length; k++) {
          if (GAME_CONFIG.WINNING_COMBINATIONS[i][j] === arrayChecked[k]) {
            proof.push(GAME_CONFIG.WINNING_COMBINATIONS[i][j]);
          }
        }
      }
      
      if (proof.length === 3) {
        gameState.weHaveAWinner = true;
        gameState.triIndexWinner = proof;
        $('#optionsOverlay').show();
        break;
      } else {
        proof = [];
      }
    }
    
    if (gameState.weHaveAWinner) {
      gameState.indexWinner = indexPlayer;
      $('.item').off('click');
      this.finalResult();
    } else {
      proof = [];
      if (indexPlayer === 1) {
        $('#player-1-Msg').fadeOut(200);
        $('#player-2-Msg').html('Giliranmu!').fadeIn(200);
      } else if (indexPlayer === 2) {
        $('#player-2-Msg').fadeOut(200);
        $('#player-1-Msg').html('Giliranmu!').fadeIn(200);
      }
      
      if (gameState.usedSquaresTotal.length === 9 && !gameState.weHaveAWinner) {
        $('#optionsOverlay').show();
        Utils.setTextShadow('.squares', '0 0 30px rgb(33, 100, 202), 0 0 14px rgb(94, 129, 216), 0 0 30px rgb(31, 45, 142), 0 0 40px #20377b, 0 0 70px #1d215d, 0 0 80px #151d56, 0 0 100px #142d65');
        $('#player-1-Msg, #player-2-Msg').fadeOut(500).promise().done(() => {
          $('#player-1-Msg, #player-2-Msg').html('Draw!').fadeIn(500).promise().done(() => {
            this.restartingGame();
          });
        });
      } else if (!gameState.player2Activated && !gameState.weHaveAWinner) {
        this.cpuMove();
      }
    }
  }

  finalResult() {
    if (gameState.indexWinner === 1) {
      gameState.victories1++;
      $('#victoriesPlayer1').html(gameState.victories1);
    } else if (gameState.indexWinner === 2) {
      gameState.victories2++;
      $('#victoriesPlayer2').html(gameState.victories2);
    }
    
    const [firstIndex, secondIndex, thirdIndex] = gameState.triIndexWinner.map(i => `#square${i}`);
    $([firstIndex, secondIndex, thirdIndex]).each(function() {
      Utils.setTextShadow(this, '0 0 30px rgb(202, 33, 33), 0 0 14px rgb(216, 94, 94), 0 0 30px rgb(142, 31, 31), 0 0 40px #7b2020, 0 0 70px #5d1d1d, 0 0 80px #561515, 0 0 100px #651414');
    });
    
    $('#player-1-Msg, #player-2-Msg').fadeOut(500).promise().done(() => {
      $(this).html('<br>').promise().done(() => {
        $(`#player-${gameState.indexWinner}-Msg`).html('Winner!').fadeIn(500);
        setTimeout(() => this.restartingGame(), 800);
      });
    });
  }

  restartingGame() {
    setTimeout(() => {
      $('#player-1-Msg, #player-2-Msg').append('<br><br>Restarting<br>.');
      setTimeout(() => {
        $('#player-1-Msg, #player-2-Msg').append('.');
        setTimeout(() => {
          $('.squares').fadeOut(1000);
          $('#player-1-Msg, #player-2-Msg').append('.').promise().done(() => {
            $('#player-1-Msg, #player-2-Msg').fadeOut(1000);
            setTimeout(() => this.randomPlay(), 1200);
          });
        }, 800);
      }, 600);
    }, 200);
  }

  cpuMove() {
    const freeSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(square => 
      !gameState.usedSquaresTotal.includes(square)
    );
    
    let moveIndex;
    
    // CPU AI Logic (simplified version of the original complex logic)
    if (gameState.usedSquaresTotal.length === 0) {
      moveIndex = 5; // Center
    } else if (gameState.usedSquaresTotal.length === 1 && gameState.usedSquaresPlayer1.length === 1) {
      moveIndex = freeSquares.includes(5) ? 5 : 1;
    } else {
      // Check for winning move
      moveIndex = this.findWinningMove(gameState.usedSquaresPlayer2, freeSquares);
      
      // If no winning move, block opponent
      if (!moveIndex) {
        moveIndex = this.findWinningMove(gameState.usedSquaresPlayer1, freeSquares);
      }
      
      // If no blocking move, make strategic move
      if (!moveIndex) {
        moveIndex = this.findStrategicMove(freeSquares);
      }
      
      // If no strategic move, pick first available
      if (!moveIndex) {
        moveIndex = freeSquares[0];
      }
    }
    
    this.makeMove(moveIndex, 2);
  }

  findWinningMove(playerSquares, freeSquares) {
    for (const combination of GAME_CONFIG.WINNING_COMBINATIONS) {
      const playerInCombo = combination.filter(square => playerSquares.includes(square));
      const freeInCombo = combination.filter(square => freeSquares.includes(square));
      
      if (playerInCombo.length === 2 && freeInCombo.length === 1) {
        return freeInCombo[0];
      }
    }
    return null;
  }

  findStrategicMove(freeSquares) {
    // Prefer corners, then edges, then center
    const corners = [1, 3, 7, 9];
    const edges = [2, 4, 6, 8];
    
    for (const corner of corners) {
      if (freeSquares.includes(corner)) return corner;
    }
    
    for (const edge of edges) {
      if (freeSquares.includes(edge)) return edge;
    }
    
    return freeSquares.includes(5) ? 5 : null;
  }

  randomPlay() {
    $('.squares').html('');
    this.resetGame();
    
    Utils.setTextShadow('.squares', '0 0 30px rgb(51, 202, 33), 0 0 14px rgb(124, 216, 94), 0 0 30px rgb(58, 142, 31), 0 0 40px #3b7b20, 0 0 70px #275d1d, 0 0 80px #1c5615, 0 0 100px #246514');
    
    gameState.randomBoolean = Utils.getRandomBoolean();
    
    $('#player-1-Msg, #player-2-Msg').html('Pengacakan<br>Pertama<br>').show();
    
    setTimeout(() => {
      $('.squares').show();
      $('#player-1-Msg, #player-2-Msg').append('.');
      
      setTimeout(() => {
        $('#player-1-Msg, #player-2-Msg').append('.');
        
        setTimeout(() => {
          $('#player-1-Msg, #player-2-Msg').append('.');
          
          setTimeout(() => {
            $('#player-1-Msg, #player-2-Msg').fadeOut(800).promise().done(() => {
              if (gameState.randomBoolean) {
                $('#player-1-Msg').html('Pemain 1<br>mulai!').fadeIn(200);
                $('#player-2-Msg').html('&nbsp;').delay(100).fadeIn(200);
              } else {
                $('#player-2-Msg').html('Pemain 2<br>mulai!<br>').fadeIn(200);
                $('#player-1-Msg').html('&nbsp;').delay(100).fadeIn(200);
              }
              
              $('#btnOptionsChild').fadeIn(1000);
              $('#optionsOverlay').hide();
              
              if (!gameState.player2Activated) {
                this.cpuMove();
              } else {
                $('.item').on('click', (e) => {
                  const markIndex = $(e.currentTarget.children).data("mark");
                  this.handleSquareClick(markIndex);
                });
              }
            });
          }, 800);
        }, 600);
      }, 600);
    }, 400);
  }
}

// Vue.js Application
new Vue({
  el: '#contentVue',
  data: {
    showModal: true
  },
  methods: {
    avat1() {
      return Utils.getRandomElement(AVATARS.PLAYER1);
    },
    
    avat2() {
      return Utils.getRandomElement(AVATARS.PLAYER2);
    },
    
    avatCPU() {
      return Utils.getRandomElement(AVATARS.CPU);
    },
    
    cpuNickname() {
      return Utils.getRandomElement(CPU_NICKNAMES);
    },
    
    okButtonClicked() {
      const avatar1 = this.avat1();
      const avatar2 = this.avat2();
      const avatarCPU = this.avatCPU();
      const cpuNick = this.cpuNickname();
      const firstNick = $('#nick1Input').val();
      const secondNick = $('#nick2Input').val();
      
      playerNames.nicknamePlayer1 = firstNick || GAME_CONFIG.DEFAULT_NICKNAMES.PLAYER1;
      playerNames.nicknamePlayer2 = secondNick || GAME_CONFIG.DEFAULT_NICKNAMES.PLAYER2;
      
      this.showModal = false;
      
      gameSymbols.circleSign = '<i class="fa fa-circle-o" aria-hidden="true"></i>';
      gameSymbols.timesSign = '<i class="fa fa-times" aria-hidden="true"></i>';
      
      if (gameState.player1Circle) {
        $('#player-1').html(`Pemain 1<br>${gameSymbols.circleSign}<br>Menang: <span id="victoriesPlayer1">0</span>`);
        $('#player-2').html(`Pemain 2<br>${gameSymbols.timesSign}<br>Menang: <span id="victoriesPlayer2">0</span>`);
        gameSymbols.signPlayer1 = gameSymbols.circleSign;
        gameSymbols.signPlayer2 = gameSymbols.timesSign;
        gameSymbols.player1MarkData = "circle";
        gameSymbols.player2MarkData = "cross";
      } else {
        $('#player-1').html(`Pemain 1<br>${gameSymbols.timesSign}<br>Menang: <span id="victoriesPlayer1">0</span>`);
        $('#player-2').html(`Pemain 2<br>${gameSymbols.circleSign}<br>Menang: <span id="victoriesPlayer2">0</span>`);
        gameSymbols.signPlayer1 = gameSymbols.timesSign;
        gameSymbols.signPlayer2 = gameSymbols.circleSign;
        gameSymbols.player1MarkData = "cross";
        gameSymbols.player2MarkData = "circle";
      }
      
      if (gameState.player2Activated) {
        $('#player1-info-inside').html(`<span class="nick">${playerNames.nicknamePlayer1}</span><br><img src="${avatar1}" class="avatar-icon" alt="Avatar Pemain 1" />`);
        $('#player2-info-inside').html(`<span class="nick">${playerNames.nicknamePlayer2}</span><br><img src="${avatar2}" class="avatar-icon" alt="Avatar Pemain 2" />`);
      } else {
        $('#player1-info-inside').html(`<span class="nick">${playerNames.nicknamePlayer1}</span><br><img src="${avatar1}" class="avatar-icon" alt="Avatar Pemain 1" />`);
        $('#player2-info-inside').html(`<span class="nick">${cpuNick}</span><br><img src="${avatarCPU}" class="avatar-icon" alt="Avatar CPU" />`);
      }
      
      $('#player-1, #player-2, #player1-info-inside, #player2-info-inside').delay(500).fadeIn(3000);
      gameController.randomPlay();
    },
    
    backToOptions() {
      $('#player1-info-inside, #player2-info-inside, #player-1, #player-2, #btnOptionsChild').fadeOut(500);
      $('.squares').html('');
      $('.item').off('click');
      
      gameState.victories1 = 0;
      gameState.victories2 = 0;
      gameState.player2Activated = true;
      gameState.player1Circle = true;
      gameState.toBeChecked1 = [];
      gameState.toBeChecked2 = [];
      
      $('#player-1-Msg, #player-2-Msg').html('&nbsp;');
      this.showModal = true;
      
      setTimeout(() => {
        $("#exchangeBtn").on("click", () => gameController.toggleCircleCross());
        $("#cpuSelect").on("click", () => gameController.cpuClicked());
        Utils.setTextShadow('.squares', '0 0 30px rgb(51, 202, 33), 0 0 14px rgb(124, 216, 94), 0 0 30px rgb(58, 142, 31), 0 0 40px #3b7b20, 0 0 70px #275d1d, 0 0 80px #1c5615, 0 0 100px #246514');
      }, 300);
    },
    
    closeModal() {
      // Optional: Add close modal functionality
    }
  }
});

// Initialize controllers when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.audioController = new AudioController();
  window.gameController = new GameController();
});