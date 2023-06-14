var signPlayer1,signPlayer2,player2MarkData,player1MarkData,victories1 = 0,victories2 = 0;
new Vue({
  el: '#contentVue',
  data: {
    avatar1: [
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
    'http://res.cloudinary.com/azametzin/image/upload/v1507146969/Tic-Tac-Toe/wolf-head-rg.svg'],

    avatarCPU: [
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/android-mask_mc0mbt.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/artificial-intelligence_c1pdjn.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/circuitry_xghxt7.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/mechanical-arm_rc8rfn.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/microchip_p8wiyd.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142542/Tic-Tac-Toe/processor_yxn9qo.svg',
    'http://res.cloudinary.com/azametzin/image/upload/v1507142545/Tic-Tac-Toe/robot-golem_au90ds.svg'],

    avatar2: [
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
    'http://res.cloudinary.com/azametzin/image/upload/v1507556003/Tic-Tac-Toe/wolf-head.svg'],

    cpuNick: [
    'Anoa ',
    'Anoa 1',
    'Anoa 2',
    'Anoa 3',
    'Anoa 4',
    'Anoa 5',
    'Anoa 6',
    'Anoa 7',
    'Anoa 8',
    'Anoa 8',
    'Anoa 10'],

    showModal: true },

  methods: {
    avat1() {
      let randomIndex = Math.floor(Math.random() * this.avatar1.length);
      return this.avatar1[randomIndex];
    },
    avat2() {
      let randomIndex = Math.floor(Math.random() * this.avatar2.length);
      return this.avatar2[randomIndex];
    },
    avatCPU() {
      let randomIndex = Math.floor(Math.random() * this.avatarCPU.length);
      return this.avatarCPU[randomIndex];
    },
    cpuNickname() {
      let randomIndex = Math.floor(Math.random() * this.cpuNick.length);
      return this.cpuNick[randomIndex];
    },
    okButtonClicked() {
      let avatar1 = this.avat1(),
      avatar2 = this.avat2(),
      avatarCPU = this.avatCPU(),
      cpuNick = this.cpuNickname(),
      firstNick = $('#nick1Input').val(),
      secondNick = $('#nick2Input').val();
      if (firstNick === '') {
        nicknamePlayer1 = 'Anoa 1';
      } else
      {
        nicknamePlayer1 = firstNick;
      }
      if (secondNick === '') {
        nicknamePlayer2 = 'Anoa 2';
      } else
      {
        nicknamePlayer2 = secondNick;
      }
      this.showModal = false;
      circleSign = '<i class="fa fa-circle-o" aria-hidden="true"></i>';
      timesSign = '<i class="fa fa-times" aria-hidden="true"></i>';
      if (player1Circle === true) {
        $('#player-1').html('Pemain 1<br>' + circleSign + '<br>Menang: <span id="victoriesPlayer1"></span>');
        $('#player-2').html('Pemain 2<br>' + timesSign + '<br>Menang: <span id="victoriesPlayer2"></span>');
        $('#victoriesPlayer1, #victoriesPlayer2').html('0');
        signPlayer1 = circleSign;
        signPlayer2 = timesSign;
        player1MarkData = "circle";
        player2MarkData = "cross";
      } else
      {
        $('#player-1').html('Pemain 1<br>' + timesSign + '<br>Menang: <span id="victoriesPlayer1"></span>');
        $('#player-2').html('Pemain 2<br>' + circleSign + '<br>Menang: <span id="victoriesPlayer2"></span>');
        $('#victoriesPlayer1, #victoriesPlayer2').html('0');
        signPlayer1 = timesSign;
        signPlayer2 = circleSign;
        player1MarkData = "cross";
        player2MarkData = "circle";
      }
      if (player2Activated === true) {// player2 activado
        $('#player1-info-inside').html('<span class="nick">' + nicknamePlayer1 + '</span><br><img src="' + avatar1 + '" class="avatar-icon" />');
        $('#player2-info-inside').html('<span class="nick">' + nicknamePlayer2 + '</span><br><img src="' + avatar2 + '" class="avatar-icon" />');
      } else
      if (player2Activated === false) {// CPU activado
        $('#player1-info-inside').html('<span class="nick">' + nicknamePlayer1 + '</span><br><img src="' + avatar1 + '" class="avatar-icon" />');
        $('#player2-info-inside').html('<span class="nick">' + cpuNick + '</span><br><img src="' + avatarCPU + '" class="avatar-icon" />');
      }
      $('#player-1, #player-2, #player1-info-inside, #player2-info-inside').delay(500).fadeIn(3000);
      randomPlay();
    },
    backToOptions() {
      $('#player1-info-inside, #player2-info-inside, #player-1, #player-2, #btnOptionsChild').fadeOut(500);
      $('.squares').html('');
      $('.item').off('click');
      victories1 = 0;
      victories2 = 0;
      player2Activated = true;
      player1Circle = true;
      toBeChecked1 = [];
      toBeChecked2 = [];
      $('#player-1-Msg, #player-2-Msg').html('&nbsp;');
      this.showModal = true;
      setTimeout(function () {
        $("#exchangeBtn").on("click", toggleCircleCross);
        $("#cpuSelect").on("click", cpuClicked);
        $('.squares').css("text-shadow", "0 0 30px rgb(51, 202, 33), 0 0 14px rgb(124, 216, 94), 0 0 30px rgb(58, 142, 31), 0 0 40px #3b7b20, 0 0 70px #275d1d, 0 0 80px #1c5615, 0 0 100px #246514");
      }, 300);
    } } });



var player1Circle = true,
player2Activated = true,
first,
second,
nicknamePlayer1,
nicknamePlayer2;
function toggleCircleCross() {
  if (player1Circle == true) {
    first = $('.sign1');second = $('.sign2');
  } else
  {
    first = $('.sign2');second = $('.sign1');
  }
  $(".sign1, .sign2").fadeTo(150, 0.1).promise().done(function () {
    $(first).html('<i class="fa fa-times" aria-hidden="true"></i>');
    $(second).html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
    $(".sign1, .sign2").fadeTo(150, 1);
  });
  player1Circle = !player1Circle;
}
$("#exchangeBtn").on("click", toggleCircleCross);
function cpuClicked() {
  $('#player2, #selMarkPlayer2').css("color", "#333");
  $('#cpu').css("color", "white");
  $('#selMarkCPU').css("color", "#3a8e1f");
  player2Activated = false;
  $("#cpuSelect").off("click");
  $("#player2Select").on("click", player2Click);
  $("#nick2Input").prop("disabled", true).fadeTo(200, 0.2);
}
function player2Click() {
  $('#player2').css("color", "white");
  $('#cpu, #selMarkCPU').css("color", "#333");
  $('#selMarkPlayer2').css("color", "#3a8e1f");
  player2Activated = true;
  $("#player2Select").off("click");
  $("#cpuSelect").on("click", cpuClicked);
  $("#nick2Input").prop("disabled", false).fadeTo(200, 1);
}
$("#cpuSelect").on("click", cpuClicked);

var circleSign,
timesSign,
randomBoolean;
function randomPlay() {
  $('.squares').html('');
  toBeChecked1 = [];toBeChecked2 = [];
  usedSquaresPlayer1 = [];usedSquaresPlayer2 = [];usedSquaresTotal = [];
  weHaveAWinner = false;
  $('.squares').css("text-shadow", "0 0 30px rgb(51, 202, 33), 0 0 14px rgb(124, 216, 94), 0 0 30px rgb(58, 142, 31), 0 0 40px #3b7b20, 0 0 70px #275d1d, 0 0 80px #1c5615, 0 0 100px #246514");
  randomBoolean = Boolean(Math.floor(Math.random() * 2));
  $('#player-1-Msg, #player-2-Msg').html('Pengacakan<br>Pertama<br>').show();
  setTimeout(function () {
    $('.squares').show();
    $('#player-1-Msg, #player-2-Msg').append('.');
    setTimeout(function () {
      $('#player-1-Msg, #player-2-Msg').append('.');
      setTimeout(function () {
        $('#player-1-Msg, #player-2-Msg').append('.');
        setTimeout(function () {
          $('#player-1-Msg, #player-2-Msg').fadeOut(800).promise().done(function () {
            if (randomBoolean == true) {
              $('#player-1-Msg').html('Pemain 1<br>mulai!').fadeIn(200);
              $('#player-2-Msg').html('&nbsp;').delay(100).fadeIn(200);
              $('#btnOptionsChild').fadeIn(1000);
              $('#optionsOverlay').hide();
            } else {
              $('#player-2-Msg').html('Pemain 2<br>mulai!<br>').fadeIn(200);
              $('#player-1-Msg').html('&nbsp;').delay(100).fadeIn(200);
              $('#btnOptionsChild').fadeIn(1000);
              $('#optionsOverlay').hide();
            }
            if (!player2Activated) {
              gamePlay();
            } else
            {
              $('.item').on('click', gamePlay);
            }
          });
        }, 800);
      }, 600);
    }, 600);
  }, 400);
}
const allTheSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9],
positions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
var indexWinner,
triIndexWinner,
toBeChecked1 = [],toBeChecked2 = [],
usedSquaresPlayer1 = [],usedSquaresPlayer2 = [],usedSquaresTotal = [],
freeSquares,
appliedHere;
function gamePlay() {
  if (player2Activated) {
    if (randomBoolean) {// Player 1 plays
      let markIndex = $(this.children).data("mark");
      $('.item-' + markIndex).off('click');
      $('#square' + markIndex).html(signPlayer1);
      randomBoolean = !randomBoolean;
      toBeChecked1.push(markIndex);usedSquaresPlayer1.push(markIndex);usedSquaresTotal.push(markIndex);
      winnerChecker("Pemain 1", toBeChecked1, 1);
    } else
    if (!randomBoolean) {// Player 2 plays
      let markIndex = $(this.children).data("mark");
      $('.item-' + markIndex).off('click');
      $('#square' + markIndex).html(signPlayer2);
      randomBoolean = !randomBoolean;
      toBeChecked2.push(markIndex);usedSquaresPlayer2.push(markIndex);usedSquaresTotal.push(markIndex);
      winnerChecker("Pemain 2", toBeChecked2, 2);
    }
  } else
  if (!player2Activated) {
    freeSquares = allTheSquares.filter(function (e) {return this.indexOf(e) < 0;}, usedSquaresTotal);
    if (randomBoolean) {//Player 1 plays
      $('.item').on('click', function () {//click effect for each item (square)
        let markIndex = $(this.children).data("mark");
        toBeChecked1.push(markIndex);usedSquaresPlayer1.push(markIndex);usedSquaresTotal.push(markIndex);
        $('#square' + markIndex).html(signPlayer1);
        $('.item').off('click');
        randomBoolean = !randomBoolean;
        winnerChecker("Pemain 1", toBeChecked1, 1);
      });
      if (usedSquaresTotal.length > 0) {//if there are already ocuppied squares, remove the click effect through loop
        for (var s = 0; s < usedSquaresTotal.length; s++) {
          $('.item-' + usedSquaresTotal[s]).off('click');
        }
      }
    } else
    if (!randomBoolean) {//CPU plays
      if (usedSquaresTotal.length == 0) {// if CPU plays first, mark in the middle (square5)
        $('#square5').html(signPlayer2);
        toBeChecked2.push(5);usedSquaresPlayer2.push(5);usedSquaresTotal.push(5);
      } else
      if (usedSquaresTotal.length == 1 && usedSquaresPlayer1.length == 1) {// if CPU plays second
        if ($.inArray(5, freeSquares) >= 0) {// detect if middle square is free --> If so, will there this time
          $('#square5').html(signPlayer2); //marking in the middle
          toBeChecked2.push(5);usedSquaresPlayer2.push(5);usedSquaresTotal.push(5);
        } else
        if ($.inArray(5, freeSquares) == -1) {//detect if middle square is used --> If so, will mark square1
          $('#square1').html(signPlayer2);
          toBeChecked2.push(1);usedSquaresPlayer2.push(1);usedSquaresTotal.push(1);
        }
      } else
      if (usedSquaresTotal.length == 2 && usedSquaresPlayer1.length == 1) {
        $('#square' + freeSquares[0]).html(signPlayer2);
        toBeChecked2.push(freeSquares[0]);usedSquaresPlayer2.push(freeSquares[0]);usedSquaresTotal.push(freeSquares[0]);
      } else
      if (usedSquaresTotal.length == 3) {//if total is 3, it means player 1 played first turn
        let temporarly1,temporarly2,appliedHere = false;
        for (var x = 0; x < 8; x++) {//loop checking if Player1 will win (2 used and 1 free in same row)
          temporarly1 = [];
          for (var z = 0; z < 3; z++) {
            if ($.inArray(positions[x][z], usedSquaresPlayer1) >= 0) {
              temporarly1.push(positions[x][z]);
            }
          }
          temporarly2 = positions[x].filter(function (e) {return this.indexOf(e) < 0;}, usedSquaresPlayer1);
          if (temporarly1.length == 2 && $.inArray(temporarly2[0], freeSquares) >= 0) {
            $('#square' + temporarly2[0]).html(signPlayer2);
            toBeChecked2.push(temporarly2[0]);usedSquaresPlayer2.push(temporarly2[0]);usedSquaresTotal.push(temporarly2[0]);
            appliedHere = true;
            break;
          }
        }
        if (appliedHere == false) {//it means player1 was not about to win --> now, check if there is a trap
          if ($.inArray(2, usedSquaresPlayer2) >= 0) {//CASE 1 ---> check if square2 is ocuppied by CPU
            if ($.inArray(1, usedSquaresPlayer1) >= 0 && $.inArray(3, usedSquaresPlayer1) >= 0) {
              $('#square5').html(signPlayer2);
              toBeChecked2.push(5);usedSquaresPlayer2.push(5);usedSquaresTotal.push(5);
            } else
            if ($.inArray(1, usedSquaresPlayer1) >= 0 && $.inArray(6, usedSquaresPlayer1) >= 0) {
              $('#square5').html(signPlayer2);
              toBeChecked2.push(5);usedSquaresPlayer2.push(5);usedSquaresTotal.push(5);
            } else
            if ($.inArray(3, usedSquaresPlayer1) >= 0 && $.inArray(4, usedSquaresPlayer1) >= 0) {
              $('#square5').html(signPlayer2);
              toBeChecked2.push(5);usedSquaresPlayer2.push(5);usedSquaresTotal.push(5);
            } else
            if ($.inArray(1, usedSquaresPlayer1) >= 0 && $.inArray(8, usedSquaresPlayer1) >= 0) {
              $('#square7').html(signPlayer2);
              toBeChecked2.push(7);usedSquaresPlayer2.push(7);usedSquaresTotal.push(7);
            } else
            if ($.inArray(3, usedSquaresPlayer1) >= 0 && $.inArray(8, usedSquaresPlayer1) >= 0) {
              $('#square9').html(signPlayer2);
              toBeChecked2.push(9);usedSquaresPlayer2.push(9);usedSquaresTotal.push(9);
            }
          } else
          if ($.inArray(8, usedSquaresPlayer2) >= 0) {//CASE 2 ---> check if square8 is ocuppied by CPU
            if ($.inArray(7, usedSquaresPlayer1) >= 0 && $.inArray(9, usedSquaresPlayer1) >= 0) {
              $('#square5').html(signPlayer2);
              toBeChecked2.push(5);usedSquaresPlayer2.push(5);usedSquaresTotal.push(5);
            } else
            if ($.inArray(6, usedSquaresPlayer1) >= 0 && $.inArray(7, usedSquaresPlayer1) >= 0) {
              $('#square5').html(signPlayer2);
              toBeChecked2.push(5);usedSquaresPlayer2.push(5);usedSquaresTotal.push(5);
            } else
            if ($.inArray(4, usedSquaresPlayer1) >= 0 && $.inArray(9, usedSquaresPlayer1) >= 0) {
              $('#square5').html(signPlayer2);
              toBeChecked2.push(5);usedSquaresPlayer2.push(5);usedSquaresTotal.push(5);
            } else
            if ($.inArray(2, usedSquaresPlayer1) >= 0 && $.inArray(7, usedSquaresPlayer1) >= 0) {
              $('#square1').html(signPlayer2);
              toBeChecked2.push(1);usedSquaresPlayer2.push(1);usedSquaresTotal.push(1);
            } else
            if ($.inArray(2, usedSquaresPlayer1) >= 0 && $.inArray(9, usedSquaresPlayer1) >= 0) {
              $('#square3').html(signPlayer2);
              toBeChecked2.push(3);usedSquaresPlayer2.push(3);usedSquaresTotal.push(3);
            }
          } else
          if ($.inArray(2, usedSquaresPlayer1) >= 0 && $.inArray(4, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE 3
            $('#square1').html(signPlayer2);
            toBeChecked2.push(1);usedSquaresPlayer2.push(1);usedSquaresTotal.push(1);
          } else
          if ($.inArray(2, usedSquaresPlayer1) >= 0 && $.inArray(6, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE 4
            $('#square3').html(signPlayer2);
            toBeChecked2.push(3);usedSquaresPlayer2.push(3);usedSquaresTotal.push(3);
          } else
          if ($.inArray(6, usedSquaresPlayer1) >= 0 && $.inArray(8, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE 5
            $('#square9').html(signPlayer2);
            toBeChecked2.push(9);usedSquaresPlayer2.push(9);usedSquaresTotal.push(9);
          } else
          if ($.inArray(4, usedSquaresPlayer1) >= 0 && $.inArray(8, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE 6
            $('#square7').html(signPlayer2);
            toBeChecked2.push(7);usedSquaresPlayer2.push(7);usedSquaresTotal.push(7);
          } else
          if ($.inArray(4, usedSquaresPlayer1) >= 0 && $.inArray(6, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE 7
            $('#square2').html(signPlayer2);
            toBeChecked2.push(2);usedSquaresPlayer2.push(2);usedSquaresTotal.push(2);
          } else
          if ($.inArray(2, usedSquaresPlayer1) >= 0 && $.inArray(8, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE 8
            $('#square4').html(signPlayer2);
            toBeChecked2.push(4);usedSquaresPlayer2.push(4);usedSquaresTotal.push(4);
          } else
          if ($.inArray(1, usedSquaresPlayer1) >= 0 && $.inArray(9, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE 9
            $('#square2').html(signPlayer2);
            toBeChecked2.push(2);usedSquaresPlayer2.push(2);usedSquaresTotal.push(2);
          } else
          if ($.inArray(3, usedSquaresPlayer1) >= 0 && $.inArray(7, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE 10
            $('#square8').html(signPlayer2);
            toBeChecked2.push(8);usedSquaresPlayer2.push(8);usedSquaresTotal.push(8);
          } else
          if ($.inArray(4, usedSquaresPlayer1) >= 0 && $.inArray(3, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE L - From Left - 01
            $('#square2').html(signPlayer2);
            toBeChecked2.push(2);usedSquaresPlayer2.push(2);usedSquaresTotal.push(2);
          } else
          if ($.inArray(4, usedSquaresPlayer1) >= 0 && $.inArray(9, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE L - From Left - 02
            $('#square8').html(signPlayer2);
            toBeChecked2.push(8);usedSquaresPlayer2.push(8);usedSquaresTotal.push(8);
          } else
          if ($.inArray(6, usedSquaresPlayer1) >= 0 && $.inArray(1, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE L - From Right - 01
            $('#square2').html(signPlayer2);
            toBeChecked2.push(2);usedSquaresPlayer2.push(2);usedSquaresTotal.push(2);
          } else
          if ($.inArray(6, usedSquaresPlayer1) >= 0 && $.inArray(7, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE L - From Right - 02
            $('#square8').html(signPlayer2);
            toBeChecked2.push(8);usedSquaresPlayer2.push(8);usedSquaresTotal.push(8);
          } else
          if ($.inArray(2, usedSquaresPlayer1) >= 0 && $.inArray(9, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE L - From Up - 01
            $('#square6').html(signPlayer2);
            toBeChecked2.push(6);usedSquaresPlayer2.push(6);usedSquaresTotal.push(6);
          } else
          if ($.inArray(2, usedSquaresPlayer1) >= 0 && $.inArray(7, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE L - From Up - 02
            $('#square4').html(signPlayer2);
            toBeChecked2.push(4);usedSquaresPlayer2.push(4);usedSquaresTotal.push(4);
          } else
          if ($.inArray(8, usedSquaresPlayer1) >= 0 && $.inArray(1, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE L - From Bottom - 01
            $('#square4').html(signPlayer2);
            toBeChecked2.push(4);usedSquaresPlayer2.push(4);usedSquaresTotal.push(4);
          } else
          if ($.inArray(8, usedSquaresPlayer1) >= 0 && $.inArray(3, usedSquaresPlayer1) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            //CASE L - From Bottom - 02
            $('#square6').html(signPlayer2);
            toBeChecked2.push(6);usedSquaresPlayer2.push(6);usedSquaresTotal.push(6);
          } else
          if ($.inArray(5, usedSquaresPlayer1) >= 0 && $.inArray(9, usedSquaresPlayer1) >= 0 && $.inArray(1, usedSquaresPlayer2) >= 0) {
            //Special Case
            $('#square3').html(signPlayer2);
            toBeChecked2.push(3);usedSquaresPlayer2.push(3);usedSquaresTotal.push(3);
          }
        }
      } else
      if (usedSquaresTotal.length >= 4 && usedSquaresTotal.length < 9) {
        let temporarly1,temporarly2,appliedHere = false;
        for (var b = 0; b < 8; b++) {//loop to check if CPU is about to win
          temporarly1 = [];
          for (var c = 0; c < 3; c++) {
            if ($.inArray(positions[b][c], usedSquaresPlayer2) >= 0) {
              temporarly1.push(positions[b][c]);
            }
          }
          temporarly2 = positions[b].filter(function (e) {return this.indexOf(e) < 0;}, usedSquaresPlayer2);
          if (temporarly1.length == 2 && $.inArray(temporarly2[0], freeSquares) >= 0) {
            $('#square' + temporarly2[0]).html(signPlayer2);
            toBeChecked2.push(temporarly2[0]);usedSquaresPlayer2.push(temporarly2[0]);usedSquaresTotal.push(temporarly2[0]);
            appliedHere = true;
            break;
          }
        }
        if (appliedHere == false) {
          for (var x = 0; x < 8; x++) {//loop to check if player1 is about to win --> avoid it
            temporarly1 = [];
            for (var z = 0; z < 3; z++) {
              if ($.inArray(positions[x][z], usedSquaresPlayer1) >= 0) {
                temporarly1.push(positions[x][z]);
              }
            }
            temporarly2 = positions[x].filter(function (e) {return this.indexOf(e) < 0;}, usedSquaresPlayer1);
            if (temporarly1.length == 2 && $.inArray(temporarly2[0], freeSquares) >= 0) {
              $('#square' + temporarly2[0]).html(signPlayer2);
              toBeChecked2.push(temporarly2[0]);usedSquaresPlayer2.push(temporarly2[0]);usedSquaresTotal.push(temporarly2[0]);
              appliedHere = true;
              break;
            }
          }
        }
        if (appliedHere === false) {//2 special cases
          if ($.inArray(3, usedSquaresPlayer1) >= 0 && $.inArray(4, usedSquaresPlayer1) >= 0 && $.inArray(8, usedSquaresPlayer1) >= 0 && $.inArray(2, usedSquaresPlayer2) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            $('#square9').html(signPlayer2);
            toBeChecked2.push(9);usedSquaresPlayer2.push(9);usedSquaresTotal.push(9);
            appliedHere = true;
          } else
          if ($.inArray(1, usedSquaresPlayer1) >= 0 && $.inArray(6, usedSquaresPlayer1) >= 0 && $.inArray(8, usedSquaresPlayer1) >= 0 && $.inArray(2, usedSquaresPlayer2) >= 0 && $.inArray(5, usedSquaresPlayer2) >= 0) {
            $('#square7').html(signPlayer2);
            toBeChecked2.push(7);usedSquaresPlayer2.push(7);usedSquaresTotal.push(7);
            appliedHere = true;
          }
        }
        if (appliedHere == false) {
          for (var x = 0; x < 8; x++) {//loop to check if CPU is about to win
            temporarly1 = [];
            for (var z = 0; z < 3; z++) {
              if ($.inArray(positions[x][z], usedSquaresPlayer2) >= 0) {
                temporarly1.push(positions[x][z]);
              }
            }
            temporarly2 = positions[x].filter(function (e) {return this.indexOf(e) < 0;}, usedSquaresPlayer2);
            if (temporarly1.length == 1 && $.inArray(temporarly2[0], freeSquares) >= 0 && $.inArray(temporarly2[1], freeSquares) >= 0) {
              $('#square' + temporarly2[0]).html(signPlayer2);
              toBeChecked2.push(temporarly2[0]);usedSquaresPlayer2.push(temporarly2[0]);usedSquaresTotal.push(temporarly2[0]);
              appliedHere = true;
              break;
            }
          }
        }
        if (appliedHere === false) {
          $('#square' + freeSquares[0]).html(signPlayer2);
          toBeChecked2.push(freeSquares[0]);usedSquaresPlayer2.push(freeSquares[0]);usedSquaresTotal.push(freeSquares[0]);
        }
      }
      randomBoolean = !randomBoolean;
      winnerChecker("Player 2", toBeChecked2, 2);
    }
  }
}
// Menambahkan event listener saat dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
  // Mengambil elemen tombol musik
  var btnSound = document.getElementById('btnSound');

  // Mendapatkan elemen audio
  var audioElement = document.getElementById('playMusic');

  // Menambahkan event listener saat tombol musik diklik
  btnSound.addEventListener('click', function () {
    // Memeriksa apakah audio sedang diputar
    if (audioElement.paused) {
      // Memutar audio
      audioElement.play();
    } else {
      // Menghentikan audio
      audioElement.pause();
    }
  });
});
var weHaveAWinner = false;
function winnerChecker(player, arrayChecked, indexPlayer) {// "player" can be "Player 1", "Player 2" or "CPU"
  // "indexPlayer" can be 1 or 2 ----- toBeChecked1 & toBeChecked2 ---> [?, ?, ?]
  var proof = [];
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < arrayChecked.length; k++) {
        if (positions[i][j] == arrayChecked[k]) {
          proof.push(positions[i][j]);
        }
      }
    }
    if (proof.length === 3) {
      weHaveAWinner = true;
      $('#optionsOverlay').show();
      triIndexWinner = proof;
    } else
    {
      proof = [];
    }
  }
  if (weHaveAWinner) {
    indexWinner = indexPlayer;
    $('.item').off('click');
    finalResult();
  } else
  {
    proof = [];
    if (indexPlayer == 1) {
      $('#player-1-Msg').fadeOut(200);
      $('#player-2-Msg').html('Giliranmu!').fadeIn(200);
    } else
    if (indexPlayer == 2) {
      $('#player-2-Msg').fadeOut(200);
      $('#player-1-Msg').html('Giliranmu!').fadeIn(200);
    }
    if (usedSquaresTotal.length == 9 && weHaveAWinner === false) {
      $('#optionsOverlay').show();
      $('.squares').css('text-shadow', '0 0 30px rgb(33, 100, 202), 0 0 14px rgb(94, 129, 216), 0 0 30px rgb(31, 45, 142), 0 0 40px #20377b, 0 0 70px #1d215d, 0 0 80px #151d56, 0 0 100px #142d65');
      $('#player-1-Msg, #player-2-Msg').fadeOut(500).promise().done(function () {
        $('#player-1-Msg, #player-2-Msg').html('Draw!').fadeIn(500).promise().done(function () {
          restartingGame();
        });
      });
    } else
    if (!player2Activated && weHaveAWinner == false) {
      gamePlay();
    }
  }
}
function finalResult() {
  if (indexWinner == 1) {
    victories1++;
    $('#victoriesPlayer1').html(victories1);
  } else
  if (indexWinner == 2) {
    victories2++;
    $('#victoriesPlayer2').html(victories2);
  }
  let firstIndex = '#square' + triIndexWinner[0],
  secondIndex = '#square' + triIndexWinner[1],
  thirdIndex = '#square' + triIndexWinner[2];
  $([firstIndex, secondIndex, thirdIndex]).each(function () {
    $(this).css('text-shadow', '0 0 30px rgb(202, 33, 33), 0 0 14px rgb(216, 94, 94), 0 0 30px rgb(142, 31, 31), 0 0 40px #7b2020, 0 0 70px #5d1d1d, 0 0 80px #561515, 0 0 100px #651414');
  });
  $('#player-1-Msg, #player-2-Msg').fadeOut(500).promise().done(function () {
    $(this).html('<br>').promise().done(function () {
      $('#player-' + indexWinner + '-Msg').html('Winner!').fadeIn(500);
      setTimeout(function () {
        restartingGame();
      }, 800);
    });
  });
}
function restartingGame() {
  setTimeout(function () {
    $('#player-1-Msg, #player-2-Msg').append('<br><br>Restarting<br>.');
    setTimeout(function () {
      $('#player-1-Msg, #player-2-Msg').append('.');
      setTimeout(function () {
        $('.squares').fadeOut(1000);
        $('#player-1-Msg, #player-2-Msg').append('.').promise().done(function () {
          $('#player-1-Msg, #player-2-Msg').fadeOut(1000);
          setTimeout(function () {
            randomPlay();
          }, 1200);
        });
      }, 800);
    }, 600);
  }, 200);
}
var playing = true,backgroundAudio = $('#playMusic');
$('#btnSound').click(function () {
  if (playing) {
    $(this).html('<span style="opacity: 0.25 !important"><i class="fa fa-volume-up" aria-hidden="true"></i></span>&nbsp;Music&nbsp;');
    backgroundAudio.animate({ volume: 0 }, 1500);
    playing = !playing;
  } else
  {
    $(this).html('<i class="fa fa-volume-up" aria-hidden="true"></i>&nbsp;Music&nbsp;');
    backgroundAudio.animate({ volume: 1 }, 1500);
    playing = !playing;
  }
});