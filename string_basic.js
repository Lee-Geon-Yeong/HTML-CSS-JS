function solution(s){
    var result=true;

    if(s.length==4 || s.length==6){
        return (s-0) ? true : false;
    }
    else return false;
}
console.log(solution('1123'));
