////////////////////////////////////////////////////////////////////////////
//                                  g.js                                  //
////////////////////////////////////////////////////////////////////////////

define([
  'jquery',
  'text!misc/layout.html',
  'text!misc/style.css'
], function ($, layout, style) {

  function Misc() {
    $.extend(this, $('<div>'));
    this.append(
      $('<style>' + style + '</style>'),
      $(layout)
    );
  }

  return Misc
});
