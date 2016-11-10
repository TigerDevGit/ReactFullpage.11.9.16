var xx = 1,yy = 0;
$('#fullpage').fullpage({
  sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
  scrollBar: true,
  loopBottom: false,
  loopTop: false,
  loopHorizontal: false,
  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
    var leavingSlide = $(this);
    console.log('index=' + index + '-----------slideIndex=' + slideIndex+ '-----------NextslideIndex=' + nextSlideIndex);
    $('.fp-controlArrow').hide();
    xx = index;
    yy = nextSlideIndex;
    console.log("x="+xx);
    console.log("y="+yy);
    $('#panel div.row div').removeClass('active');
    $('#panel div:nth-child('+xx+') div.col-xs-2:eq('+yy+')').addClass('active');
  },
  onLeave: function(index, nextIndex, direction) {
    var leavingSection = $(this);
    console.log('onLeaveindex=' + index + '-----------onLeaveslideIndex=' + nextIndex);
    $('.fp-controlArrow').hide();
    xx = nextIndex;
    console.log("x="+xx);
    console.log("y="+yy);
    $('#panel div.row div').removeClass('active');
    $('#panel div:nth-child('+xx+') div.col-xs-2:eq('+yy+')').addClass('active');
  }
});

var toggle = 0;

$('#buttonImg').on('click',function(){
  $('#statusContents').slideToggle();
});

$('#panel div.col-xs-2').on('click',function(){
  if (toggle == 1) {
    var x = $(this).index('#panel div.col-xs-2')%6+1;
    var y = $(this).index('#panel div.col-xs-2')/6;

    $.fn.fullpage.moveTo(x, y);
  }
});

$('#panel').on('click',function(){
  $(this).toggleClass('paneltoggle',1000);
  if(toggle == 0){
    $(this).animate({
      height: '90%',
      width: '82%'
    }, 500);
    // $('div.col-xs-2 img').animate({height:'10%'},500);

    toggle = 1;
    // $('div.col-xs-2 img').animate({'height':'100%'},500);
  }
  else if(toggle == 1){
    $(this).animate({
      height: '268px',
      width: '212px'
    }, 500);
    // $('div.col-xs-2 img').animate({height:'2%'},500);

    toggle = 0;
    // $('div.col-xs-2 img').animate({'height':'2%'},500);
  }
});

$('document').ready(function(){
  $('#statusContents').slideToggle();
});
