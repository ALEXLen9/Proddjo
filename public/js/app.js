
$(function () {
    $("input.choose-file").change(function () {
        var filename = $(this).val().replace(/.*\\/, "");
        $(this).parent().addClass('file-choosen'); // Добавление класса для label чтобы изменить вид кнопки после выбора файла
        $(this).parent().next(".choosen-file-name").addClass('file-choosen') // Добавление класса для блока с именем файла чтобы менять стиль блока
        $(this).parent().next(".choosen-file-name").html(filename);
    });


});


$(".add").click(function () {

    function makeCounter() {
        var currentCount = 1;

        return function () {
            return currentCount++;
        };
    }

    var counter = makeCounter();
    
    $(".project__clone").clone().appendTo('<div name="form-clone" '+ counter + '');

});