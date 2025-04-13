// This file is prepare for a future implementation of a theme toggle button.
// It will allow users to switch between light and dark themes.

document.addEventListener("DOMContentLoaded", function () {
  // For testing purposes, you can uncomment the following line to set dark theme as default
  // document.getElementById('app-body').classList.add('dark-theme');

  // This function will be used in future stages to toggle between light and dark themes
  function toggleTheme() {
    const body = document.getElementById("app-body");
    body.classList.toggle("dark-theme");
  }

  // This event listener will be connected to a theme toggle button in future stages
  // document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});
