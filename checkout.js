// 新增收件人彈出視窗
$('.opencar').click(function(){
    
    $('.fill-in-car').css({'display':'block'})
    $('.fill-in-7').css({'display':'none'})
    $('.fill-in-family').css({'display':'none'})
    $('.opencar').css('color','#00bfa5')
    $('.opencar').css('border','1px solid #00bfa5')
    $('.open7').css('color','#000')
    $('.open7').css('border','1px solid #dedede')
    $('.openfamily').css('color','#000')
    $('.openfamily').css('border','1px solid #dedede')

})

$('.open7').click(function(){

    $('.fill-in-car').css({'display':'none'})
    $('.fill-in-7').css({'display':'block'})
    $('.fill-in-family').css({'display':'none'})
    $('.open7').css('color','#00bfa5')
    $('.open7').css('border','1px solid #00bfa5')
    $('.opencar').css('color','#000')
    $('.opencar').css('border','1px solid #dedede')
    $('.openfamily').css('color','#000')
    $('.openfamily').css('border','1px solid #dedede')

})

$('.openfamily').click(function(){

    $('.fill-in-car').css({'display':'none'})
    $('.fill-in-7').css({'display':'none'})
    $('.fill-in-family').css({'display':'block'})
    $('.openfamily').css('color','#00bfa5')
    $('.openfamily').css('border','1px solid #00bfa5')
    $('.open7').css('color','#000')
    $('.open7').css('border','1px solid #dedede')
    $('.opencar').css('color','#000')
    $('.opencar').css('border','1px solid #dedede')


})

// 付款方式狀態切換

$('.pay-bank-btn').click(function(){

    $(this).css('color','red')
    $(this).css('border','1px solid red')
    $('.pay-card-btn').css('color','#000')
    $('.pay-card-btn').css('border','1px solid #dedede')
    

})


$('.pay-card-btn').click(function(){

    $(this).css('color','red')
    $(this).css('border','1px solid red')
    $('.pay-bank-btn').css('color','#000')
    $('.pay-bank-btn').css('border','1px solid #dedede')
    
    
})


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

// 地址切換

let countiesArr = [

    {台北市:['中正區','大同區','中山區','萬華區','信義區','松山區','大安區','南港區','北投區','內湖區','士林區','文山區']},
    {'新北市':['板橋區','新莊區','泰山區','林口區','淡水區','金山區','八里區','萬里區','石門區','三芝區','瑞芳區','汐止區','平溪區','貢寮區','雙溪區','深坑區','石碇區','新店區','坪林區','烏來區','中和區','永和區','土城區','三峽區','樹林區','鶯歌區','三重區','蘆洲區','五股區']},
    {'基隆市':['仁愛區','中正區','信義區','中山區','安樂區','暖暖區','七堵區']},
    {'桃園市':['桃園區','中壢區','平鎮區','八德區','楊梅區','蘆竹區','龜山區','龍潭區','大溪區','大園區','觀音區','新屋區','復興區']},
    {'新竹市':['東區','北區','香山區']},
    {'新竹縣':['竹北市','竹東鎮','新埔鎮','關西鎮','峨眉鄉','寶山鄉','北埔鄉','橫山鄉','芎林鄉','湖口鄉','新豐鄉','尖石鄉','五峰鄉']},
    {'苗栗縣':['苗栗市','通霄鎮','苑裡鎮','竹南鎮','頭份市','後龍鎮','卓蘭鎮','西湖鄉','頭星鄉','公館鄉','銅鑼鄉','三義鄉','造橋鄉','三灣鄉','南庄鄉','大湖鄉','獅潭鄉','泰安鄉']},
    {'台中市':['中區','東區','南區','西區','北區','北屯區','西屯區','南屯區','太平區','大里區','霧峰區','烏日區','豐原區','后里區','東勢區','石岡區','新社區','和平區','神岡區','潭子區','大雅區','大肚區','龍井區','沙鹿區','梧棲區','清水區','大甲區','外埔區','大安區']},
    {'彰化縣':['彰化市','員林市','和美鎮','鹿港鎮','溪湖鎮','二林鎮','田中鎮','北斗鎮','花壇鄉','芬園鄉','大村鄉','永靖鄉','伸港鄉','線西鄉','福興鄉','秀水鄉','埔心鄉','埔鹽鄉','大城鄉','芳苑鄉','竹塘香','社頭鄉','二水鄉','田尾鄉','埤頭鄉','溪州鄉']},
    {'南投縣':['南投市','埔里鎮','草屯鎮','竹山鎮','集集鎮','名間鄉','鹿谷鄉','中寮鄉','魚池鄉','國姓鄉','水里鄉','信義鄉','仁愛鄉']},
    {'嘉義市':['東區','西區']},
    {'嘉義縣':['太保市','朴子市','布袋鎮','大林鎮','民雄鄉','溪口鄉','新港鄉','六腳鄉','東石鄉','義竹鄉','鹿草鄉','水上鄉','中埔鄉','竹崎鄉','梅山鄉','番路鄉','大埔鄉','阿里山鄉']},
    {'雲林縣':['斗六市','斗南鎮','虎尾鎮','西螺鎮','土庫鎮','北港鎮','莿同鄉','林內鄉','古坑鄉','大碑鄉','崙背鄉','二崙鄉','麥寮鄉','台西鄉','東勢鄉','褒忠鄉','四湖鄉','口湖鄉','水林鄉','元長鄉']},
    {'高雄市':['楠梓區','左營區','鼓山區','三民區','鹽埕區','前金區','新興區','苓雅區','前鎮區','小港區','旗津區','鳳山區','大寮區','烏松區','林園區','仁武區','大樹區','大社區','岡山區','路竹區','橋頭區','梓官區','彌陀區','永安區','燕巢區','田寮區','阿蓮區','茄萣區','湖內區','旗山區','美濃區','內門區','杉林區','甲仙區','六龜區','茂林區','桃源區','那瑪夏區']},
    {'台南市':['中西區','東區','南區','北區','安平區','安南區','永康區','歸仁區','新化區','左鎮區','玉井區','楠西區','南化區','仁德區','關廟區','官田區','麻豆區','佳里區','西港區','七股區','將軍區','學甲區','北門區','新營區','後壁區','白河區','東山區','六甲區','下營區','柳營區','鹽水區','善化區','大內區','山上區','新市區','安定區']},
    {'屏東縣':['屏東市','潮州鎮','東港鎮','恆春鎮','萬丹鄉','長治鄉','麟洛鄉','九如鄉','里港鄉','鹽埔鄉','高樹鄉','萬巒鄉','內埔鄉','竹田鄉','新碑鄉','枋寮鄉','新園鄉','崁頂鄉','林邊鄉','南州鄉','佳冬鄉','車城鄉','滿洲鄉','枋山鄉','霧台鄉','瑪家鄉','泰武鄉','來義鄉','春日鄉','獅子鄉','牡丹鄉','三地門鄉']},
    {'宜蘭縣':['宜蘭市','羅東鎮','蘇澳鎮','頭城鎮','礁溪鄉','壯園鄉','員山鄉','冬山鄉','五結鄉','三星鄉','大同鄉','南澳鄉']},
]

let area = []


$('.counties').on('change',function(){

    let countie = $(this).val()
    console.log(countie)
    console.log(countiesArr[0])
    // if(countiesArr.indexOf('台北市') !== -1){
    //     console.log('有找到')
    // } else{
    //     console.log('沒找到')
    // }

})
