// /*========== menu icon navbar ==========*/
// // let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// // menuIcon.onclick = () => {
// //     menuIcon.classList.toggle('bi');
// //     navbar.classList.toggle('active');
// // };

// window.onload = () => {
//     let menuIcon = document.querySelector('#menu-icon');
//     let navbar = document.querySelector('.navbar');

//     if (menuIcon) {
//         menuIcon.onclick = () => {
//             menuIcon.classList.toggle('bx');
//             navbar.classList.toggle('active');
//         };
//     }
// };


// /*========== scroll sections active link ==========*/
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });


// /*========== sticky navbar ==========*/
// let header = document.querySelector('.header');

// header.classList.toggle('sticky', window.scrollY > 100);

// let menuIcon = document.querySelector('#menu-icon');
// if (menuIcon) {
//     menuIcon.onclick = () => {
//         menuIcon.classList.toggle('bx');
//         navbar.classList.toggle('active');
//     };
// }


// /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
// menuIcon.classList.remove('bi');
// navbar.classList.remove('active');

// };


// /*========== dark light mode ==========*/
// let darkModeIcon = document.querySelector('#darkMode-icon');

// darkModeIcon.onclick = () => {
//     darkModeIcon.classList.toggle('bi-sun');
//     document.body.classList.toggle('dark-mode');
// };

window.onload = () => {
    // Declare and access DOM elements inside onload to ensure they are available
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let darkModeIcon = document.querySelector('#darkMode-icon');

    // Check if menuIcon exists before adding click event
    if (menuIcon) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bi');
            navbar.classList.toggle('active');
        };
    }

    /*========== scroll sections active link ==========*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        // Sticky navbar
        let header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Remove menu icon navbar when clicking navbar link (scroll)
        if (menuIcon) {
            menuIcon.classList.remove('bi');
            navbar.classList.remove('active');
        }
    };

    /*========== dark light mode ==========*/
    if (darkModeIcon) {
        darkModeIcon.onclick = () => {
            darkModeIcon.classList.toggle('bi-brightness-low');
            document.body.classList.toggle('dark-mode');
        };
    }
};
