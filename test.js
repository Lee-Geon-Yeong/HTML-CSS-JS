function solution(participant, completion){
    let newPar=participant.sort();
    let newCom=comletion.sort();
    for(let i=0; i<participant.length; i++){
        if(newPar[i]!==newCom[i]){
            return participant[i];
        }
    }
}