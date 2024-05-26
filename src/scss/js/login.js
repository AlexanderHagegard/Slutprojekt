// Login full screen
const loginFunction = () => {
    const header = document.querySelector('.site-header')
    const loginButton = document.querySelector('.login')
    const loginMenu = document.querySelector('.login__menu')

    const toggleLogin = () => {
        header.classList.toggle('login-menu--open')
        loginMenu.classList.toggle('login-menu--visible')
    }

    loginButton.addEventListener('click', toggleLogin)
}

loginFunction()