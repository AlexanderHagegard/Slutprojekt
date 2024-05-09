const deviceMenu = () => {

    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.device-menu')

    const toggleMenu = () => {

        menuButton.classList.toggle('open-menu')
        menu.classList.toggle('open')
    }

    menuButton.addEventListener('click', toggleMenu)
}

deviceMenu ()