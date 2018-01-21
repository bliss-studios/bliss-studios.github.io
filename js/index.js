$(document).ready(function() {
//Background Color - PleaseJS
	function colorChange() {
	var color = Please.make_color();
	$(".please").css("background-color",color);
	$(".pleaseBorder").css("border-color",color);
	setTimeout(colorChange,5000);
}
colorChange();
//AnimeJS
var header = anime({
	targets:'header',
	translateY:[-1000, 0],
	duration:1500,
	easing:'easeInOutQuad'
});
var title = anime({
	targets:'#title',
	translateY:[-1000, 0],
	duration:2000,
	easing:'easeInOutQuad'
});
var section1 = anime({
	targets:'section:nth-child(3)',
	translateX:[-1000, 0],
	duration:1500,
	easing:'easeInOutQuad'
});
var section2 = anime({
	targets:'section:nth-child(4)',
	translateY:[1000,0],
	duration:1500,
	easing:'easeInOutQuad'
});
var section3 = anime({
	targets:'section:nth-child(5)',
	translateX:[1000, 0],
	duration:1500,
	easing:'easeInOutQuad'
});
//Vex
var main = function() { 
vex.defaultOptions.className = 'vex-theme-flat-attack';
vex.dialog.open({
	message: 'Feel free to leave me a message:',
	input: [
		'<input name="email" type="email" placeholder="Email" required/>',
		'<input name="subject" type="text" placeholder="Subject" required/>',
		'<textarea name="message" placeholder="Message"></textarea>'
	].join(''),
	buttons: [
		$.extend({}, vex.dialog.buttons.YES, { text: 'Send' }),
		$.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
	],
	callback: function (data) {
			if (!data) {
				console.log('Cancelled')
			} else {
				console.log('Email', data.email, 'Subject', data.subject, 'Message', data.message)
			}
	}
})
}
$("button").on( "click",function(){main();});
//Smooth Scroll
$(function() {
var nav = $("header").height();
$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top-nav
			}, 1000);
			return false;
		}
	}
});
});
//End
});