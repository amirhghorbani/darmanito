const iconRes = document.getElementById('drop-icon');
const dropdownNavBar = document.querySelector('#dropdown-nav-bar');
console.log(dropdownNavBar);
console.log(iconRes.src)

iconRes.addEventListener('click', iconChange);

function iconChange(event) {
    event.preventDefault();
    if (iconRes.src === 'https://amirhghorbani.github.io/darmanito-pj-1/img/drop-down-icon.png') {
        iconRes.src = 'https://amirhghorbani.github.io/darmanito-pj-1/img/X-icon.png';
        dropdownNavBar.style.display = 'block';
        console.log(iconRes.src)
    }else {
        iconRes.src = 'https://amirhghorbani.github.io/darmanito-pj-1/img/drop-down-icon.png';
        dropdownNavBar.style.display = 'none';
    }
     
}

    