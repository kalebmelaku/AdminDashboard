const icon = document.getElementById('icon_switch');
document.addEventListener("DOMContentLoaded", () => {
    let status = sessionStorage.getItem("colorMode");
    // document.body.classList.remove('')
    console.log('working');
    if (status == 'dark') {   
        document.body.classList.remove('light')
        icon.src = '../img/icons/sun.png';
    } else {
        document.body.classList.add(status)
    }
})

// let icon_stat = true;
// let icon_src;
icon.addEventListener('click', () => {
    // icon_stat = !icon_stat;
    // icon_stat ? icon_src = '../img/icons/moon.png' : icon_src = '../img/icons/sun.png';
    // icon.src = icon_src;
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        icon.src = '../img/icons/sun.png';
        sessionStorage.setItem("colorMode", "dark");
    } else {
        sessionStorage.setItem("colorMode", "light")
        icon.src = '../img/icons/moon.png';
        document.body.classList.add('light');
    }
});

