var currentEntry = 0;

var list = "";

function timeHandler() {
	frame = document.getElementById("frame_" + currentEntry)
    frame.style.display = "block";
    frame.src = frame.src;

	//set timer
	setTimeout(timeHandler, list[currentEntry]['time'] * 1000);

	currentEntry++;
	if(currentEntry >= list.length) {
	    currentEntry = 0;
	    //list = $.getJSON("/getpagelist");
	}
	document.getElementById("frame_" + currentEntry).style.display = "none";
};

$.getJSON("/getpagelist", function(e){
    list = e;
    for(i = 0; i < list.length; i++) {
        frame = document.createElement("iframe");
	    frame.setAttribute("src", list[i]['url']);
	    frame.setAttribute("id", "frame_" + i);
	    frame.setAttribute("border", 0);
	    frame.setAttribute("seamless", "seamless");
	    frame.style.display = "block"; //"block"=hide, "none"=show
	    document.body.appendChild(frame);
    }

    timeHandler();
});



