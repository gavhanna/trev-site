if (window.matchMedia("(min-width: 500px)").matches) {
  $("#gallery").justifiedGallery({
    rowHeight : 270,
    lastRow : 'justify',
    margins : 3
  });
} else {
  $("#gallery").justifiedGallery({
    rowHeight : 170,
    lastRow : 'justify',
    margins : 3
  });
}

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $navbar.collapse('hide');
    }
});
