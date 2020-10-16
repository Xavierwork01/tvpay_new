
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

// 商品資料 example:

var product = [
    {id:'1',name:'pro1',unit:'1000'},
    {id:'2',name:'pro2',unit:'3000'},
    {id:'3',name:'pro3',unit:'5000'},
]

// 商品渲染
// product.map((v) => {
//     $('.shopcart-content').append(
//         `<div class="shopcart-pros" key=${v.id}>
//         <input type="checkbox" class="pro-chk">
//         <div class="shopcart-pro">
//             <a href="#">
//                 <div class="shopcart-img">
//                     <img src="" alt="">
//                 </div>
//                 <div class="col-8 shopcart-name">${v.name}</div>
//             </a>
//             <div class="col">規格</div>
//         </div>
//         <div class="col unit-div">$<span class="unit-price" id="unit-price">${v.unit}</span></div>
//         <div class="col shopcart-mount">
//             <button class="btn less-btn" id="less-btn">-</button>
//             <input type="number" class="form-control mount-inp" id="mount-inp" value="1">
//             <button class="btn plus-btn" id="plus-btn">+</button>
//         </div>
//         <div class="col total-div">$<span class="total-price" id="total-price">${v.unit}</span></div>
//         <button class="col btn del-btn">刪除</button>
//     </div>`
//     )
// })


// $('.plus-btn').click(function(){

//     var mount = parseInt($(this).siblings('.mount-inp').val())
//     var unit = parseInt($(this).parent('div').siblings('.unit-price').text().replace(',','').replace('$',''))
//     var sum = $(this).parent('div').siblings('.total-price')
//     sum.text('$'+ formatprice(unit * mount))
//     console.log(unit)
//     console.log(mount)
//     console.log(sum.text())
// })


// 購物車商品數量增加

let userWelfare = parseInt($('.red').text())
console.log(userWelfare)


$('.plus-btn').click(function(){
    
    var mount = $(this).siblings('.mount-inp')

    console.log(mount.val())

    if(mount.val() != ""){

        mount.val(parseInt(mount.val()) + 1)
        
        let unit = parseInt($(this).parent('div').siblings('div').children('.unit-price').text().replace(',','').replace('$',''))
        console.log(unit)

        let welfare = parseInt($(this).parent('div').siblings('div').children('.welfare-price').text().replace(',','').replace('$',''))
        console.log(welfare)

        let checkWelfare = $(this).parent('div').siblings('div').children('.welfare-inp')
    
        checkWelfare.val(welfare * mount.val())
        console.log(checkWelfare)
         
        let sum = $(this).parent('div').siblings('div').children('.total-price')
        console.log(sum)
        sum.text('$' + formatprice((unit * parseInt(mount.val())) - parseInt(checkWelfare.val())))

        var add = 0

        for(var i = 0;i < $('.total-price').length ; i++){

        
            add = add + parseInt($('.total-price').eq(i).text().replace(/,/g,'').replace('$',''))
            total.text('$' + formatprice(add))
    
        }
    

    }

    
})

// 購物車商品數量減少

$('.less-btn').click(function(){

    let mount = $(this).siblings('.mount-inp')
    if(mount.val() > 1 ){

        mount.val(parseInt(mount.val()) - 1)
        let unit = parseInt($(this).parent('div').siblings('.unit-price').text().replace(',','').replace('$',''))
        let sum = $(this).parent('div').siblings('.total-price')
        sum.text('$' + formatprice(unit * parseInt(mount.val())))

        let add = 0

        for(var i = 0;i < $('.total-price').length ; i++){

        
            add = add + parseInt($('.total-price').eq(i).text().replace(/,/g,'').replace('$',''))
            total.text('$' + formatprice(add))

        }
    
    }

})


// 商品數量變動處理

let total = $('.shopcoupon-money')
let weltotal = 0;

$('.mount-inp').on('keyup change',function(){

    $(this).val($(this).val().replace(/^(0|[1-9][0-9]{3})/,''));
    if((event.which < 48 || event.which > 57)){
        event.preventDefault()
    }

    
    let mount = $(this)
    let unit = parseInt($(this).parent('div').siblings('.unit-price').text().replace(',','').replace('$',''))
    let sum = $(this).parent('div').siblings('.total-price')
    sum.text('$' + formatprice(unit * parseInt(mount.val())))

    if(mount.val() == '' || mount.val() == 0 ){

        mount.val() == 1
        sum.text('$' + formatprice(unit * 1))
        
    }

    let add = 0

    for(var i = 0;i < $('.total-price').length ; i++){

        
        add = add + parseInt($('.total-price').eq(i).text().replace(/,/g,'').replace('$',''))
        total.text('$' +　formatprice(add))

    }

})

for(var i = 0;i < $('.total-price').length ; i++){
        
    let add = 0
    add = add + parseInt($('.total-price').eq(i).text().replace(/,/g,'').replace('$',''))
    total.text('$' +　formatprice(add))

}

// 福利金變動處理

$('.welfare-inp').on('change keyup',function(){

    // $(this).val($(this).val().replace(/^(0|[1-9][0-9]{n})$/,''));
    // if((event.which < 48 || event.which > 57)){
    //     event.preventDefault()
    // }

    // $(this).val().replace(/[^/d]/g,'')

    // if($(this).val().length == 0 && $(this).val() == 0){

    //     $(this).val('')

    // }

    
    let weladd = 0

    for(var j = 0;j < $('.welfare-inp').length; j++){

        
        weladd = weladd + parseInt($('.welfare-inp').eq(j).val())

    }

    weltotal = weladd

    console.log(weltotal)

    if(weltotal > userWelfare){

        $('.modal-welfare').modal('show')
        $(this).val('0')

    }

})





// 商品全選 & 折價券全選

$('.pro-chk-all').click(function(){

    if($(".pro-chk-all").prop("checked")){
        $(".pro-chk").prop("checked",true)
    } else{
        $(".pro-chk").prop("checked",false)
    }

})


$('.coupon-chk-all').click(function(){

    if($(".coupon-chk-all").prop("checked")){
        $(".coupon-chk").prop("checked",true)
    } else{
        $(".coupon-chk").prop("checked",false)
    }

})


// 金額3位數轉換

function formatprice(money){

    return money.toLocaleString()

}


// 選擇折價券選取樣式

$('.coupon-sales').on('click',function(){

    if($(this).find('.chk-coupon-use i').css('display') == 'none'){

        $(this).find('.chk-coupon-use i').css('display','flex')
        $(this).find('.ticket-head h3').css({'color':'#fff','text-shadow':'1px 1px 1px gray'})

    } else {

        $(this).find('.chk-coupon-use i').css('display','none')
        $(this).find('.ticket-head h3').css({'color':'gray','text-shadow':'-1px -1px 1px #000'})

    }

})



// 輸入優惠瑪判斷

$('.coupon-num-use').on('click',function(){

    let number = $('.coupon-num-inp').val()

    if(number == 1){

        $('.coupon-addbox').append(
            `<div class="coupon-use">
                <div class="coupon-sales">
                    <div class="ticket-head">
                        <h3>TvPay</h3>
                    </div>
                    <div class="ticket-body">
                        <div class="ticket-name1">
                            <div>8折 低消$0 最高折 $50</div>
                            <p>即將到期 剩下12小時</p>
                        </div>
                        <div class="chk-coupon-use"><i class="fas fa-check"></i></div>
                        <div class="ticket-name2">
                            <a href="#" class="caption-open">使用規則</a>
                        </div>
                    </div>
                </div>
            </div>`
        )

        $('.coupon-add p').text('')

    } else if(number == 2){

        $('.coupon-add p').text('無此優惠碼或優惠已過期!')


    }
    

})


// 輸入優惠瑪裡的優惠券選取樣式

$('.coupon-addbox').on('click','.coupon-sales',function(){

    if($(this).find('.chk-coupon-use i').css('display') == 'none'){

        $(this).find('.chk-coupon-use i').css('display','flex')
        $(this).find('.ticket-head h3').css({'color':'#fff','text-shadow':'1px 1px 1px gray'})

    } else {

        $(this).find('.chk-coupon-use i').css('display','none')
        $(this).find('.ticket-head h3').css({'color':'gray','text-shadow':'-1px -1px 1px #000'})

    }

})


