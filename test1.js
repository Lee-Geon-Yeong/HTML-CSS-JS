function solution(arr){
    var answer=0;
    for(let i=0; i<arr.length; i++){
        arr[i]=String(arr[i]);
    }
    for(let i=0; i<arr.length; i++){
    var k=arr[i].split('','').sort(function(a,b){
        return a.localeCompare(b);
    });
    }
    return arr;
}
console.log(solution([112,1814,121,1481,1184]));