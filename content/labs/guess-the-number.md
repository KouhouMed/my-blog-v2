---
title: "Guess the Number"
date: 2023-10-27
description: "A simple number guessing game to test the Labs section."
thumbnail: "/images/guess-number.png"
tags: ["Game", "JavaScript"]
---

This is a placeholder for a simple number guessing game.

<div class="p-4 bg-surface border border-border rounded-lg mt-4">
  <p class="mb-4">I'm thinking of a number between 1 and 100.</p>
  <div class="flex gap-2">
    <input type="number" id="guessInput" class="px-3 py-2 bg-bg border border-border rounded" placeholder="Enter your guess">
    <button onclick="checkGuess()" class="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">Guess</button>
    <button onclick="resetGame()" class="px-4 py-2 bg-secondary text-white rounded hover:bg-opacity-90 ml-2">Reset</button>
  </div>
  <p id="message" class="mt-4 font-bold"></p>
</div>

<script>
  let targetNumber = Math.floor(Math.random() * 100) + 1;
  
  function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    const messageEl = document.getElementById('message');
    
    if (isNaN(guess)) {
      messageEl.textContent = "Please enter a valid number.";
      messageEl.className = "mt-4 font-bold text-red-500";
      return;
    }
    
    if (guess === targetNumber) {
      messageEl.textContent = "Congratulations! You guessed it!";
      messageEl.className = "mt-4 font-bold text-green-500";
    } else if (guess < targetNumber) {
      messageEl.textContent = "Too low! Try again.";
      messageEl.className = "mt-4 font-bold text-yellow-500";
    } else {
      messageEl.textContent = "Too high! Try again.";
      messageEl.className = "mt-4 font-bold text-yellow-500";
    }
  }

  function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guessInput').value = '';
    const messageEl = document.getElementById('message');
    messageEl.textContent = "Game reset! I'm thinking of a new number.";
    messageEl.className = "mt-4 font-bold text-text-muted";
  }
</script>
