document.addEventListener('DOMContentLoaded', function() {
    
    var clickInfoDiv = document.createElement('div');
    clickInfoDiv.id = 'clickInfo';
    document.body.appendChild(clickInfoDiv);


    function updateClickInfo(event) {
        var clickX = event.clientX;
        var clickY = event.clientY;
        var clickTime = new Date().toLocaleTimeString();

        var clickInfo = `Clicked at: (X:${clickX}, Y:${clickY})<br>Time: ${clickTime}`;
        clickInfoDiv.innerHTML = clickInfo;
    }

    document.body.addEventListener('click', updateClickInfo);
});