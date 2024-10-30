const burgerMenuToggle = document.querySelector('.burger-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const navElements = mobileNav.querySelector('.nav-elements');

burgerMenuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  navElements.classList.toggle('open');
  burgerMenuToggle.classList.toggle('active');
});



function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xanwazye", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}

