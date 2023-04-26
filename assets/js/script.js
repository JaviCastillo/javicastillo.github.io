$(document).ready(function () {

    $('html').addClass('active');
    $('body').addClass('active');

    let centerCarouselItems = () => {
        var carouselHeight = $('#main-carousel').height();
        $('.carousel-inner').each((e) => {
            var itemHeight = $(this).find('.carousel-item.active').height();
            var topMargin = (carouselHeight - itemHeight) / 2;
            $(this).find('.carousel-item').css('margin-top', topMargin);
        });
    }

    centerCarouselItems();


    
        $('#main-carousel').on('slide.bs.carousel', function (e) {

            var newIndex = $(e.relatedTarget).index();
            $('.nav-link').removeClass('active');
            $('.nav-link[data-slide-to="' + newIndex + '"]').addClass('active');
            
        });
    


    $(function () {
        $('html').keydown(function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                    $('.carousel').carousel('prev')
                    break;
                case 'ArrowRight':
                    $('.carousel').carousel('next')
                    break;
            }
        });
    });


    $('#main-carousel').on('touchstart', function(event){
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function(event){
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5;
    
            if( Math.floor(xClick - xMove) > sensitivityInPx ){
                $(this).carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
                $(this).carousel('prev');
            }
        });
        $(this).on('touchend', function(){
            $(this).off('touchmove');
        });
    });

});