function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {
    var elems = form.elements;
    var regphone = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
    var cl_phone = document.getElementById('telNo').value;
    var valid_phone = regphone.test(cl_phone);
    var regemil = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var cl_email = document.getElementById('email').value;
    var valid_email = regemil.test(cl_email);
    var check_sucessfull = true;
    resetError(elems.firstname.parentNode);
    if (!elems.firstname.value) {
        showError(elems.firstname.parentNode, ' Укажите имя.');
        check_sucessfull=false;
    }

    resetError(elems.telNo.parentNode);
    if (!cl_phone) {
        showError(elems.telNo.parentNode, ' Укажите телефон.');
        check_sucessfull=false;
    }else if (!valid_phone) {
        showError(elems.telNo.parentNode, 'Телефон в неправильном формате');
        check_sucessfull=false;
    }


    resetError(elems.email.parentNode);
    if (!cl_email) {
        showError(elems.email.parentNode, ' Укажите электронную почту.');
        check_sucessfull=false;
    }else if (!valid_email) {
        showError(elems.email.parentNode, ' Адрес электронной почты введен неправильно!');
        check_sucessfull=false;
   }

    //return valid;
    if (check_sucessfull) {
        $("#thanks-dialog").modal('show')
    }
}

//add photo to form
function getFile(){
    document.getElementById("upfile").click();
}
function sub(obj){
    var file = obj.value;
    var fileName = file.split("\\");
    document.getElementById("yourBtn").innerHTML = fileName[fileName.length-1];
    document.myForm.submit();
    event.preventDefault();
}


$(document).ready(function(){
    $("#navbarResponsive").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".card-img-top").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair"
    });
});



