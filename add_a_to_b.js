function solution(a, b){
    let max=Math.max(a, b);
    let min=Math.min(a, b);
    let result=0;

    for(let i=min; i<=max; i++){
        result=result+i;
    }
    return result;
}
console.log(solution(3, 5));