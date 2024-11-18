$(document).ready(function () {

    // Toggle Navbar
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll and Load Events
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll Spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // EmailJS Form Submission
    $("#contact-form").submit(function (event) {
        event.preventDefault();
        
        emailjs.init("1SZLL6_U4ntIPwBYD"); // Your EmailJS User ID
        
        // Send form data
        emailjs.sendForm('service_3eu5cxn', 'template_ox2fyge', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Form Submitted Successfully");
                document.getElementById("contact-form").reset();
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
    });

    // Typed.js effect
    var typed = new Typed(".typing-text", {
        strings: ["frontend development", "backend development", "web designing", "web development"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });

    // ScrollReveal Animations
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    // Scroll Animations for Sections
    srtop.reveal('.home .content h3', { delay: 200 });
    srtop.reveal('.home .content p', { delay: 200 });
    srtop.reveal('.home .content .btn', { delay: 200 });

    srtop.reveal('.about .content h3', { delay: 200 });
    srtop.reveal('.about .content p', { delay: 300 });
    srtop.reveal('.about .box-container .box', { interval: 200 });

    srtop.reveal('.freshers .heading', { delay: 200 });
    srtop.reveal('.freshers .content .box', { interval: 300 });

    srtop.reveal('.skills .container', { interval: 200 });
    srtop.reveal('.education .box', { interval: 200 });
    srtop.reveal('.work .box', { interval: 200 });
    srtop.reveal('.experience .timeline', { delay: 400 });
    srtop.reveal('.experience .timeline .container', { interval: 400 });
    srtop.reveal('.contact .container', { delay: 400 });
    srtop.reveal('.contact .form-group', { delay: 400 });
});
