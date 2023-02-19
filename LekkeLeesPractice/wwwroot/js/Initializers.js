function initializeCarousel() {
    $('#bookCarousel').carousel({
        touch: true,
        wrap: true,
    });

    $('#bookCarouselIndicatorsPrev').click(
        () => $('#bookCarousel').carousel('prev'));
    $('#bookCarouselIndicatorsNext').click(
        () => $('#bookCarousel').carousel('next'));
}