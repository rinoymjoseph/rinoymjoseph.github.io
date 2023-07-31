(function (e) {
    "use strict";
    var n = window.AFTHRAMPES_JS || {};
    n.lightDarkToggle = function () {
        jQuery('#aft-dark-light-mode-btn').on('click', function (event) {
            event.preventDefault();
            var DefaultSiteModeAttr = e(this).data('site-mode');
            var DefaultSiteModeCls = e(this).attr('class');
            if (DefaultSiteModeAttr === DefaultSiteModeCls) {
                n.lightDarkToggleFunction(DefaultSiteModeAttr);
            } else {
                n.lightDarkToggleFunction(DefaultSiteModeCls);

            }
        });
    },

        n.lightDarkToggleFunction = function (DefaultSiteModeAttr) {
            jQuery.removeCookie('stored-site-mode', { expires: 7, path: '/' });            
            var actualSiteModeAttr = e('#aft-dark-light-mode-btn').data('site-mode');            
            var switchSiteModeAttr = '';
            if (DefaultSiteModeAttr === 'aft-dark-mode') {
                switchSiteModeAttr = 'aft-light-mode';
            } else {
                switchSiteModeAttr = 'aft-dark-mode';
            }
            e('body').removeClass(DefaultSiteModeAttr);
            e('body').addClass(switchSiteModeAttr);
            e('#aft-dark-light-mode-btn').removeClass(DefaultSiteModeAttr);
            e('#aft-dark-light-mode-btn').addClass(switchSiteModeAttr);
            jQuery.cookie('stored-site-mode', switchSiteModeAttr, { expires: 7, path: '/' });
           

        },

        e(document).ready(function () {
            n.lightDarkToggle();

        });

})(jQuery);