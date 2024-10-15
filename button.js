document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('unclickbtn');
    
    button.addEventListener('click', function() {
      // Generate random x and y coordinates within the viewport
      var newX = Math.random() * (window.innerWidth - button.offsetWidth);
      var newY = Math.random() * (window.innerHeight - button.offsetHeight);
      
      // Set the new coordinates
      button.style.left = newX + 'px';
      button.style.top = newY + 'px';
    });
  });
  