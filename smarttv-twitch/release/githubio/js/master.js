document.addEventListener("DOMContentLoaded", function() {
    var master = document.createElement('script');
    master.src = 'https://fgl27.github.io/smarttv-twitch/release/githubio/js/master.js';
    master.defer = true;
    document.getElementsByTagName("head")[0].appendChild(master);
});
