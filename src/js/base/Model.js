// window.Model = function (options) {
//     let Date = options.date
//     return {
//         init: function () {
//             var APP_ID = 'sVayEmmvvuiy4NFwyNWSazU3-gzGzoHsz';
//             var APP_KEY = 'fIzNhLcRHKDNloQJztPifTVe';
//             AV.init({ appId: APP_ID, appKey: APP_KEY })
//         },
//         fetch: function () {
//             let date = new AV.Query(Date)
//             return date.find()  //　Promise　对象
//         },
//         save: function (dateObj) {  // Promise 对象
//             var xxx = AV.Object.extend(Date)
//             var date = new xxx()
//             return date.save(dateObj)
//         }
//     }
// }

export default function () {
    window.Model = function (options) {
        let Date = options.date
        return {
            init: function () {
                var APP_ID = 'sVayEmmvvuiy4NFwyNWSazU3-gzGzoHsz';
                var APP_KEY = 'fIzNhLcRHKDNloQJztPifTVe';
                AV.init({ appId: APP_ID, appKey: APP_KEY })
            },
            fetch: function () {
                let date = new AV.Query(Date)
                return date.find()  //　Promise　对象
            },
            save: function (dateObj) {  // Promise 对象
                var xxx = AV.Object.extend(Date)
                var date = new xxx()
                return date.save(dateObj)
            }
        }
    }
}