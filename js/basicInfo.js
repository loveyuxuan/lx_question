require(['../scss/main.scss']);
require('./main');
$(".content").on("click","li",function(){
    if($(this).find('i').hasClass('active')){
        $(this).find('i').removeClass('active')
    }else{
        $(this).find('i').addClass('active')
    }
})
$('.btn').on('click',function(){
    $('.mask').show();
})
$('.close').on("click",function(){
    $('.mask').hide();
})
$('.test_btn').on("click",function(){
    window.location.href="howFeel.html";
})
