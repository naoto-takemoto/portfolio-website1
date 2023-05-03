$(function () {
    

    // mobile menu
    $('#open').click(function(){
        // alert('testing');
        $('#myNav').css('width','100%');
    });
    $('#close').click(function(){
        $('#myNav').css('width','0%'),1200;
    });
    $('.back').click(function(){
        $('#myNav').css('width','0%'),2000;
    })


    // scroll event
    $(window).scroll(function(){
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();

        $('.main-text').each(function(){
            var targetPosition = $(this).offset().top;
            if(scroll > targetPosition - windowHeight + 50 ){
                $(this).css('opacity','1');
            }
        })
    })

    // auto slide


    function autoSlide() {
        interval = setInterval(function () {
            moveRight();
        }, 1500)
    }
    autoSlide();

    // stop auto and do manual

    $('.slider ul .slider-img').hover(function () {
        clearInterval(interval);
    }, function () {
        autoSlide();
    })

    $('.slider a').hover(function () {
        clearInterval(interval);
    }, function () {
        autoSlide();
    })


    var sliderWidth = $('.slider ul .slider-img').width();
    console.log(sliderWidth);

    var sliderHeight = $('.slider ul .slider-img').height();
    console.log(sliderHeight);

    var sliderCount = $('.slider ul .slider-img').length;


    var sliderUIWidth = sliderWidth * sliderCount;



    $('.slider').css({
        width: sliderWidth,
        height: sliderHeight,
        border: '1px solid red'
    })


    $('.slider ul').css({
        width: sliderUIWidth,
        height: sliderHeight,
        marginLeft: sliderWidth
    })

    $('.slider ul .slider-img').last().prependTo('.slider ul');



    $('#slider_btn').click(function () {
        // alert('testing');
        $('#slider').slideToggle(1000);
    })

    function moveRight(){
        // alert('testing button');
        $('#slider ul').animate({
            left: -sliderWidth
        },2000,function(){
            // alert('testing callback');
                $('#slider ul li').first().appendTo('#slider ul');
                $('#slider ul').css('left','0');
            })
        }



        // show staff

    $('#show_staff').click(function () {
        // alert('testing');
        $('#fadeInStaff').slideToggle(1000);
    });

    // close staff

    $('.close_staff').click(function () {
        // alert('testing');
        $('#fadeInStaff').slideToggle(1000);
    });


    // modal function
    $('#modal_btn').click(function () {
        // alert('testing btn');
        $('#season').show();
    })

    $('#close').click(function () {
        // alert('testing close');
        $('#season').hide();
    })

    
});