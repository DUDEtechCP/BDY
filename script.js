function nextScreen(currentScreenNumber) {
    document.getElementById('screen' + currentScreenNumber).classList.remove('active');
    let nextScreenNumber = currentScreenNumber + 1;
    document.getElementById('screen' + nextScreenNumber).classList.add('active');
}

function lightCandle() {
    document.getElementById('flame').classList.add('lit');
    document.getElementById('lightBtn').classList.add('hidden');
    document.getElementById('cutBtn').classList.remove('hidden');
}

function cutCake() {
    document.getElementById('cutBtn').classList.add('hidden');
    
    const leftHalf = document.querySelector('.cake-half.left');
    const rightHalf = document.querySelector('.cake-half.right');
    leftHalf.style.transform = 'translateX(-30px)';
    rightHalf.style.transform = 'translateX(30px)';
    
    document.getElementById('flame').classList.remove('lit');
    
    createBalloons();
    document.getElementById('bdayPopup').classList.remove('hidden');
    
    setTimeout(function() {
        nextScreen(3);
    }, 4000);
}

function createBalloons() {
    const container = document.getElementById('balloon-container');
    const colors = ['#ff4757', '#1e90ff', '#2ed573', '#ffa502', '#ff6b81'];
    
    for (let i = 0; i < 30; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(balloon);
        
        setTimeout(() => {
            balloon.remove();
        }, 6000);
    }
}

function showFinalPopup() {
    document.getElementById('finalPopup').classList.remove('hidden');
}