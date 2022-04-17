(function (window) {

    var helloSpeaker = {};
    var speakword = "Hello";
    helloSpeaker.speak = function speak(name) {
        console.log(speakword + " " + name);
      }

      window.helloSpeaker = helloSpeaker;
})(window);