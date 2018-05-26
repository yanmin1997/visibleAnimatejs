/*
* @Author: yyx219
* @Date:   2018-05-26 22:58:44
* @Last Modified by:   yyx219
* @Last Modified time: 2018-05-26 23:35:25
* @Email: yyx219@qq.com
* @Url: http://www.hzbiz.net
* @判断网页是否进入可视区，并加载animate.css动画库
*/

(function(obj){
	var clients=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;  
	document.addEventListener('scroll', function () {
        if (obj.length < 0) return;
        var animated = ["fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","slideInDown","slideInLeft","slideInRight"];
        var animatedlen=(animated.length+Math.round(Math.random()*(0-animated.length))-1);
        animatedlen==-1?animatedlen=0:animatedlen;
        for (var i = 0; i < obj.length; i++) {
            // console.log(animated[animatedlen],animatedlen)
            // el.getBoundingClientRect获取元素位置
            var objTop=obj[i].getBoundingClientRect().top;  
            if(objTop<=clients){
                obj[i].classList.add("animated");  
                obj[i].classList.add(animated[animatedlen]);  
            }
        }
	})
})(document.getElementsByTagName('section'))
