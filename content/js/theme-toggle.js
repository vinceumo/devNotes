(function () {
  var themeKey = "appCurrentTheme";
  var body = document.querySelector('body');
  
  setTheme(themeKey, body);
  
  document.addEventListener("DOMContentLoaded", function (event) {
      var themeToggleCtas = document.querySelectorAll(".toggle-theme");
      
      Array.prototype.forEach.call(themeToggleCtas, function(el, i) {
          var currentCta = themeToggleCtas[i];
          
          currentCta.addEventListener("click", function() {
              toggleTheme(currentCta, themeKey, body);
          });
      });
  });
  
  function setTheme(key, container) {
      var currentTheme = localStorage.getItem(key);
      if (currentTheme === null) {
          localStorage.setItem(key, "theme-default");
          container.setAttribute("data-theme", "theme-default");
      } else {
          currentTheme = localStorage.getItem(key);
          container.setAttribute("data-theme", currentTheme);
      }
  }
  
  function toggleTheme(cta, key, container) {
      var themeClass = cta.getAttribute('data-toggle-theme');
      localStorage.setItem(key, themeClass);
      container.setAttribute("data-theme", themeClass);
  }
})();