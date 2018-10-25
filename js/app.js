(() => {
    'use strict';

    function fib(n) {////////    4 Task
        let masFib = [0, 1];
        for (let i = 2; i < n + 1; i++) {

            masFib[i] = masFib[i - 1] + masFib[i - 2];

        }
        console.log(masFib[n]);
    }

    fib(20);

    console.log("////////////////////////////////");


    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        if (n !== 1) {
            return n * factorial(n - 1);
        }
        return n;
    }

    console.log(factorial(5));

    console.log("////////////////////////////////");


    function isPrime(n) {
        if (n === 1) // 1 - не простое число
            return false;
        // перебираем возможные делители от 2 до sqrt(n)
        for (let d = 2; d * d <= n; d++) {
            // если разделилось нацело, то составное
            if (n % d === 0)

                return false;

        }
        // если нет нетривиальных делителей, то простое
        return true;
    }

    console.log(isPrime(15552
    ));


    console.log("////////////////////////////////");


    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

    function isSorted(mas) {


        let sortedMas = mas.slice(0);

        sortedMas.sort(compareNumeric);

        for (let i = 0; i < sortedMas.length; i++) {
            if (sortedMas[i] !== mas[i]) {
                return false;
            }

        }
        return true;
    }

    console.log(isSorted([3, 9, -3, 10]));

    console.log("////////////////////////////////");


    let filter = function (arr, callback, thisArg) {
        let results = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback.call(thisArg, arr[i], i, arr)) {
                results.push(arr[i]);
            }
        }
        return results;
    };
    let strs = [1, 2, 3, 4, 5, 0, -2, -3];

    let data = filter(strs, (function (element) {
        return element > 4;

    }));
    data.sort(compareNumeric);

    console.log(data);

    console.log("////////////////////////////////");


    function reduce(mas, func, accum) {
        let result = accum;

        for (let i = 0; i < mas.length; i++) {
            result = func.call(null, result, mas[i], i, mas);

        }

        return result;
    }

    console.log(reduce([1, 2, 3, 4, 5], function (result, num) {
        return result + num;
    }, 0));

    console.log("////////////////////////////////");

    function reverse(mas) {
        let reverseMas = [];
        for (let i = mas.length - 1; i >= 0; i--) {
            reverseMas.push(mas[i]);
        }
        return reverseMas;
    }

    console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8]));

    console.log("////////////////////////////////");

    function indexOf(mas, n) {
        let index;
        for (let i = 0; i < mas.length; i++) {
            if (mas[i] === n) {
                index = i;
            }
        }
        return index;

    }

    console.log(indexOf([1, 2, 10, 4, 5, 6], 10));

    console.log("////////////////////////////////");

    function isPalindrom(str) {

        let result = '';
        let palinMas;
        if (str === '') {
            result = 'yes';
            return result;
        }

        palinMas = str.split(" ").join("").toLowerCase();

        for (let i = 0; i < palinMas.length; i++) {


            if (palinMas[i] === palinMas[palinMas.length - 1 - i]) {
                result = 'yes';
            }
            else {
                result = 'no';
                return result;
            }

        }

        return result;
    }

    console.log(isPalindrom('A man a plan a canal Panama'));

    console.log("////////////////////////////////");

    function missing(mas) {
        mas.sort(compareNumeric);

        let maxEl;
        let count = 1;

        for(let i=0;i<mas.length;i++){ //нахожу максимальный элемент в массиве
            maxEl=mas[0];
            if(mas[i]>maxEl){
                maxEl=mas[i];
            }
        }

        for(let i=0; i<mas.length;i++){
            if(count<=maxEl) {
                if (mas[i] !== count) {
                    console.log(count);
                    return false;
                }
                count++;
            }
        }

        return true;
    }

    console.log(missing([1,3,4,5]));

    console.log("////////////////////////////////");

   function isBalanced(str){
       let leftBracket=0;
       let rightBracket=0;
       for(let i=0;i<str.length;i++){
           if(str[i]==="{"){
               leftBracket++;
           }
           if(str[i]==="}"){
               rightBracket++;
           }
           if(rightBracket>leftBracket){
               return false;
           }
       }
       if(leftBracket===rightBracket){
           return true;
       }
       return false;
   }
   console.log(isBalanced("{}{}"));
})();
