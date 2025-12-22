---
title: "Snake"
date: 2023-12-22
description: "The classic Snake game. Eat food, grow longer, and avoid hitting the walls!"
thumbnail: "/images/snake-game.png"
tags: ["Game", "JavaScript"]
---

Play the classic Snake game! Use the arrow keys to control the snake.

<div class="p-4 bg-surface border border-border rounded-lg mt-4 flex flex-col items-center">
  <div class="mb-4 flex justify-between w-full max-w-[400px] px-2">
    <div class="text-xl font-bold">Score: <span id="score">0</span></div>
    <div class="text-xl font-bold text-text-muted">High Score: <span id="high-score">0</span></div>
  </div>
  
  <canvas id="gameCanvas" width="400" height="400" class="bg-black border border-border rounded-lg shadow-lg max-w-full"></canvas>
  
  <div class="mt-6">
    <button onclick="resetGame()" class="px-6 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition-colors font-bold shadow-md">Start / Reset</button>
  </div>

  <div class="mt-4 text-text-muted text-sm hidden md:block">
    Use <strong>Arrow Keys</strong> to move.
  </div>
  
  <!-- Mobile Controls -->
  <div class="mt-6 grid grid-cols-3 gap-2 md:hidden">
    <div></div>
    <button onclick="handleMobileInput('ArrowUp')" class="w-12 h-12 bg-bg border border-border rounded-full hover:bg-primary/10 flex items-center justify-center text-xl active:bg-primary/20">⬆️</button>
    <div></div>
    <button onclick="handleMobileInput('ArrowLeft')" class="w-12 h-12 bg-bg border border-border rounded-full hover:bg-primary/10 flex items-center justify-center text-xl active:bg-primary/20">⬅️</button>
    <button onclick="handleMobileInput('ArrowDown')" class="w-12 h-12 bg-bg border border-border rounded-full hover:bg-primary/10 flex items-center justify-center text-xl active:bg-primary/20">⬇️</button>
    <button onclick="handleMobileInput('ArrowRight')" class="w-12 h-12 bg-bg border border-border rounded-full hover:bg-primary/10 flex items-center justify-center text-xl active:bg-primary/20">➡️</button>
  </div>
</div>

<script>
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const scoreElement = document.getElementById('score');
  const highScoreElement = document.getElementById('high-score');

  const gridSize = 20;
  const tileCount = canvas.width / gridSize;

  let score = 0;
  let highScore = localStorage.getItem('snakeHighScore') || 0;
  highScoreElement.textContent = highScore;

  let snake = [];
  let food = { x: 15, y: 15 };
  let dx = 0;
  let dy = 0;
  let gameInterval;
  let isGameRunning = false;

  // Initialize snake
  function initSnake() {
    snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ];
    dx = 1;
    dy = 0;
  }

  function drawGame() {
    if (!isGameRunning) return;

    moveSnake();
    
    if (checkCollision()) {
      gameOver();
      return;
    }

    clearCanvas();
    drawFood();
    drawSnake();
    
    // Check if ate food
    const head = snake[0];
    if (head.x === food.x && head.y === food.y) {
      score += 10;
      scoreElement.textContent = score;
      generateFood();
      // Grow snake (don't pop tail)
    } else {
      snake.pop(); // Remove tail
    }
  }

  function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
  }

  function checkCollision() {
    const head = snake[0];
    
    // Wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      return true;
    }
    
    // Self collision
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        return true;
      }
    }
    
    return false;
  }

  function clearCanvas() {
    ctx.fillStyle = '#0f172a'; // Match dark theme bg roughly or just black
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function drawSnake() {
    ctx.fillStyle = '#22c55e'; // Green-500
    for (let i = 0; i < snake.length; i++) {
      // Head is slightly different color
      if (i === 0) ctx.fillStyle = '#4ade80'; // Green-400
      else ctx.fillStyle = '#22c55e';
      
      ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize - 2, gridSize - 2);
    }
  }

  function drawFood() {
    ctx.fillStyle = '#ef4444'; // Red-500
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
  }

  function generateFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);
    
    // Check if food spawned on snake
    for (let part of snake) {
      if (part.x === food.x && part.y === food.y) {
        generateFood();
        break;
      }
    }
  }

  function gameOver() {
    isGameRunning = false;
    clearInterval(gameInterval);
    
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('snakeHighScore', highScore);
      highScoreElement.textContent = highScore;
    }
    
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
    ctx.font = '20px Arial';
    ctx.fillText("Press Start/Reset to play again", canvas.width / 2, canvas.height / 2 + 40);
  }

  function resetGame() {
    clearInterval(gameInterval);
    initSnake();
    score = 0;
    scoreElement.textContent = score;
    generateFood();
    isGameRunning = true;
    gameInterval = setInterval(drawGame, 100);
    
    // Focus canvas or window to capture keys immediately
    window.focus();
  }

  function handleInput(e) {
    // Prevent default scrolling for arrow keys
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }

    if (!isGameRunning) return;

    const goingUp = dy === -1;
    const goingDown = dy === 1;
    const goingRight = dx === 1;
    const goingLeft = dx === -1;

    if (e.key === 'ArrowLeft' && !goingRight) {
      dx = -1; dy = 0;
    }
    if (e.key === 'ArrowUp' && !goingDown) {
      dx = 0; dy = -1;
    }
    if (e.key === 'ArrowRight' && !goingLeft) {
      dx = 1; dy = 0;
    }
    if (e.key === 'ArrowDown' && !goingUp) {
      dx = 0; dy = 1;
    }
  }
  
  function handleMobileInput(key) {
      handleInput({ key: key, code: key, preventDefault: () => {} });
  }

  document.addEventListener('keydown', handleInput);
  
  // Initial render
  clearCanvas();
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText("Press Start to Play", canvas.width / 2, canvas.height / 2);

</script>
