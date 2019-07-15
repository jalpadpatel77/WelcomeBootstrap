$(function () {

    $("#btnPal2").click(function () {
        var word = $("#palIn").val();
        var wordlower = word.toLowerCase();
        var oneword = wordlower.replace(/\s+/g, '');
        var revword = oneword.split('').reverse().join('');

        var message = "";

        if (oneword == revword) {
            message = word + " reversed = " + revword + " Therefore, " + word + "  is a Palindrome.";
        }
        else {
            message = word + "  reversed != " + revword + "  Therefore, " + word + "  is a  not Palindrome.";
        }

        $("#palOut").text(message);


    });

    $("#btnClear6").click(function () {
        $("#palIn").val("");
        $("#palOut").text("");
    });

    $("#code6").hide();
    $("#btnToggle6").click(function () {
        $("#code6").toggle();
        if ($(this).text() == "Show code") {
            $(this).text("Hide code");
        }
        else {
            $(this).text("Show code");
        }

    });


})