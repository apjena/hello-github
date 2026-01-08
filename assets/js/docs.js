$(function() {
    $('html').toggleClass('no-js js');

    // Update sidebar highlighting based on Scrollspy
    $(window).on('activate.bs.scrollspy', function () {
        const spyTarget = $('[data-spy="scroll"]').data('target');
        const $activeSpy = $(spyTarget).find('.nav-link.active');
        const $tree = $activeSpy.parentsUntil('.bs-docs-sidenav', 'li');

        $tree.find('> a').addClass('active');
    });

    // Toggleable mobile table of contents button
    $('.toggle-toc').on('click', function () {
        const $this = $(this);
        const $toc = $("#mobileTOC");

        $toc.toggle();
        $this.attr('aria-expanded', $toc.is(':visible'));

        const $btn = $this.find('[data-role="toggle"]');

        if ($btn.text() === 'Hide') {
            $btn.text('Show');
        } else {
            $btn.text('Hide');
        }
    });

    // Make the triangular pattern in the header
    if (uiColors) {
        const $masthead = $('.site-masthead');

        if ($masthead.length) {
            const t = new Trianglify({
                cellsize: 90,
                noiseIntensity: 0,
                x_gradient: [
                    uiColors[0],
                    uiColors[1],
                ],
            });
            const pattern = t.generate(window.screen.width | $masthead.outerWidth(), $masthead.outerHeight() * 1.2);

            const style = $('<style>.site-masthead { background-image: ' + pattern.dataUrl + '; }</style>');
            $('html > head').append(style);
        }
    }
});

/* Go to top apjena gemini */
// Get the button element
var scrollToTopBtn = document.getElementById("scroll-to-top");

// When the user scrolls down 200px from the top of the document, show the button
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) { // Adjust the 200px threshold as needed
        scrollToTopBtn.style.opacity = 1;
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.opacity = 0;
        // Optionally hide it completely after transition
        setTimeout(function() {
            if (window.scrollY <= 200) {
                scrollToTopBtn.style.display = "none";
            }
        }, 300); // Matches the CSS transition time
    }
});

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling behavior
    });
});

