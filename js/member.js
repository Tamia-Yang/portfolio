
var conem = document.querySelector(".conem");
var $useridConfirm = document.querySelector(".userid-confirm");
var $userem = document.querySelector(".useremail");
$useridConfirm.addEventListener("click", function () {

    var ema = $userem.value;

    if (/\S+@\S+\.\S+/.test(ema) == false) {
        conem.style.visibility = "visible";
    } else {
        conem.style.visibility = "hidden";

    }
});


// 텍스트 인증 함수 정의

var pwd1 = document.querySelector("#pwd1");

var pwem = document.querySelector(".pwem");

var pwdlen = pwd1.value;
var len = pwdlen.length;

pwd1.addEventListener("change", function () {

    if (len == undefined || len > 12) {

        pwem.textContent = "최대 " + 12 + "글자 이내로 입력하세요!"
        pwem.style.color = "red";


    } else if (len < 4) {
        pwem.textContent = "최소 " + 4 + "글자 이상 입력하세요!";
        pwem.style.color = "red";
        pwd1 = "";

    }
    else {
        pwem.textContent = "비밀번호는 최대12자이내,문자,숫자,특수문자 조합으로 입력해주세요.";
        pwem.style.color = "#777";
    }


});




pwd2.addEventListener("change", function () {
    var pwd2 = document.querySelector("#pwd2");
    var pwd2confirm = document.querySelector(".pwd2confirm");

    if (pwd1.value == pwd2.value) {
        console.log(pwd2.value)
        pwd2confirm.classList.remove("active");
    } else {
        pwd2confirm.classList.add("active");
        pwd2.focus();
    }
});




// //비밀번호 인증 함수 정의

// var num = /[0-9]/;
// var eng = /[a-zA-Z]/;
// var spc = /[~!@#$%^&*()_+\]\[-]/;
// var i = 0;


// }
// function comparePw() {
//     if (pwd1.value != pwd2.value) {
//         alert("두 개의 비밀번호를 동일하게 입력하세요.");
//         pwd2.value = "";
//         pwd2.focus();
//     }  //비번이 len의 갯수보다 큰지 확인


//     //비번에 숫자가 포함되어 있는지 확인
//     if (num.test(pwd1)) {
//         i++;
//     } else {
//         answer.addCla("비밀번호에 숫자를 포함하세요.");
//     }

//     //문자가 포함되어 있는지 확인
//     if (eng.test(pwd1)) {
//         i++;
//     } else {
//         alert("비밀번호에 문자를 포함하세요.");
//     }

//     //특수문자가 포함되어 있는지 확인
//     if (spc.test(pwd1)) {
//         i++;
//     } else {
//         alert("비밀번호에 특수문자를 포함하세요.");
//     }

// }
