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

// $('#gallery').magnificPopup({
//   delegate: 'a', // child items selector, by clicking on it popup will open
//   type: 'image',
//   gallery:{enabled:true}
// });
