$(function () {

    // Number only 
    $("#cn").on('keypress blur',function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            //display error message

            $(".error").html("Numbers Only").show().fadeOut(1000);
            return false;
        }
    });

    // Spae between Four chars 
    $('#cn').on('keyup blur', function () {
        $(this).val(function (index, value) {
            return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
        });
        $('.card_numer').text($(this).val());
    });

    // Chars only 


    $('#cname').on('keyup blur', function () {
        var node = $(this);
        node.val(node.val().replace(/[^a-z]/g, " "));
        $('.card__info1').text($(this).val())
    });


    // Selected Value 

    $('#selectedMonth').change(function () {
        $('.card__info2').text($(this).val()+ " / ")
    });

    $('#selectedYear').change(function () {
        $('.card__info3').text($(this).val())
    });


    // Cvv 



    // 
    $('#CVV').on("focus keypress", function (e) {

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {

            //display error message

            $(".error2").html("Numbers Only").show().fadeOut(2000);
            return false;
        }

        $('.card__back ').css({

            transform: 'rotateY(0deg)',
        }).end();
        $('.card__secret--last').text($(this).val())
    });

       $('#CVV').on("blur", function () {
    
            $('.card__back ').css({
    
                transform: 'rotateY(180deg)',
            })
    
        });


});