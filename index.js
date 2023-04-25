
/*-----------------------homeScore--------------------------*/

let homeScore=document.getElementById("homeScore");
let count=0;

/*increment by 1*/
function homeIncrement1(){
    count+=1;
    homeScore.innerText=count;
}

/*increment by 2*/
function homeIncrement2(){
    count+=2;
    homeScore.innerText=count;
}

/*increment by 3*/
function homeIncrement3(){
    count+=3;
    homeScore.innerText=count;
}


/*-----------------------guestScore--------------------------*/

let guestScore=document.getElementById("guestScore");
let count1=0;

/*increment by 1*/
function guestIncrement1(){
    count1+=1;
    guestScore.innerText=count1;
}

/*increment by 2*/
function guestIncrement2(){
    count1+=2;
    guestScore.innerText=count1;
}

/*increment by 3*/
function guestIncrement3(){
    count1+=3;
    guestScore.innerText=count1;
}