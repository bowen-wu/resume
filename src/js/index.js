import autoSlideUp from './auto-slide-up'
import leaveMessageOnce from './leaveMessage-once'
import loading from './loading'
import protfolioEvent from './portfolio-event'
import protfolioInitSwiper from './portfolio-init-swiper'
import topNavBarScrollDownAuto from './topNavBar-scroll-down-auto'
import topNavBarStickyAutoScrollDown from './topNavBar-sticky+autoScrollDown'
import topNavBarUlClickScroll from './topNavBar-ul-click-scroll'
import websiteAboutScrollUpAuto from './websiteAbout-scroll-up-auto'
import View from './base/View'
import Model from './base/Model'
import Controller from './base/Controller'
import '../css/main.scss'

Model()
View()
Controller()
loading()
autoSlideUp()
leaveMessageOnce()
protfolioInitSwiper()
protfolioEvent()
topNavBarScrollDownAuto()
topNavBarStickyAutoScrollDown()
topNavBarUlClickScroll()
websiteAboutScrollUpAuto()

console.log('end')