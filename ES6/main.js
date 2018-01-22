$('.works .slider').slick({
    slidesToShow: 3,
    centerMode: true,
    prevArrow: "<button class='slick-arrow prev'></button>",
    nextArrow: "<button class='slick-arrow next'></button>",
    //speed: 0,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode: false,
                speed: 300
            }
        }]
});
$('.toggle-btn').click(function () {
    $('.menu').slideToggle();
});
$('.filter-toggle').click(function (e) {
    e.preventDefault();
    $('.filter .categories').fadeToggle();
});
$('.order-step #delivery-true').click(function () {
    $('#delivery').parent().fadeIn();
});
$('.order-step #delivery-false').click(function () {
    $('#delivery').parent().fadeOut();
});
function productCounter() {
    const min = 1;
    $('.quantity .plus').click(function (e) {
        e.preventDefault();
        let input = $(this).parent().find('input');
        let current = parseInt($(input).val());
        $(input).val(current + 1);
    });
    $('.quantity .minus').click(function (e) {
        e.preventDefault();
        let input = $(this).parent().find('input');
        let current = parseInt($(input).val());
        if (current > min) {
            $(input).val(current - 1);
        }
    })
}

productCounter();