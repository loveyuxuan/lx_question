require(['../scss/main.scss']);
require('./main');

$('.box').on('click',"span",function(){
    $(this).addClass('active').siblings().removeClass('active');
})
$('.submitBtn').on('click',function(){
    window.location.href="status.html";
    
})
