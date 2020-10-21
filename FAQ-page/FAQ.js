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

$(document).ready(function () {
    $(plusSign).click(function (e) { 
        e.preventDefault();
        $('p.plus0').toggleClass('d-block');
    });
});
$(document).ready(function () {
    $('#plus1').click(function (e) { 
        e.preventDefault();
        $('p.plus1').toggleClass('d-block');
    });
});
$(document).ready(function () {
    $('#plus2').click(function (e) { 
        e.preventDefault();
        $('p.plus2').toggleClass('d-block');
    });
});
$(document).ready(function () {
    $('#plus3').click(function (e) { 
        e.preventDefault();
        $('p.plus3').toggleClass('d-block');
    });
});





    