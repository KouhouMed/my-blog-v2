---
title: "Rock Paper Scissors"
date: 2023-10-28
description: "Play the classic game against the computer."
thumbnail: "/images/rps-game.png"
tags: ["Game", "JavaScript"]
---

Challenge the computer to a game of Rock, Paper, Scissors!

<div class="p-4 bg-surface border border-border rounded-lg mt-4 text-center">
  <div class="flex justify-center gap-4 mb-6">
    <button onclick="playGame('rock')" class="p-4 bg-bg border border-border rounded-full hover:bg-primary/10 transition-colors text-4xl" title="Rock">✊🏽</button>
    <button onclick="playGame('paper')" class="p-4 bg-bg border border-border rounded-full hover:bg-primary/10 transition-colors text-4xl" title="Paper">✋🏽</button>
    <button onclick="playGame('scissors')" class="p-4 bg-bg border border-border rounded-full hover:bg-primary/10 transition-colors text-4xl" title="Scissors">✌🏽️</button>
  </div>
  
  <div id="result-area" class="hidden">
    <p class="text-lg mb-2">You chose: <span id="user-choice" class="font-bold"></span></p>
    <p class="text-lg mb-4">Computer chose: <span id="computer-choice" class="font-bold"></span></p>
    <p id="game-result" class="text-2xl font-bold"></p>
  </div>
  
  <div class="mt-6 flex justify-center gap-8 text-sm text-text-muted">
    <div>Wins: <span id="wins">0</span></div>
    <div>Losses: <span id="losses">0</span></div>
    <div>Ties: <span id="ties">0</span></div>
  </div>
  
  <div class="mt-6">
    <button onclick="resetGame()" class="px-4 py-2 bg-secondary text-white rounded hover:bg-opacity-90 transition-colors">Reset Game</button>
  </div>
</div>

<script>
  let wins = 0;
  let losses = 0;
  let ties = 0;
  
  function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '✊🏽', paper: '✋🏽', scissors: '️✌🏽' };
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    const resultArea = document.getElementById('result-area');
    const userChoiceEl = document.getElementById('user-choice');
    const computerChoiceEl = document.getElementById('computer-choice');
    const gameResultEl = document.getElementById('game-result');
    
    userChoiceEl.textContent = emojis[userChoice];
    computerChoiceEl.textContent = emojis[computerChoice];
    
    let result = '';
    let resultClass = '';
    
    if (userChoice === computerChoice) {
      result = "It's a Tie!";
      resultClass = "text-yellow-500";
      ties++;
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You Win!";
      resultClass = "text-green-500";
      wins++;
    } else {
      result = "You Lose!";
      resultClass = "text-red-500";
      losses++;
    }
    
    gameResultEl.textContent = result;
    gameResultEl.className = "text-2xl font-bold " + resultClass;
    
    updateScoreDisplay();
    
    resultArea.classList.remove('hidden');
  }

  function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScoreDisplay();
    document.getElementById('result-area').classList.add('hidden');
  }

  function updateScoreDisplay() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
  }
</script>
