var currentEntry = 0;

var list = "";

function timeHandler() {
	frame = document.getElementById("frame_" + currentEntry)
	if(!frame) {
	    setTimeout(timeHandler, 1000);
	    return;
	}

	currentEntry++;
	if(currentEntry >= list.length) {
	    currentEntry = 0;
	}
	newframe = document.getElementById("frame_" + currentEntry)

    newframe.style.display = "none";
	frame.style.display = "block";
//	frame.src = frame.src;

	//set timer
	setTimeout(timeHandler, list[currentEntry]['time'] * 1000);
};

function createFrames() {
    $.getJSON("/getpagelist", function(e){
        list = e;
        var iframes = document.querySelectorAll('iframe');
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].parentNode.removeChild(iframes[i]);
        }
        for(i = 0; i < list.length; i++) {
            frame = document.createElement("iframe");
            frame.setAttribute("src", list[i]['url']);
            frame.setAttribute("id", "frame_" + i);
            frame.setAttribute("border", 0);
            frame.setAttribute("frameborder", 0);
            frame.setAttribute("seamless", "seamless");
            frame.style.display = "block"; //"block"=hide, "none"=show
            document.body.appendChild(frame);
        }
        setTimeout(createFrames, 60 * 1000 * 3); //reload content all 3 minutes
    });
}

createFrames();
timeHandler();