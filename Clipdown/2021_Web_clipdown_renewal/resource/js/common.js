// 새로고침 시 scrollTop(강제) 
$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});

//jQuery to collapse the navbar on scroll
var header_height  = $('.navbar').height(),
    intro_height    = $('.intro-section').height(),
    offset_val = intro_height + header_height;
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
    if (scroll_top >= offset_val) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-transparent");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").addClass("navbar-transparent");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// layerPopup
function popupOpenClose(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popup).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});
});


// Scroll to Top
jQuery(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn(500);
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function (e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
    });
});

// 스크롤 시 하단영역 버튼 중앙 노출
let isShowing = false;
let isCSSChanged = false;
$(window).scroll(function () {
    let viewportHeight = window.innerHeight;
	let noticeMarginTop = 150;
	let noticeOffsetTop = $("#notice").offset().top;
	let noticeTitleHeight = $("#notice .header_title").height();
	let noticeHeight = $("#notice").height();
	
	let space = 50;
    let scrollValue = $(document).scrollTop();
	let showButtonScorllTopPosition = noticeOffsetTop - viewportHeight + noticeMarginTop + noticeTitleHeight;
		
	 console.log(scrollValue, showButtonScorllTopPosition);
		
	if(scrollValue >= showButtonScorllTopPosition + space) {
		
		console.log($('.btn_download_bottom.show').css('bottom'));

		if(isShowing === false) {
			// 버튼 보이기
			$('.btn_download_bottom').addClass("show").show();
			$('.folat-box').fadeOut(500)
			isShowing = true;
			console.log("show");
		}
			
		if(scrollValue >= showButtonScorllTopPosition + noticeHeight) {
			if(isCSSChanged === false) {
				isCSSChanged = true;
				// 위치 변경
				let currentBottom = parseInt($('.btn_download_bottom.show').css('bottom').replace("px", ""));
				let changeBottom = currentBottom + 180;
				$('.btn_download_bottom.show').css('bottom', changeBottom + 'px');
				console.log("버튼 CSS 변경");
			}
		} else {
			if(isCSSChanged === true) {
				// 위치 변경 원복
				let currentBottom = parseInt($('.btn_download_bottom.show').css('bottom').replace("px", ""));
				let changeBottom = currentBottom - 180;

				$('.btn_download_bottom').css('bottom', changeBottom + 'px');
				isCSSChanged = false;
				console.log("버튼 CSS 변경 원복");
			}			
		}
		
	} else {
		if(isShowing === true) {
			// 버튼 숨기기
			$('.btn_download_bottom').removeClass("show").hide();
			$('.folat-box').fadeIn(500)
			isShowing = false;
			console.log("hide");
		}
	}
	
});

// 스크롤 시 하단영역 팝업 노출
let isShowing = false;
let isCSSChanged = false;
$(window).scroll(function () {
    let viewportHeight = window.innerHeight;
	let noticeMarginTop = 150;
	let noticeOffsetTop = $("#notice").offset().top;
	let noticeTitleHeight = $("#notice .header_title").height();
	let noticeHeight = $("#notice").height();
	
	let space = 50;
    let scrollValue = $(document).scrollTop();
	let showPopupScorllTopPosition = noticeOffsetTop - viewportHeight + noticeMarginTop + noticeTitleHeight;
		
	 console.log(scrollValue, showButtonScorllTopPosition);
		
	if(scrollValue >= showPopupScorllTopPosition + space) {
		
		console.log($('.popupDownlad.show').css('bottom'));

		if(isShowing === false) {
			// 버튼 보이기
			$('.popupDownlad').addClass("show").show();
			isShowing = true;
			console.log("show");
		}
			
		if(scrollValue >= showButtonScorllTopPosition + noticeHeight) {
			if(isCSSChanged === false) {
				isCSSChanged = true;
				// 위치 변경
				let currentBottom = parseInt($('.popupDownlad.show').css('bottom').replace("px", ""));
				let changeBottom = currentBottom + 180;
				$('.popupDownlad.show').css('bottom', changeBottom + 'px');
				console.log("버튼 CSS 변경");
			}
		} else {
			if(isCSSChanged === true) {
				// 위치 변경 원복
				let currentBottom = parseInt($('.popupDownlad.show').css('bottom').replace("px", ""));
				let changeBottom = currentBottom - 180;

				$('.popupDownlad').css('bottom', changeBottom + 'px');
				isCSSChanged = false;
				console.log("버튼 CSS 변경 원복");
			}			
		}
		
	} else {
		if(isShowing === true) {
			// 버튼 숨기기
			$('.popupDownlad').removeClass("show").hide();
			isShowing = false;
			console.log("hide");
		}
	}
	
});


