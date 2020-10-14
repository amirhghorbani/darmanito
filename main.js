const iconRes = document.getElementById('drop-icon');
const dropdownNavBar = document.querySelector('#dropdown-nav-bar');
const dropdownSrc = 'file:///Users/amirhghorbani/Documents/nahiraTech/darmanito-project-1/darmanito-pj-1/img/drop-down-icon.png';

iconRes.addEventListener('click', iconChange);

function iconChange(event) {
    event.preventDefault();
    if (iconRes.src === dropdownSrc) {
        iconRes.src = './img/X-icon.png';
        dropdownNavBar.style.display = 'block';
    
    }else {
        iconRes.src = './img/drop-down-icon.png';
        dropdownNavBar.style.display = 'none';
    }
     
}

    