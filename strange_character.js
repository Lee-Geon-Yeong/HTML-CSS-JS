function solution(s){
    var result = "";
    var num=0;

    for(var i=0; i<s.length; i++){
        if(s.charAt(i) == " "){
            num=0;
            result+=" ";
            continue; /* if문은 공백 발견 시 아래의 else 구문들은 실행되지 않도록 continue;를 사용 */
        }
        else if(num % 2 == 0){
            result += (s.charAt(i)).toUpperCase();
            num++;
        }
        else{
            result+=(s.charAt(i)).toLowerCase();
            num++;
        }
    }
    return result;
}
console.log(solution("try hello world"));

