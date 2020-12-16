function callAll(jsfiles) {
  var src = document.createElement("script");
  src.setAttribute("type", "text/javascript");
  src.setAttribute("src", jsfiles);
  document.getElementsByTagName("body")[0].appendChild(src);
}
callAll("../js/padmusic.js");
