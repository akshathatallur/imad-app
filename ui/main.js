//counter code
var button=document.getElementById('counter');
var counter=10;

button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML = counter.toString();
};