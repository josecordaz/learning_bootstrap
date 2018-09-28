$(document).ready(function() {
    $('#btnLogin').on('click', function (event){
        event.preventDefault();
        $('#loginModal').modal('show');
    });
    $('#btnReserveTable').on('click', function(event){
        event.preventDefault();
        $('#reservationTable').modal('show');
    });
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function() {
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
});