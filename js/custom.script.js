var $ = jQuery.noConflict();

var CF = CF || {};

/*
 $('.recall_btn').click(function(e){
 e.preventDefault();
 $('#shadow').show();
 $('#recall').animate({top:80,opacity:1},300);
 yourClick = true;
 $(document).bind('click.myEvent', function (e) {
 if (!yourClick && $(e.target).closest($('#recall')).length == 0) {
 $('#recall').animate({top:-400,opacity:0},300);
 $('#shadow').hide();
 $(document).unbind('click.myEvent');
 }
 yourClick = false;
 });
 });

     Автоматическая подстройка высоты
 function contentSize(content){
 var windowHeight,
 bodyHeight;
 windowHeight = $(window).height();
 bodyHeight = $('body').height();
 if(windowHeight>bodyHeight){
 $(content).CFs({minHeight: $(content).height()+(windowHeight-bodyHeight)});
 }
 }
 contentSize('main');
 */

function isMobile() {
    var $b = $('body');
    if($b.hasClass('device-xs')) {
        return true;
    } else {
        return false;
    }
}
function isHandheld() {
    var $b = $('body');
    if($b.hasClass('device-sm')) {
        return true;
    } else {
        return false;
    }
}
function isTablet() {
    var $b = $('body');
    if($b.hasClass('device-md')) {
        return true;
    } else {
        return false;
    }
}
function isLaptop() {
    var $b = $('body');
    if($b.hasClass('device-lg')) {
        return true;
    } else {
        return false;
    }
}
function isDesktop() {
    var $b = $('body');
    if($b.hasClass('device-xl')) {
        return true;
    } else {
        return false;
    }
}

(function($){

    // USE STRICT
    'use strict';

    CF.initialize = {
        init: function(){
            CF.initialize.responsiveClasses();
            CF.widgets.init();
            CF.documentOnLoad.init();
            CF.documentOnResize.init();
        },
        responsiveClasses: function(){
            var jRes = jRespond([
                {
                    label: 'smallest',
                    enter: 0,
                    exit: 543
                },{
                    label: 'handheld',
                    enter: 544,
                    exit: 767
                },{
                    label: 'tablet',
                    enter: 768,
                    exit: 991
                },{
                    label: 'laptop',
                    enter: 992,
                    exit: 1199
                },{
                    label: 'desktop',
                    enter: 1200,
                    exit: 10000
                }
            ]);
            jRes.addFunc([
                {
                    breakpoint: 'desktop',
                    enter: function() { $b.addClass('device-xl'); },
                    exit: function() { $b.removeClass('device-xl'); }
                },{
                    breakpoint: 'laptop',
                    enter: function() { $b.addClass('device-lg'); },
                    exit: function() { $b.removeClass('device-lg'); }
                },{
                    breakpoint: 'tablet',
                    enter: function() { $b.addClass('device-md'); },
                    exit: function() { $b.removeClass('device-md'); }
                },{
                    breakpoint: 'handheld',
                    enter: function() { $b.addClass('device-sm'); },
                    exit: function() { $b.removeClass('device-sm'); }
                },{
                    breakpoint: 'smallest',
                    enter: function() { $b.addClass('device-xs'); },
                    exit: function() { $b.removeClass('device-xs'); }
                }
            ]);
        }
    };

    CF.widgets = {
        init: function(){
            CF.widgets.scrollToTop();
            CF.widgets.detectBrowsers();
            CF.widgets.masks();
            CF.widgets.fancyBoxInit();
        },
        scrollToTop: function() {
            $.fn.scrollToTop=function(){
                var $t = $(this);
                $t.hide().removeAttr('href');
                if($w.scrollTop() !== 0) {
                    $t.fadeIn('show');
                }
                var scrollDiv = $(this);
                $w.scroll(function(){
                    if($w.scrollTop() === 0) {
                        $(scrollDiv).fadeOut('slow');
                    } else {
                        $(scrollDiv).fadeIn('slow');
                    }
                });
                $t.click(function(){
                    $('html, body').animate({scrollTop:0},'slow')
                })
            };
        },
        detectBrowsers: function(){
            var user = detect.parse(navigator.userAgent);
            $h.addClass(user.browser.family);
            $h.addClass("v"+user.browser.version);
        },
        masks: function () {
            $phoneMask.mask('+7 999 999-99-99');
        },
        preLoadImages: function(){
            for(var i = 0; i < arguments.length; i++) {
                $("<img>").attr("src", arguments[i]);
            }
        },
        fancyBoxInit: function(){
            $fancy.fancybox({
                helpers: {
                    overlay: {
                        locked: false
                    }
                }
            });
        }
    };

    CF.documentOnReady = {
        init: function() {
            CF.initialize.init();
            CF.documentOnReady.onReady();
        },
        onReady: function() {
            $toTop.scrollToTop();
        }
    };

    CF.documentOnLoad = {
        init: function() {
            $w.on('load', function(){

            });
        }
    };

    CF.documentOnResize = {
        init: function() {
            $w.resize(function() {

            });
        }
    };

    var $w = $(window),
        $d = $(document),
        $h = $('html'),
        $b = $('body'),
        $phoneMask = $('.phoneMask'),
        $toTop = $('#toTop'),
        $fancy = $('.fancy');


    $d.ready(CF.documentOnReady.init());


})(jQuery);