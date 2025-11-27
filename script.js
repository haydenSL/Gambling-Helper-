let money = 100

document.getElementById('Money').textContent = `Your Money £${money}`

function CheckMoney() {
    let gmoney = document.getElementById('MoneyInput').value
    if (money < gmoney) {
        document.getElementById('ERROR').textContent = "You don't have that much money to spend!"
    }
    else if (gmoney < 1) {
        document.getElementById('ERROR').textContent = "That is not enough money to spend!"
    }
    else {
        money = money - gmoney
        document.getElementById('Money').textContent = `Your Money £${money}`
        document.getElementById('ERROR').textContent = ""
        document.getElementById('SpinningID').play()
        var i = 0
        NotGambling(i)
        document.getElementById('LossMessage').style.display = 'block'
    }
}

const symbols = ['♠️', '♦️', '♥️', '♣️', '🍀', '🥜', '🐔', '👬', '😈', '👑', '🔥']


function rng() {
    return Math.floor(Math.random() * symbols.length);
}

function NotGambling(i) {
    setTimeout(function () {
        let slot1 = symbols[rng()]
        let slot2 = symbols[rng()]
        let slot3 = symbols[rng()]

        while (slot2 == slot3) {
            slot3 = symbols[rng()]
        }

        document.getElementById('Slot1').innerHTML = `${slot1}`
        document.getElementById('Slot2').innerHTML = `${slot2}`
        document.getElementById('Slot3').innerHTML = `${slot3}`

        i++;

        if (i < 350) {
            NotGambling(i);
        }
    }, 10)
}

function OnLoad() {
    let files=["SubwayVideo.mp4", "SoapVideo.mp4"]
    var randIdx = Math.random() * files.length;
    randIdx = parseInt(randIdx, 10);
    var file = 'Videos/' + files[randIdx];
    console.log(file);
    document.getElementById("RandomVideo").src = `${file}`;
}

OnLoad()