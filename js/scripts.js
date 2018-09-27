$(document).ready(() => {
    $('#btnLogin').on('click', (event) => {
        event.preventDefault();
        $('#loginModal').modal('show');
    });
    $('#btnReserveTable').on('click', (event) => {
        event.preventDefault();
        $('#reservationTable').modal('show');
    });
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(() => {
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play')
            $('#carouselButton').children('span').addClass('fa-pause')
        }
        
    });
})