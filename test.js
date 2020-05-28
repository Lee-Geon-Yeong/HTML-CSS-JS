function solution(arr){
    var myArray=[];
    var count=1; 
    var answer=0;
 
    while(1){
        if(arr[0]==1 && arr.length==1) break;
        for(let i=0; i<arr.length; i++){
            if(arr[i]!=arr[i+1]){
                myArray.push(count);
                count=0;
            }
            count++;
        }
    answer++;
    arr=[];
    arr=myArray;
    myArray=[];
    console.log(arr);
    console.log(answer);
    }
    return myArray;
}
console.log(solution([2]));
