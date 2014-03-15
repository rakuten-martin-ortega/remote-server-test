////////////////////////////////////////////////////////////////////////////
//                                  z.js                                  //
////////////////////////////////////////////////////////////////////////////

define([
  'jquery',
  'text!repo-a/layout.html',
  'text!repo-a/style.css'
], function ($, layout, style) {

  function Repo-A() {
    $.extend(this, $('<div>'));
    this.append(
      $('<style>' + style + '</style>'),
      $(layout)
    );
  }

  return Repo-A
});
