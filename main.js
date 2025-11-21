const container = document.getElementById("container");
const card = document.getElementById("card");
const imageOne = document.querySelector(".image-1");
const btnYes = document.getElementById("btnYes");
const btnObvious = document.getElementById("btnObvious");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const special = document.getElementById("special");
const footerEmoji = document.getElementById("footerEmoji");

// Create floating hearts in the background
function createFloatingHearts() {
  const heartCount = 8;
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = ["💖", "💗", "💓", "💝", "💘", "💕", "💞", "💟"][i % 8];
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(heart);
  }
}

// Initial animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Start with a gentle pulse animation for the card
  card.style.animation = "pulse 4s ease-in-out infinite";
  
  // Add floating hearts
  createFloatingHearts();
  
  // Animate the title on load
  const title = document.querySelector('.title');
  title.style.animation = 'fadeIn 2s ease-out';
  
  // Animate the card with a slight delay
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 300);
});

function spawnHeart(x, y) {
  const hearts = ["💖", "💗", "💓", "💝", "💘", "💕", "💞", "💟"];
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  heart.style.fontSize = `${Math.random() * 10 + 20}px`; // Random size between 20-30px
  heart.style.animationDuration = `${Math.random() * 500 + 1000}ms`; // Random duration
  document.body.appendChild(heart);
  
  // Add a slight rotation for more natural movement
  const rotation = (Math.random() - 0.5) * 30; // -15 to 15 degrees
  heart.style.transform = `rotate(${rotation}deg)`;
  
  // Remove the heart after animation completes
  setTimeout(() => heart.remove(), 1400);
}

function addSparkles() {
  const rect = card.getBoundingClientRect();
  const count = 15; // Increased number of sparkles
  const colors = ['#ffb7c5', '#ffd1dc', '#ffe9ef', '#ffffff', '#ff8fa3'];
  
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    
    // Random position within the card
    const size = Math.random() * 6 + 4; // 4-10px
    const x = Math.random() * (rect.width - size * 2) + size;
    const y = Math.random() * (rect.height - size * 2) + size;
    
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.animationDelay = `${Math.random() * 800}ms`;
    sparkle.style.animationDuration = `${Math.random() * 1000 + 1000}ms`;
    
    // Random color from our palette
    sparkle.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]} 0%, rgba(255,255,255,0) 70%)`;
    
    card.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
      if (sparkle.parentNode === card) {
        card.removeChild(sparkle);
      }
    }, 3000);
  }
  
  // Add a gentle pulse effect to the card when sparkles appear
  card.style.transform = 'scale(1.02)';
  setTimeout(() => {
    card.style.transform = 'scale(1)';
  }, 200);
}

function revealMessages(isObvious) {
  // Animate the card with a little bounce
  card.style.animation = 'none';
  card.offsetHeight; // Trigger reflow
  card.style.animation = 'bounce 0.5s ease';
  
  // Reveal messages with staggered animation
  const messages = [line1, line2, line3];
  messages.forEach((msg, index) => {
    setTimeout(() => {
      msg.classList.add("show");
      // Add a subtle scale effect when each message appears
      msg.style.transform = 'scale(1.05)';
      setTimeout(() => {
        msg.style.transform = 'scale(1)';
      }, 200);
    }, 500 * index);
  });
  
  // Show footer emoji with a delay
  setTimeout(() => {
    footerEmoji.classList.add("show");
    // Add a continuous subtle animation to the footer emoji
    footerEmoji.style.animation = 'pulse 2s ease-in-out infinite';
  }, 2000);
  
  // Special message for the "OBVIOUSLY YES" button
  if (isObvious) {
    setTimeout(() => {
      special.classList.add("show");
      // Add more hearts when the special message appears
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          spawnHeart(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
          );
        }, i * 100);
      }
    }, 1000);
  }
  
  // Add a subtle background color change
  document.body.style.animation = 'romanticPulse 3s ease-in-out';
}

function handleClick(isObvious, evt) {
  const x = evt.clientX;
  const y = evt.clientY;
  
  // Create multiple hearts at the click position
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      spawnHeart(
        x + (Math.random() - 0.5) * 100,
        y + (Math.random() - 0.5) * 100
      );
    }, i * 100);
  }
  
  // Add extra sparkles
  addSparkles();
  
  // Add a ripple effect
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 1000);
  
  // Reveal messages with animation
  revealMessages(isObvious);
  
  // Hide buttons with a nice fade out
  const buttons = document.querySelector('.buttons');
  buttons.style.transition = 'all 0.5s ease-out';
  buttons.style.opacity = '0';
  buttons.style.transform = 'translateY(20px)';
  buttons.style.pointerEvents = 'none';
  
  // Change the image to show excitement
  setTimeout(() => {
    imageOne.src = 'assets/oh-yay.gif';
    imageOne.style.transform = 'scale(1.15) rotate(5deg)';
    setTimeout(() => {
      imageOne.style.transform = 'scale(1) rotate(0)';
    }, 300);
  }, 200);
  
  // Add a gentle shake to the card
  card.style.animation = 'shake 0.5s ease-in-out';
  
  // Prevent multiple clicks
  btnYes.style.pointerEvents = 'none';
  btnObvious.style.pointerEvents = 'none';
}

btnYes.addEventListener("click", (e) => handleClick(false, e));
btnObvious.addEventListener("click", (e) => handleClick(true, e));
