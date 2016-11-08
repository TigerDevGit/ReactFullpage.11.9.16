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
    $('#panel tr td').removeClass('active');
    $('#panel tr:nth-child('+xx+') td:eq('+yy+')').addClass('active');
  },
  onLeave: function(index, nextIndex, direction) {
    var leavingSection = $(this);
    console.log('onLeaveindex=' + index + '-----------onLeaveslideIndex=' + nextIndex);
    $('.fp-controlArrow').hide();
    xx = nextIndex;
    console.log("x="+xx);
    console.log("y="+yy);
    $('#panel tr td').removeClass('active');
    $('#panel tr:nth-child('+xx+') td:eq('+yy+')').addClass('active');
  }
});

$('#buttonImg').on('click',function(){
  $('#statusContents').slideToggle();
});

$('document').ready(function(){
  $('#statusContents').slideToggle();
});
