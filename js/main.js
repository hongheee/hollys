$(document).ready(function(){
    
    $('.gnb > li').mouseenter(function(){   //각각의 메인 메뉴에 마우스를 올려놨을때
        $('.gnbLayer').stop().slideDown(500);      //gnbLayer가 슬라이되어서 보여진다
        $('.gnb span').stop().fadeIn(300);         //각각의 메뉴 안에있는 한글이 보여진다(회색)
        $(this).find('span').css({color:"#fff"}) 
        //마우스가 올라간 바로 그 메뉴 안에있는 한글이 흰색으로    
    });
    
    $('.gnb > li').mouseleave(function(){   //각각의 메인 메뉴에 마우스를 뗐을때
        $(this).find('span').css({color:""})    // 흰색 글씨가 다시 회색으로
    })

    $('.gnbLayer').mouseleave(function(){   //gnbLayer에서 마우스가 벗어났을때
        $('.gnbLayer').stop().slideUp(200); //gnbLayer가 위로 닫히면서 안보이게된다
        $('.gnb span').stop().fadeOut(300); //각각의 메뉴 안에있는 한글이 사라진다  
    });

});