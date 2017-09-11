/**
 * Created by Administrator on 2017/8/9.
 */
$(document).ready(function(){
    function myfunction(){
        if($(document).width() < 1000){
            $(".nav ul").css("display","none");
            $(".hide-menu").removeClass("displayNone")
        }
        else{
            $(".nav ul").css("display","block");
            $(".hide-menu").addClass("displayNone")
        }
    }
//添加监控页面窗口变化的方法
    $(window).resize(myfunction);
//并且在页面加载时即调用
    myfunction();
    $(".hide-menu").hover(function(){
        $(".hide-list").removeClass("displayNone")
    },function(){
        $(".hide-list").addClass("displayNone")
    });
    $(".zoom").click(function () {
        if ($(".zoom").hasClass("opene")) {
            $(".menu").animate({ margin: "0 0 0 -150px" });
            $(".content").animate({ margin: "0 0 0 70px" });
            $(".broad").css("margin-left","135px");
            $(".broad").html("");
            $(".zoom").removeClass("opene");
            $(".zoom").addClass("closee");
            $(".divide").css("width","525px");
        } else {
            $(".manuBtn1").html("供应商管理");
            $(".manuBtn2").html("产品管理");
            $(".manuBtn3").html("采购申请");
            $(".manuBtn4").html("订单管理");
            $(".manuBtn5").html("发票付款");
            $(".manuBtn6").html("数据统计");
            $(".manuBtn7").html("企业设置");
            $(".menu").animate({ margin: "0 0 0 0px" });
            $(".content").animate({ margin: "0 0 0 220px" });
            $(".broad").css("margin-left","0");
            $(".zoom").addClass("opene");
            $(".zoom").removeClass("closee");
            $(".divide").css("width","450px");
        }
    });
    $('.moddle .boun').hover(function(){
        /*图标向上旋转*/
        $(this).find("span").removeClass().addClass('hover-up');
        /*下拉框出现*/
        $(this).find(".ul").stop().slideDown(300);
    },function(){
        /*图标向下旋转*/
        $(this).find("span").removeClass().addClass('hover-down');
        /*下拉框消失*/
        $(this).find(".ul").stop().hide(300);
    });
    $(".jia").click(function(){
        var ulNode = $(this).next("ul");
        if(ulNode.css("display")=="none"){
            ulNode.css("display","block");
            $(this).closest("span").removeClass().addClass('hover-up');
//            $(this).closest(".jia").html("<i class='toDown'></i>")
        }else{
            ulNode.css("display","none");
            $(this).closest("span").removeClass().addClass('hover-down');
//            $(this).closest(".jia").html("<i class='toLeft'></i>");
        }
        //ulNode.slideToggle()
    });
    $(".moddle li a").click(function(){
        $(".moddle li a").css("color","#000");
        $(this).css("color","#00AEF3")
    });
    $('.menu ul .li').mouseenter(function(){
        var nu = $(this).attr("data-id");
        var css = "manuBtn"+nu;
        var sty = "hover"+nu;
        $(this).find('.broad').removeClass(css);
        $(this).find('.broad').addClass(sty);
        $(this).find('.child-menu').css("display","block");
    });
    $('.menu ul .li').mouseleave(function(){
        var nu = $(this).attr("data-id");
        var css = "manuBtn"+nu;
        var sty = "hover"+nu;
        $(this).find('.broad').addClass(css);
        $(this).find('.broad').removeClass(sty);
        $(this).find('.child-menu').css("display","none");
    });
    $('.menu ul .li').click(function(){
        $('.menu ul .li').css("background","#fff");
        $('.menu ul .li .broad').removeClass("active1");
        $('.menu ul .li .broad').removeClass("active2");
        $('.menu ul .li .broad').removeClass("active3");
        $('.menu ul .li .broad').removeClass("active4");
        $('.menu ul .li .broad').removeClass("active5");
        $('.menu ul .li .broad').removeClass("active6");
        $('.menu ul .li .broad').removeClass("active7");
        var nu = $(this).attr("data-id");
        var sty = "active"+nu;
        $(this).find('.broad').addClass(sty);
        $(this).css("background","#79D0F2")
    })
});