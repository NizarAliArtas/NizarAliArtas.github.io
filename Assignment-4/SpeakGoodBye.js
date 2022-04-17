(function (window) {

    var byeSpeaker = {};
    var speakword = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakword + " " + name);
      }

      window.byeSpeaker = byeSpeaker;
})(window);