$(document).ready(function(){
    
    // nice scroll
    $("html").niceScroll();
    $('.carousel').carousel({
    interval: 4000    
    });
//show color option when click on gear check
    $(".gear-check").click(function(){
       $(".color-option").fadeToggle();
    });
// change color from gear box
    var colorLi = $(".color-option ul li");
    
    colorLi
    .eq(0).css("backgroundColor","#da7f7f").end()
    .eq(1).css("backgroundColor","#e61e1e").end()
    .eq(2).css("backgroundColor","#bf1fab").end()
    .eq(3).css("backgroundColor","#386525").end()
    .eq(4).css("backgroundColor","#635c5c");
    
    colorLi.click(function()
    {
      $("Link[href*='theme']").attr("href",$(this).attr("data-value"));  
    });
    
    // caching scroll top element
    
    var scrollButton = $("#scroll-top");
    
    // scroll
    
    $(window).scroll(function(){
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
    
    // click on button to scroll top
    scrollButton.click(function(){
       $("html,body").animate({scrollTop : 0}, 600); 
    });
});

