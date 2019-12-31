
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
    
    $(".project__clone").append('<div class="form__clone" name=" '+ counter + '"><div class="project__clone"><div class="project__title">Trade Details</div><div class="form__inform"><div class="project__col"><div class="form__input"><input type="text" class="project__input" placeholder=" "><label class="project__label">Trade Name</label><img class="project__img" src="public/images/name_icon.png" alt="">  <div class="project__mandatory"><div class="project__star">*</div>  </div> </div> <div class="form__input"> <input type="text" class="project__input" placeholder=" "> <label class="project__label">Trade Budget</label> <img class="project__img" src="public/images/budget_icon.png" alt=""></div> <div class="form__input"> <input type="text" class="project__input" placeholder=" "><label class="project__label">Trade Time</label> <img class="project__img" src="public/images/time_icon.png" alt=""> <div class="project__mandatory"><div class="project__star">*</div> </div> </div> </div><div class="project__col col__left"> <div class="form__radio trade__radio"> <div class="radio"><div class="project__title title">Status</div> <label class="radio__dot"><input type="radio" name="status" checked><div class="radio__text">In Progress</div></label><label class="radio__dot"><input type="radio" name="status"> <div class="radio__text">Awarded</div></label> </div>  </div> <div class="project__image"> <div class="project__title title">Trade Document</div><div class="project__border"> <div class="choose-file-block"> <label><input id="choose-file1" class="choose-file" type="file" name="file[]">Add Docs </label> <div class="choosen-file-name"></div> </div> </div>  </div> </div></div><div class="form__inform link_desc"><div class="form__input"><input type="text" class="project__input project__desc" placeholder=" "> <label class="project__label label__desc">Description</label><img class="project__img img__desc" src="public/images/desc_icon.png" alt=""> </div></div></div>');

});