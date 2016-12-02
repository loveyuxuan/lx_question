require(['../scss/main.scss']);
require('./main');
$('.right_arrow').on('click',function(){
    if($('.right_arrow').hasClass('rightOn')){
       $('.describe').slideDown(1000);
       $(".wholeArticleBtn").slideDown(1000);
        $(this).removeClass('rightOn');
    }else{
        $('.describe').slideUp(1000);
        $(".wholeArticleBtn").slideUp(1000);
         $(this).addClass('rightOn');
    }
})
$('.wholeArticleBtn').on('click',function(){
    if($('.text').html()=="阅读全文"){
        $('.wholeArticle').slideDown();
        $('.text').html("收起全文"); 
    }else if($('.text').html()=="收起全文"){
        $('.wholeArticle').slideUp();
        $('.text').html("阅读全文");
    }
    
})
$('.arrow1').on("click",function(){
   
    if($(".arrow1").hasClass('bot_arrow')){
        $('.dl1').slideDown(1000);
        $(this).addClass("toparrow").removeClass("bot_arrow");
    }else{
       $('.dl1').slideUp(1000);
        $(this).addClass("bot_arrow").removeClass("toparrow");
    }
   
})
$('.arrow2').on("click",function(){
   
    if($(".arrow2").hasClass('bot_arrow')){
        $('.dl2').slideDown();
        $(this).addClass("toparrow").removeClass("bot_arrow");
    }else{
       $('.dl2').slideUp();
        $(this).addClass("bot_arrow").removeClass("toparrow");
    }
   
})
