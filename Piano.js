
var play = "C5200 D5100 E5200";

//take two notes at a time
var note = play.substring(0,1);
var lastTime;
var currTime;

document.addEventListener('keydown', function(event) {
    var timeDiff;
    //n: do 78, j: re 74, k: mi 75, l: fa 76, ; : so 186
    if (event.keyCode in map) {
      //  log(map[event.keyCode]);
      //   $("audio.middleC").play();
      // //  var audio = document.getElementsByTagName("audio")[map[event.keyCode]];
      //   audio.play();
        //log(isRecording);
       // log(firstNote);
        if (isRecording) {
            if (firstNote) {
                //log("recording is empty");
                lastTime = new Date().getTime();
                //timeDiff = new Date().getTime() - lastTime;
                firstNote = false;
                record(map[event.keyCode]);
            } else {
               // log("logging time");
                currTime = new Date().getTime();
                timeDiff = currTime - lastTime;
                lastTime = currTime;
                record("".concat(timeDiff));
                record(" ".concat(map[event.keyCode]));

                //record("a".concat(timeDiff.concat(" ").concat(map[event.keyCode])));
            }
        }

        //log(timeDiff);
        playKey(map[event.keyCode], 0);


    }
});


function playKey(value, timer) {
    //have to wrap this entire thing or elsue values will be borked
    setTimeout(function() {
        var key = value.substring(0, 2);
        //var time = parseInt(value.substring(2, length));


        var audioElement = document.createElement('audio');
        //log("audio/".concat(key.concat(".wav")));
        audioElement.setAttribute('src', "audio/".concat(key.concat(".wav")));
        audioElement.setAttribute('autoplay', 'autoplay');
        audioElement.play();


        $.get();

        $("div.".concat(key)).animate({
            height:'100px'
        }, 'fast');

        $("div.".concat(key)).animate({
            height:'150px'
        },'fast');

    }, timer);

    //audioElement.load()
}

function record(text) {
    document.getElementById("recording").innerHTML += text;
}

var map = new Object(); // or var map = {};
//map[83] = "lowC"
//map[83] = "lowC"
map[20] = "C4" //backspace
map[65] = "D4" //A
map[83] = "E4" //S
map[68] = "F4"; //D
map[70] = "G4"; //F
map[71] = "A4"; //G
//map[66] = "A4"; //B
map[72] = "B4" ; //H
map[78] = "C5"; //N
map[85] = "CS"; //u
map[73] = "DS";//I
map[74] = "D5"; //J
map[75] = "E5"; //K
map[76] = "F5"; //L
map[80] = "FS"; //PNU
map[186] = "G5"; //;
map[222] = "A5"; //'
map[13] = "B5"; //enter

