function solution(s){
    var result="";
    var num=0;

    if(s.length%2==0){
        num=parseInt(s.length/2)-1;
        result+=s[num];
        result+=s[num+1];

        return result;
    }
    else{
        num=parseInt(s.length/2);
        result+=s[num];
        return result;
    }
}
console.log(solution("abcde"));