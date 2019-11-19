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

function show2(){
    var a = window.document.getElementById('candidate1');
    var aa = window.document.getElementById('candidate2');
    var b = window.document.getElementById('voter').value.length;
    if (b != 5 ){
        window.alert('Please enter a valid voter registration!');
    } else {
       a.style.display  = 'block';
       aa.style.display  = 'block';
      
    }
}

function vote(vote){
    var person = new Object();
    person.voter = window.document.getElementById('voter').value;
    person.vote = window.document.getElementById('vote1');

}
 
function convertTemp(){
    
    var f = Number(window.document.getElementById('temp').value);
    var c =  ( ( f - 32 ) * 5 ) / 9
    window.document.getElementById('res6').innerText = c.toFixed(2);
   

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
    dmg.innerText = `You damaged ${atk}`;
if(lf<20 && lf> 0){
    imgg.src = 'img/goblin1.jpg'; 
    gsays.innerText = 'OH NO! I WILL SHOW YOU MY TRUE POWER';
}else if(lf <=0){
    imgg.src = 'img/goblin2.png';
    gsays.innerText = 'You.. were so stronger'
}
    
}

function addToBck(){
    var b = window.document.getElementById('res8');
    var a = new Array();
    for (var i =1; i<6; i++){
        a[i] = window.prompt(`Choose ${i}° item to carry`);
    }
    for (var j =1; j<6; j++){
        if( a[j] =="key"){
            b.innerText = `That's great! You got a key`;
        } else {
            b.innerText = `You don't have a key`;
        }
    }
}
