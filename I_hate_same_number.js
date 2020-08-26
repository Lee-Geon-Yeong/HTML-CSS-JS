function solution(arr){
    const newArray=[];
    arr.forEach(function(a){ 
        if(newArray[newArray.length-1]!=a){ 
            newArray.push(a);
        }
    });
    return newArray;
}
console.log(solution([1,1,3,3,0,1,1]));
