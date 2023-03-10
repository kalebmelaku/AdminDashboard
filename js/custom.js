const icon = document.getElementById('icon_switch');
let icon_stat = true;
let icon_src;
icon.addEventListener('click', () => {
    icon_stat = !icon_stat;
    icon_stat ? icon_src = '../img/icons/moon.png' : icon_src = '../img/icons/sun.png';
    icon.src = icon_src;
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
    } else {
        document.body.classList.add('light');
    }
})