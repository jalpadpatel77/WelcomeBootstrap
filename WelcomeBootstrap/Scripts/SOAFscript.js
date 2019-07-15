$(function () {

    $("#btnFear").click(function () {
        var myArray = new Array();
        myArray.push(+$("#fear1").val());
        myArray.push(+$("#fear2").val());
        myArray.push(+$("#fear3").val());
        myArray.push(+$("#fear4").val());
        myArray.push(+$("#fear5").val());
        myArray.push(+$("#fear6").val());


        var kvalue = +$("#kvalue").val();


        for (index = 0, found = false; index <= myArray.length - 1; index++) {
            var position = myArray.indexOf(kvalue - myArray[index], index + 1);
            if (position > 0) {
                found = true;
                break;
            }
        }
        if (found) {
            $("#fearOut").html("<b>" + kvalue + "</b> was found by adding" + " <span class= 'target'>" + myArray[index] + "</span> and <span class='target'>" + myArray[position] + "</span>");
            return;

        }

        else {
            $(myArray()).val();
            $("#fearOut").text(" not found");
        }




    });

    $("#btnClear5").click(function () {

        $("#fear1, #fear2, #fear3, #fear4, #fear5, #fear6").val("");

        $("#kvalue").val("");
        $("#fearOut").text("");
    });

    $("#code5").hide();
    $("#btnToggle5").click(function () {
        $("#code5").toggle();
        if ($(this).text() == "Show code") {
            $(this).text("Hide code");
        }
        else {
            $(this).text("Show code");
        }

    });


})