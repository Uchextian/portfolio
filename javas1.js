 //PORTFOLIO
          //Filter buttons
$(document).ready(function(){
  // Filter images on button click
  $('.btn-group button').on('click', function(){
    var filter = $(this).data('filter');
    $('.btn-group button').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.row > div').show();
    } else {
      $('.row > div').hide();
      $('.row > div[data-category="' + filter + '"]').show();
    }
  });
});
//PORTFOILO ENDS HERE


//BACK TO TOP
const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      backToTop.style.display = 'flex';
      backToTop.classList.add('fade-in');
    } else {
      backToTop.style.display = 'none';
    }
  });

  // Optional: Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  //BACK TO TOP ENDS


