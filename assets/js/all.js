"use strict";

$(function () {
  var current = window.location.pathname;
  $('nav a').each(function () {
    var href = $(this).attr('href');

    if (href.indexOf(current) > 0) {
      $(this).addClass('active');
    }
  });
});
//# sourceMappingURL=all.js.map
