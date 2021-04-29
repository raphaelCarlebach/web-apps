$(document).ready(() => {

    let calc = [];
    let curent = "";
    let prev = "";
    let operator = "";

    $(".btn").click((e) => {
        let btn = e.target.innerHTML;
        console.log(btn);

        if (btn != "del" && btn != "=" && btn != "AC") {
            calc.push(btn);
        };

        console.log(calc);

        if (btn >= '0' && btn <= '9' || btn === '.') {
            console.log('number');
            handleNumber(btn);

        } else {
            console.log('operator');
            handleOperator(operator);

        }
    });


    function handleNumber(btn) {
        if (btn === "." && curent.includes(".")) return;
        curent = curent + btn;
        console.log(curent);
        updateDisplay()
    };


    function handleOperator(operator) {
        if (operator === "" ) return;
        console.log(operator);
        operator = operator
        prev = curent;
        curent = "";
    };

    function calcTotal() {
       const total =  prev + curent;
       console.log(total)
    };

    function updateDisplay() {
        let math = $(".math");
        let result = $(".result");

        math.html(curent);
        result.html(prev);


    };

    $("#delet").click(() => {
        calc.pop();
        console.log(calc);
    });


    $("#clear").click(() => {
        calc = [];
        curent = "";
        prev = "";
        operator = "";
        updateDisplay(curent)

    });

    $("#equal").click(() => {
        const total =  prev + curent;
        console.log(total)
    });

});

