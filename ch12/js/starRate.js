/**
 * 封装星级评分  by张文琴
 * 2021-12-23
 */
$(function(){
    //写一个创建星星评分的函数 挂在window上
    window.createStartRate = function(score){
        // $.fn.createStartRate = function(score){  //圆形扩展
    //满星
    var on ='<span class="on iconfont icon-shoucang"></span>';
    //半星
    var half ='<span class="half iconfont icon-star-half"></span>';
    //灰色星星
    var off ='<span class="off iconfont icon-shoucang"></span>';

    //计算分数
    var calcScore = Math.floor(score * 2) / 2;
      //计算满星
      var onCount = Math.floor(calcScore);

      //计算半星
      var isHasHalf = 0;
      if(calcScore % 1 !==0){
          isHasHalf = 1;
     }
     // 计算灰星
      var offCount = 5 - onCount - isHasHalf;
      
      //计算拼接结果
      var rst ='';
      //拼接满星
      for(var i = 0; i< onCount; i++){
          rst +=on;
      }
      //拼接半星
      if(isHasHalf === 1){
          rst +=half;
      }
      //拼接灰星
      for(var k = 0; k < offCount; k++){
          rst += off;
      }

      //返回
      return rst;
    // $(this).html(rst);   //扩展
    }
})

