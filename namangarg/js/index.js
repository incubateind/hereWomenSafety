$('.closeall').click(function(e) {
    e.preventDefault();
    $('.accordion .collapse.show').collapse('hide');
    return false;
});
$('.openall').click(function(e) {
    e.preventDefault();
    $('.accordion .collapse').collapse('show');
    return false;
});

if (window.location.hash) {
    redirect(window.location.hash);
}

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var a = document.createElement('a');
    a.href = this.href;
    redirect(a.hash);
    return false;
});

function redirect(hash) {
    // $( hash ).attr( 'aria-expanded', 'true' ).focus();
    // $( hash + '+div.collapse' ).addClass( 'show' ).attr( 'aria-expanded', 'true' );
    $(hash + '+div.collapse').collapse('show');

    // using this because of static nav bar space
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
    }, 10, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });
}

document.documentElement.setAttribute("lang", "en");
document.documentElement.removeAttribute("class");

axe.run(function(err, results) {
    console.log(results.violations);
});