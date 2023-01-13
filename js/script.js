var argButtonName, buttonTest;

buttonKamień = document.getElementById('button-rock');
buttonNożyce = document.getElementById('button-scissors');
buttonPapier = document.getElementById('button-paper');


function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
  }
  
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else {
    }
    if (argMoveId == 2) {
      return 'papier';
    } else {
    }
    if (argMoveId == 3) {
      return 'nożyce';
    } else {
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else {
    }
    if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else {
    }
    if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else {
    }
    if (argPlayerMove == && argComputerMove == ) {
      printMessage('Remis');
    } else {
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  
playerMove = argButtonName;
console.log('wybór ruchu gracza to: ' + playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPapper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
    
