/**
 * 产品详情列表交互js  by张文琴
 */
$(function(){
    //独家提供轮播
    $('.ez-banner').tyslide({
        boxh:500,//盒子的高度
        w:1200,//盒子的宽度
        h:440,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:20,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:15,//控制按钮宽度
        controlsH:15,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
    })
    /*轮播切换 */
    //默认后面两个轮播隐藏
    $('.ez-banner:gt(0)').hide();
    //给导航绑定点击事件
    $('.ez-title ul li').on('mouseenter',function(){
     //导航切换效果
     $(this).addClass('active').siblings('li').removeClass('active')
     //获取索引
     var index = $(this).index();
     //显示对应内容
     $('.ez-banner').eq(index).show().siblings().hide();
    })
    /*换一批*/ 
    //定一个索引
    //上下滑动版本
    var index =0;
    $('.change').click(function(){
        //自增
        index++;
        //边界判断
        index = index > 2 ? 0 :index;
        //让里面的 inner-box运动
        $('.inner-box').animate({
            top:-index *500
        })
    })
    //左右滑动的版本
    //     var index =0;
    // $('.change').click(function(){
    //     //自增
    //     index++; 

    //     //边界判断
    //     //让里面的 inner-box运动
    //     $('.inner-box').stop(true).animate({left: -index * 1200}, function(){
    //      if (index === 3){
    //          index = 0;
    //         $('.inner-box').css('left',0);
    //      }
    //     })
    //   })
    //全部商品轮播
    $("#banner").tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
    /*全部商品列表的手风琴效果 */
    $('.all_shop .all_shop-list ul > li').mouseenter(function () {
        //所有兄弟：隐藏详情 显示标题
          $(this).siblings().find('.desc').hide();  //隐藏详情
          $(this).siblings().find('.all_shop-title').show();//显示标题
       
          //当前：隐藏标题 显示详情
          $(this).find('.all_shop-title').hide()//隐藏标题
          $(this).find('.desc').show()//显示详情
         })

       /*新书上架的手风琴效果 */ 
    $('.new-books .right-box ul > li').mouseenter(function () {
        //所有兄弟：隐藏详情 显示标题
          $(this).siblings().find('.desc').hide();  //隐藏详情
          $(this).siblings().find('.ebooks-title').show();//显示标题
       
          //当前：隐藏标题 显示详情
          $(this).find('.ebooks-title').hide()//隐藏标题
          $(this).find('.desc').show()//显示详情
         })
  
})

//console.log('1')
//  alert('1')