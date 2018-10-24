(()=>{
    'use strict';
    function fib(n) {////////    4 Task
        let masFib=[0,1];
        for (let i=2;i<n+1;i++){

         /*   if (masFib.length===1){
                masFib.push(1);
            continue;
            }*/
            masFib[i]=masFib[i-1]+masFib[i-2];

        }
        console.log(masFib[n]);
    }
    fib(20);

//////////////////////////////////


function factorial(n) {
    if ( n===0){
        return 1;
    }
   if(n!==1) {
       return n * factorial(n - 1);
   }
   return n;
}
console.log(factorial(5));

////////////////////////////////////////



    function isPrime(n){
        if(n===1) // 1 - не простое число
            return false;
        // перебираем возможные делители от 2 до sqrt(n)
        for(let d=2; d*d<=n; d++){
            // если разделилось нацело, то составное
            if(n%d===0)

                return false;

        }
        // если нет нетривиальных делителей, то простое
        return true;
    }

    console.log(isPrime(15552

    ));


    /////////////////////////

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    function isSorted(mas) {


        let sortedMas = mas.slice(0);

        sortedMas.sort(compareNumeric);
        console.log(sortedMas);
        console.log(mas);
        for (let i = 0; i < sortedMas.length; i++) {
            if (sortedMas[i] !== mas[i]) {
                return false;
            }

        }
        return true;
    }
    console.log(isSorted([3, 9, -3, 10]));

    //////////////////////////////

    let filter = function(arr, callback, thisArg) {
      let  results = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback.call(thisArg, arr[i], i, arr)) {
                results.push(arr[i]);
            }
        }
        return results;
    };
    let strs = [1,2,3,4,5,0,-2,-3];

    let data = filter(strs,(function(element) {
        return element > 4 ;

    }));
    data.sort(compareNumeric);

    console.log(data);
    /////////////////////////////


        function reduce(mas,func,accum) {
let result=accum;

          for(let i=0;i<mas.length;i++){
                result =func.call(null,result,mas[i],i,mas);
                console.log(result);
            }

    return result;
        }
        console.log(reduce([1,2,3,4,5], function(result, num) {
            return result + num;
        }, 0));
})();