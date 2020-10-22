const iconRes = document.getElementById('drop-icon');
const dropdownNavBar = document.querySelector('#dropdown-nav-bar');
const plusSign = document.getElementById('plus');

iconRes.addEventListener('click', iconChange);

function iconChange(event) {
    event.preventDefault();
    if (iconRes.src === 'https://amirhghorbani.github.io/darmanito-pj-1/img/drop-down-icon.png') {
        iconRes.src = 'https://amirhghorbani.github.io/darmanito-pj-1/img/X-icon.png';
        dropdownNavBar.style.display = 'block';
        
    }else {
        iconRes.src = 'https://amirhghorbani.github.io/darmanito-pj-1/img/drop-down-icon.png';
        dropdownNavBar.style.display = 'none';
    }
     
}

(function() {
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();





    