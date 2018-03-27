$(document).ready(function () {
    var allYeses = 0;
    $("button").on("click", function () {
        $(this).prop("disabled", true);
        if ($(this).val() === 'yes') {
            allYeses++;
        }
        console.log(allYeses);
    });
    $(".all").on("click", function () {
        $(".total").find("span").text(allYeses);
    });
});
