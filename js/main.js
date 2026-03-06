/**
 * Ivka & Marek Wedding Website
 * 12. September 2026
 */

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // SMOOTH SCROLL NAVIGATION
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================
    var backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ==========================================
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        var current = '';

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = '#E89A1D';
            }
        });
    });

});
