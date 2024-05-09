const header = document.querySelector('.site-header');
const responsiveHeader = document.querySelector('.site-header__navigation-responsive');
const menuButton = document.querySelector('.menu-button');
const respLogotype = document.querySelector('.resp-logotype');
const respLockIcon = document.querySelector('.resp-login__lockicon');

const openMenuWhiteBackground = () => {
    
    let isWhite = false;
    
    menuButton.addEventListener('click', () => {
        if (isWhite) {
            // Om bakgrundsfärgen är vit, ändra till transparent
            header.style.backgroundColor = 'transparent';
            isWhite = false;
        } else {
            // Annars, ändra till vit
            header.style.backgroundColor = '#fff';
            isWhite = true;
        }
    });
};
openMenuWhiteBackground();


const toggleIcons = () => {

    let menuOpen = false;
    
    menuButton.addEventListener('click', () => {
        if (menuOpen) {
            // Återställ till första ikonen
            menuButton.innerHTML = `<svg width="20" height="20" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.8125 3H32.8125M2.8125 13H32.8125M2.8125 23H32.8125" stroke="white" stroke-width="4.42708" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            respLogotype.innerHTML = `<svg width="220" height="20" viewBox="0 0 220 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_218)">
            <g clip-path="url(#clip1_3_218)">
            <path d="M16.3946 17.126H12.8717L2.20544 4.20287H2.15406V17.126H0V2.87276H3.54761L14.1898 15.891H14.2405V2.87276H16.3946V17.126Z" fill="white"/>
            <path d="M27.012 2.75922C31.7502 2.79727 33.1945 3.97516 33.1945 7.54814V12.6225C33.1945 15.9868 31.5733 17.2408 27.012 17.2408H24.4527C19.8927 17.2408 18.2702 15.9862 18.2702 12.6225V7.54814C18.2702 3.97516 19.7139 2.79727 24.4527 2.75922L27.012 2.75922ZM24.4527 4.18384C21.2603 4.18384 20.4243 4.77374 20.4243 7.54814V12.6225C20.4243 15.454 21.6649 15.7959 24.4527 15.8143H27.012C29.7998 15.7959 31.0411 15.454 31.0411 12.6225V7.54814C31.0411 4.77374 30.2051 4.18384 27.012 4.18384H24.4527Z" fill="white"/>
            <path d="M37.1988 17.126H35.0447V2.87276H43.812C47.9165 2.87276 49.7166 3.72905 49.7166 6.97918C49.7166 8.97404 49.4121 10.4557 46.3973 10.7418V10.7792C48.5248 10.894 49.4635 11.8062 49.4635 13.345V17.1273H47.3088V14.1048C47.3088 12.2996 46.7265 11.4256 44.1164 11.4256H37.1988V17.126ZM43.8373 9.99969C47.1566 9.92358 47.5625 9.16369 47.5625 6.80665C47.5625 4.98242 47.2321 4.29865 43.8373 4.29865H37.1988V9.99969H43.8373Z" fill="white"/>
            <path d="M51.5916 2.87276H60.8403C63.1459 2.87276 67.3519 3.1011 67.3519 8.36575V11.7668C67.3519 13.1731 67.0487 17.126 61.3471 17.126H51.5916V2.87276ZM60.8403 15.7007C64.641 15.7007 65.1484 14.0275 65.1985 11.482V7.73716C65.1985 6.93985 64.8179 4.29865 61.1948 4.29865H53.745V15.7014L60.8403 15.7007Z" fill="white"/>
            <path d="M71.2807 2.87276H69.1266V17.1266H71.2807V2.87276Z" fill="white"/>
            <path d="M78.6037 17.2402C75.1315 17.2402 73.0796 15.6062 73.0796 12.7557V7.24368C73.0796 3.21401 76.3989 2.75922 81.0102 2.75922H82.7843C86.762 2.75922 87.9785 4.05064 87.9785 6.86374V7.32043H85.8245V6.92082C85.8245 4.92533 85.2669 4.18448 82.4792 4.18448H81.2639C76.8048 4.18448 75.233 4.58345 75.233 7.18786V11.1027C75.233 14.3529 75.41 15.8149 79.009 15.8149H81.5677C85.0138 15.8149 86.0776 15.4546 86.0776 13.4204V12.28H88.2316V13.6114C88.2316 16.8792 85.4439 17.2408 81.6432 17.2408L78.6037 17.2402Z" fill="white"/>
            <path d="M110.582 17.126H107.313L102.347 4.29865H102.295L97.2532 17.126H94.0354L88.2075 2.87276H90.4117L95.5806 15.891H95.6319L100.75 2.87276H103.918L108.985 15.891H109.036L114.332 2.87276H116.562L110.582 17.126Z" fill="white"/>
            <path d="M119.426 9.14403H129.055V10.4748H119.426V15.7001H129.486V17.1254H117.273V2.87276H129.486V4.29865H119.426V9.14403Z" fill="white"/>
            <path d="M133.717 15.7007H143.397V17.126H131.565V2.87276H133.717V15.7007Z" fill="white"/>
            <path d="M147.224 15.7007H156.904V17.126H145.071V2.87276H147.224V15.7007Z" fill="white"/>
            <path d="M174.92 17.126H171.398L160.73 4.20287H160.679V17.126H158.527V2.87276H162.073L172.716 15.891H172.767V2.87276H174.92V17.126Z" fill="white"/>
            <path d="M179.077 9.14403H188.704V10.4748H179.077V15.7001H189.136V17.1254H176.922V2.87276H189.136V4.29865H179.077V9.14403Z" fill="white"/>
            <path d="M190.353 6.90116C190.353 3.1011 192.685 2.75922 197.372 2.75922C201.476 2.75922 204.441 2.89242 204.213 6.76859H202.059C201.958 4.27899 201.324 4.18384 197.295 4.18384C193.089 4.18384 192.506 4.58345 192.506 6.55928C192.506 9.27659 194.229 9.04952 197.777 9.12563C202.287 9.31528 204.567 9.22014 204.567 13.0779C204.567 17.1076 202.034 17.2402 197.245 17.2402C192.405 17.2402 189.896 16.8025 190.302 12.6789H192.456C192.406 15.8136 193.216 15.8136 197.245 15.8136C201.3 15.8136 202.414 15.8136 202.414 13.0208C202.414 10.3035 200.792 10.7596 197.321 10.5496C193.571 10.3232 190.353 10.6644 190.353 6.90116Z" fill="white"/>
            <path d="M205.785 6.90116C205.785 3.1011 208.116 2.75922 212.803 2.75922C216.908 2.75922 219.873 2.89242 219.645 6.76859H217.491C217.39 4.27899 216.756 4.18384 212.727 4.18384C208.521 4.18384 207.938 4.58345 207.938 6.55928C207.938 9.27659 209.662 9.04952 213.209 9.12563C217.718 9.31528 219.999 9.22014 219.999 13.0779C219.999 17.1076 217.466 17.2402 212.677 17.2402C207.837 17.2402 205.329 16.8025 205.734 12.6789H207.887C207.838 15.8136 208.648 15.8136 212.678 15.8136C216.732 15.8136 217.846 15.8136 217.846 13.0208C217.846 10.3035 216.224 10.7596 212.753 10.5496C209.004 10.3232 205.785 10.6644 205.785 6.90116Z" fill="white"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_3_218">
            <rect width="220" height="20" fill="white"/>
            </clipPath>
            <clipPath id="clip1_3_218">
            <rect width="220" height="14.4816" fill="white" transform="translate(0 2.75922)"/>
            </clipPath>
            </defs>
            </svg>`;
            respLockIcon.innerHTML = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_249)">
            <path d="M10.67 0C14.1145 0 16.9079 2.83587 16.9079 6.33372V7.48538H18.1554C18.8439 7.48538 19.403 8.04444 19.403 8.73294V18.7135C19.403 19.4019 18.8439 19.961 18.1554 19.961H3.18467C2.49617 19.961 1.9371 19.4019 1.9371 18.7135V8.73294C1.9371 8.04444 2.49617 7.48538 3.18467 7.48538H4.43223V6.33372C4.43223 2.83587 7.2256 0 10.67 0ZM5.67979 6.33372V7.48538H15.6603V6.33372C15.6603 3.52943 13.4221 1.24756 10.67 1.24756C7.918 1.24756 5.67979 3.52943 5.67979 6.33372ZM18.1554 18.7135V8.73294H3.18467V18.7135H18.1554ZM13.1652 13.7232C13.1652 15.1018 12.0486 16.2183 10.67 16.2183C9.29149 16.2183 8.17492 15.1018 8.17492 13.7232C8.17492 12.3446 9.29149 11.2281 10.67 11.2281C12.0486 11.2281 13.1652 12.3446 13.1652 13.7232ZM10.67 14.9708C11.3574 14.9708 11.9176 14.4105 11.9176 13.7232C11.9176 13.0359 11.3574 12.4756 10.67 12.4756C9.98272 12.4756 9.42248 13.0359 9.42248 13.7232C9.42248 14.4105 9.98272 14.9708 10.67 14.9708Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_3_249">
            <rect width="20" height="20" fill="white" transform="matrix(1 0 0 -1 0.670044 20)"/>
            </clipPath>
            </defs>
            </svg>
            `;

            menuOpen = false;
        } else {
            // Ändra till andra ikonen (menyn är öppen)
            menuButton.innerHTML = `<svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.28128 22.7813L22.2813 2.78125M22.2813 22.7813L2.28128 2.78125" stroke="black" stroke-width="4.42708" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            respLogotype.innerHTML = `<svg width="220" height="20" viewBox="0 0 220 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_218)">
            <g clip-path="url(#clip1_3_218)">
            <path d="M16.3946 17.126H12.8717L2.20544 4.20287H2.15406V17.126H0V2.87276H3.54761L14.1898 15.891H14.2405V2.87276H16.3946V17.126Z" fill="#008DA8"/>
            <path d="M27.012 2.75922C31.7502 2.79727 33.1945 3.97516 33.1945 7.54814V12.6225C33.1945 15.9868 31.5733 17.2408 27.012 17.2408H24.4527C19.8927 17.2408 18.2702 15.9862 18.2702 12.6225V7.54814C18.2702 3.97516 19.7139 2.79727 24.4527 2.75922L27.012 2.75922ZM24.4527 4.18384C21.2603 4.18384 20.4243 4.77374 20.4243 7.54814V12.6225C20.4243 15.454 21.6649 15.7959 24.4527 15.8143H27.012C29.7998 15.7959 31.0411 15.454 31.0411 12.6225V7.54814C31.0411 4.77374 30.2051 4.18384 27.012 4.18384H24.4527Z" fill="#008DA8"/>
            <path d="M37.1988 17.126H35.0447V2.87276H43.812C47.9165 2.87276 49.7166 3.72905 49.7166 6.97918C49.7166 8.97404 49.4121 10.4557 46.3973 10.7418V10.7792C48.5248 10.894 49.4635 11.8062 49.4635 13.345V17.1273H47.3088V14.1048C47.3088 12.2996 46.7265 11.4256 44.1164 11.4256H37.1988V17.126ZM43.8373 9.99969C47.1566 9.92358 47.5625 9.16369 47.5625 6.80665C47.5625 4.98242 47.2321 4.29865 43.8373 4.29865H37.1988V9.99969H43.8373Z" fill="#008DA8"/>
            <path d="M51.5916 2.87276H60.8403C63.1459 2.87276 67.3519 3.1011 67.3519 8.36575V11.7668C67.3519 13.1731 67.0487 17.126 61.3471 17.126H51.5916V2.87276ZM60.8403 15.7007C64.641 15.7007 65.1484 14.0275 65.1985 11.482V7.73716C65.1985 6.93985 64.8179 4.29865 61.1948 4.29865H53.745V15.7014L60.8403 15.7007Z" fill="#008DA8"/>
            <path d="M71.2807 2.87276H69.1266V17.1266H71.2807V2.87276Z" fill="#008DA8"/>
            <path d="M78.6037 17.2402C75.1315 17.2402 73.0796 15.6062 73.0796 12.7557V7.24368C73.0796 3.21401 76.3989 2.75922 81.0102 2.75922H82.7843C86.762 2.75922 87.9785 4.05064 87.9785 6.86374V7.32043H85.8245V6.92082C85.8245 4.92533 85.2669 4.18448 82.4792 4.18448H81.2639C76.8048 4.18448 75.233 4.58345 75.233 7.18786V11.1027C75.233 14.3529 75.41 15.8149 79.009 15.8149H81.5677C85.0138 15.8149 86.0776 15.4546 86.0776 13.4204V12.28H88.2316V13.6114C88.2316 16.8792 85.4439 17.2408 81.6432 17.2408L78.6037 17.2402Z" fill="#008DA8"/>
            <path d="M110.582 17.126H107.313L102.347 4.29865H102.295L97.2532 17.126H94.0354L88.2075 2.87276H90.4117L95.5806 15.891H95.6319L100.75 2.87276H103.918L108.985 15.891H109.036L114.332 2.87276H116.562L110.582 17.126Z" fill="#54B948"/>
            <path d="M119.426 9.14403H129.055V10.4748H119.426V15.7001H129.486V17.1254H117.273V2.87276H129.486V4.29865H119.426V9.14403Z" fill="#54B948"/>
            <path d="M133.717 15.7007H143.397V17.126H131.565V2.87276H133.717V15.7007Z" fill="#54B948"/>
            <path d="M147.224 15.7007H156.904V17.126H145.071V2.87276H147.224V15.7007Z" fill="#54B948"/>
            <path d="M174.92 17.126H171.398L160.73 4.20287H160.679V17.126H158.527V2.87276H162.073L172.716 15.891H172.767V2.87276H174.92V17.126Z" fill="#54B948"/>
            <path d="M179.077 9.14403H188.704V10.4748H179.077V15.7001H189.136V17.1254H176.922V2.87276H189.136V4.29865H179.077V9.14403Z" fill="#54B948"/>
            <path d="M190.353 6.90116C190.353 3.1011 192.685 2.75922 197.372 2.75922C201.476 2.75922 204.441 2.89242 204.213 6.76859H202.059C201.958 4.27899 201.324 4.18384 197.295 4.18384C193.089 4.18384 192.506 4.58345 192.506 6.55928C192.506 9.27659 194.229 9.04952 197.777 9.12563C202.287 9.31528 204.567 9.22014 204.567 13.0779C204.567 17.1076 202.034 17.2402 197.245 17.2402C192.405 17.2402 189.896 16.8025 190.302 12.6789H192.456C192.406 15.8136 193.216 15.8136 197.245 15.8136C201.3 15.8136 202.414 15.8136 202.414 13.0208C202.414 10.3035 200.792 10.7596 197.321 10.5496C193.571 10.3232 190.353 10.6644 190.353 6.90116Z" fill="#54B948"/>
            <path d="M205.785 6.90116C205.785 3.1011 208.116 2.75922 212.803 2.75922C216.908 2.75922 219.873 2.89242 219.645 6.76859H217.491C217.39 4.27899 216.756 4.18384 212.727 4.18384C208.521 4.18384 207.938 4.58345 207.938 6.55928C207.938 9.27659 209.662 9.04952 213.209 9.12563C217.718 9.31528 219.999 9.22014 219.999 13.0779C219.999 17.1076 217.466 17.2402 212.677 17.2402C207.837 17.2402 205.329 16.8025 205.734 12.6789H207.887C207.838 15.8136 208.648 15.8136 212.678 15.8136C216.732 15.8136 217.846 15.8136 217.846 13.0208C217.846 10.3035 216.224 10.7596 212.753 10.5496C209.004 10.3232 205.785 10.6644 205.785 6.90116Z" fill="#54B948"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_3_218">
            <rect width="220" height="20" fill="white"/>
            </clipPath>
            <clipPath id="clip1_3_218">
            <rect width="220" height="14.4816" fill="white" transform="translate(0 2.75922)"/>
            </clipPath>
            </defs>
            </svg>
            `;
            respLockIcon.innerHTML = `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.67005 0C13.1145 0 15.9079 2.83587 15.9079 6.33372V7.48538H17.1554C17.8439 7.48538 18.403 8.04444 18.403 8.73294V18.7135C18.403 19.4019 17.8439 19.961 17.1554 19.961H2.18467C1.49617 19.961 0.937103 19.4019 0.937103 18.7135V8.73294C0.937103 8.04444 1.49617 7.48538 2.18467 7.48538H3.43223V6.33372C3.43223 2.83587 6.2256 0 9.67005 0ZM4.67979 6.33372V7.48538H14.6603V6.33372C14.6603 3.52943 12.4221 1.24756 9.67005 1.24756C6.918 1.24756 4.67979 3.52943 4.67979 6.33372ZM17.1554 18.7135V8.73294H2.18467V18.7135H17.1554ZM12.1652 13.7232C12.1652 15.1018 11.0486 16.2183 9.67005 16.2183C8.29149 16.2183 7.17492 15.1018 7.17492 13.7232C7.17492 12.3446 8.29149 11.2281 9.67005 11.2281C11.0486 11.2281 12.1652 12.3446 12.1652 13.7232ZM9.67005 14.9708C10.3574 14.9708 10.9176 14.4105 10.9176 13.7232C10.9176 13.0359 10.3574 12.4756 9.67005 12.4756C8.98272 12.4756 8.42248 13.0359 8.42248 13.7232C8.42248 14.4105 8.98272 14.9708 9.67005 14.9708Z" fill="black"/>
            </svg>
            `;

            menuOpen = true;
        }
    });

};
toggleIcons();


const headerResponsiveScroll = () => {

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Logotyp och SVG element
    if (currentScroll === 0) {
        // Om användaren är högst upp på sidan, ändra till första logotypen
        respLogotype.innerHTML = `<svg width="220" height="20" viewBox="0 0 220 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_218)">
                                <g clip-path="url(#clip1_3_218)">
                                <path d="M16.3946 17.126H12.8717L2.20544 4.20287H2.15406V17.126H0V2.87276H3.54761L14.1898 15.891H14.2405V2.87276H16.3946V17.126Z" fill="white"/>
                                <path d="M27.012 2.75922C31.7502 2.79727 33.1945 3.97516 33.1945 7.54814V12.6225C33.1945 15.9868 31.5733 17.2408 27.012 17.2408H24.4527C19.8927 17.2408 18.2702 15.9862 18.2702 12.6225V7.54814C18.2702 3.97516 19.7139 2.79727 24.4527 2.75922L27.012 2.75922ZM24.4527 4.18384C21.2603 4.18384 20.4243 4.77374 20.4243 7.54814V12.6225C20.4243 15.454 21.6649 15.7959 24.4527 15.8143H27.012C29.7998 15.7959 31.0411 15.454 31.0411 12.6225V7.54814C31.0411 4.77374 30.2051 4.18384 27.012 4.18384H24.4527Z" fill="white"/>
                                <path d="M37.1988 17.126H35.0447V2.87276H43.812C47.9165 2.87276 49.7166 3.72905 49.7166 6.97918C49.7166 8.97404 49.4121 10.4557 46.3973 10.7418V10.7792C48.5248 10.894 49.4635 11.8062 49.4635 13.345V17.1273H47.3088V14.1048C47.3088 12.2996 46.7265 11.4256 44.1164 11.4256H37.1988V17.126ZM43.8373 9.99969C47.1566 9.92358 47.5625 9.16369 47.5625 6.80665C47.5625 4.98242 47.2321 4.29865 43.8373 4.29865H37.1988V9.99969H43.8373Z" fill="white"/>
                                <path d="M51.5916 2.87276H60.8403C63.1459 2.87276 67.3519 3.1011 67.3519 8.36575V11.7668C67.3519 13.1731 67.0487 17.126 61.3471 17.126H51.5916V2.87276ZM60.8403 15.7007C64.641 15.7007 65.1484 14.0275 65.1985 11.482V7.73716C65.1985 6.93985 64.8179 4.29865 61.1948 4.29865H53.745V15.7014L60.8403 15.7007Z" fill="white"/>
                                <path d="M71.2807 2.87276H69.1266V17.1266H71.2807V2.87276Z" fill="white"/>
                                <path d="M78.6037 17.2402C75.1315 17.2402 73.0796 15.6062 73.0796 12.7557V7.24368C73.0796 3.21401 76.3989 2.75922 81.0102 2.75922H82.7843C86.762 2.75922 87.9785 4.05064 87.9785 6.86374V7.32043H85.8245V6.92082C85.8245 4.92533 85.2669 4.18448 82.4792 4.18448H81.2639C76.8048 4.18448 75.233 4.58345 75.233 7.18786V11.1027C75.233 14.3529 75.41 15.8149 79.009 15.8149H81.5677C85.0138 15.8149 86.0776 15.4546 86.0776 13.4204V12.28H88.2316V13.6114C88.2316 16.8792 85.4439 17.2408 81.6432 17.2408L78.6037 17.2402Z" fill="white"/>
                                <path d="M110.582 17.126H107.313L102.347 4.29865H102.295L97.2532 17.126H94.0354L88.2075 2.87276H90.4117L95.5806 15.891H95.6319L100.75 2.87276H103.918L108.985 15.891H109.036L114.332 2.87276H116.562L110.582 17.126Z" fill="white"/>
                                <path d="M119.426 9.14403H129.055V10.4748H119.426V15.7001H129.486V17.1254H117.273V2.87276H129.486V4.29865H119.426V9.14403Z" fill="white"/>
                                <path d="M133.717 15.7007H143.397V17.126H131.565V2.87276H133.717V15.7007Z" fill="white"/>
                                <path d="M147.224 15.7007H156.904V17.126H145.071V2.87276H147.224V15.7007Z" fill="white"/>
                                <path d="M174.92 17.126H171.398L160.73 4.20287H160.679V17.126H158.527V2.87276H162.073L172.716 15.891H172.767V2.87276H174.92V17.126Z" fill="white"/>
                                <path d="M179.077 9.14403H188.704V10.4748H179.077V15.7001H189.136V17.1254H176.922V2.87276H189.136V4.29865H179.077V9.14403Z" fill="white"/>
                                <path d="M190.353 6.90116C190.353 3.1011 192.685 2.75922 197.372 2.75922C201.476 2.75922 204.441 2.89242 204.213 6.76859H202.059C201.958 4.27899 201.324 4.18384 197.295 4.18384C193.089 4.18384 192.506 4.58345 192.506 6.55928C192.506 9.27659 194.229 9.04952 197.777 9.12563C202.287 9.31528 204.567 9.22014 204.567 13.0779C204.567 17.1076 202.034 17.2402 197.245 17.2402C192.405 17.2402 189.896 16.8025 190.302 12.6789H192.456C192.406 15.8136 193.216 15.8136 197.245 15.8136C201.3 15.8136 202.414 15.8136 202.414 13.0208C202.414 10.3035 200.792 10.7596 197.321 10.5496C193.571 10.3232 190.353 10.6644 190.353 6.90116Z" fill="white"/>
                                <path d="M205.785 6.90116C205.785 3.1011 208.116 2.75922 212.803 2.75922C216.908 2.75922 219.873 2.89242 219.645 6.76859H217.491C217.39 4.27899 216.756 4.18384 212.727 4.18384C208.521 4.18384 207.938 4.58345 207.938 6.55928C207.938 9.27659 209.662 9.04952 213.209 9.12563C217.718 9.31528 219.999 9.22014 219.999 13.0779C219.999 17.1076 217.466 17.2402 212.677 17.2402C207.837 17.2402 205.329 16.8025 205.734 12.6789H207.887C207.838 15.8136 208.648 15.8136 212.678 15.8136C216.732 15.8136 217.846 15.8136 217.846 13.0208C217.846 10.3035 216.224 10.7596 212.753 10.5496C209.004 10.3232 205.785 10.6644 205.785 6.90116Z" fill="white"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_3_218">
                                <rect width="220" height="20" fill="white"/>
                                </clipPath>
                                <clipPath id="clip1_3_218">
                                <rect width="220" height="14.4816" fill="white" transform="translate(0 2.75922)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            `;
        respLockIcon.innerHTML = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3_249)">
        <path d="M10.67 0C14.1145 0 16.9079 2.83587 16.9079 6.33372V7.48538H18.1554C18.8439 7.48538 19.403 8.04444 19.403 8.73294V18.7135C19.403 19.4019 18.8439 19.961 18.1554 19.961H3.18467C2.49617 19.961 1.9371 19.4019 1.9371 18.7135V8.73294C1.9371 8.04444 2.49617 7.48538 3.18467 7.48538H4.43223V6.33372C4.43223 2.83587 7.2256 0 10.67 0ZM5.67979 6.33372V7.48538H15.6603V6.33372C15.6603 3.52943 13.4221 1.24756 10.67 1.24756C7.918 1.24756 5.67979 3.52943 5.67979 6.33372ZM18.1554 18.7135V8.73294H3.18467V18.7135H18.1554ZM13.1652 13.7232C13.1652 15.1018 12.0486 16.2183 10.67 16.2183C9.29149 16.2183 8.17492 15.1018 8.17492 13.7232C8.17492 12.3446 9.29149 11.2281 10.67 11.2281C12.0486 11.2281 13.1652 12.3446 13.1652 13.7232ZM10.67 14.9708C11.3574 14.9708 11.9176 14.4105 11.9176 13.7232C11.9176 13.0359 11.3574 12.4756 10.67 12.4756C9.98272 12.4756 9.42248 13.0359 9.42248 13.7232C9.42248 14.4105 9.98272 14.9708 10.67 14.9708Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_3_249">
        <rect width="20" height="20" fill="white" transform="matrix(1 0 0 -1 0.670044 20)"/>
        </clipPath>
        </defs>
        </svg>
                            `;
    } else {
        // Annars ändra till andra logotypen
        respLogotype.innerHTML = `<svg width="220" height="20" viewBox="0 0 220 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3_218)">
        <g clip-path="url(#clip1_3_218)">
        <path d="M16.3946 17.126H12.8717L2.20544 4.20287H2.15406V17.126H0V2.87276H3.54761L14.1898 15.891H14.2405V2.87276H16.3946V17.126Z" fill="#008DA8"/>
        <path d="M27.012 2.75922C31.7502 2.79727 33.1945 3.97516 33.1945 7.54814V12.6225C33.1945 15.9868 31.5733 17.2408 27.012 17.2408H24.4527C19.8927 17.2408 18.2702 15.9862 18.2702 12.6225V7.54814C18.2702 3.97516 19.7139 2.79727 24.4527 2.75922L27.012 2.75922ZM24.4527 4.18384C21.2603 4.18384 20.4243 4.77374 20.4243 7.54814V12.6225C20.4243 15.454 21.6649 15.7959 24.4527 15.8143H27.012C29.7998 15.7959 31.0411 15.454 31.0411 12.6225V7.54814C31.0411 4.77374 30.2051 4.18384 27.012 4.18384H24.4527Z" fill="#008DA8"/>
        <path d="M37.1988 17.126H35.0447V2.87276H43.812C47.9165 2.87276 49.7166 3.72905 49.7166 6.97918C49.7166 8.97404 49.4121 10.4557 46.3973 10.7418V10.7792C48.5248 10.894 49.4635 11.8062 49.4635 13.345V17.1273H47.3088V14.1048C47.3088 12.2996 46.7265 11.4256 44.1164 11.4256H37.1988V17.126ZM43.8373 9.99969C47.1566 9.92358 47.5625 9.16369 47.5625 6.80665C47.5625 4.98242 47.2321 4.29865 43.8373 4.29865H37.1988V9.99969H43.8373Z" fill="#008DA8"/>
        <path d="M51.5916 2.87276H60.8403C63.1459 2.87276 67.3519 3.1011 67.3519 8.36575V11.7668C67.3519 13.1731 67.0487 17.126 61.3471 17.126H51.5916V2.87276ZM60.8403 15.7007C64.641 15.7007 65.1484 14.0275 65.1985 11.482V7.73716C65.1985 6.93985 64.8179 4.29865 61.1948 4.29865H53.745V15.7014L60.8403 15.7007Z" fill="#008DA8"/>
        <path d="M71.2807 2.87276H69.1266V17.1266H71.2807V2.87276Z" fill="#008DA8"/>
        <path d="M78.6037 17.2402C75.1315 17.2402 73.0796 15.6062 73.0796 12.7557V7.24368C73.0796 3.21401 76.3989 2.75922 81.0102 2.75922H82.7843C86.762 2.75922 87.9785 4.05064 87.9785 6.86374V7.32043H85.8245V6.92082C85.8245 4.92533 85.2669 4.18448 82.4792 4.18448H81.2639C76.8048 4.18448 75.233 4.58345 75.233 7.18786V11.1027C75.233 14.3529 75.41 15.8149 79.009 15.8149H81.5677C85.0138 15.8149 86.0776 15.4546 86.0776 13.4204V12.28H88.2316V13.6114C88.2316 16.8792 85.4439 17.2408 81.6432 17.2408L78.6037 17.2402Z" fill="#008DA8"/>
        <path d="M110.582 17.126H107.313L102.347 4.29865H102.295L97.2532 17.126H94.0354L88.2075 2.87276H90.4117L95.5806 15.891H95.6319L100.75 2.87276H103.918L108.985 15.891H109.036L114.332 2.87276H116.562L110.582 17.126Z" fill="#54B948"/>
        <path d="M119.426 9.14403H129.055V10.4748H119.426V15.7001H129.486V17.1254H117.273V2.87276H129.486V4.29865H119.426V9.14403Z" fill="#54B948"/>
        <path d="M133.717 15.7007H143.397V17.126H131.565V2.87276H133.717V15.7007Z" fill="#54B948"/>
        <path d="M147.224 15.7007H156.904V17.126H145.071V2.87276H147.224V15.7007Z" fill="#54B948"/>
        <path d="M174.92 17.126H171.398L160.73 4.20287H160.679V17.126H158.527V2.87276H162.073L172.716 15.891H172.767V2.87276H174.92V17.126Z" fill="#54B948"/>
        <path d="M179.077 9.14403H188.704V10.4748H179.077V15.7001H189.136V17.1254H176.922V2.87276H189.136V4.29865H179.077V9.14403Z" fill="#54B948"/>
        <path d="M190.353 6.90116C190.353 3.1011 192.685 2.75922 197.372 2.75922C201.476 2.75922 204.441 2.89242 204.213 6.76859H202.059C201.958 4.27899 201.324 4.18384 197.295 4.18384C193.089 4.18384 192.506 4.58345 192.506 6.55928C192.506 9.27659 194.229 9.04952 197.777 9.12563C202.287 9.31528 204.567 9.22014 204.567 13.0779C204.567 17.1076 202.034 17.2402 197.245 17.2402C192.405 17.2402 189.896 16.8025 190.302 12.6789H192.456C192.406 15.8136 193.216 15.8136 197.245 15.8136C201.3 15.8136 202.414 15.8136 202.414 13.0208C202.414 10.3035 200.792 10.7596 197.321 10.5496C193.571 10.3232 190.353 10.6644 190.353 6.90116Z" fill="#54B948"/>
        <path d="M205.785 6.90116C205.785 3.1011 208.116 2.75922 212.803 2.75922C216.908 2.75922 219.873 2.89242 219.645 6.76859H217.491C217.39 4.27899 216.756 4.18384 212.727 4.18384C208.521 4.18384 207.938 4.58345 207.938 6.55928C207.938 9.27659 209.662 9.04952 213.209 9.12563C217.718 9.31528 219.999 9.22014 219.999 13.0779C219.999 17.1076 217.466 17.2402 212.677 17.2402C207.837 17.2402 205.329 16.8025 205.734 12.6789H207.887C207.838 15.8136 208.648 15.8136 212.678 15.8136C216.732 15.8136 217.846 15.8136 217.846 13.0208C217.846 10.3035 216.224 10.7596 212.753 10.5496C209.004 10.3232 205.785 10.6644 205.785 6.90116Z" fill="#54B948"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_3_218">
        <rect width="220" height="20" fill="white"/>
        </clipPath>
        <clipPath id="clip1_3_218">
        <rect width="220" height="14.4816" fill="white" transform="translate(0 2.75922)"/>
        </clipPath>
        </defs>
        </svg>
                            `;
        respLockIcon.innerHTML = `<svg width="21" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.67005 0C13.1145 0 15.9079 2.83587 15.9079 6.33372V7.48538H17.1554C17.8439 7.48538 18.403 8.04444 18.403 8.73294V18.7135C18.403 19.4019 17.8439 19.961 17.1554 19.961H2.18467C1.49617 19.961 0.937103 19.4019 0.937103 18.7135V8.73294C0.937103 8.04444 1.49617 7.48538 2.18467 7.48538H3.43223V6.33372C3.43223 2.83587 6.2256 0 9.67005 0ZM4.67979 6.33372V7.48538H14.6603V6.33372C14.6603 3.52943 12.4221 1.24756 9.67005 1.24756C6.918 1.24756 4.67979 3.52943 4.67979 6.33372ZM17.1554 18.7135V8.73294H2.18467V18.7135H17.1554ZM12.1652 13.7232C12.1652 15.1018 11.0486 16.2183 9.67005 16.2183C8.29149 16.2183 7.17492 15.1018 7.17492 13.7232C7.17492 12.3446 8.29149 11.2281 9.67005 11.2281C11.0486 11.2281 12.1652 12.3446 12.1652 13.7232ZM9.67005 14.9708C10.3574 14.9708 10.9176 14.4105 10.9176 13.7232C10.9176 13.0359 10.3574 12.4756 9.67005 12.4756C8.98272 12.4756 8.42248 13.0359 8.42248 13.7232C8.42248 14.4105 8.98272 14.9708 9.67005 14.9708Z" fill="black"/>
        </svg>            
                            `;
    }
  
    lastScroll = currentScroll;
});
};

headerScroll();