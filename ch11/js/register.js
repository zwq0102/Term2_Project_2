/**
 * 注册功能模块 
 *  by 张文琴 2021-12-21
 */
 $(function() {
    //调用验证插件
    $('#registerForm').validate({
        //验证规则
        rules: {
            //用户名的验证
            user: {
                required: true, //非空
                rangelength: [3, 6] // 长度验证
            },
            //验证密码
            password: {
                required: true, //非空
                isPassword: true //自定义的密码验证   
            },
            //确认密码提示信息
            rePassword: {
                required: true, //非空
                equalTo: "#password" //验证密码的一致性
            },
            tel:{
                required:true,//非空
                isTel:true //自定义的电话号码验证
            }
        },
        //提示信息
        messages: {
            //用户提示信息
            user: {
                required: '用户名不能为空哦！', //非空提示
                rangelength: '长度在3~6位哦' //长度提示
            },
            //密码的提示信息
            password: {
                required: '密码不能为空哦！', //非空
                isPassword: '亲！输入5~10个，以字母开头，可带数字、“-”、“.”的字符串哦！' //密码格式提示
            },
            rePassword: {
                required: '请再次输入密码', //非空
                equalTo: '两次密码不一致' //密码一致性
            },
            tel:{
                required:'电话号码不能为空',//非空
                isTel:'电话号码格式不正确'
            }
        }
    })

    //密码自定义验证
    jQuery.validator.addMethod("isPassword", function(value, element) {
        var pwdReg = /^[a-zA-Z]{1}([a-zA-z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    });
    //手机号自定义验证
    jQuery.validator.addMethod("isTel", function(value, element) {
        var telReg = /^[1]+[9,5,3,1]+\d{9}$/;
        return this.optional(element) || (telReg.test(value));
    });
})