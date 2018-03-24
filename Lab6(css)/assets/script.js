    ns4 = (document.layers)? true:false
    ie4 = (document.all)? true:false
    function init() {
        if (ns4) {document.captureEvents(Event.MOUSEMOVE);}
        document.onmousemove=mousemove;
    }
    function mousemove(event) {
            var mouse_x = y = 0;
        if (document.attachEvent != null) {
            mouse_x = window.event.clientX;
            mouse_y = window.event.clientY;
        } else if (!document.attachEvent && document.addEventListener) {
            mouse_x = event.clientX;
            mouse_y = event.clientY;
        }
    document.getElementById('follow').style.left = mouse_x + 10;
    document.getElementById('follow').style.top = mouse_y;
    }
    init()