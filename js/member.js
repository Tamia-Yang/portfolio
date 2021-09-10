

// $("input[type=submit]").on("click", function (e) {
//     if (!isTxt("userid", 5)) e.preventDefault();
//     if (!isPwd("pwd1", "pwd2", 5)) e.preventDefault();
//     if (!isTxt("comments", 20)) e.preventDefault();
//     if (!isCheck("hobby")) e.preventDefault();
//     if (!isCheck("gender")) e.preventDefault();
//     if (!isTxt("email1")) e.preventDefault();
//     if (!isSelect("email2")) e.preventDefault();
// });

//텍스트 인증 함수 정의
var name = document.querySelector("#name");
var len = name.length;

// function isTxt(name, len) {
//     if (len == undefined & len > 12)
//         var txt = $("[name=" + name + "]").val();
//     var msg = $("[name=" + name + "]").attr("placeholder");

//     if (txt == "") {
//         alert(msg);
//         $("[name=" + name + "]").addClass("error");
//         return false;
//     } else {
//         if (txt.length < len) {
//             alert("최소 " + len + "글자 이상 입력하세요!");
//             $("[name=" + name + "]").addClass("error");
//             return false;
//         } else {
//             $("[name=" + name + "]").removeClass("error");
//             return true;
//         }
//     }
// }

//  아이디 확인 
var userId = document.querySelector("#userid");

var pwd1 = document.querySelector("#pwd1");
var pwd2 = document.querySelector("#pwd2");
var useridConfirm = document.querySelector(".userid-confirm");

useridConfirm.addEventListener("click", checkId);


function checkId(e) {
    e.preventDefault();
    if (userId.value.length > 12 || userId.value.length < 4) {
        alert("비밀번호는 4~12자리 이내여야합니다")
        userId.value = "";
        userId.select();
    }
}

//비밀번호 인증 함수 정의
pwd1.onchange = cehckPw;
pwd2.onchange = comparePw;
var num = /[0-9]/;
var eng = /[a-zA-Z]/;
var spc = /[~!@#$%^&*()_+\]\[-]/;
var i = 0;
function cehckPw() {
    if (pwd1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다")
    }
    if (pwd1 === pwd2) {

        //비번이 len의 갯수보다 큰지 확인
        if (pwd1.length >= len) {
            i++;
        } else {
            alert("비밀번호는 5자리 이상 입력하세요.");
        }

        //비번에 숫자가 포함되어 있는지 확인
        if (num.test(pwd1)) {
            i++;
        } else {
            alert("비밀번호에 숫자를 포함하세요.");
        }

        //문자가 포함되어 있는지 확인
        if (eng.test(pwd1)) {
            i++;
        } else {
            alert("비밀번호에 문자를 포함하세요.");
        }

        //특수문자가 포함되어 있는지 확인
        if (spc.test(pwd1)) {
            i++;
        } else {
            alert("비밀번호에 특수문자를 포함하세요.");
        }
    }
}
function comparePw() {
    if (pwd1.value != pwd2.value) {
        alert("암호가 틀립니다. 다시 입력하세요");
        pwd2.value = "";
        pwd2.focus();
    }  //비번이 len의 갯수보다 큰지 확인


    //비번에 숫자가 포함되어 있는지 확인
    if (num.test(pwd1)) {
        i++;
    } else {
        alert("비밀번호에 숫자를 포함하세요.");
    }

    //문자가 포함되어 있는지 확인
    if (eng.test(pwd1)) {
        i++;
    } else {
        alert("비밀번호에 문자를 포함하세요.");
    }

    //특수문자가 포함되어 있는지 확인
    if (spc.test(pwd1)) {
        i++;
    } else {
        alert("비밀번호에 특수문자를 포함하세요.");
    }

}

// function isPwd(name1, name2, len) {
//     var $pwd1 = $("input[name=" + name1 + "]");
//     var $pwd2 = $("input[name=" + name2 + "]");
//     var pwd1 = $pwd1.val();
//     var pwd2 = $pwd2.val();
//     var isConfirm = false;
//     var i = 0;

//     var num = /[0-9]/;
//     var eng = /[a-zA-Z]/;
//     var spc = /[~!@#$%^&*()_+\]\[-]/;



//         if (i === 4) {
//             $pwd1.removeClass("error");
//             $pwd2.removeClass("error");
//             isConfirm = true;
//             return isConfirm;
//         } else {
//             $pwd1.addClass("error");
//             $pwd2.addClass("error");
//             return isConfirm;
//         }


//     } else {
//         alert("두 개의 비밀번호를 동일하게 입력하세요.")
//         $pwd1.addClass("error");
//         $pwd2.addClass("error");
//         return isConfirm;
//     }


// }

//check 인증 함수 정의
// function isCheck(name) {
//     var isCheck = $("input[name=" + name + "]").is(':checked');

//     if (isCheck) {
//         $("input[name=" + name + "]").parent().find("p").hide();
//         return true;
//     } else {
//         $("input[name=" + name + "]").parent().find("p").show();
//         return false;
//     }
// }

//select 인증 함수 정의
// function isSelect(name) {
//     var sel = $("select[name=" + name + "]").children("option:selected").val();
//     var msg = $("select[name=" + name + "]").children("option").eq(0).text();

//     if (sel == "") {
//         alert(msg);
//         $("select[name=" + name + "]").addClass("error");
//         return false;
//     } else {
//         $("select[name=" + name + "]").removeClass("error");
//         return true;
//     }
// }
