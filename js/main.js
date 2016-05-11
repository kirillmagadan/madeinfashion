$(document).ready(function(){
    $("#slider").smSlider({
        transition : 'fader',
        duration : 500,
        autoPlay : true,
        autoArr : true,
        pagination : true,
        delay : 5000
    });

    $(document).on('click', '.content_nav_wrap ul>li>a', function () {
        $(this).next(".pop-up_window").css("display","block");
        return false;
    });


    $(document).on('mouseleave', '.content_nav_wrap ul>li', function () {
        $(this).children(".pop-up_window").css("display","none");
        return false;
    });

});

