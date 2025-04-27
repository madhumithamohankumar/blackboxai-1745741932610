// script.js - handles login and navigation

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // For demo, no real authentication
    // Navigate to dashboard page
    window.location.href = 'dashboard.html';
  });
});
