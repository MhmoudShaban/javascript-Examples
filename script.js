$(function() {
  "use strict";
  $('body').css("paddingTop",$(".navbar").innerHeight());
  $('.navbar li a').click(function(e) {
    e.preventDefault();
    $('html ,body').animate({
      scrollTop: $('#' +$(this).data('scroll')).offset().top +1
    }, 1000);
    $('.navbar li a').click(function() {
      $(this).addClass("active").parent().siblings().find('a').removeClass("active");
    })

})

$(window).scroll(function(){
	$('.block').each(function(){
		if($(window).scrollTop()>$(this).offset().top){

			var blockid = $(this).attr('id');
			$('.navbar a').removeClass("active");
			$('.navbar a[data-scroll="'+ blockid +'"]').addClass('active');

		}
	});
  var topscroll = $(".top");
  	if($(window).scrollTop()>1000){
      if(topscroll.is(":hidden"))
      topscroll.fadeIn(500);
    }else {
      topscroll.fadeOut(500);
    }

});
  $(".top").click(function(e) {
    e.preventDefault();
    $("html ,body").animate({
      scrollTop:0
    }, 1000)
  })

  // start popup
  $(".show-popup").click(function() {
      $($(this).data('popup')).fadeIn();
  })
  $('.popup').click(function(){
    $(this).fadeOut();
  })
  $('.popup .inner').click(function(e){
    e.stopPropagation();
  })
  $('.popup .close').click(function(e){
    e.preventDefault();
    $(this).parentsUntil(".popup").parent().fadeOut();
  })
  $(document).keydown(function (e) {
     if(e.keyCode == 27){
       $('.popup').fadeOut();
     }
  })
  $(".from-left").hover(function(){
    $(this).find('span').eq(0).animate({
        width:"100%"
    }, 400);
  },function(){
    $(this).find('span').eq(0).animate({
        width:0
    }, 400);
});

$(".from-top").hover(function(){
  $(this).find('span').eq(0).animate({
      height:"100%"
  }, 400);
},function(){
  $(this).find('span').eq(0).animate({
      height:0
  }, 400);
});

$(".border-left").hover(function(){
  $(this).find('span').eq(0).animate({
      width:"100%"
  }, 400);
},function(){
  $(this).find('span').eq(0).animate({
      width:0
  }, 400);
});

$(".animation-prog span").each(function () {
  $(this).animate({
    width:$(this).data("progress")
  },1000,function () { 
    $(this).text($(this).attr("data-progress"))
   });

  });

/***start Fixed Menu bar*/
$(".fixed-menu .fa-cog").on("click",function () { 
  $(this).parent(".fixed-menu").toggleClass("is-visible");
    if($(this).parent(".fixed-menu").hasClass("is-visible")){

    $(this).parent(".fixed-menu").animate({
      left:0
    },1000);

    $('body').animate({ 
      paddingLeft:"250"
    },1000);

  }else{

    $(this).parent(".fixed-menu").animate({
      left:"-250"
    },1000);
    $('body').animate({
      paddingLeft:0
    },1000);
  }
 });
 /*ُend Fixed Menu bar*/

 /*Start Choose Colors*/
  $('.change-colors li').on("click",function () {
    $('body').attr('data-new' ,$(this).data("color"));
  });

 /*End Choose Colors*/

 /*Start images gallary*/

 $('.thumbnails img').on("click",function () { 
   $(this).addClass("selected").siblings().removeClass("selected");
   /*بنخفيها الاول وبعدين بنظهرها بالفيد بطريقه ناعمه */
   $(".masterImg img").hide().attr('src',$(this).attr('src')).fadeIn(500)
  });
    /*الكود ده بدون شرط ان لو ده اول او اخر صوره يجيب اللى بعدها */
  /* $('.masterImg .fa-chevron-circle-left').on('click',function () {
    $(".thumbnails .selected").prev().click()
    });
    $('.masterImg .fa-chevron-circle-right').on('click',function () {
      $(".thumbnails .selected").next().click()
      });*/

    /*الكود ده كامل لكن بدون الحسابات الديناميكيه
    $('.masterImg .fa-chevron-circle-right').on('click',function () {
      if($(".thumbnails .selected").is(':last-child')){
        $(".thumbnails img").eq(0).click();
      }else{
        $(".thumbnails .selected").next().click()
      }
      });
      $('.masterImg .fa-chevron-circle-left').on('click',function () {
        if($(".thumbnails .selected").is(':first-child')){
          $(".thumbnails img:last").click();
        }else{
          $(".thumbnails .selected").prev().click()
        }
        
    });  */
        /**
         * متنساش تحذف ال .gallary .thumbnails img{width: 19.60%; 
               لان مش عايزنها وهغير برضو 
               .gallary .thumbnails img:not(:last-child){
              margin-right: .5%;  ل   
              .gallary .thumbnails img:last-child{
                  margin-right: 0 !important;
}
}   
         */
    var numOfThumbnails = $('.thumbnails').children().length,
        marginBetweenThum = .5,
        totalMarginBetweenThum = (numOfThumbnails - 1) * marginBetweenThum,
        thumbnailsWidth = (100 - totalMarginBetweenThum) /numOfThumbnails ;
        $(".thumbnails img").css({
          'width':thumbnailsWidth + '%',
          'margin-right':marginBetweenThum +'%'
        })

    $('.masterImg .fa-chevron-circle-right').on('click',function () {
      if($(".thumbnails .selected").is(':last-child')){
        $(".thumbnails img").eq(0).click();
      }else{
        $(".thumbnails .selected").next().click()
      }
      });
      $('.masterImg .fa-chevron-circle-left').on('click',function () {
        if($(".thumbnails .selected").is(':first-child')){
          $(".thumbnails img:last").click();
        }else{
          $(".thumbnails .selected").prev().click()
        }
        
    });  

 /*End images gallary*/
/*Start Toggle products*/
    $('.products .product i , .items .item i ').on('click',function () {  
      /*$('.products .product p').slideToggle()  لو بالطريقه دى الاتنين هيفتحو مع بعض */
      $(this).toggleClass('fa-plus fa-minus')  /* ركز فى طريقه كتابه الاتربيوتين مع بعض  */
      $(this).next('p').slideToggle();

      })

/*End Toggle products*/

/*Start Toggle gird options*/

      $(".optionView i").on("click",function () {
        $(this).addClass('active').siblings().removeClass('active');
          $('.items').removeClass('list-view grid-view').addClass($(this).data('class'));

        });

/*End Toggle gird options*/

/*Start .error-message */

$('.error-message').each(function () { 
  $(this).animate({
    right :0

  },1000,function(){
    $(this).delay(3000).fadeOut();

  });
 })

/*End .error-message */

/*Start Form practical *
**
*/
// hide placeholder on focus & Restore

 var placeattr='';

$("[placeholder]").focus(function () {
    placeattr = $(this).attr('placeholder');
    $(this).attr('placeholder','');


  }).blur(function () { 
     $(this) .attr('placeholder',placeattr);

   })
   //show message when filed empty
   $('[required]').blur(function () { 
     if($(this).val()==''){
      $(this).next('span').fadeIn().delay(2000).fadeOut();
     };
    });

    // add asterisk before equired filled

   $('<span class="asterisk">*</span>').insertBefore(':input[required]');
    //add position relative for her parent
   $('.asterisk').parent('div').css('position','relative');
   // customize asterisk
   $('.asterisk').each(function () { 

    $(this).css({
      'position':'absolute',
       'top':'13px',
       'left':$(this).parent('div').find('[required]').width() -15 ,
       'color':'red',
       'font-weight':'bold'
    });

    });

    // customize input file 
    $('.our-form input[type="file"]').wrap('<div class="custom-file"></div>');
    $(".custom-file").prepend('<span>Upload your Files</span>')
    $(".custom-file").append('<i class="fas fa-upload fa-lg"></i>')
    // لما نرفع صوره مثلا عايزينها تظهر 
    $('.our-form input[type="file"]').change(function () { 
      $(this).prev('span').text($(this).val());
     });

     // detect unicode  ازاى تعرف اليونيكود بتاع اى زر ف الكيبورد الاسمول غير الكبتل
     $('.detecte-unicode').on('keyup',function (e) { 
       var keyboardkode = e.keyCode || e.wich;
       $('.unicode').html(keyboardkode);
      });

    // change direction form

    $('.auto-direction').on('keyup',function () { 
      if($(this).val().charCodeAt(0)<200){
        $(this).css('direction','ltr');
      }else{
        $(this).css('direction','rtl');
      }
     });

     //معرفه الشاركود لكل الحروف هنلاحظ الانجليزى مش يعدى ال 200 عكس العربى فوق 1000
      
     var english='abcdefghigklmnoprstuvwxyz',
        text = '';
     for(var i = 0; i<english.length; i++){
        text += english.charCodeAt(i) +'<br>';
        $('.aa').html(text);
     };
    

      // ازاى تضيف تاج زى الكلمات الدليليه
      $('.add-tag').on('keyup',function (e) { 
        var keyboardkode = e.keyCode || e.wich;
        
        if(keyboardkode === 188){  // اللى هيا الكوما

          var thisvalue = $(this).val().slice(0, -1);
          console.log(thisvalue);
          $(".tags").append('<span class="tag-span"><i class="fas fa-times"></i>'+ thisvalue +'</span>');
          $(this).val('')
        }
        
       });
       
        // Remove tags name 
        // خلى بالك لو كتبناله السيليكتور على طول مش هيشتغل لان احنا كريتناه بالجيكويرى 
        $('.tags').on('click', '.tag-span i',function () { 
          $(this).parent('.tag-span ').fadeOut(600)
         });

        /* معرفه عدد حرةف البراجراف واظهار جزه منه وتنسيقه
      $('.trimmed-text p').each(function () { 
          if($(this).text().length > 100){
            var trimtext = $(this).text().substr(0, 100);
            $(this).text(trimtext +'...');
          };
       });
       */

       // طيب احنا عندنا 3 براجراف وعايزين نعمل فنكشن يطبق على الكل 

       function trimmedtext (selector, maxlenght) { 

        $(selector).each(function () { 
          if($(this).text().length > maxlenght){
            var trimtext = $(this).text().substr(0, maxlenght);
            $(this).text(trimtext +'...');
          }
       });

        }
        trimmedtext('.trimmed-text .firtp', 100);
        trimmedtext('.trimmed-text .seconedp', 200);
        trimmedtext('.trimmed-text .thirdp', 210);

  // end trimmed text

  // start bounce button effects

  /*
  $('.bounce').on('click',function () { 
    $(this).animate({

      marginTop:'-=15px'           // الخاصيه لو هتكتبها بالكامل كيس هنكتبها بدون الدبل كوتس

    },400).animate({
      marginTop:'+=15px'   

    })
   })
   */
  // start bounce button effects by function
   function bounceElement(selector , times , distance , speed){
     for(var i = 0 ; i <times ; i ++){

      $(selector).animate({

        top:'-=' + distance       
  
      },speed).animate({
        top:'+=' + distance   
  
      },speed)


     }
   }
   // الحل علشان الزرارين ميطلعوش وينزل مع بعض روح ادى لكل زرار بوسيشن ريلاتيف وبدل مارجن توب تبقى توب 
   $('.firstb').on('click',function () {

    bounceElement($(this) , 3 , 20 , 400)

   });
   $('.secondb').on('click',function () {

    bounceElement($(this) , 3 , 10 , 300)

   });

   //same height
   var maxheight = 0;
   $('.same-height div').each(function(){

    if($(this).height() > maxheight){
      maxheight = $(this).height()
    }

    
   })
   $('.same-height div').height(maxheight); // ركز فى مكانها 

   //create shuffle cards

   var zindexvalue = 0;
    $('.cards .card').on('click',function () { 
       $(this).animate({
        left:'20%',
        marginTop:30

      },400 ,function () { 

        zindexvalue--;
        $(this).css('z-index', zindexvalue);

        }).animate({

          left:$(this).css('left'),
          marginTop:0
        },400)
      });
      //create blink warinng
      blinkwarning()
      function blinkwarning(){
        $('.blink-warning').fadeOut(1000,function () { 
          $(this).fadeIn(1000);
          blinkwarning();
         })
      };

      // to do list tasks
      var newtask =$('.task-input');
      $('.add-task').on('submit',function (e) { 
          e.preventDefault();
          if(newtask.val() !=''){
            $('<li>' + newtask.val() +'</li>').appendTo('.tasks');
            newtask.val('');
          }
       });
       $('.tasks').on('click','li',function () {
          // لازم نكتبها بالطريقه دى علشان ال li متكريته بالجيكويرى
         $(this).css('text-decoration','line-through').delay(200).fadeOut(200);
         $(this).remove();  // علشان يتشال من الدم ترى
        })

      // Start typeWriter Effects

      var thetext = $('.typer').data('text'),
          thetextlength = thetext.length,
          n = 0,
          thetyper = setInterval(function () { 
            $('.typer').each(function () { 
              $(this).html($(this).html() + thetext[n]);
             });
             n+=1;
             if(n >=thetextlength){
               clearInterval(thetyper);
             }

           },100);

           // Start calculate cells
          
          var thesummary = 0;
          $('.price').each(function () { 
            thesummary +=parseInt ($(this).text());
           });
           $('.the-total').text(thesummary);
    

  // start auto change content
      (function autochanges() { 
        $('.tricker-list .active').each(function () { 
          if(! $(this).is(':last-child')){
            $(this).delay(1000).fadeOut(1000,function () {
              $(this).removeClass('active').next().addClass('active').fadeIn();
               autochanges();
              });
          } else{
            $(this).delay(1000).fadeOut(1000, function () {
              $(this).removeClass('active');
              $('.tricker-list li').eq(0).addClass('active').fadeIn();
              autochanges();
              });
              
          }
        });
       }());

  // start dynamic tables
  $('.tabs-list li').on('click',function () { 
    $(this).addClass('active').siblings().removeClass('active');
    $('.content-list > div').hide();
    $($(this).data('content')).fadeIn();

   });
   //switch tab view
   $('.switch-tab').on('click',function () { 
    $(this).next('.dynamic-tabs').toggleClass('left-tab');

    });
    // email suggest
    var emailprovider = ['gmail.com','hotmail.com' ,'outlook.com' ,'yahoo.com'];
    var finalstring = '';
    $('.email-suggest').on('keyup',function(){
      var finalstring = '';
      if(! $(this).next().is('.suggest-box')){
        $('<ul class="suggest-box"></ul').insertAfter($(this));
      }
      for(var i = 0; i<emailprovider.length; i++){
        finalstring+= '<li>' + $(this).val() + '@' +emailprovider[i] +'</li>'
      }
      $('.suggest-box').html(finalstring);
    });
    $('body').on('click','.suggest-box li',function(){
      $('.email-suggest').val($(this).text());
      $(this).parent().fadeOut(300);
    })

});
