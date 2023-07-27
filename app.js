// Variables
let score = [0,0], sign = ['rock','paper','scissors'], gameStat = "", randomOption, scissorImg, rockImg, paperImg;

// Html
const resetButton = document.getElementById('reset');
const elementScore = document.querySelector('.numbers');
const winnerElement = document.querySelector('.winner');
const statusElement = document.querySelector('.status');
const options = document.querySelectorAll('.option');

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    getWinner();
    resetButton.disabled = true;
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userOption = option.dataset.option;
        const botOption = getOption();
        const winner = getWinner(userOption, botOption);
        winnerElement.innerHTML = winner;
        elementScore.innerHTML = score[0] + " : " + score[1];
        statusElement.innerHTML = gameStat;
        resetButton.disabled = false;
    });
});

resetButton.addEventListener('click', () => {location.reload();});


// Funciones
function getOption(){
    randomOption = Math.floor(Math.random() * 3);
    return sign[randomOption];
}



function getWinner(userOption, botOption) {
    const bot = document.querySelector('.ia-option');
    rockImg = `<img src="./images/${sign[0]}.png">`;
    paperImg = `<img src="./images/${sign[1]}.png">`;
    scissorImg = `<img src="./images/${sign[2]}.png">`;

    if(userOption === botOption){
        gameStat = "EMPATE";
        if(botOption === 'paper'){
            bot.innerHTML = paperImg;
            botOption = 'papel';
        }

        if(botOption === 'rock'){
            bot.innerHTML = rockImg;
            botOption = 'piedra';
        }

        if(botOption === 'scissors'){
            bot.innerHTML = scissorImg;
            botOption = 'tijeras';
        }

        return "Bot tambien hizo " + botOption;

    }else if(userOption === 'rock'){

        if(botOption === 'paper'){   
            bot.innerHTML = paperImg;      
            score[1]++;
            gameStat = "PERDISTE";
            return "Bot hizo papel";
        } else {         
            bot.innerHTML = scissorImg;
            score[0]++;
            gameStat = "GANASTE";
            return "Bot hizo tijeras";
        }

    }else if (userOption === 'paper'){

        if(botOption === 'scissors'){   
            bot.innerHTML = scissorImg;
            score[1]++;
            gameStat = "PERDISTE";
            return "Bot hizo tijeras";
        }else {
            bot.innerHTML = rockImg;
            score[0]++;
            gameStat = "GANASTE";
            return "Bot hizo piedra";
        }

    }else if (userOption === 'scissors'){
        
        if(botOption === 'rock'){    
            bot.innerHTML = rockImg;
            score[1]++;
            gameStat = "PERDISTE";
            return "Bot hizo piedra";
        }else {      
            bot.innerHTML = paperImg;
            score[0]++;
            gameStat = "GANASTE";
            return "Bot hizo papel";
        }
    }
}


