
var cache={
    2:"hello",
    3:"popo"
}

const test={
    1:{...cache},
    2:{...cache}
}
const obj = {name: 'john', surname: 'smith'};
const objCopy = {...obj};


console.log(objCopy);
test[2][2]="changed";
console.log(test[1],test[2]);


function addUser(matchId,user){
    matches[matchId][user[userId]]={
        points:user[points],
        team:user[team],
        captain:user[captain],
        viceCaptain:user[viceCaptain]
    }
}

function addPlayer(matchId,player)