//Tìm số nguyên n sao cho 1+2+...+n > 1000, với n nhỏ nhất
var resultP = document.getElementById('result');
document.getElementById("find").onclick = function () {
    var s = 0;
    var n = 1;
    while (s <= 1000) {
        s = s + n;
        n = n + 1;
    }
    resultP.innerHTML = n - 1;
}
document.getElementById("find1").onclick = function () {
    var s = 0;
    var n = 1;
    do {
        s = s + n;
        n = n + 1;
    } while (s <= 1000)
    resultP.innerHTML = n - 1;
}
document.getElementById("find2").onclick = function () {
    var s = 0;
    for (var n = 1; n <= 1000; n++) {
        s = s + n;
        if (s > 1000) {
            resultP.innerHTML = n;
            break;
        }
    }
}
//  Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + ... + x^n


// document.getElementById("calculate").onclick = function(){
//     var x = +document.getElementById("x").value;
//     var n = +document.getElementById("n").value;
//     var result2 = document.getElementById("result2");
//     var S = 0;
//     var T = 1; 
//     var i = 1;
//     if (isNaN(x) || isNaN(n) || n <= 0) {
//         result2.innerHTML = '<p>Giá trị x và n phải là số nguyên dương.</p>';
//         return;
//     }
//     while(i <= n){
//         T = T * x;
//         S = S + T;
//         i++;
//     }
//     result2.innerHTML = `
//         <p>S(n) = x + x^2 + x^3 + ... + x^n = ${S}</p>
//     `;
// }
// document.getElementById("calculate").onclick = function () {
//         var x = +document.getElementById("x").value;
//         var n = +document.getElementById("n").value;
//         var result2 = document.getElementById("result2");
//         var S = 0;
//         var T = 1; 
//         if (isNaN(x) || isNaN(n) || n <= 0) {
//             result2.innerHTML = '<p>Giá trị x và n phải là số nguyên dương.</p>';
//             return;
//         }
//         for(var i = 1; i <= n; i++){
//             T = T * x;
//             S = S + T;
//         }
//         result2.innerHTML = `
//             <p>S(n) = x + x^2 + x^3 + ... + x^n = ${S}</p>
//         `;
//     }


document.getElementById("calculate").onclick = function () {
    var x = +document.getElementById("x").value;
    var n = +document.getElementById("n").value;
    var result2 = document.getElementById("result2");
    var S = 0;
    var T = 1;
    var i = 1;
    if (isNaN(x) || isNaN(n) || n <= 0) {
        result2.innerHTML = '<p>Giá trị x và n phải là số nguyên dương.</p>';
        return;
    }
    do {
        T = T * x;
        S = S + T;
        i++;
    } while (i <= n)
    result2.innerHTML = `
        <p>S(n) = x + x^2 + x^3 + ... + x^n = ${S}</p>
    `;
}
// Nhập vào n. Tính giai thừa 1 * 2 * ... * n
// document.getElementById("calculate2").onclick = function () {
//     var n = +document.getElementById("n3").value;
//     var result3 = document.getElementById("result3");
//     var GT = 1;
//     if (isNaN(n) || n < 0) {
//         result3.innerHTML = '<p>Giá trị n phải là số nguyên không âm.</p>';
//         return;
//     }
//     for (var i = 1; i <= n; i++) {
//         GT = GT *i;
//     }

//     result3.innerHTML = `
//         <p>N! = 1 * 2 * ... * ${n} = ${GT}</p>
//     `;
// }
// document.getElementById("calculate2").onclick = function () {
//     var n = +document.getElementById("n3").value;
//     var result3 = document.getElementById("result3");
//     var GT = 1;
//     var i = 1;
//     if (isNaN(n) || n < 0) {
//         result3.innerHTML = '<p>Giá trị n phải là số nguyên không âm.</p>';
//         return;
//     }
//     while(i <= n){
//         GT = GT * i;
//         i++;
//     }

//     result3.innerHTML = `
//         <p>N! = 1 * 2 * ... * ${n} = ${GT}</p>
//     `;
// }
document.getElementById("calculate2").onclick = function () {
    var n = +document.getElementById("n3").value;
    var result3 = document.getElementById("result3");
    var GT = 1;
    var i = 1;
    if (isNaN(n) || n < 0) {
        result3.innerHTML = '<p>Giá trị n phải là số nguyên không âm.</p>';
        return;
    }
    do{
        GT = GT * i;
        i++;
    }while(i <= n)

    result3.innerHTML = `
        <p>N! = 1 * 2 * ... * ${n} = ${GT}</p>
    `;
}
// Liệt kê các số nguyên tố trong khoảng từ a đến b
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
// document.getElementById("calculate3").onclick = function () {
//     var a = +document.getElementById("a").value;
//     var b = +document.getElementById("b").value;
//     var result4 = document.getElementById("result4");
//     var GT = 1;
//     var i = 1;
//     if (isNaN(a) || isNaN(b) || a >= b) {
//         result4.innerHTML = '<p>Giá trị a và b phải là số nguyên dương và a &lt; b.</p>';
//         return;
//     }

//     let primeNumbers = [];

//     for (let i = a; i <= b; i++) {
//         if (isPrime(i)) {
//             primeNumbers.push(i);
//         }
//     }

//     var primesList = primeNumbers.join(', ');
//     result4.innerHTML = `
//         <p>Số nguyên tố trong khoảng từ ${a} đến ${b}: ${primesList}</p>
//     `;
// }
// document.getElementById("calculate3").onclick = function () {
//     var a = +document.getElementById("a").value;
//     var b = +document.getElementById("b").value;
//     var result4 = document.getElementById("result4");
//     if (isNaN(a) || isNaN(b) || a >= b) {
//         result4.innerHTML = '<p>Giá trị a và b phải là số nguyên dương và a &lt; b.</p>';
//         return;
//     }

//     let primeNumbers = [];
//     var i = a;
//     do {
//         if (isPrime(i)) {
//             primeNumbers.push(i);
//         }
//         i++;
//     }while(i <= b)

//     var primesList = primeNumbers.join(', ');
//     result4.innerHTML = `
//         <p>Số nguyên tố trong khoảng từ ${a} đến ${b}: ${primesList}</p>
//     `;
// }
document.getElementById("calculate3").onclick = function () {
    var a = +document.getElementById("a").value;
    var b = +document.getElementById("b").value;
    var result4 = document.getElementById("result4");
    var GT = 1;
    var i = 1;
    if (isNaN(a) || isNaN(b) || a >= b) {
        result4.innerHTML = '<p>Giá trị a và b phải là số nguyên dương và a &lt; b.</p>';
        return;
    }

    let primeNumbers = [];
    var i = a;
    while(i <= b) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
        i++;
    }

    const primesList = primeNumbers.join(', ');
    result4.innerHTML = `
        <p>Số nguyên tố trong khoảng từ ${a} đến ${b}: ${primesList}</p>
    `;
}