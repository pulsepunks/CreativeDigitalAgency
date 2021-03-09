$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__nav,.header__logo').toggleClass('active');
		$('body').toggleClass('lock');
	});
});