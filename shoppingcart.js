
$('.coupon-btn').click(function(){

    $('.coupon-modal').addClass('show')
    $('.coupon-modal').css({'display':'block'})

})

$('.coupon-close').click(function(){

    $('.coupon-modal').removeClass('show')
    $('.coupon-modal').css({'display':'none'})

})

$('.caption-open').click(function(){

    window.open('Coupon.html')
})


// $('.coupon-btn').modal({
//     escapeClose:false,
//     clickClose:false,
//     showCloseL:false
// })