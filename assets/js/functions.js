$('.bannerCarousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    dots : true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('#blogsCarousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    dots : true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

$('#popularblogsCarousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    dots : true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})