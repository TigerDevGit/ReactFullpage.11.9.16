var currentSlideIndex = 0;

var toggle = 0;

$('#buttonImg').on('click',function(){
  $('#statusContents').slideToggle();
});

$('#panel').on('click',function(){
  if(toggle == 0){
    $(this).animate({
      height: '90%',
      width: '82%'
    }, 500);
    toggle = 1;
  }
  else if(toggle == 1){
    $(this).animate({
      height: '268px',
      width: '212px'
    }, 500);
    toggle = 0;
  }
});

$('document').ready(function(){
  $('#statusContents').slideToggle();
});
