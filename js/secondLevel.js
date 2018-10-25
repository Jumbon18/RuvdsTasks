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

})();