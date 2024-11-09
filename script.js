let form1 = document.forms.form1;
let form2 = document.forms.form2;

function funMinus() {
    // сбрасываем формы
    form1.reset();
    form2.reset();

    document.getElementById('test_res').innerText = ``; // очищаем div 
    document.getElementById("i").innerText = ``;

    document.documentElement.style.setProperty('--transfX', '0px'); //переходим на слайд 1
}

// кнопка на 2 слайде (стрелка)
const btnM = document.getElementById('btnM');
btnM.addEventListener('click',  funMinus);

//кнопка на 3 слайде (пройти тест заново)
const reset_btn = document.getElementById('reset_btn')
reset_btn.addEventListener('click', funMinus)

//1 слайд - кнопка "продолжить"
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = '';
    let test = true;

    // Проверка имени
    if (form1.inp1.validity.valid) {
        result += 'Имя:  ' + form1.inp1.value + '\n';
        document.getElementById("log_error").innerText = '';
    } else {
        document.getElementById("log_error").innerText = 'Имя введено неверно. (Должно начинаться с большой буквы, минимум 2 символа, только русские буквы)';
        test = false;
    }

    // Проверка даты рождения
    if (form1.inp2.validity.valid) {
        result += 'Дата рождения: ' + form1.inp2.value + '\n';
        document.getElementById("date_error").innerText = '';
    } else {
        document.getElementById("date_error").innerText = 'Некорректная дата';
        test = false;
    }

    // Пол
    result += 'Пол: ' + form1.gender.value + '\n';

    // Все заполнено, переходим на 2 слайд
    if (test) {
        document.getElementById("i").innerText = result; // данные выводятся в div "i" на 3 слайде
        document.documentElement.style.setProperty('--transfX', '-500px');
    }
});

//получаем и обрабатываем данные из формы на 2 слайде - кнопка "проверить"
document.getElementById('btnP').addEventListener('click', function(event) {
    event.preventDefault();
    let result2 = Number() // переменная  result2 - числовой тип данных

    if (form2.gwen_name.validity.valid){ // проверка validity
        result2 += 1 //если true - +1 к результату 
    }

    if (form2.gwen_lastname.validity.valid){// проверка validity
        result2 += 1 //если true - +1 к результату 
    }

    if (form2.sharl_name.validity.valid){// проверка validity
        result2 += 1 //если true - +1 к результату 
    }

    let seria = Number(form2.seria.value) //преобразование value в число 
    result2 += seria // value может быть "0" или "1"

    let bff = Number(form2.bff.value)
    result2 += bff

    let power = Number(form2.power.value)
    result2 += power

    document.getElementById('test_res').innerText = `Количество правильных ответов: ${result2} из 6`;// Выводим количество правильных ответов в test_res на 3 слайде
    document.documentElement.style.setProperty('--transfX', '-1000px'); // переходим на следующий слайд

});

