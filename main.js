function para1(){
    var inputs=[];
    for (var i=1; i<=6;i++){
        inputs.push(document.getElementById("sen"+i).value);
    }
    console.log(inputs);
    var paragraph1=inputs.join(". ");
    document.getElementById("output1").innerHTML=paragraph1;
}
function para2(){
    var inputs2=[];
    for (var i=7; i<=12;i++){
        inputs2.push(document.getElementById("sen"+i).value);
    }
    console.log(inputs2);
    var paragraph2=inputs2.join(". ");
    document.getElementById("output2").innerHTML=paragraph2;
}