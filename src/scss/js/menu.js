const deviceMenu = () => {
    const header = document.querySelector('.site-header')
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.device-menu')
    const loginResponsiveButton = document.querySelector('.resp-login__lockicon')
    const loginResponsiveMenu = document.querySelector('.login-responsive')

    const toggleLogin = () => {

        if(menu.classList.contains('open')) {
            menu.classList.remove('open')
            menuButton.classList.remove('open-menu')
        } else {
            header.classList.toggle('menu-open')
        }

        loginResponsiveButton.classList.toggle('open-menu')
        loginResponsiveMenu.classList.toggle('open')
    }

    const toggleMenu = () => {

        if( loginResponsiveMenu.classList.contains('open')) {
            loginResponsiveMenu.classList.remove('open')
            loginResponsiveButton.classList.remove('open-menu')
        } else {
            header.classList.toggle('menu-open')
        }

        menuButton.classList.toggle('open-menu')
        menu.classList.toggle('open')
    }
    
    loginResponsiveButton.addEventListener('click', toggleLogin)
    menuButton.addEventListener('click', toggleMenu)
}

deviceMenu ()