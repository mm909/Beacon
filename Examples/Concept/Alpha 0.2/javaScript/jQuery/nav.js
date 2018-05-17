$( document ).ready(function() {

    const ratio = 1.2003841229193341;
    var Hnav = false;
    var Vnav = false;
    $("#container-tab").hide();

    $('#threeLines').hover(function(){
        if(!(Hnav || Vnav))
        $(this).attr('src',"../images/menuUI/menuHover.png");
        }, function(){
        if(!(Hnav || Vnav))
        $(this).attr('src',"../images/menuUI/menu.png");
    });

    $('#threeLines').on({
        'click': function(){
          if(Vnav || Hnav){
            $(".container-map").width('100%');
            $(".container-map").height('100%');
            $("#container-tab").hide();
            Vnav = false;
            Hnav = false;
            $(this).attr('src',"../images/menuUI/menuHover.png");
          } else if( $(".height").width() * ratio > 1500){
              $(".container-map").height('100%');
              $(".container-map").width('80%');
              $("#container-tab").width('20%');
              $("#container-tab").height('100%');
              $("#container-tab").show();
              $(this).attr('src',"../images/menuUI/menuSelected.png");
              Vnav = true;
          } else {
              $(".container-map").width('100%');
              $(".container-map").height('60%');
              $("#container-tab").show();
              $("#container-tab").width('100%');
              $("#container-tab").height('40%');
              $(this).attr('src',"../images/menuUI/menuSelected.png");
              Hnav = true;
          }
        }
    });
});
