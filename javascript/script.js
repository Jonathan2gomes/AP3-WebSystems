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

    res.innerHTML = `O Valor  ${s} e igual a 100`;

   } else if( s > 100) {

    res.innerHTML = `O Valor  ${s} e maior do que 100`;

    } else {
    res.innerHTML = `O Valor  ${s} eh menor que 100`;
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
    for (var i = 0; i<10; i++){
        var op = document.createElement('option');
        var s = nmult * i;
        
        op.text =  `${nmult} x ${i} e igual a ${s}`;
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
function  calc2(){
    var n1 = Number(window.document.getElementById('num1').value);
    var n2 = Number(window.document.getElementById('num2').value);

    if (n1 ==0 || n2 == 0 ){
    window.alert('Please, enter valid numbers')
} else { 
    
}
}