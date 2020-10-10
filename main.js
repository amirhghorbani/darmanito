const icon = document.getElementById('drop-down');

icon.addEventListener('click', iconChange);

function iconChange() {
    if (icon.src = './img/drop-down-icon.png') {
        icon.src = './img/X-icon.png';
    } else {
        icon.src = './img/drop-down-icon.png'
    }
}
    