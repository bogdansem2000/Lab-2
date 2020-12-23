document.addEventListener("DOMContentLoaded", () => {
    const optionSpan = document.querySelector(".option");
    let num = 13;
    let option = num % 6 + 1;
    optionSpan.textContent = option;

    const calc = document.querySelector("#calc");
    const answerBlock = document.querySelector("#answer"); 

    calc.addEventListener("click", function () {

        let katet1 = document.querySelector("#num1").value;
        let katet2 = document.querySelector("#num2").value;

        if (katet1 <= 0 || katet2 <= 0) {
            answerBlock.style.color = "red";
            answerBlock.innerHTML = "Довжина катету не можи бути меншою або дорівнювати нулю!";
        } else {
            let answer = Math.sqrt((katet1 ** 2) + (katet2 ** 2));
            answerBlock.style.color = "black";
            answerBlock.innerHTML = "Довжина гіпотенузи = " + answer;
            document.querySelector("form").reset();
        }
    });

});
