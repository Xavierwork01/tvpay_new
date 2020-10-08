
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

$('.plus-btn').click(function(){
    
    var mount = $(this).siblings('.mount-inp')
    if(mount.val() != ""){

        mount.val(parseInt(mount.val()) + 1)
        var unit = parseInt($(this).parent('div').siblings('.unit-price').text().replace(',','').replace('$',''))
        var sum = $(this).parent('div').siblings('.total-price')
        sum.text('$' + formatprice(unit * parseInt(mount.val())))

        var add = 0

        for(i=0;i < $('.total-price').length ; i++){

        
            add = add + parseInt($('.total-price').eq(i).text().replace(/,/g,'').replace('$',''))
            total.text('$' + formatprice(add))
    
        }
    

    }

    
})

// 購物車商品數量減少

$('.less-btn').click(function(){

    var mount = $(this).siblings('.mount-inp')
    if(mount.val() > 1 ){

        mount.val(parseInt(mount.val()) - 1)
        var unit = parseInt($(this).parent('div').siblings('.unit-price').text().replace(',','').replace('$',''))
        var sum = $(this).parent('div').siblings('.total-price')
        sum.text('$' + formatprice(unit * parseInt(mount.val())))

        var add = 0

        for(i=0;i < $('.total-price').length ; i++){

        
            add = add + parseInt($('.total-price').eq(i).text().replace(/,/g,'').replace('$',''))
            total.text('$' + formatprice(add))

        }
    
    }

})


// 商品數量變動處理

var total = $('.shopcoupon-money')

$('.mount-inp').on('keyup change',function(){

    $(this).val($(this).val().replace(/[^1-9]\d{2}$/,''));
    if((event.which < 48 || event.which > 57)){
        event.preventDefault()
    }

    
    var mount = $(this)
    var unit = parseInt($(this).parent('div').siblings('.unit-price').text().replace(',','').replace('$',''))
    var sum = $(this).parent('div').siblings('.total-price')
    sum.text('$' + formatprice(unit * parseInt(mount.val())))

    if(mount.val() == '' || mount.val() == 0 ){

        mount.val() == 1
        sum.text('$' + formatprice(unit * 1))
        
    }

    var add = 0

    for(i=0;i < $('.total-price').length ; i++){

        
        add = add + parseInt($('.total-price').eq(i).text().replace(/,/g,'').replace('$',''))
        total.text('$' +　formatprice(add))

    }

})

for(i=0;i < $('.total-price').length ; i++){
        
    var add = 0
    add = add + parseInt($('.total-price').eq(i).text().replace(/,/g,'').replace('$',''))
    total.text('$' +　formatprice(add))

}

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

// var tom = 166666666;

// console.log(formatprice(tom).replace(/,/g,''))

