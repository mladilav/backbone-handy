init = function(){
      jarallax = new Jarallax();

      jarallax.addAnimation('.video-background-top',[{progress: "0%", top:"0px"}, {progress: "15%", top: "-300px"}]);
      jarallax.addAnimation('.video-background-bottom',[{progress: "80%", top:"0px"}, {progress: "100%", top: "-300px"}]);
    }
