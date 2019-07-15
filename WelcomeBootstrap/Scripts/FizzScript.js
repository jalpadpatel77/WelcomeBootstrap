$(function () {

    $("#btnFizz").click(function () {

        var num1 = +$("#fizzIn1").val();

        var num2 = +$("#fizzIn2").val();

        for (var counter = 1, array = [], Fizz = 0, Buzz = 0; counter <= 100; counter++) {
            Fizz = counter % num1;
            Buzz = counter % num2;
            if (!Fizz && !Buzz) {
                array.push("<span class='FizzBuzz'>FizzBuzz</span>");
            } else if (!Fizz) {
                array.push("<span class='Fizz'>Fizz</span>");
            } else if (!Buzz) {
                array.push("<span class='Buzz'>Buzz</span>");
            } else
                array.push(counter);

        }

        var output = array.join(', ');
        $("#fizzOut").html(output);

    });

    $("#btnClear4").click(function () {
        $("#fizzIn1").val("");
        $("#fizzIn2").val("");
        $("#fizzOut").text("");
    });

    $("#code4").hide();
    $("#btnToggle4").click(function () {
        $("#code4").toggle();
        if ($(this).text() == "Show code") {
            $(this).text(" Hide code");
        }
        else {
            $(this).text("Show code");
        }

    });
})