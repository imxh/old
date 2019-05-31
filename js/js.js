window.onscroll = function(){
  //鍥炲埌椤堕儴
  var sllTop = document.documentElement.scrollTop||document.body.scrollTop;
  if(sllTop>240){
    $('#get-top').css('display','block')
  }else{
    $('#get-top').css('display','none')
  }
}
$('#get-top').click(function(){ 
  $('body,html').animate({
    scrollTop: 0
  }, 800);//鐐瑰嚮鍥炲埌椤堕儴鎸夐挳锛岀紦鎳傚洖鍒伴《閮�,鏁板瓧瓒婂皬瓒婂揩
})
// 鏄剧ず/闅愯棌浜岀骇鑿滃崟
$(".left-menu-btn").hover(function(){
  $('#tow-nav').fadeIn(200);
},function(){
  $("#tow-nav").hover(function(){
    $('#tow-nav').fadeIn(0);
  },function(){
    $('#tow-nav').fadeOut(0)
  });
  $('#tow-nav').fadeOut(0)
})
//璁句负棣栭〉
function setHome(obj,vrl){
  try{
    obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
  }
  catch(e){
    if(window.netscape) {
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      }
      catch (e) {
        alert("姝ゆ搷浣滆娴忚鍣ㄦ嫆缁濓紒\n璇峰湪娴忚鍣ㄥ湴鍧€鏍忚緭鍏モ€渁bout:config鈥濆苟鍥炶溅\n鐒跺悗灏� [signed.applets.codebase_principal_support]鐨勫€艰缃负'true',鍙屽嚮鍗冲彲銆�");
      }
      var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
      prefs.setCharPref('browser.startup.homepage',vrl);
    }else{
      (new $.zui.ModalTrigger({
        custom: '<h3>鎮ㄧ殑娴忚鍣ㄤ笉鏀寔姝ゆ搷浣滐紝璇锋墜鍔ㄥ皢姝ら〉璁句负棣栭〉銆�</h3>'+
        '<blockquote>1.鎵撳紑娴忚鍣ㄨ缃�.<br />2.鐐瑰嚮"璁剧疆"銆�"鍚姩鏃躲€�"鎵撳紑鐗瑰畾缃戦〉"銆�"杈撳叆缃戝潃"銆嬬‘瀹�.</blockquote>'+
        '<p><a href="###"><i class="fa fa-link"></i>鐐瑰嚮鏌ョ湅</a>璇︾粏鏁欑▼</p>',
        title: '璁句负棣栭〉'
      })).show()
    }
  }
};
//鍒濆鍖栧伐鍏锋彁绀�     
$('[data-toggle="tooltip"]').tooltip({
  tipClass: 'tooltip-info'
});

//妫€娴嬫湰鍦版槸鍚﹀瓨鍦╨ocalStorage锛岃嫢瀛樺湪鍒欓亶鍘唋ocalStorage鐨勫€煎埌瀵瑰簲鐨勫厓绱犲唴
if(localStorage.length != 0){
  for(var i=0; i<localStorage.length;i++){
    var linkId = localStorage.key(i);
    var data = localStorage.getItem(localStorage.key(i));
    data = data.split('|'); 
    var value1 = data[0], value2 = data[1];
    if(linkId.length <= 10 && linkId != "page_/"){
      var getID = $('#'+linkId);
      getID.html(value1).attr("href",value2);
    }
  }
  
  //鍔犺浇璁剧疆濂界殑涓婚
  function load_theme(){
    //鑾峰彇褰撳墠椤甸潰鏄惁鍙互鏇存崲涓婚
    var CustomThemeStatus = $("#content").attr("data-CustomTheme");
    var data = localStorage.getItem('theme');
    if(CustomThemeStatus === "true" && data != null){
      data = data.split('|'); 
      var value1 = data[0], value2 = data[1], value3 = data[2], imgUrl = data[3], change = data[4], titleColor = data[5], textColor = data[6], bgColor = data[7];
      $('.theme-panel-content ul li').removeClass('active');
      $(value3 + ' li').eq(value2).addClass('active').siblings().removeClass('active');
      $('#content').removeClass("bgid").addClass(value1);
      value1 == 'bg-diy' ? $('.' + value1).css({'background':'url(' + imgUrl + ') no-repeat center', 'background-size':'cover'}) : '';
      $('.image-url input').val(''||imgUrl)
      showTips(change);
      if(value3 === '.wrapper-two'){
        $('.link-list-tit').css('color', titleColor);
        $('.link-list-a').css({'color':textColor,'background':bgColor});
        $('#full').attr('value', titleColor);
        $('#full2').attr('value', textColor);
        $('#full3').attr('value', bgColor);
      }
    }
  }
  load_theme();
}

$(window).load(function () {
  CustomMode();
  CustomTheme();
  //SiteNotice();
});

//鑷畾涔夋ā寮�
function CustomMode(){
  //鏄剧ず鎴栭殣钘忓乏杈硅彍鍗�
  $('.bar-btn').on('click', function () {
    $('.left-bar').toggleClass('showBar');
    $('.mask').toggleClass('showMask');
    $(this).toggleClass('animated1');
    $("#tow-nav").toggleClass('show-tow-nav').css('display','')
  });
  $('.nav-btn').on('click', function () {
    $('.nav').toggleClass('showNav');
    $(this).toggleClass('animated2');
  });
  if(deviceVal == 'phone'){
    //鐐瑰嚮閿氶摼鎺ユ椂闅愯棌鑿滃崟
    $('#menu li a,.mask').click(function(){
      $('.left-bar').toggleClass('showBar');
      $('.mask').toggleClass('showMask');
      $('.bar-btn').toggleClass('animated1');
    })
  }
  
  //鑷畾涔夋ā寮忎笅绂佺敤閾炬帴璺宠浆 - 浣跨敤閬僵灞傞伄鎸℃柟寮�
  $('.customize').on('click', function () {
    //鑾峰彇褰撳墠椤甸潰鏄惁鍙互鑷畾涔�
    var customizeStatus = $("#content").attr("data-customize");
    if(customizeStatus === "true"){
      $('.customize-mode-tips').toggleClass('shaow_tips');
      $('.linkList-item').toggleClass('customize_mode');
      $('.not_operational').toggleClass('shaow_tips');
    }else{
      new $.zui.Messager('褰撳墠椤甸潰涓嶆敮鎸佽嚜瀹氫箟妯″紡锛岃鍓嶅線棣栭〉璁剧疆', {
        icon: 'bell', // 瀹氫箟娑堟伅鍥炬爣
        type: 'danger',
        placement: 'top',
        close: false
      }).show();
    }
  });
  
  //鍦ㄨ嚜瀹氫箟妯″紡涓嬫墠鑳戒慨鏀瑰唴瀹规爣棰�
  $('.link-list-tit').click(function(){
    var getCustomize = $('.shaow_tips')[0];
    if(getCustomize == null){
      return false
    }
    var getLink_tit = $(this);
    var getLink_id = $(this).attr("id");

      //缁欏綋鍓嶅厓绱犵殑鍏勫紵鍏冪礌娣诲姞鏄剧ず绫伙紝鑾峰彇鏍囬鍐呭璧嬪€肩粰杈撳叆妗嗭紝骞惰鍏剁劍鐐硅仛鐒﹀悓鏃堕€変腑鏂囧瓧
      $(this).siblings().addClass("shaow-edit-category").val(getLink_tit.html()).focus().select();
      
      //杈撳叆妗嗙劍鐐瑰け鍘绘椂灏嗚緭鍏ユ鍐呭鍐欏叆鍒發ocalStorage
      $(".shaow-edit-category").blur(function(){
        var inputVal = $(this).val();
        getLink_tit.html(inputVal);
        window.localStorage.setItem(getLink_id, inputVal);
        $(".shaow-edit-category").removeClass("shaow-edit-category");
      })
    });

  var idValue;
  var thisIink;
      //鐐瑰嚮缂栬緫鎸夐挳寮瑰嚭瀵硅瘽妗�
      $('.bianji').click(function(){
        $('#myModal').modal({
          keyboard : false,
          show     : true
        });
        //鑾峰彇褰撳墠鐐瑰嚮鍏冪礌鐨勫厔寮熷厓绱犲強鍊煎苟浼犻€掔粰瀵瑰簲鐨勫叏灞€鍙橀噺
        thisIink = $(this).prev();
        idValue = $(this).prev().attr("id");
        var thisIink_con = $(this).prev().html();
        var thisIink_href = $(this).prev().attr("href");
        $('#inputAccountExample1').val(thisIink_con);
        $('#inputAccountExample2').val(thisIink_href);
      });
      
      //鐐瑰嚮纭鎸夐挳鍚庡皢杈撳叆妗嗗唴瀹瑰啓鍏ocalStorage骞舵洿鏂伴〉闈腑瀵瑰簲鍏冪礌鐨勫唴瀹�
      $('.btn-primary').click(function(){
        var text = $('#inputAccountExample1').val();
        var text2 = $('#inputAccountExample2').val();
        window.localStorage.setItem(idValue, text+'|'+text2);
        var data = localStorage.getItem(idValue);
        data = data.split('|'); 
        var value1 = data[0], value2 = data[1];
        $(thisIink).html(value1).attr("href",value2);
      });
    }

//鏇存崲鐨偆
function CustomTheme(){
  $('.theme, #cancel, #cancel-x').on('click',function (){
    //鑾峰彇褰撳墠椤甸潰鏄惁鍙互鏇存崲涓婚
    var CustomThemeStatus = $("#content").attr("data-CustomTheme");
    if(CustomThemeStatus === "true"){
      $('.theme-panel').toggleClass('show-theme-panel');
    }else{
      new $.zui.Messager('褰撳墠椤甸潰涓嶆敮鎸佹洿鎹富棰橈紝璇峰墠寰€棣栭〉璁剧疆', {
        icon: 'bell', // 瀹氫箟娑堟伅鍥炬爣
        type: 'danger',
        placement: 'top',
        close: false
      }).show();
    }
  });
  
  var theme_wrapper = localStorage.getItem("theme") ? localStorage.getItem("theme").split('|')[2] : '';
  var theme_index;
  var bgid;
  var change = localStorage.getItem("theme") ? localStorage.getItem("theme").split('|')[4] : '0';
  var imgUrl = localStorage.getItem("theme") ? localStorage.getItem("theme").split('|')[3] : '';
  $('.wrapper-one li').click(function (){
    theme_index = $(this).index();
    theme_wrapper = '.wrapper-one';
    bgid = $(this).attr('data-bgid');
    $(this).addClass('active').siblings().removeClass('active');
    $('#content').removeClass().addClass(bgid);
    $('.wrapper-two li').removeClass('active');
    $('.' + bgid).css('background', '');
    change = 0;
    showTips(change);
    $('.link-list-tit').css('color', '');
    $('.link-list-a').css({'color':'','background':''})
  });

  $('.image-url input').blur(function(){
    imgUrl = $(this).val();
    $('.bg-diy').css({'background':'url(' + imgUrl + ') no-repeat center', 'background-size':'cover'})
  });

  $('.wrapper-two li').click(function (){
    theme_index = $(this).index();
    bgid = $(this).attr('data-bgid');
    $('#content').removeClass().addClass(bgid);
    if(bgid == 'bg-diy'){
      change = 2
    }else{
      $('.' + bgid).css('background', '');
      change = 1
    }
    theme_wrapper = '.wrapper-two';
    $(this).addClass('active').siblings().removeClass('active');
    $('.wrapper-one li').removeClass('active');
    showTips(change);
    $('.link-list-tit').css('color', titleColor);
    $('.link-list-a').css({'color':textColor,'background':bgColor})
  });

  //鐐瑰嚮淇濆瓨锛屽皢涓婚鍙傛暟鍐欏叆鏈湴缂撳瓨
  $('#okay').on('click',function (){
    console.log(titleColor);
    if(theme_index == null){
      theme_index = $('.theme-panel-content ul li.active').index();
      bgid = $('.theme-panel-content ul li.active').attr('data-bgid');
    }
    localStorage.theme = bgid + "|" + theme_index + "|" + theme_wrapper + "|" + imgUrl + "|" + change + "|" + titleColor + "|" + textColor + "|" + bgColor;
    $('.theme-panel').toggleClass('show-theme-panel');
    new $.zui.Messager('淇濆瓨鎴愬姛', {
      icon: 'ok-sign', // 瀹氫箟娑堟伅鍥炬爣
      type: 'success',
      placement: 'top',
      close: false,
      time: 2000
    }).show();
  });
}

//鏄剧ず棰滆壊闈㈡澘tips鐨勫唴瀹�
function showTips(change){
  if(change == 0){
    $('.color-panel-tips').hide();
    $('.color-panel-tips')[change].style.display = "block"
  }else if(change == 1){
    $('.color-panel-tips').hide();
    $('.color-panel-tips')[change].style.display = "block"
  }else{
    $('.color-panel-tips').hide();
    $('.color-panel-tips')[change].style.display = "block"
  }
}

//缃戠珯鎺ㄨ崘
$('#submit_URL').modalTrigger({
  type: 'iframe',
  iframe: 'http://webjike_com.mikecrm.com/uyDysw9',
  size: 'lg',
  height: '730px',
  title: '缃戠珯鎺ㄨ崘'
})

//鍙嬮摼鐢宠
$('#Links').modalTrigger({
  type: 'iframe',
  iframe: 'http://webjike_com.mikecrm.com/AKVslkN',
  size: 'fullscreen',
  title: '鍙嬮摼鐢宠'
})

//鍒ゆ柇鐢ㄦ埛浣跨敤鐨勮澶�
var deviceVal  = browserRedirect();
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 'phone';
  } else {
    return 'pc';
  }
}

//缃戠珯鍏ㄥ眬閫氱煡锛岀敤鎴风涓€娆¤闂綉绔欐椂鏄剧ず鍏憡/
/*
function SiteNotice(){
  var _notice = localStorage.getItem('notice');
  if(_notice == null){
    //浣跨敤瑙﹀彂鍣ㄥ璞＄洿鎺ユ樉绀�
    (new $.zui.ModalTrigger({
      name: 'notice',
      icon: 'bullhorn',
      title: '閫氱煡',
      custom: '<h2>纭杩囩溂绁烇紝浣犻亣涓婂鐨勭綉绔�</h2><br/>'+
      '<p>娆㈣繋璁块棶灏忓憜瀵艰埅锛岀幇鍦ㄥ憟鐜板湪浣犻潰鍓嶇殑鏄叏鏂癡2.0鐗堟湰鐨勫皬鍛嗗鑸紝浣跨敤PC绔闂綉绔欏彲浠ヨ幏寰楁洿濂界殑鐢ㄦ埛浣撻獙銆傚彟澶栧師瀹氫簬5鏈�2鍙凤紝灏忓憜瀵艰埅涓€鍛ㄥ勾鎵嶄笂绾挎娆℃柊鐗堟湰缃戠珯锛屼絾鏄敱浜庢湇鍔″櫒鍒版湡鐨勫師鍥犱笉寰椾笉鎻愬墠涓婄嚎锛屾墍浠ュ鑷撮儴鍒嗛〉闈㈠唴瀹硅繕娌℃湁瀹屽杽濂姐€�</p>'+
      '鏈鎺ㄥ嚭鏂扮増鏈綉绔欒繕澶勪簬娴嬭瘯闃舵锛屾杩庡悇浣嶅埌鈥�<a href="http://webjike.com/channels/6.html" target="_blank">鍦ㄧ嚎鐣欒█</a>鈥濅腑鎻愪氦鍙嶉銆佸缓璁€佸悙妲姐€�</p>'+
      '<p><i class="fa fa-hand-o-right"></i>鈥�<a href="http://webjike.com/channels/153.html" target="_blank">鐐瑰嚮杩欓噷</a>鈥濅簡瑙ｆ洿澶氭柊鐗堟湰缃戠珯鍔熻兘浠嬬粛銆�</p>',
    })).show();
    //瀵硅瘽妗嗗叧闂悗瑙﹀彂鐨勪簨浠�
    $('#notice').on('hidden.zui.modal', function() {
      localStorage.notice = "true";
    });
  }

}
*/    

//鐧惧害缁熻浠ｇ爜
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7397c22fedfaa11157d38143820e7330";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

/*
 * 2018-6-12鏇存柊
 * 瑙ｅ喅鍦ㄤ綆鍒嗚鲸鐜囦笅棣栭〉鍐呭杩囬珮瀵艰嚧婊氬姩鏉″嚭鐜帮紝褰卞搷涓婚鑳屾櫙鍥剧墖涓嶅叏灞忕殑闂
 * 瑙ｅ喅鏂瑰紡锛氬浜庡睆骞曞垎杈ㄧ巼楂樺害浣庝簬845px鏄剧ず鍣紝鏀瑰彉棣栭〉鐨勫唴瀹逛负6鍧楀尯鍩熴€�
 */

 (function(){
  //褰撴祻瑙堝櫒绐楀彛琚皟鏁村ぇ灏忔椂瑙﹀彂
  window.onresize = function(){
    ShowHideElement("i-link-box","linkList-item",845);
  }
  window.onload = function(){
    ShowHideElement("i-link-box","linkList-item",845); 
  }
  function ShowHideElement(Element1, Element2, Vaule){
    var Person = document.getElementsByClassName(Element1);
    var BoxHeight = document.getElementsByClassName(Element2);
    var WindowHeight = window.innerHeight||document.body.clientHeight;
    //閬嶅巻鑾峰彇鍒扮殑鍏冪礌
    for(var i=6; i<Person.length; i++){
      if(WindowHeight <= Vaule && deviceVal === "pc"){
        Person[i].style.display = "none";
        BoxHeight[0].style.marginTop="5px";
      }else{
        Person[i].style.display = "block";
        BoxHeight[0].style.marginTop="0px";
      }
    }
  }
  window.ShowHideElement = ShowHideElement;
}());
    
var now = -1;
var resLength = 0;
var thisSearch = 'https://www.baidu.com/s?wd=';
var thisSearchIcon = './logo.jpg';
var storage = window.localStorage;
if(!storage.stopHot){
    storage.stopHot = true
}
storage.stopHot == 'false' ? $('#hot-btn').addClass('off') : $('#hot-btn').removeClass('off');
var ssData = storage.searchEngine;
if(storage.searchEngine != undefined){
  ssData = ssData.split(','); 
  thisSearch = ssData[0];
  $('.search-icon').attr('src', ssData[1])
}

// 鎸夐敭鏉惧紑鏃舵墽琛�
$('#txt').keyup(function(e){
  // 鍒ゆ柇杈撳叆妗嗘槸鍚︽湁鍐呭
  if($('#txt').val() != ''){
      $('.search-clear').css('display','block');
    $('.search-clear').click(function(){
      $('#txt').val('');
      $('#box ul').html('');
      $('.search-clear').css('display','none')
    })
  }else{
    $('.search-clear').css('display','none')
  }

  if(e.keyCode == 38 || e.keyCode == 40 || storage.stopHot != 'true'){
      return
  };
  var dat = {
      wd: $('#txt').val()
  };
  if($('#txt').val()!=''){
      $('#box ul').text('');
      $('#box').css('display','block');
        $.ajax({
          type: "GET",
          url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
          async: true,
          data: dat,
          dataType : 'jsonp',
          jsonp: 'cb',
          success: function(res){
              for(var i = 0; i < res.s.length; i++){
                  resLength = res.s.length;
                  oli_i = '<li>'+res.s[i]+'</li>';
                  $('#box ul').append(oli_i);
                  
                  $('#box ul li').eq(i).click(function(){
                      $('#txt').val(this.innerHTML);
                      window.open(thisSearch + this.innerHTML);
                      $('#box ul').html('');
                      $('#box').css('display','none')
                  })
              };
                    //$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
          },
          error: function(res){
              console.log(res)  
          }
      });
  }else{
      $('#box ul').html('')
      //$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
  };
});

$('#txt').keydown(function(ev){
    if(ev.keyCode==40){
      now++;
      if(now > resLength-1){   
        now = 0;
      }
      $('#box ul li').eq(now).addClass('current').siblings().removeClass('current')
      $('#txt').val($('#box ul li').eq(now).text())   
    };
    if(ev.keyCode==38){
        if(now == -1 || now == 0){
          now = resLength
        }
        now--
        $('#box ul li').eq(now).addClass('current').siblings().removeClass('current');
        $('#txt').val($('#box ul li').eq(now).text())
    };
    if(ev.keyCode==13){
        window.open(thisSearch + $('#txt').val())
        // $('#txt').val('');
        $('#box ul').html('')
    }
})

$(function(){
  //$('#box ul').html() === '' ? $('#box').css('height','0px') : $('#box').css('height','auto');
  var search = {
    data: [{
      name: '鐧惧害',
      img: '/images/logo.jpg',
      url: 'https://www.baidu.com/s?wd='
    }, {
      name: '璋锋瓕',
      img: '/images/logo_2.jpg',
      url: 'https://www.google.com/search?q='
    }, {
      name: '蹇呭簲',
      img: '/images/logo_3.jpg',
      url: 'https://cn.bing.com/search?q='
    }, {
      name: '濂芥悳',
      img: '/images/logo_4.jpg',
      url: 'https://www.so.com/s?q='
    }, {
      name: '鎼滅嫍',
      img: '/images/logo_5.jpg',
      url: 'https://www.sogou.com/web?query='
    }, {
      name: '娣樺疂',
      img: '/images/logo_6.jpg',
      url: 'https://s.taobao.com/search?q='
    }, {
      name: '浜笢',
      img: '/images/logo_7.jpg',
      url: 'http://search.jd.com/Search?keyword='
    }, {
      name: '澶╃尗',
      img: '/images/logo_8.jpg',
      url: 'https://list.tmall.com/search_product.htm?q='
    }, {
      name: '1688',
      img: '/images/logo_9.jpg',
      url: 'https://s.1688.com/selloffer/offer_search.htm?keywords='
    }, {
      name: '鐭ヤ箮',
      img: '/images/logo_10.jpg',
      url: 'https://www.zhihu.com/search?type=content&q='
    }, {
      name: '寰崥',
      img: '/images/logo_11.jpg',
      url: 'https://s.weibo.com/weibo/'
    }, {
      name: 'B绔�',
      img: '/images/logo_12.jpg',
      url: 'http://search.bilibili.com/all?keyword='
    }, {
      name: '璞嗙摚',
      img: '/images/logo_13.jpg',
      url: 'https://www.douban.com/search?source=suggest&q='
    }, {
      name: '浼橀叿',
      img: '/images/logo_14.jpg',
      url: 'https://so.youku.com/search_video/q_'
    }, {
      name: 'GitHub',
      img: '/images/logo_15.jpg',
      url: 'https://github.com/search?utf8=鉁�&q='
    }]
  }
  for(var i = 0; i < search.data.length; i++){
    var addList = '<li><img src="' + search.data[i].img + '"/>' + search.data[i].name + '</li>'
    $('.search-engine-list').append(addList);
  }

  $('.search-icon, .search-engine').hover(function() {
    $('.search-engine').css('display', 'block')
  }, function() {
    $('.search-engine').css('display', 'none')
  });

  $('#hot-btn').on('click', function() {
    $(this).toggleClass('off');
    if(storage.stopHot == 'true'){
      storage.stopHot = false
    }else{
      storage.stopHot = true
    }
    console.log(storage.stopHot)
  });

  $('.search-engine-list li').click(function() {
    var _index = $(this).index();
    var thisImg = $(this).children().attr('src');
    $('.search-icon').attr('src', thisImg)
    thisSearch = search.data[_index].url;
    $('.search-engine').css('display', 'none')

    storage.searchEngine = [thisSearch, thisImg]
  })
})
$("#search-btn").click(function(){
  var textValue = $('#txt').val();
  if(textValue != ''){
    $('body').attr('data-if') === 'true' ? window.location.href = '/utils/search.html?word=' + textValue : window.open('/utils/search.html?word=' + textValue)
  }else{
    new $.zui.Messager('璇疯緭鍏ュ叧閿瓧', {
      icon: 'bell', // 瀹氫箟娑堟伅鍥炬爣
      type: 'danger',
      placement: 'top',
      close: false
    }).show();
  }
});

/*
* @Author: Marte
* @Date:   2018-05-20 09:03:53
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-11 16:18:47
*/

'use strict';


// 鍦ㄨ繖閲屼慨鏀筰d锛屽拰閫熷害
$(function(){
    if(deviceVal == 'phone'){
      $('#menu').css({'overflow':'hidden','overflow-y':'scroll'})
      return
    }
    var api1 = new myApi();
    api1.mouseScroll.inte($('#menu'),30);
})


//涓嬮潰鍒姩
function myApi(){

    this.mouseScroll = {

        inte : function(obj,value){
            this.OBJ = obj;
            this.addscroll(obj);



            var outH = obj.outerHeight(),
                oScrollcontent = obj.children(':first'),
                contentH = oScrollcontent.outerHeight(),
                oYscrollinnerH = outH/contentH*outH,
                oYscrollouter = obj.find('#Yscrollouter'),
                oYscrollinner = obj.find('#Yscrollinner');

            obj.css({'position': 'relative','overflow':'hidden'});
            oScrollcontent.css('position', 'absolute');

            if(contentH > outH){
                this.mousehover(obj, oYscrollouter, oYscrollinner);
                this.mousewheel(obj, value, oScrollcontent, oYscrollinner, outH, contentH, oYscrollinnerH );
                this.mousemoved(obj, oScrollcontent, oYscrollouter, oYscrollinner, outH, contentH, oYscrollinnerH );
            };
        },

        addscroll : function(obj,value){
            obj.append('<div id="Yscrollouter"><div id="Yscrollinner"></div></div>');
            $('#Yscrollinner').css('cursor','pointer');
        },

        mousehover : function(obj, outer, inner){

            obj.hover(function() {
                outer.fadeIn(400);
            }, function() {
                outer.fadeOut(400);
            });

            inner.hover(function() {
                $('body').css({
                    '-moz-user-select': 'none',
                    '-webkit-user-select': 'none',
                    '-ms-user-select': 'none',
                    '-khtml-user-select': 'none',
                    'user-select': 'none',});
            }, function() {
                $('body').css({
                    '-moz-user-select': 'auto',
                    '-webkit-user-select': 'auto',
                    '-ms-user-select': 'auto',
                    '-khtml-user-select': 'auto',
                    'user-select': 'auto',});
            });

        },

        mousewheel : function(obj, value, O, inner, H1, H2, H3){

            var oScrollcontentVal = value/(H1 - H3)*(H2 - H1);

                inner.height(H3);  //婊氬姩鏉￠珮搴�

            obj.on('mousewheel',function(event,delta ){  //缁戝畾婊氳疆浜嬩欢

                event.preventDefault();  //闃绘娴忚鍣ㄩ粯璁や负琛�

                var delta = event.originalEvent.wheelDelta;
                var oYscrollinnerTop = inner.position().top;

                var oScrollcontentTop = O.position().top;

                if(delta > 0){
                    if(oYscrollinnerTop - value < 0){
                        inner.css('top', 0);
                        O.css('top', 0);
                    }else{
                        inner.css('top', oYscrollinnerTop - value);
                        O.css('top', oScrollcontentTop + oScrollcontentVal);
                    }
                }else{
                    if(oYscrollinnerTop + value > H1 - H3){
                        inner.css('top', H1 - H3);
                        O.css('top', H1 - H2);
                    }else{
                        inner.css('top', oYscrollinnerTop + value);
                        O.css('top', oScrollcontentTop - oScrollcontentVal);
                    }
                };
            });

        },

        mousemoved : function(obj, O, outer, inner, H1, H2, H3){
            inner.on('mousedown',function(event){   //缁戝畾榧犳爣浜嬩欢

                var clientY = event.clientY,
                    oYscrollinnerTop = inner.position().top,
                    oScrollcontentTop = O.position().top,

                    moveY = 0;

                    $(document).on('mousemove',function(event){
                        moveY = event.clientY - clientY;
                        var oScrollcontentMove = moveY/(H1 - H3)*(H2 - H1);

                        if(oYscrollinnerTop + moveY < 0){
                            inner.css('top', 0);
                            O.css('top', 0);
                        }else if(oYscrollinnerTop + moveY > H1 - H3){
                            inner.css('top', H1 - H3);
                            O.css('top', H1 - H2);
                        }else{
                            inner.css('top', oYscrollinnerTop + moveY);
                            O.css('top', oScrollcontentTop - oScrollcontentMove);
                        }
                    });

                    $(document).on('mouseup',function(event){
                        $(document).off('mousemove');
                    })

            })
        }

    }
}
