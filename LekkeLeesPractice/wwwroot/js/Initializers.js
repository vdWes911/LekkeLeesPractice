function initializeCarousel() {
    $('#bookCarousel').carousel({
        interval: 5000,
        touch: true,
        wrap: true,
    });

    $('#bookCarouselIndicatorsPrev').click(
        () => $('#bookCarousel').carousel('prev'));
    $('#bookCarouselIndicatorsNext').click(
        () => $('#bookCarousel').carousel('next'));
}