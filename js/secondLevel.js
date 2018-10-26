(()=>{
    'use strict';
    const memoize=(fn)=>{
      let cache={};
      return(...args)=>{
          let n=args[0];
          if(n in cache){
              console.log("Data from cache");
              return cache[n];
          }
          else{
              console.log("Calculating result");
              let result=fn(n);
              cache[n]=result;
              return result;
          }
        }
    };

function fib(n) {
    let masFib = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        masFib.push(masFib[i - 1] + masFib[i - 2]);
    }

    return  masFib[n - 1] + masFib[n - 2];
}
const memoizeFib=memoize(fib);
console.log(memoizeFib(20));
    console.log(memoizeFib(20));
    console.log(memoizeFib(50));

    console.log("////////////////////////////////");
    function isBalanced2(str) {
        let figure={left:0,right:0};
        let circle={left:0,right:0};
        let square={left:0,right:0};
        for(let i=0;i<str.length;i++){
            switch (str[i]) {
                case "{":
                    figure.left++;
                    break;
                case "}":
                    figure.right++;
                    break;
                case "(":
                    circle.left++;
                    break;
                case ")":
                    circle.right++;
                    break;
                case "[":
                    square.left++;
                    break;
                case "]":
                    square.right++;
                    break;
            }
            if(circle.right>circle.left || square.right>square.left||figure.right>figure.left ){
                console.log("Brakes are incorrect");
                return false;
            }


        }
        if(figure.left===figure.right && circle.left===circle.right && square.left===square.right ){
            console.log("Brakes are correct");
            return true;
        }
        return false;
    }
    console.log(isBalanced2('(foo { bar (baz) [boo] })'));
    console.log("////////////////////////////////");


    function uniq(mas) {
        let uniqMas=[];
        uniqMas.push(mas[0]);
    for(let i=0;i<mas.length;i++){
        for(let j=0;j<uniqMas.length;j++){
            if(mas[i]===uniqMas[j]){
                break;
            }
            else if(j===uniqMas.length-1){// в последнюю итерацию
                uniqMas.push(mas[i]);
            }
        }
    }
    return uniqMas;
}
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));
    console.log("////////////////////////////////");


    function intersection(mas1,mas2) {
        let intersectionMas=[];
        for(let i=0;i<mas1.length;i++){
            for(let j=0;j<mas2.length;j++){
                if(mas1[i]===mas2[j]){
                    intersectionMas.push(mas1[i]);
                }
                else{
                    console.log('на'+i +'итерации нет совпадений');
                }
            }
        }
        return intersectionMas;
    }
    console.log(intersection([1, 5, 4, 2], [7, 12]));

    console.log("////////////////////////////////");

    function sorte(items) { // Самая быстрая сортировка -ХОАРА O(N*LOG(N))
            let tmp;
            let i = 0;
            let j = items.length - 1;
        let pivot = items[ Math.floor(((items.length - 1)) / 2) ];// Ставим опорный элемент ,который находится по середине массива
        if (items.length > 1) {// если массив > 1 сортировать массив , если же меньше то вернуть просто массив
            while (i <= j) {
                while (items[i] < pivot) { // пока элемент меньший опорного выполянть инкремент
                    i++;
                }
                while (items[j] > pivot) { // пока элемент больше опорного выполнять декремент
                    j--;
                }
                if (i <= j) { // выполняем перестановку i на j
                    tmp = items[i];
                    items[i] = items[j];
                    items[j] = tmp;
                    i++;
                    j--;
                }
            }
        }
        return items;
    }

    console.log(sorte([1,2,3,4,5,6,7]));
    console.log("////////////////////////////////");

})();