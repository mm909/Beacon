$( document ).ready(function() {

    var Hnav = false;
    var Vnav = false;


    $('#threeLines').hover(function(){
        if(!(Hnav || Vnav))
        $(this).attr('src','Menu-Select.png');
        }, function(){
        if(!(Hnav || Vnav))
        $(this).attr('src','Menu.png');
    });

    $('#threeLines').on({
        'click': function(){
          if(Vnav || Hnav){
            $(".Map").width('100%');
            $(".Map").height('100%');
            Vnav = false;
            Hnav = false;
            $(this).attr('src','Menu-Select.png');
          } else if( $(".height").width()*1.2003841229193341 > 1500){
              $(".Map").height('100%');
              $(".Map").width('80%');
              $(this).attr('src','Menu-Selected.png');
              Vnav = true;
          } else {
              $(".Map").width('100%');
              $(".Map").height('60%');
              $(this).attr('src','Menu-Selected.png');
              Hnav = true;
          }
        }
    });
});
