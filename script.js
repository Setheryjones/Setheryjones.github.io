const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

       
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


const emailButton = document.getElementById('emailButton');


emailButton.addEventListener('click', function () {
    window.location.href = "mailto:SethJonesIntern@gmail.com";
});
