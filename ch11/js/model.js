/**
 * 弹出蒙层js  by张文琴
 */
$(function(){
    //打开模态框
    $('#btn').click(function(){
        $('.model').fadeIn();
    })
    //关闭模态框
    $('#close').click(function(){
        $('.model').fadeOut();
    })
 })