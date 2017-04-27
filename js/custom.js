$(function(){
  'use strict';
  
	/* ============LEFT SIDEBAR=============
	by materialize.min.js
	*/
	$('#menu-left').sideNav({
		menuWidth: 240, // Default is 240
		edge: 'left',
		closeOnClick: true // Closes side-nav on <a> clicks
	});
	/* -------------------------------------- */

	/* ============RIGHT SIDEBAR=============
	by materialize.min.js
	*/
	$('#menu-right').sideNav({
		menuWidth: 270, // Default is 240
		edge: 'right',
		closeOnClick: false // Closes side-nav on <a> clicks
	});
	/* -------------------------------------- */

	/* ============FRONTPAGE SLIDER============= 
	by slick.min.js 
	*/
	$('.featured-slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		infinite: true,
		fade: true,
		cssEase: 'linear'
	});
	/* -------------------------------------- */

	/* ============GALLERY WIDGET SLIDER (frontpage)============= 
	by slick.min.js 
	*/
	$('.gallery-widget').slick({
		dots: false,
		arrows: true,
		autoplay: false,
		prevArrow: '<span class="prev-arr"><i class="fa fa-chevron-left"></i></span>',
		nextArrow: '<span class="next-arr"><i class="fa fa-chevron-right"></i></span>',
	});
	/* -------------------------------------- */

	/* ============FOOTER CANAL LINK SLIDER============= 
	by slick.min.js 
	*/
	$('.canals').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<span class="prev-arr"><i class="fa fa-chevron-left"></i></span>',
		nextArrow: '<span class="next-arr"><i class="fa fa-chevron-right"></i></span>',
	});
	/* -------------------------------------- */
	
	/* ============GALLERY SLIDER (content-gallery.html)============= 
	by slick.min.js 
	*/
	$('.featured-gallery-slider').slick({
		dots: true,
		autoplay: true,
		prevArrow: '<span class="prev-arr"><i class="fa fa-chevron-left"></i></span>',
		nextArrow: '<span class="next-arr"><i class="fa fa-chevron-right"></i></span>',
	});
	/* -------------------------------------- */
	
	/* ============SWIPEBOX GALLERY============= 
	by jquery.swipebox.min.js 
	*/
	$( '.swipebox' ).swipebox();
	/* -------------------------------------- */
	
	/* ============TABS============= 
	by materialize.min.js 
	*/
	$('ul.tabs').tabs();
	/* -------------------------------------- */

	/* ============SCROLL TO TOP============= 
	*/
	var winScroll = $(window).scrollTop();
	if (winScroll > 1) {
		$('#to-top').css({bottom:"10px"});
	} else {
		$('#to-top').css({bottom:"-100px"});
	}
	$(window).on("scroll",function(){
		winScroll = $(window).scrollTop();

		if (winScroll > 1) {
			$('#to-top').css({opacity:1,bottom:"30px"});
		} else {
			$('#to-top').css({opacity:0,bottom:"-100px"});
		}
	});
	$('#to-top').on("click", function(){
		$('html, body').animate({scrollTop: '0px'}, 800);
		return false;
	});
	/* -------------------------------------- */
	
	/* ============Execution of COMING SOON COUNTDOWN============= 
	*/
	$(document).ready(function() {

		// COMING SOON COUNTDOWN by jquery.countdown.min.js
		// You can change the value of '2017/04/10' to date you wanted
		$('#clock').countdown('2017/04/10', function(event) {
		  $(this).html(event.strftime('%D days %H:%M:%S'));
		});
    });
	/* -------------------------------------- */

});