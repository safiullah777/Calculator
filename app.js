function press(num){
    var result=document.getElementById("result");
    result.value+=num;
}
function calc(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}
function square(){
    var result=document.getElementById("result");
    result.value=(eval(result.value))**2;
}

function Back(){
    var result=document.getElementById("result");
    result.value=""+result.value.slice(0,result.value.length-1);
}
function Clear(){
    document.getElementById("result").value="";
}
function factorial(){
    var result=document.getElementById("result");
    if(result.value==0){
        result.value=1;
    }
    else{
    var fact=1;

        for(var i=1;i<=eval(result.value);i++){
            fact*=i;
        }
        result.value=fact;
    }
}
function cube(){
    var result=document.getElementById("result");
    result.value=(eval(result.value))**3;

}
function sqrt(){
    var result=document.getElementById("result");
    result.value=Math.sqrt(eval(result.value));
}
function cubert(){
    var result=document.getElementById("result");
    result.value=Math.cbrt(eval(result.value));
}
function Pi(){
    document.getElementById("result").value+=Math.PI;

}
function Mod(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
    result.value=Math.abs(result.value)
}

// brackets
// factorial
// mod
// pi