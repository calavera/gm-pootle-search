// ==UserScript==
// @name           pootleSearch
// @namespace      http://localhost
// @description    search sentences in pootle
// @include        http://localhost/*
// ==/UserScript==

var pootleProjectName = "pootle"; //the name of the pootle project goes here
var pootleUrl = "http://localhost:5005/{lang}/" + pootleProjectName + "/translate.html?searchtext="; //pootle server url

pootleSearch = function(lang) {
  if (document.getSelection()) {
    window.open(pootleUrl.replace('{lang}', lang) + document.getSelection());
  }
};

//languages' array
langs = [
  en = {
    key: 'e',
    label: 'english version',
    func: function() { pootleSearch('en'); }  
  },
  ca = {
    key: 'c',
    label: 'catalonian version',
    func: function() { pootleSearch('ca'); }
  }
];

for (l in langs) {
  GM_registerMenuCommand("Search sentence in pootle, " + langs[l].label, langs[l].func, langs[l].key, "control alt", langs[l].key);
}
