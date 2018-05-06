$( document ).ready(function() {

    var Hnav = false;
    var Vnav = false;
    $("#container-tab-right").hide();


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
            $(".container-map").width('100%');
            $(".container-map").height('100%');
            $("#container-tab-right").hide();
            Vnav = false;
            Hnav = false;
            $(this).attr('src','Menu-Select.png');
          } else if( $(".height").width()*1.2003841229193341 > 1500){
              $(".container-map").height('100%');
              $(".container-map").width('80%');
              $("#container-tab-right").width('20%');
              $("#container-tab-right").height('100%');
              $("#container-tab-right").show();
              $(this).attr('src','Menu-Selected.png');
              Vnav = true;
          } else {
              $(".container-map").width('100%');
              $(".container-map").height('60%');
              $("#container-tab-right").show();
              $("#container-tab-right").width('100%');
              $("#container-tab-right").height('40%');
              $(this).attr('src','Menu-Selected.png');
              Hnav = true;
          }
        }
    });
});
