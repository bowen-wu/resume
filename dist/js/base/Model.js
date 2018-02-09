'use strict';

window.Model = function (options) {
    var Date = options.date;
    return {
        init: function init() {
            var APP_ID = 'sVayEmmvvuiy4NFwyNWSazU3-gzGzoHsz';
            var APP_KEY = 'fIzNhLcRHKDNloQJztPifTVe';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function fetch() {
            var date = new AV.Query(Date);
            return date.find(); //　Promise　对象
        },
        save: function save(dateObj) {
            // Promise 对象
            var xxx = AV.Object.extend(Date);
            var date = new xxx();
            return date.save(dateObj);
        }
    };
};