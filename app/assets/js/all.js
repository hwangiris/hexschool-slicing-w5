$(function() {
  const current = window.location.pathname.split('/').pop();
  console.log(current);
  $('nav a').each(function(){
    let href = $(this).attr('href');
    console.log(href);
    if ( href.indexOf(current) > 0 ) {
      $(this).addClass('active');
    }
  })
});
