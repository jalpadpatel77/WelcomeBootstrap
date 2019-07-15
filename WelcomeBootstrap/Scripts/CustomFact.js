
$(function () {
       $("#btnFact").click(function () {

        //Step 1: Get Data
        var number = +$("#fact").val();

        if (number > 170) {
            alert(".....");
            $("#fact").val("");
            return;
        }
        else {
            //Step 2
            for (var loop = number - 1; loop > 1; loop--) {
                // Step 3 calculate Factorial
                //number = number * loop
                number *= loop;
            }
            $("#factOut").text(number);

        }
         });

    $("#btnClear2").click(function () {
        $("#fact").val("");
        $("#factOut").text("");
    });
    $("#code2").hide();
    $("#btnToggle2").click(function () {
        $("#code2").toggle();
        if ($(this).text() == "Show code") {
            $(this).text("Hide code");
        }
        else {
            $(this).text("Show code");
        }

    });


})

   



   