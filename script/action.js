$('#section1 .rabit_box .rabit').click(function () {
    alert('HI^ㅡ^')
})

function bar() {
    let scrT = $(window).scrollTop();
    let winW = $(window).width();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = winW / (docH - winH);
    $('.bar').width(scrT * ratio)
}
function bar2() {
    let scrT = $(window).scrollTop();
    let prog2 = $('.page_progress2').height();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = prog2 / (docH - winH);
    $('.bar2').height(scrT * ratio);
}

$(window).scroll(function () {
    bar()
    bar2()
})

$(window).resize(function () {
    bar()
    bar2()
})

$('.hamburger').click(function () {
    $('.gnb_box').fadeIn(500)
})

$('.close').click(function () {
    $('.gnb_box').fadeOut(500)
})

$('.ui_ux li.monitor').mouseenter(function () {
    let monitorScreen = $(this).find('.screen').height();
    let monitorImg = $(this).find(' .screen img').height();
    if (monitorImg < 400) {
        $(this).find('.screen img').css({ transition: '1s' })
    } else if (monitorImg < 500) {
        $(this).find('.screen img').css({ transition: '2s' })
    } else if (monitorImg < 1000) {
        $(this).find('.screen img').css({ transition: '3s' })
    } else if (monitorImg < 1800) {
        $(this).find('.screen img').css({ transition: '4s' })
    } else {
        $(this).find('.screen img').css({ transition: '5s' })
    }
    $(this).find('.screen img').css({ top: -monitorImg + monitorScreen })
}).mouseleave(function () {
    $(this).find('.screen img').css({ top: 0 })
})

// $('.rabit_box').mouseenter(function () {
//     $('.rabit_box').animate({ left: '-100%' })
// })
$/* ('.gnb_box .gnb li').click(function () {
    let liIndex = $(this).index() //0,1,2,3
    let sectionTop = $('.fullpage > div').eq(liIndex).offset().top;

    $('html, body').animate({ scrollTop: sectionTop })

    return false
}) */
$('.gnb_box h2').click(function () {
    $('html, body').animate({ scrollTop: 0 })
})
$('.gnb_box .gnb li').eq(0).click(function () {
    $('html, body').animate({ scrollTop: $('#section3').offset().top + 100 })
})

$('.gnb_box .gnb li').eq(1).click(function () {
    $('html, body').animate({ scrollTop: $('#section9').offset().top + 100 })
})

$('.gnb_box .gnb li').eq(2).click(function () {
    $('html, body').animate({ scrollTop: $('#section10').offset().top + 160 })
})

$('.gnb_box .gnb li').eq(3).click(function () {
    $('html, body').animate({ scrollTop: $('#section11').offset().top + 100 })
})

$('.gnb_box .gnb li').eq(4).click(function () {
    $('html, body').animate({ scrollTop: $('#section12').offset().top + 200 })
})

$('#section11 .detail li').click(function () {
    let imgSrc = $(this).find('img').attr('src')
    $('.gallery_modal .m1').attr('src', imgSrc)
    $('.gallery_modal').show().css({ display: 'flex', overflow: 'auto' })

    $('body').css({ overflow: 'hidden' })
    return false
})

$('.gallery_modal').click(function (e) {
    if (e.target == this) {
        $(this).fadeOut(500)
    }


    $('body').css({ overflow: '' })

})

$('.f_modal').click(function (e) {
    if (e.target == this) {
        $(this).fadeOut(500)
    }
    $('body').css({ overflow: '' })

})

$('#section12 figure').click(function () {
    $('.f_modal').fadeIn(500)
    $('body').css({ overflow: 'hidden' })
})

$('#section12 .img_box').click(function () {
    $('.f_modal').fadeIn(500)
    $('body').css({ overflow: 'hidden' })
})

$(document).keydown(function (e) {
    if (e.key === 'Tab') {
        e.preventDefault();
    }

    if (e.key === 'End') {
        e.preventDefault();
    }



    if (e.ctrlKey && ['a', 's', 'd'].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }


    if (e.key == 'Escape') {
        $('.gnb_box').fadeOut(500)
        $('.gallery_modal').fadeOut(500)
        $('.f_modal').fadeOut(500)

        $('.popup3').fadeOut(500)
        $('.popup3 h3').fadeOut(500)
        $('.popup3 p').fadeOut(500)
        $('.popup3 figure').fadeOut(500)


        $('body').css({ overflow: '' })
    }
    if (e.keyCode === 9) {

        $('.popup2 figure').fadeOut(300)
        $('.popup2 h3').fadeOut(1000)
        $('.popup2 p').fadeOut(1000)


    }
    if (e.code === 'ControlLeft') {
        $('.popup3 figure').fadeOut(300)
        $('.popup3 h3').fadeOut(1000)
        $('.popup3 p').fadeOut(1000)
    }


    if (e.ctrlKey && e.key === 'a') {
        $('.popup4 figure').fadeOut(300)
        $('.popup4 h3').fadeOut(1000)
        $('.popup4 p').fadeOut(1000)
    }

    if (e.ctrlKey && e.key === 's') {
        $('.popup5 figure').fadeOut(300)
        $('.popup5 h3').fadeOut(1000)
        $('.popup5 p').fadeOut(1000)
    }

    if (e.ctrlKey && e.key === 'd') {
        $('.popup6 figure').fadeOut(300)
        $('.popup6 h3').fadeOut(1000)
        $('.popup6 p').fadeOut(1000)
    }
    if (e.key === 'End') {
        $('.popup7 figure').fadeOut(300)
        $('.popup7 h3').fadeOut(1000)
        $('.popup7 p').fadeOut(1000)
    }



})


let circleW = $('.mouse_circle').width();
let circleH = $('.mouse_circle').height();
let y
$(window).mousemove(function (e) {
    let x = e.clientX;
    y = e.clientY;
    $('.mouse_circle').css({ left: x - circleW / 2, top: y - circleH / 2 });
})

$(window).scroll(function () {
    $('.mouse_circle').css({ top: y - circleH / 2 });
    $('.f_modal').fadeOut(500)
});


$(".btn_box .btn2").click(function () {
    $(".popup2").fadeIn();
    $(".popup2 h3").delay(300).fadeIn();
    $(".popup2 p").delay(300).fadeIn();
    $(".popup2 figure").delay(700).fadeIn();

})

$(".b3").click(function () {
    $(".popup3").fadeIn();
    $(".popup3 h3").delay(300).fadeIn();
    $(".popup3 p").delay(300).fadeIn();
    $(".popup3 figure").delay(700).fadeIn();

})

$(".b4").click(function () {
    $(".popup4").fadeIn();
    $(".popup4 h3").delay(300).fadeIn();
    $(".popup4 p").delay(300).fadeIn();
    $(".popup4 figure").delay(700).fadeIn();
})

$(".b5").click(function () {
    $(".popup5").fadeIn();
    $(".popup5 h3").delay(300).fadeIn();
    $(".popup5 p").delay(300).fadeIn();
    $(".popup5 figure").delay(700).fadeIn();
})

$(".b6").click(function () {
    $(".popup6").fadeIn();
    $(".popup6 h3").delay(300).fadeIn();
    $(".popup6 p").delay(300).fadeIn();
    $(".popup6 figure").delay(700).fadeIn();
})

$(".b7").click(function () {
    $(".popup7").fadeIn();
    $(".popup7 h3").delay(300).fadeIn();
    $(".popup7 p").delay(300).fadeIn();
    $(".popup7 figure").delay(700).fadeIn();
})

