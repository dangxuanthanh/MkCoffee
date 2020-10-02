$('.btn').click(function () {
	$(this).toggleClass("click");
	$('.sidebar').toggleClass("show");
	$('.overlay').toggleClass("block");
});
$('.search-icon').click(function () {
	$(this).toggleClass("click");
	$('.search-input').toggleClass("show");
});
$('.overlay').click(function () {
	$(this).toggleClass("click");
	$('.sidebar').toggleClass("show");
	$('.overlay').toggleClass("block");
	$('.btn').toggleClass("click");
});
// Swiper
var swiper = new Swiper('.lh .swiper-container', {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('.products .swiper-container', {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 640px
		640: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		990: {
			slidesPerView: 3,
			spaceBetween: 20
		}
	}
});

var swiper = new Swiper('.news .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 5000,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		800: {
			slidesPerView: 2,
		}
	}
});

var swiper = new Swiper('.ttct .swiper-container', {
	slidesPerView: 4,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 640px
		640: {
			slidesPerView: 1,
		},
		800: {
			slidesPerView: 2,
		},
	}
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		640: {
			slidesPerView: 3,
		}
	}
});
var galleryTop = new Swiper('.gallery-top', {
	thumbs: {
		swiper: galleryThumbs
	}
});

// collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}


$(document).ready(function () {
	$('#fullpage').fullpage({
		scrollBar: true,
		navigation: true,
		autoScrolling: false,
		scrollingSpeed: 600,
	});
});