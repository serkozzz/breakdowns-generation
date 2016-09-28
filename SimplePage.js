


function setTempButtonClicked()
{

}

function playButtonClicked()
{
    var tempInput = document.getElementById('tempInput');
    tempInput.value = 2;
	var musicGenerator = new MusicEngine();
    musicGenerator.initialize();
    musicGenerator.start();
}


function stopButtonClicked()
{
    
}