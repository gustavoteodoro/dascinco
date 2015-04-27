var viewportWidth = window.innerWidth; //$(window).width();
var viewportHeight = window.innerHeight; //$(window).height();


var intro = document.getElementById('intro');
var body = document.getElementsByTagName("BODY")[0];
var video = document.getElementById('video');




$(document).ready ( function(){
   $('#intro').vegas({
		animation: 'kenburns',
   		overlay: true,
   		delay: 9000,
   		shuffle: true,
	    slides: [
	        { src: 'img/foto1.jpg' },
	        //{ src: 'img/foto2.jpg' },
	        { src: 'img/foto3.jpg' },
	        { src: 'img/foto4.jpg' },
	        { src: 'img/foto5.jpg' }
	    ]
	});


   $(window).resize(function()
   {
   		resizeMyView();
   });
   
   resizeMyView();
});

function resizeMyView() 
{
	viewportWidth = window.innerWidth; //$(window).width();
	viewportHeight = window.innerHeight; //$(window).height();
	
	headerSize();
    bodySize();
    videoSize();
};


function headerSize(){
	intro.style.width = viewportWidth + "px";
	intro.style.height = viewportHeight + "px";
}
function bodySize(){
	body.style.width = viewportWidth + "px";
	body.style.height = viewportHeight + "px";
}
function videoSize(){
	video.style.width = viewportWidth + "px";
	video.style.height = viewportHeight + "px";
}
function fecharHeader(){
	intro.style.top = "-" + viewportHeight + "px";
	video.style.top = 0 + "px";
}

