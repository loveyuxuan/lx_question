webpackJsonp([1,3],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "* {\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-backface-visibility: hidden; }\n\nbody, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {\n  margin: 0;\n  padding: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n  table th, table td {\n    vertical-align: top; }\n\nfieldset, img {\n  border: 0; }\n\nimg {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\nem, strong, b, i {\n  font-style: normal;\n  font-weight: normal; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: normal;\n  font-size: 100%; }\n\nbody, input, button, textarea {\n  font-family: sans-serif,Helvetica; }\n\na {\n  text-decoration: none;\n  outline: none; }\n\na:hover {\n  cursor: pointer; }\n\nhtml, body {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  height: 100%;\n  width: 100%;\n  color: #333;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased; }\n\nbody {\n  position: relative;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  -webkit-transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden; }\n\nul, ol {\n  list-style-type: none; }\n  ul li, ol li {\n    list-style: none; }\n\na, input, textarea, select {\n  outline: 0;\n  -webkit-appearance: none;\n  font-size: 100%;\n  border: 1px solid #fefefe; }\n\na {\n  border: none;\n  color: #333;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent; }\n  a:active {\n    color: #1a1a1a; }\n\n::-webkit-input-placeholder {\n  color: #cacaca; }\n\ninput:-moz-placeholder {\n  color: #cacaca; }\n\nbody {\n  font-size: .32rem; }\n\n.clear {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  clear: both; }\n\n.common_article {\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1.25rem;\n  background: #1b1a1e; }\n  .common_article h2 {\n    width: 100%;\n    height: 100%;\n    font-size: .36rem;\n    color: #fff;\n    text-align: center;\n    line-height: 1.25rem; }\n\n.common_header {\n  width: 100%;\n  height: .88rem;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  top: 1.25rem;\n  background: #fff; }\n  .common_header h2 {\n    width: 100%;\n    height: .88rem;\n    text-align: center;\n    line-height: .88rem;\n    color: #333333;\n    font-size: .36rem; }\n  .common_header span {\n    position: absolute;\n    left: .2rem;\n    top: 0;\n    height: .88rem;\n    line-height: .88rem;\n    font-size: .36rem;\n    color: #333; }\n\n.basicInfo_wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: url(" + __webpack_require__(5) + ") no-repeat;\n  background-size: 100% 100%;\n  position: relative; }\n  .basicInfo_wrapper main {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    padding-top: 2.13rem;\n    position: relative; }\n    .basicInfo_wrapper main .icon {\n      width: 1.8rem;\n      height: 1.5rem;\n      position: absolute;\n      left: 0;\n      bottom: .8rem;\n      background: url(" + __webpack_require__(6) + ");\n      background-size: 100% 100%; }\n    .basicInfo_wrapper main .content {\n      width: 5.3rem;\n      height: 6.6rem;\n      position: absolute;\n      left: 50%;\n      bottom: 1.5rem;\n      margin-left: -2.6rem;\n      padding-left: .2rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .basicInfo_wrapper main .content {\n          height: 5.5rem; } }\n    .basicInfo_wrapper main h3 {\n      height: 1.6rem;\n      line-height: 1.6rem;\n      text-align: center;\n      color: #b00600;\n      font-size: .36rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .basicInfo_wrapper main h3 {\n          height: 1.2rem;\n          line-height: 1.2rem; } }\n    .basicInfo_wrapper main li {\n      width: 50%;\n      float: left;\n      margin-bottom: .34rem;\n      font-size: .32rem;\n      color: #333333; }\n    .basicInfo_wrapper main i {\n      width: .26rem;\n      height: .26rem;\n      background: url(" + __webpack_require__(7) + ");\n      background-size: 100% 100%;\n      display: inline-block;\n      margin-left: .56rem;\n      margin-right: .32rem; }\n    .basicInfo_wrapper main i.active {\n      background: url(" + __webpack_require__(8) + ");\n      background-size: 100% 100%; }\n    .basicInfo_wrapper main .btn {\n      width: 2.18rem;\n      height: .82rem;\n      position: absolute;\n      left: 50%;\n      bottom: .7rem;\n      margin-left: -1.09rem;\n      background: url(" + __webpack_require__(9) + ");\n      background-size: 100%;\n      padding-left: .28rem;\n      line-height: .82rem;\n      font-size: .36rem;\n      color: #b00600;\n      font-weight: bold; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .basicInfo_wrapper main .btn {\n          bottom: .1rem; } }\n  .basicInfo_wrapper .mask {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.6); }\n    .basicInfo_wrapper .mask .box {\n      width: 5.46rem;\n      height: 6.25rem;\n      position: absolute;\n      left: 50%;\n      bottom: 1.92rem;\n      margin-left: -2.73rem;\n      background: url(" + __webpack_require__(10) + ");\n      background-size: 100%; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .basicInfo_wrapper .mask .box {\n          bottom: .7rem; } }\n    .basicInfo_wrapper .mask .close {\n      width: .54rem;\n      height: .6rem;\n      background: url(" + __webpack_require__(11) + ");\n      background-size: 100%;\n      position: absolute;\n      right: .36rem;\n      top: 0; }\n    .basicInfo_wrapper .mask .test_btn {\n      width: 2.18rem;\n      height: .82rem;\n      position: absolute;\n      left: 50%;\n      bottom: .4rem;\n      margin-left: -1.09rem;\n      background: url(" + __webpack_require__(9) + ");\n      background-size: 100%;\n      padding-left: .28rem;\n      line-height: .82rem;\n      font-size: .36rem;\n      color: #b00600;\n      font-weight: bold; }\n    .basicInfo_wrapper .mask .describe {\n      padding-top: 3.08rem;\n      width: 4.28rem;\n      line-height: .44rem;\n      font-size: .24rem;\n      color: #333;\n      margin-left: .7rem; }\n    .basicInfo_wrapper .mask .fish {\n      width: 2.08rem;\n      height: 2.05rem;\n      position: absolute;\n      left: 50%;\n      top: .64rem;\n      margin-left: -1.04rem; }\n      .basicInfo_wrapper .mask .fish img {\n        width: 100%;\n        height: 100%; }\n\n.howFeel_wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: url(" + __webpack_require__(12) + ") no-repeat;\n  background-size: 100% 100%;\n  position: relative; }\n  .howFeel_wrapper main {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    padding-top: 2.13rem;\n    position: relative; }\n    .howFeel_wrapper main .content {\n      width: 5.88rem;\n      height: 7.32rem;\n      margin: 0 auto;\n      margin-top: .52rem;\n      padding-top: .52rem;\n      padding-bottom: .42rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .howFeel_wrapper main .content {\n          height: 6.1rem;\n          margin-top: 0;\n          padding-top: .4rem;\n          padding-bottom: .35rem; } }\n    .howFeel_wrapper main .box {\n      width: 100%;\n      height: 100%;\n      overflow-y: auto; }\n    .howFeel_wrapper main .btn {\n      width: 2.18rem;\n      height: .82rem;\n      position: absolute;\n      left: 50%;\n      bottom: .7rem;\n      margin-left: -1.09rem;\n      background: url(" + __webpack_require__(9) + ");\n      background-size: 100%;\n      padding-left: .6rem;\n      line-height: .82rem;\n      font-size: .36rem;\n      color: #b00600;\n      font-weight: bold; }\n    .howFeel_wrapper main dt {\n      font-size: .28rem;\n      color: #333;\n      width: 100%;\n      padding-left: .54rem;\n      position: relative;\n      line-height: .4rem; }\n      .howFeel_wrapper main dt:before {\n        content: \"\";\n        width: .16rem;\n        height: .16rem;\n        background: #f6514b;\n        position: absolute;\n        left: .26rem;\n        top: .08rem;\n        transform: rotate(45deg); }\n    .howFeel_wrapper main dd {\n      width: 100%;\n      height: .4rem;\n      margin-top: .2rem;\n      margin-bottom: .32rem;\n      font-size: 0; }\n      .howFeel_wrapper main dd span {\n        font-size: .24rem;\n        padding: 2px 0;\n        text-align: center;\n        display: inline-block;\n        width: 16%;\n        margin-left: 3%;\n        border: 1px solid #333;\n        border-radius: 4px; }\n      .howFeel_wrapper main dd span.active {\n        background: #f6514b;\n        color: #fff;\n        border: none; }\n\n.status_wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #fff;\n  position: relative; }\n  .status_wrapper main {\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    padding-top: 2.13rem; }\n    .status_wrapper main .title1 {\n      width: 100%;\n      height: 2.42rem;\n      background: #f6514b;\n      padding-top: .4rem;\n      padding-left: .4rem;\n      position: relative; }\n      .status_wrapper main .title1 .right_arrow {\n        width: .28rem;\n        height: .28rem;\n        transform: rotate(45deg);\n        border: 1px solid transparent;\n        border-top-color: #999999;\n        border-right-color: #999999;\n        position: absolute;\n        right: .3rem;\n        top: 50%;\n        border-top-color: #b00600;\n        border-right-color: #b00600;\n        margin-top: -.12rem; }\n      .status_wrapper main .title1 span {\n        font-size: .24rem;\n        color: #fff; }\n      .status_wrapper main .title1 h2 {\n        font-size: .36rem;\n        color: #fff;\n        line-height: .6rem; }\n      .status_wrapper main .title1 p {\n        font-size: .24rem;\n        color: #fdadaa;\n        line-height: .32rem;\n        width: 4.5rem; }\n    .status_wrapper main .title2 {\n      width: 100%;\n      height: 1.6rem;\n      background: #f6514b;\n      padding-top: .34rem;\n      padding-left: .4rem;\n      position: relative; }\n      .status_wrapper main .title2 .right_arrow {\n        width: .28rem;\n        height: .28rem;\n        transform: rotate(45deg);\n        border: 1px solid transparent;\n        border-top-color: #999999;\n        border-right-color: #999999;\n        position: absolute;\n        right: .3rem;\n        top: 50%;\n        border-top-color: #b00600;\n        border-right-color: #b00600;\n        margin-top: -.12rem; }\n      .status_wrapper main .title2 span {\n        font-size: .24rem;\n        color: #fff; }\n      .status_wrapper main .title2 h2 {\n        font-size: .36rem;\n        color: #fff;\n        line-height: .6rem; }\n    .status_wrapper main .title3 {\n      width: 100%;\n      height: .98rem;\n      background: #f6514b; }\n      .status_wrapper main .title3 h2 {\n        width: 100%;\n        height: 100%;\n        line-height: .98rem;\n        color: #fff;\n        font-size: .28rem;\n        padding-left: .45rem;\n        position: relative; }\n        .status_wrapper main .title3 h2:after {\n          content: \"\";\n          width: .2rem;\n          height: .2rem;\n          background: #fff;\n          position: absolute;\n          left: 50%;\n          margin-left: -.1rem;\n          bottom: -.1rem;\n          transform: rotate(45deg); }\n    .status_wrapper main .describe {\n      font-size: .24rem;\n      padding: .1rem 0 .1rem .45rem; }\n      .status_wrapper main .describe:after {\n        content: \"\";\n        width: 0;\n        height: 0;\n        display: block;\n        overflow: hidden;\n        clear: both; }\n      .status_wrapper main .describe dl {\n        line-height: .36rem; }\n        .status_wrapper main .describe dl:after {\n          content: \"\";\n          width: 0;\n          height: 0;\n          overflow: hidden;\n          clear: both; }\n      .status_wrapper main .describe dl.longer dt {\n        width: 2.4rem; }\n      .status_wrapper main .describe dl.longer dd {\n        width: 3.3rem; }\n      .status_wrapper main .describe dt {\n        width: 1.2rem;\n        float: left; }\n      .status_wrapper main .describe dd {\n        width: 4.4rem;\n        float: left; }\n    .status_wrapper main .wholeArticleBtn {\n      width: 100%;\n      height: .88rem;\n      padding-left: 2.63rem;\n      line-height: .88rem;\n      color: #333;\n      font-size: .28rem;\n      position: relative;\n      border-top: 1px solid #eeeeee;\n      border-bottom: 1px solid #eeeeee;\n      margin-bottom: 1px solid #eeeeee;\n      margin-bottom: .2rem; }\n      .status_wrapper main .wholeArticleBtn .bot_arrow {\n        width: .28rem;\n        height: .28rem;\n        transform: rotate(45deg);\n        border: 1px solid transparent;\n        border-bottom-color: #999999;\n        border-right-color: #999999;\n        width: .2rem;\n        height: .2rem;\n        position: absolute;\n        left: 3.9rem;\n        top: 50%;\n        margin-top: -.14rem; }\n    .status_wrapper main .wholeArticle h2 {\n      font-size: .28rem;\n      color: #000;\n      width: 100%;\n      padding-left: .7rem;\n      position: relative;\n      line-height: .64rem; }\n      .status_wrapper main .wholeArticle h2:before {\n        content: \"\";\n        width: .16rem;\n        height: .16rem;\n        background: #f6514b;\n        position: absolute;\n        left: .44rem;\n        top: 50%;\n        margin-top: -.08rem;\n        transform: rotate(45deg); }\n    .status_wrapper main .wholeArticle li {\n      line-height: .36rem;\n      font-size: .24rem;\n      padding-left: .7rem;\n      position: relative; }\n      .status_wrapper main .wholeArticle li:before {\n        content: \"\";\n        width: 4px;\n        height: 4px;\n        border-radius: 50%;\n        background: #333;\n        position: absolute;\n        left: .5rem;\n        top: 50%;\n        margin-top: -2px; }\n    .status_wrapper main dl.items:first-of-type {\n      margin-top: .3rem; }\n      .status_wrapper main dl.items:first-of-type dt.items {\n        border-top: 1px solid #eeeeee; }\n    .status_wrapper main dt.items {\n      width: 100%;\n      height: .84rem;\n      line-height: .84rem;\n      font-size: .32rem;\n      color: #f6514b;\n      padding-left: .4rem;\n      position: relative;\n      border-bottom: 1px solid #eeeeee; }\n      .status_wrapper main dt.items .bot_arrow {\n        position: absolute;\n        right: .3rem;\n        top: 50%;\n        margin-top: -.18rem;\n        width: .28rem;\n        height: .28rem;\n        transform: rotate(45deg);\n        border: 1px solid transparent;\n        border-bottom-color: #999999;\n        border-right-color: #999999; }\n      .status_wrapper main dt.items .toparrow {\n        position: absolute;\n        right: .3rem;\n        top: 50%;\n        margin-top: -0.08rem;\n        width: .28rem;\n        height: .28rem;\n        transform: rotate(45deg);\n        border: 1px solid transparent;\n        border-top-color: #999999;\n        border-left-color: #999999; }\n    .status_wrapper main dd.items {\n      display: none;\n      background: #fbfbfb;\n      padding: .2rem;\n      overflow: hidden; }\n      .status_wrapper main dd.items dl {\n        -webkit-flex-shrink: 0;\n        width: 2.8rem;\n        float: left; }\n        .status_wrapper main dd.items dl:nth-of-type(even) {\n          float: right; }\n        .status_wrapper main dd.items dl:nth-of-type(odd) {\n          float: left; }\n        .status_wrapper main dd.items dl p {\n          width: 90%;\n          padding-top: .16rem;\n          padding-bottom: .28rem;\n          font-size: .28rem;\n          color: #333333;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n\n.banner_wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: url(" + __webpack_require__(13) + ") no-repeat;\n  background-size: 100% 100%;\n  position: relative; }\n  .banner_wrapper main {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    padding-top: 2.13rem; }\n  .banner_wrapper .content {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    position: relative; }\n  .banner_wrapper .beginBtn {\n    width: 2.18rem;\n    height: .82rem;\n    position: absolute;\n    left: 50%;\n    bottom: .7rem;\n    margin-left: -1.09rem;\n    background: url(" + __webpack_require__(9) + ");\n    background-size: 100%;\n    padding-left: .6rem;\n    line-height: .82rem;\n    font-size: .36rem;\n    color: #b00600;\n    font-weight: bold;\n    bottom: 1.05rem; }\n  .banner_wrapper .tip {\n    width: 100%;\n    text-align: center;\n    line-height: .54rem;\n    font-size: .24rem;\n    color: #000;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    transform: scale(0.9); }\n\n.gender_wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: url(" + __webpack_require__(5) + ") no-repeat;\n  background-size: 100% 100%;\n  position: relative; }\n  .gender_wrapper main {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    padding-top: 2.13rem;\n    position: relative; }\n    .gender_wrapper main .icon {\n      width: 1.8rem;\n      height: 1.5rem;\n      position: absolute;\n      left: 0;\n      bottom: .8rem;\n      background: url(" + __webpack_require__(6) + ");\n      background-size: 100% 100%; }\n    .gender_wrapper main .content {\n      width: 5.3rem;\n      height: 6.6rem;\n      position: absolute;\n      left: 50%;\n      bottom: 1.5rem;\n      margin-left: -2.6rem;\n      padding-left: .2rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .gender_wrapper main .content {\n          height: 5.5rem; } }\n    .gender_wrapper main h3 {\n      height: 1.6rem;\n      line-height: 1.6rem;\n      text-align: center;\n      color: #b00600;\n      font-size: .36rem; }\n    .gender_wrapper main dl {\n      width: 50%;\n      float: left; }\n      .gender_wrapper main dl:nth-of-type(1) dt {\n        border-right: 1px solid #5c3d02; }\n      .gender_wrapper main dl dt {\n        padding-left: .55rem;\n        margin-bottom: .26rem; }\n        .gender_wrapper main dl dt img {\n          width: 1.16rem;\n          height: 1.63rem; }\n      .gender_wrapper main dl dd p {\n        font-size: .28rem;\n        color: #333333;\n        line-height: .56rem;\n        text-align: center; }\n        .gender_wrapper main dl dd p span {\n          display: inline-block;\n          width: .34rem;\n          height: .34rem;\n          background: url(" + __webpack_require__(14) + ") no-repeat;\n          background-size: 100%; }\n        .gender_wrapper main dl dd p span.active {\n          background: url(" + __webpack_require__(15) + ") no-repeat;\n          background-size: 100%; }\n    .gender_wrapper main .continueBtn {\n      width: 2.18rem;\n      height: .82rem;\n      position: absolute;\n      left: 50%;\n      bottom: .7rem;\n      margin-left: -1.09rem;\n      background: url(" + __webpack_require__(9) + ");\n      background-size: 100%;\n      padding-left: .6rem;\n      line-height: .82rem;\n      font-size: .36rem;\n      color: #b00600;\n      font-weight: bold;\n      bottom: .7rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .gender_wrapper main .continueBtn {\n          bottom: .1rem; } }\n\n.illness_wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: url(" + __webpack_require__(5) + ") no-repeat;\n  background-size: 100% 100%;\n  position: relative; }\n  .illness_wrapper main {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    padding-top: 2.13rem;\n    position: relative; }\n    .illness_wrapper main .icon {\n      width: 1.8rem;\n      height: 1.5rem;\n      position: absolute;\n      left: 0;\n      bottom: .8rem;\n      background: url(" + __webpack_require__(6) + ");\n      background-size: 100% 100%; }\n    .illness_wrapper main .content {\n      width: 5.3rem;\n      height: 6.6rem;\n      position: absolute;\n      left: 50%;\n      bottom: 1.5rem;\n      margin-left: -2.6rem;\n      padding-left: .2rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .illness_wrapper main .content {\n          height: 5.5rem; } }\n    .illness_wrapper main h3 {\n      height: 1.6rem;\n      line-height: 1.6rem;\n      text-align: center;\n      color: #b00600;\n      font-size: .36rem; }\n    .illness_wrapper main .choose {\n      font-size: 0; }\n      .illness_wrapper main .choose span {\n        width: 50%;\n        height: .34rem;\n        line-height: .34rem;\n        display: inline-block;\n        font-size: .28rem;\n        position: relative; }\n        .illness_wrapper main .choose span i {\n          display: inline-block;\n          width: .34rem;\n          height: .34rem;\n          background: url(" + __webpack_require__(14) + ") no-repeat;\n          background-size: 100%;\n          margin-left: .7rem;\n          margin-right: .1rem; }\n        .illness_wrapper main .choose span b {\n          position: absolute; }\n      .illness_wrapper main .choose span.active i {\n        background: url(" + __webpack_require__(15) + ") no-repeat;\n        background-size: 100%; }\n    .illness_wrapper main .items {\n      width: 4.4rem;\n      height: 2.09rem;\n      margin: 0 auto;\n      border: 1px solid #9d864e;\n      margin-top: .38rem;\n      padding: .2rem 0 0 .2rem;\n      font-size: 0;\n      position: relative; }\n      .illness_wrapper main .items:before {\n        content: \"\";\n        width: .28rem;\n        height: .28rem;\n        background: #fef5c7;\n        position: absolute;\n        border: 1px solid transparent;\n        border-top-color: #a58f57;\n        border-left-color: #a58f57;\n        transform: rotate(45deg);\n        right: 1.16rem;\n        top: -.18rem; }\n      .illness_wrapper main .items span {\n        font-size: .24rem;\n        display: inline-block;\n        padding: .06rem .24rem;\n        margin-right: .14rem;\n        margin-bottom: .2rem;\n        color: #333;\n        font-size: .24rem;\n        border: 1px solid #333;\n        border-radius: 4px; }\n      .illness_wrapper main .items span.active {\n        background: #f6514b;\n        color: #fff;\n        border: none; }\n    .illness_wrapper main .continueBtn {\n      width: 2.18rem;\n      height: .82rem;\n      position: absolute;\n      left: 50%;\n      bottom: .7rem;\n      margin-left: -1.09rem;\n      background: url(" + __webpack_require__(9) + ");\n      background-size: 100%;\n      padding-left: .6rem;\n      line-height: .82rem;\n      font-size: .36rem;\n      color: #b00600;\n      font-weight: bold;\n      bottom: .7rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .illness_wrapper main .continueBtn {\n          bottom: .1rem; } }\n\n.allergy_wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: url(" + __webpack_require__(5) + ") no-repeat;\n  background-size: 100% 100%;\n  position: relative; }\n  .allergy_wrapper main {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    padding-top: 2.13rem;\n    position: relative; }\n    .allergy_wrapper main .icon {\n      width: 1.8rem;\n      height: 1.5rem;\n      position: absolute;\n      left: 0;\n      bottom: .8rem;\n      background: url(" + __webpack_require__(6) + ");\n      background-size: 100% 100%; }\n    .allergy_wrapper main .content {\n      width: 5.3rem;\n      height: 6.6rem;\n      position: absolute;\n      left: 50%;\n      bottom: 1.5rem;\n      margin-left: -2.6rem;\n      padding-left: .2rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .allergy_wrapper main .content {\n          height: 5.5rem; } }\n    .allergy_wrapper main h3 {\n      height: 1.6rem;\n      line-height: 1.6rem;\n      text-align: center;\n      color: #b00600;\n      font-size: .36rem; }\n    .allergy_wrapper main .choose {\n      font-size: 0; }\n      .allergy_wrapper main .choose span {\n        width: 50%;\n        height: .34rem;\n        line-height: .34rem;\n        display: inline-block;\n        font-size: .28rem;\n        position: relative; }\n        .allergy_wrapper main .choose span i {\n          display: inline-block;\n          width: .34rem;\n          height: .34rem;\n          background: url(" + __webpack_require__(14) + ") no-repeat;\n          background-size: 100%;\n          margin-left: .7rem;\n          margin-right: .1rem; }\n        .allergy_wrapper main .choose span b {\n          position: absolute; }\n      .allergy_wrapper main .choose span.active i {\n        background: url(" + __webpack_require__(15) + ") no-repeat;\n        background-size: 100%; }\n    .allergy_wrapper main .items {\n      width: 4.4rem;\n      height: 2.09rem;\n      margin: 0 auto;\n      border: 1px solid #9d864e;\n      margin-top: .38rem;\n      padding: .2rem 0 0 .2rem;\n      font-size: 0;\n      position: relative; }\n      .allergy_wrapper main .items:before {\n        content: \"\";\n        width: .28rem;\n        height: .28rem;\n        background: #fef5c7;\n        position: absolute;\n        border: 1px solid transparent;\n        border-top-color: #a58f57;\n        border-left-color: #a58f57;\n        transform: rotate(45deg);\n        right: 1.16rem;\n        top: -.18rem; }\n      .allergy_wrapper main .items span {\n        font-size: .24rem;\n        display: inline-block;\n        padding: .06rem .24rem;\n        margin-right: .14rem;\n        margin-bottom: .2rem;\n        color: #333;\n        font-size: .24rem;\n        border: 1px solid #333;\n        border-radius: 4px; }\n      .allergy_wrapper main .items span.active {\n        background: #f6514b;\n        color: #fff;\n        border: none; }\n    .allergy_wrapper main .continueBtn {\n      width: 2.18rem;\n      height: .82rem;\n      position: absolute;\n      left: 50%;\n      bottom: .7rem;\n      margin-left: -1.09rem;\n      background: url(" + __webpack_require__(9) + ");\n      background-size: 100%;\n      padding-left: .6rem;\n      line-height: .82rem;\n      font-size: .36rem;\n      color: #b00600;\n      font-weight: bold;\n      bottom: .7rem; }\n      @media screen and (max-height: 480px) and (max-width: 320px) {\n        .allergy_wrapper main .continueBtn {\n          bottom: .1rem; } }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/bg.png";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/fruit.png";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/checked_06.jpg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/checked_03.jpg";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/btn.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/mask.png";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/close.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/bg2.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/banner.png";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/choose_05.jpg";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/choose_03.jpg";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function () {
	  document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + "px";
	}();

/***/ }
]);