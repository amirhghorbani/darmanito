const iconRes = document.getElementById('drop-icon');
const dropdownNavBar = document.querySelector('#dropdown-nav-bar');
const input = document.getElementById('num-checker');
const button = document.getElementById('btn-checker');
const inDiv = document.getElementById('input-parent');



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

button.addEventListener('click', (event) => {
    event.preventDefault();
    const phoneno = /^\d{11}$/;
    const inputValue = input.value;
 if (inputValue === '' || !inputValue.match(phoneno)) {  
        input.parentElement.style.border = '3px solid red';
        const div = document.createElement('div');
        div.setAttribute('role', 'alert');
        div.classList.add('alert', 'alert-danger', 'pStyle', 'w-75');
        div.textContent = 'شماره نامعتبر است !!!!';
        input.parentElement.parentElement.insertBefore(div, input.parentElement.parentElement.childNodes[4]);
    }else {
        input.parentElement.style.border = '3px solid green';
        const div = document.createElement('div');
        div.setAttribute('role', 'alert');
        div.classList.add('alert', 'alert-success', 'pStyle', 'w-75');
        div.style.color = 'green';
        div.textContent = 'شماره معتبر است !!!!';
        input.parentElement.parentElement.insertBefore(div, input.parentElement.parentElement.childNodes[4]);
    }
    setTimeout(function() {
        $('div.pStyle').remove();
        $('#input-parent').css('border', 'none');
    }, 2000)
});



    