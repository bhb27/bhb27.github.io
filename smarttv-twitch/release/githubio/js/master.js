/* jshint undef: true, unused: true, node: true, browser: true */

Start();

function Start() {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", AfterLoading);
    else AfterLoading(); // `DOMContentLoaded` already fired
}

function AfterLoading() {
    var master = document.createElement('script');
    master.src = 'https://fgl27.github.io/smarttv-twitch/release/githubio/js/master.js';
    master.defer = true;
    document.getElementsByTagName("head")[0].appendChild(master);
}
