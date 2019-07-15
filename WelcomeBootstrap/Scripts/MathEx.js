$(function () {

    $("#mathBtn").click(function () {

        var num1 = Number($("#mathnum1").val());
        var num2 = Number($("#mathnum2").val());
        var num3 = Number($("#mathnum3").val());
        var num4 = Number($("#mathnum4").val());
        var num5 = Number($("#mathnum5").val());

        //Step 2

        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var average = sum / 5;

        //step 3

        $("#smallest").text(" The smallest number is:" + smallest);
        $("#largest").text(" The largest number is:" + largest);
        $("#sum").text(" The sum is:" + sum);
        $("#product").text(" The product is:" + product);
        $("#average").text(" The average number:" + average);

        $("#clearBtn1").click(function () {
            $("#mathnum1, #mathnum2, #mathnum3, #mathnum4, #mathnum5").val("");
            $("#smallest").text("");
            $("#largest").text("");
            $("#sum").text("");
            $("#product").text("");
            $("#average").text("");
        });

    });

    $("#code1").hide();
    $("#btnToggle1").click(function () {
        $("#code1").toggle();
        if ($(this).text() == "Show code") {
            $(this).text("Hide code");
        }
        else {
            $(this).text("Show code");
        }

    });

    
})