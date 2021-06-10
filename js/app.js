$(function(){
    //stickynav
    $(window).on('scroll',function(){
        if($(window).scrollTop()>0){
            $('#navber').addClass('stickyNav')
        }else{
            $('#navber').removeClass('stickyNav')
        }
    })

    //back to top button

    $(window).on('scroll',function(){
        if($(window).scrollTop() > 500){
            $('#backToTop').fadeIn('slow')
        }else{
            $('#backToTop').fadeOut('slow')
        }
    })
    $('#backToTop').on('click', function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    })

    //smoth scroll
    $('a').on('click',function(e){
       e.preventDefault()


       if(this.hash !== ''){

        var hash = this.hash

        $('html,body').animate({
            scrollTop:$(hash).offset().top-58
        },1000)
       }
    })
})