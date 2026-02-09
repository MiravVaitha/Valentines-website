// ===== INDEX PAGE LOGIC =====

// Navigate to yes.html when Yes button is clicked
function goToYes() {
    window.location.href = 'yes.html';
}

// Make the No button run away from the cursor
document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');
    
    if (noButton) {
        // Move button away when user tries to hover over it
        noButton.addEventListener('mouseenter', function() {
            moveButtonAway();
        });
        
        // Also move button away on touch devices (for mobile)
        noButton.addEventListener('touchstart', function(e) {
            e.preventDefault();
            moveButtonAway();
        });
    }
});

// Function to move the No button to a random position
function moveButtonAway() {
    const noButton = document.getElementById('noButton');
    
    // Random position within viewport
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Use fixed positioning so it moves on the screen
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// ===== YES PAGE LOGIC =====

// Create falling confetti
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random colors for confetti
            const colors = ['#ff69b4', '#ff1493', '#ffb6d9', '#ffc0cb', '#ff6ec7'];
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            document.body.appendChild(confetti);
            
            // Remove confetti element after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Create floating balloons
function createBalloons() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            
            // Random balloon colors
            const balloonTypes = ['balloon-red', 'balloon-pink', 'balloon-white'];
            balloon.classList.add(balloonTypes[Math.floor(Math.random() * balloonTypes.length)]);
            
            balloon.style.left = Math.random() * 100 + '%';
            balloon.style.animationDuration = (Math.random() * 3 + 4) + 's';
            balloon.style.animationDelay = Math.random() * 1 + 's';
            
            document.body.appendChild(balloon);
            
            // Remove balloon element after animation
            setTimeout(() => {
                balloon.remove();
            }, 8000);
        }, i * 100);
    }
}

// Initialize yes page animations
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the yes page
    if (document.body.classList.contains('yes-page')) {
        // Start confetti animation
        createConfetti();
        
        // Create more confetti every 2 seconds for continuous effect
        setInterval(createConfetti, 3000);
        
        // Start balloon animation
        createBalloons();
        
        // Create more balloons every 3 seconds for continuous effect
        setInterval(createBalloons, 4000);
    }
});
