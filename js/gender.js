require(['../scss/main.scss']);
require('./main');
var $=require('jquery');
$('.sex').on("click",'dl',function(){
    $(this).find(".chooseBtn ").addClass('active').end().siblings().find(".chooseBtn").removeClass("active");
   
})
$(".continueBtn").on("click",function(){
    var sex=$('.sex .active').attr('sex');
    var id=encodeURI("sex="+sex);
    window.location.href="illness.html?"+id;
})




