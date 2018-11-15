/*
* @Author: yyx219
* @Date:   2018-05-26 22:58:44
* @Last Modified by:   yyx219
* @Last Modified time: 2018-05-27 22:29:23
* @Email: yyx219@qq.com
* @Url: http://www.hzbiz.net
* @判断网页是否进入可视区，并加载animate.css动画库
*/


// 事件兼听兼容处理,兼容IE
function myAddEvent(element,type,callback){
    if(element.addEventListener){
        element.addEventListener(type,callback,false);
    }else if(element.attachEvent){
        element.attachEvent('on' + type,callback)
    }
} 

// 对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari： 
// window.innerHeight – 浏览器窗口的内部高度 
// window.innerWidth – 浏览器窗口的内部宽度 
// 对于 Internet Explorer 8、7、6、5： 
// document.documentElement.clientHeight 
// document.documentElement.clientWidth 
// 或者 
// document.body.clientHeight 
// document.body.clientWidth 
function visibleAnimate(elements,animate){
    if(!elements) return false
    if(arguments.length===1){
        var animate='fadeInDown'
    }
    var clientHeight = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    myAddEvent(document,'scroll',function(){
        var n = 0;
        for (var index = 0; index < elements.length; index++) {
            n+=100;
            var el = elements[index];
            // el.getBoundingClientRect获取元素位置
            var elTop=elements[index].getBoundingClientRect().top;  
            if(elTop*1.5<=clientHeight){
                el.className = 'animated '+animate; 
                el.style['animation-delay']=n +"ms";
            }else{
                el.className = '';
            }

            if(n>=300){
                n=0;
            }
        }
    })
};


// 相当于window.onload
myAddEvent(window,'load',function(){
    // 创建DIV节点
    var oBody = document.getElementsByTagName('body')[0];
    for (var index = 0; index < 100; index++) {
        var oDiv = document.createElement('div');
        if(oDiv.length>0){
            oBody.insertBefore(oDiv,oDiv[0])
        }else{
            oBody.appendChild(oDiv);
        }

        oDiv.style['font-size']="55px";
        oDiv.style.background="red";
        oDiv.style.color="blue";
        oDiv.innerHTML = index;
    }
    // 执行可视区函数
    visibleAnimate(document.querySelectorAll('div'))
})