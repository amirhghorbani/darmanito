const iconRes = document.getElementById('drop-icon');
const dropdownNavBar = document.querySelector('#dropdown-nav-bar');
const input = document.getElementById('num-checker');
const button = document.getElementById('btn-checker');

console.log(iconRes.src)

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

button.addEventListener('click', (e) => {
    e.preventDefault();
    const phoneno = /^\d{11}$/;
    const inputValue = input.value;
    if (inputValue === '' || !inputValue.match(phoneno)) {
        input.parentElement.style.border = '2px solid red';
    }else {
        input.parentElement.style.border = '2px solid green';
    }
} )

// function phonenumber(inputtxt, e) {
// e.preventDefault();
//   var phoneno = /^\d{11}$/;
//   if((inputValue.match(phoneno)) {
//       return true;
//         }else
//         {
//         alert("message");
//         return false;
//         }
// }



    