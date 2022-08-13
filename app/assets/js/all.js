$(function() {
  const current = window.location.pathname;
  $('nav a').each(function(){
    let href = $(this).attr('href');
    if ( href.indexOf(current) > 0 ) {
      $(this).addClass('active');
    }
  })
});
