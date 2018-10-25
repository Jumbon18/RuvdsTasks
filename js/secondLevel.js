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
})();