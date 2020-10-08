// 新增收件人彈出視窗

$('.opencar').click(function(){
    
    $('.fill-in-car').css({'display':'block'})
    $('.fill-in-7').css({'display':'none'})
    $('.fill-in-family').css({'display':'none'})
    $('.opencar').css('color','red')
    $('.opencar').css('border','1px solid red')
    $('.open7').css('color','#000')
    $('.open7').css('border','1px solid #dedede')
    $('.openfamily').css('color','#000')
    $('.openfamily').css('border','1px solid #dedede')

})

$('.open7').click(function(){

    $('.fill-in-car').css({'display':'none'})
    $('.fill-in-7').css({'display':'block'})
    $('.fill-in-family').css({'display':'none'})
    $('.open7').css('color','red')
    $('.open7').css('border','1px solid red')
    $('.opencar').css('color','#000')
    $('.opencar').css('border','1px solid #dedede')
    $('.openfamily').css('color','#000')
    $('.openfamily').css('border','1px solid #dedede')

})

$('.openfamily').click(function(){

    $('.fill-in-car').css({'display':'none'})
    $('.fill-in-7').css({'display':'none'})
    $('.fill-in-family').css({'display':'block'})
    $('.openfamily').css('color','red')
    $('.openfamily').css('border','1px solid red')
    $('.open7').css('color','#000')
    $('.open7').css('border','1px solid #dedede')
    $('.opencar').css('color','#000')
    $('.opencar').css('border','1px solid #dedede')


})

// 付款方式切換

$('.pay-bank-btn').click(function(){

    $(this).css('color','red')
    $(this).css('border','1px solid red')
    $('.pay-card-btn').css('color','#000')
    $('.pay-card-btn').css('border','1px solid #dedede')
    $('.pay-card').css('display','none')

})


$('.pay-card-btn').click(function(){

    $(this).css('color','red')
    $(this).css('border','1px solid red')
    $('.pay-bank-btn').css('color','#000')
    $('.pay-bank-btn').css('border','1px solid #dedede')
    $('.pay-card').css('display','block')
    
})


// let num = 0

// $('.visa-number').on('keyup change',function(){

//     if($(this).val().length < 19){

//         num = num + 1

//         if(num = 4){

//             $(this).val($(this).val() + ' ')
//             num = 0
//         }

//     }

// })


// 新增收件人資料格式

$('.fill-name').keyup(function(){
    var name = $(this).val()
    var rex = /[\u4E00-\u9FA5]$/
    console.log(name)
    if (!rex.test(name)){
        $(this).addClass('border-danger')
        $('.fill-name-chk').css('display','block')
        $('.fill-name-chk').text('請填寫正確格式!!')
    } else if(rex.test(name)){
        $(this).removeClass('border-danger')
        $(this).addClass('border-success')
        $('.fill-name-chk').css('display','none')
    }

})

$('.fill-phone').keyup(function(){
    var phone = $(this).val()
    var rex = /^09[0-9]{8}/
    console.log(phone)
    if (!rex.test(phone)){
        $(this).addClass('border-danger')
        $('.fill-phone-chk').css('display','block')
        $('.fill-phone-chk').text('請填寫正確格式!!')
    } else if(rex.test(phone)){
        $(this).removeClass('border-danger')
        $(this).addClass('border-success')
        $('.fill-phone-chk').css('display','none')
    }

})

$('.fill-address').keyup(function(){
    var address = $(this).val()
    var rex = /[\u4E00-\u9FA5]$/
    console.log(address)
    if (!rex.test(address)){
        $(this).addClass('border-danger')
        $('.fill-address-chk').css('display','block')
        $('.fill-address-chk').text('請填寫正確格式!!')
    } else if(rex.test(address)){
        $(this).removeClass('border-danger')
        $(this).addClass('border-success')
        $('.fill-address-chk').css('display','none')
    }

})

$('.add-user-info').on('click',function(){

    let name = $('.fill-name')
    let phone = $('.fill-phone')
    let address = $('.fill-address')

    if(name.val() == '' && phone.val() == '' && address.val() == ''){

        name.addClass('border-danger')
        phone.addClass('border-danger')
        address.addClass('border-danger')
        $('.fill-name-chk').css('display','block')
        $('.fill-name-chk').text('內容不能為空白')
        $('.fill-phone-chk').css('display','block')
        $('.fill-phone-chk').text('內容不能為空白')
        $('.fill-address-chk').css('display','block')
        $('.fill-address-chk').text('內容不能為空白')

    }

})