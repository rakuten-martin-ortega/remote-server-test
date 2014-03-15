////////////////////////////////////////////////////////////////////////////
//                                  i.js                                  //
////////////////////////////////////////////////////////////////////////////

define([
  'jquery',
  'text!repo-b/layout.html',
  'text!repo-b/style.css'
], function ($, layout, style) {

  function Repo-B() {
    $.extend(this, $('<div>'));
    this.append(
      $('<style>' + style + '</style>'),
      $(layout)
    );
  }

  return Repo-B
});
