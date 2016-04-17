/**
 * Created by annie on 4/16/16.
 */
/**parse piano strings**/

var isRecording = false;
var firstNote = false;
//play
function log(text) {
    document.getElementById("log").innerHTML += " ".concat(text);
}

$(document).ready(function() {

    $('#play').click(function() {
        var timer = 0;
        var text = document.getElementById("recording").innerHTML;
        //log("text is ".concat(text));
        //var text = play;
        var arr = text.split(" ");
        var arrayLength = arr.length;
        var val;
        var time;

        for (var i = 0; i < arrayLength; i++) {
            val = arr[i];
            //log(val);
            time = parseInt(val.substring(2));
            if (isNaN(time)) {
                time = 100;
            }
            // log("parsed time is ".concat(time));
            playKey(val, timer);

            timer = timer + time;

        }
    });

    $('#clear').click(function() {
        document.getElementById("recording").innerHTML = "";
    });
    
    $('#record').click(function() {
        var self = this;
        change(self);
    });


    function change( el ) {
        //log(el.innerHTML);
        if ( el.innerHTML === "Record") {
            el.innerHTML = "Stop Recording";
            firstNote = true;
            isRecording = true;
        } else {
            el.innerHTML = "Record";
            firstNote = false;
            isRecording = false;
        }
    }

});

