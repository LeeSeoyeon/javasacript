/*서로 다른 두 개의 소인수를 갖는 수들이 처음으로 두 번 연달아 나오는 경우는 다음과 같습니다.

14 = 2 × 7
15 = 3 × 5

서로 다른 세 개의 소인수를 갖는 수들이 처음으로 세 번 연속되는 경우는 다음과 같습니다.

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19

서로 다른 네 개의 소인수를 갖는 수들이 처음으로 네 번 연속되는 경우를 찾으세요. 그 첫번째 숫자는 얼마입니까?*/
`<해법>
1. 소수 일 경우 primes에 추가한다.
2. 소인수 갯수를 구한다.`;
const Stream = require('./common/Stream.js').Stream;
const primes = [2,3];
const PRIME_COUNT = 4;

const isPrime = num=>{
    const limit = Math.sqrt(num);
    for(let v of primes){
        if(v > limit) break;
        if(num%v === 0) return num; 
    }
    primes.push(num);
    return num;
};

const fractionalDecompositionCount = (PRIME_COUNT)=>{
    let count = 0;
    return (num)=>{
        let i = 0, q, r, primeArr = {}; 
        let size = 0;
        for(let v of primes)
            if(num%primes[i++] === 0) size++;
 
        if(size === PRIME_COUNT) 
            count++;
        else 
            count =0;
       
        return count === PRIME_COUNT;
   }
}

const sum = (a, b) =>{
    return b =>{
        return a+b;
    } 
}

Stream.get(4).addMap(isPrime).addFilter(fractionalDecompositionCount(PRIME_COUNT)).addMap(sum(-PRIME_COUNT+1)).run(1, console.log);


