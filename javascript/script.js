// alert('Hello World')

function sum(){
    //alert('oi')
    var num1 = window.document.getElementById('n1');
    var num2 = window.document.getElementById('n2');
    var res = window.document.getElementById('res');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
     
   var s = n1 + n2;
   
  
   if ( s == 100 ){

    res.innerHTML = `The number ${s} is equals to 100`;

   } else if( s > 100) {

    res.innerHTML = `The number  ${s} is greater than 100`;

    } else {
    res.innerHTML = `The number  ${s} is less than 100`;
}
}
function mu(){
        var num = window.document.getElementById('nmult');
        var a = window.document.getElementById('resmult');
        
        
        if( num.value.lenght == 0){
            alert('Invalid');
        } else{
            var nmult = Number(num.value);
    a.innerHTML = '';
    for (var i = 0; i<11; i++){
        var op = document.createElement('option');
        var s = nmult * i;
        
        op.text =  `${nmult} x ${i} = ${s}`;
        a.appendChild(op)
    }
    }
}

function test(){
    var vetor = new Array();
    var a = window.document.getElementById('tab2');
    for (var j = 0; j<10; j++){
    vetor[j] = Number(window.prompt(`Write a number in position ${j}`));

}

    for (var i = 0; i < vetor.length; i++) {
        for (var k = i; k > 0 && vetor[k] < vetor[k-1]; k--){
            var aux = vetor[k-1];
            vetor[k-1] = vetor[k];
            vetor[k] = aux;
        }
    }

// window.alert(`Organized numbers: ${vetor}`);
a.innerHTML = `Organized numbers: ${vetor}`
}

function writeee(){
    var a = window.document.getElementById('nsort');
    var res2 = window.document.getElementById('tab2');
       var num = Number(a.value)
    var con = window.document.getElementById('cont');   
    res2.innerText += ` ${num}`;

    var i = 0;
    
    var a = a+1;
    
    i++;
    var j = [];
    j[i] = num;
    con.innerText += ` ${a}`;
   

}

function write2(){
    var vetor = new Array();
    for (var i = 0; i<10; i++){
    window.document.getElementById('oi').innerText = `Digite o ${i}° numero: `
    }
}


function show(){

   // var btn = window.document.getElementById('options');
    
    window.document.getElementById('hidden').style.display ='block';



}

function sum2(){
    var n1 = Number(window.document.getElementById('num1').value);
    var n2 = Number(window.document.getElementById('num2').value);
    var r = n1 + n2;
    window.document.getElementById('res4').innerText = `The result is ${r}`


}

function subt(){
    var n1 = Number(window.document.getElementById('num1').value);
    var n2 = Number(window.document.getElementById('num2').value);
    var r = n1 - n2;
    window.document.getElementById('res4').innerText = `The result is ${r}`

}

function mul(){
    var n1 = Number(window.document.getElementById('num1').value);
    var n2 = Number(window.document.getElementById('num2').value);
    var r = n1 * n2;
    window.document.getElementById('res4').innerText = `The result is ${r}`

}

function div(){
    var n1 = Number(window.document.getElementById('num1').value);
    var n2 = Number(window.document.getElementById('num2').value);
        
    if (n1 < n2){
        alert('Numerator must be greater than the denominator');
    } else{
        var r = n1/n2;
        window.document.getElementById('res4').innerText = `The result is ${r}`    
    }
}

function showcandidacts(){ 
     a = window.document.getElementById('candidate1');
     aa = window.document.getElementById('candidate2');
     b = window.document.getElementById('voter').value.length;

    btnres = window.document.getElementById('btnresvt');
    if (b != 5 ){
        window.alert('Please enter a valid voter registration!');
        a.style.display  = 'none';
        aa.style.display  = 'none';
    } else {
       a.style.display  = 'block';
       aa.style.display  = 'block';
       window.document.getElementById('vote2').style.display = 'inline';
       window.document.getElementById('vote1').style.display = 'inline';
       window.document.getElementById('c1').src = 'img/sad.jpg';
       window.document.getElementById('c2').src = 'img/sad1.jpg';

        if((vot1 + vot2) >= 5){
            window.document.getElementById('btnresvt').style.display = 'flex';
        }

    }
}
vot1 = 0;
function vt1(){
    //window.alert('its working');
    var im = window.document.getElementById('c1');
    window.document.getElementById('vote1').style.display = 'none';
    vot1 ++;
    im.src = 'img/happy.jpg';
    aa.style.display = 'none';
    a.style.margin = 'auto';
}
vot2 = 0;
function vt2(){
    //window.alert('its working');
    var im2 = window.document.getElementById('c2');
    window.document.getElementById('vote2').style.display = 'none';
    vot2 ++;
    im2.src = 'img/happy1.jpg';
    a.style.display = 'none';
    aa.style.margin = 'auto';
}

function resvot(){
    if (vot1 > vot2){
        window.document.getElementById('resvote').innerText = `Winner is Oswaldo with ${vot1} votes`;
    }else{
        window.document.getElementById('resvote').innerText = `Winner is Pedro with ${vot2} votes`;
    } if (vot1 == vot2){
        window.document.getElementById('resvote').innerText = 'Draw';
    }

}

 
function convertTemp(){
    
    var f = Number(window.document.getElementById('temp').value);
    var c =  ( ( f - 32 ) * 5 ) / 9;
    
    window.document.getElementById('res6').innerText = `The temperature is ${c.toFixed(2)}°C `;
}


lf = 80;
function atkGoblin(){
    var life = window.document.getElementById('hpgoblin');
    var dmg = window.document.getElementById('damage');
    var imgg = window.document.getElementById('imggoblin');
    var gsays = window.document.getElementById('gsays');
    var atk = Math.floor(Math.random() * 10);
    lf = lf - atk;
  
    life.innerText = `Goblin's HP = ${lf}`;  
if(lf<20 && lf> 0){
    imgg.src = 'img/goblin1.jpg'; 
    gsays.innerText = 'OH NO! I WILL SHOW YOU MY TRUE POWER';
}else if(lf <=0){
    imgg.src = 'img/goblin2.png';
    gsays.innerText = 'You.. were so stronger';
    life.innerText = `Goblin is dead`;
    dmg.style.display = 'none';
    window.document.getElementById('atk').style.display = 'none';
}
    
}

function addToBck(){
    var b = window.document.getElementById('res8');
    var a = new Array();
    var check = 0;
    for (var i =1; i<6; i++){
        a[i] = window.prompt(`Choose ${i}° item to carry`);
    }
    for (var j =1; j<6; j++){
        if( a[j] =="key"){
            check = 1;
        } 
    }
        if( check == 1){
            b.innerText = `That's great! You got a key`;
        } else {
            b.innerText = `You don't have a key`;
}
}

let person = {
    vreg: '12345',
    vote1: false,
    vote2: false,
}
pos = 0;
function LimitPosition(){
    var move = Number(window.document.getElementById('txtn').value);
    if (pos + move > 100 || pos + move <0){
        window.alert('Please, enter a valid position!');
    } else {
        pos += move;
        window.document.getElementById('res9').innerText = `Your current position is ${pos}`;
    }
}

var indexNumero = 0;
var indexNaipe = 0;

function generate(){
    window.document.getElementById('btnCard').style.display = 'none';
    window.document.getElementById('btnHide').style.display = 'inline';
    window.document.getElementById('card').innerText = 'Is this your deck?';
    

    const naipes = ["♣", '♦', '♥', '♠'];
    const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    indexNumero = Math.floor(Math.random() * 13);
    indexNaipe = Math.floor(Math.random() * 4);
    const carta = new Carta(numeros[indexNumero],naipes[indexNaipe]).exibir();

    window.document.getElementById('res10').innerText = carta;


}
function yes(){
    window.document.getElementById('res10').innerText = "THAT'S GREAT!!! You found your card";
    window.document.getElementById('btnHide').style.display = 'none';
}


class Carta {
    constructor(pNumber, pSuit) {
        this.pNumber = pNumber;
        this.pSuit = pSuit;
    }
        exibir(){ 
        return this.pNumber +' of ' +  this.pSuit;
    }
       

}
var pts = 0;
var ptspc = 0;
var indexMove = 0;
var img = window.document.createElement("img");
function jokenpo(move){

     var movesPC = ['rock', 'scissors', 'paper'];
     indexMove = Math.floor(Math.random() * 3);
    //window.alert(move);

    if (move == movesPC[indexMove]) {
        window.document.getElementById('speak').innerText = `Tied round `;
    }
    else if (
        (move == 'scissors' && movesPC[indexMove] == 'paper') ||
        (move == 'rock' && movesPC[indexMove] == 'scissors') ||
        (move == 'paper' && movesPC[indexMove] == 'rock')) {
        window.document.getElementById('speak').innerText = `You won!!`;
        pts++;
    }else{
        window.document.getElementById('speak').innerText = `You lost :( `;
        ptspc++;
    }

if(movesPC[indexMove] == 'rock'){
        document.getElementById('pcmove').appendChild(img).src = 'img/rock1.png';

    }
else if(movesPC[indexMove] == 'paper'){
    document.getElementById('pcmove').appendChild(img).src  = 'img/paper1.png';
    }
else if(movesPC[indexMove] == 'scissors') {
    document.getElementById('pcmove').appendChild(img).src  = 'img/scissors1.png';

}
    window.document.getElementById('scorep').innerText = `You: ${pts}`;
    window.document.getElementById('scorepc').innerText = `PC: ${ptspc}`;
    

}



/*
p = 0;
m = Number(window.document.getElementById('txtn').value);
function LimitPosition(p, m){
    return p + m;
}
  

function ex(){
    if (LimitPosition(p, m) > 100 || LimitPosition(p, m)){
        window.alert('Enter a valid position');

    } else{
        window.alert(LimitPosition);
    }
} */
