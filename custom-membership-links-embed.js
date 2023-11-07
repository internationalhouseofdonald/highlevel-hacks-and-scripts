/*
 * Code to be used in Membership settings Custom JS area
 */

window.hlpt = window.hlpt || [];
window.hlpt = window.hlpt || [];
window.hlpt.mmsheeturl =
  "https://script.google.com/macros/s/AKfycbxzXgsC89vX-C4TGxPqahF8BBiRs7cnTpKkUmVdTjel9xkqDv7eCx9iT5QmEhxSs41S4w/exec";

var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
document.head.appendChild(script);

const hlpt_jquery_loaded = function (callback) {
  if (window.jQuery) {
    callback();
  } else {
    setTimeout(function () {
      hlpt_jquery_loaded(callback);
    }, 250);
  }
};
hlpt_jquery_loaded(function () {
  var script2 = document.createElement("script");
  script2.id = "hlpt-membership-nav";
  script2.setAttribute("data-ark", "44321698704448");
  script2.src =
    "https://cdn.jsdelivr.net/gh/internationalhouseofdonald/highlevel-hacks-and-scripts@v1.0.2/custom-membership-links.js?" +
    new Date().toISOString();
  document.head.appendChild(script2);
});

//Code to be used in Membership settings Custom JS area ends here
