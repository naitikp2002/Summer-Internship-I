let btn = document.getElementById('btn1');
let list = document.getElementById('list');
let input1 = document.getElementById('input1');

btn.addEventListener('click',function(){
    var para = document.createElement('p');
    para.innerHTML=input1.value;
    console.log(para.innerText);
    list.appendChild(para);
    input1.value='';
    para.addEventListener('click',function(){
        para.style.textDecoration="line-through";
    })
    para.addEventListener('dblclick',function(){
        list.removeChild(para)
    })
})

console.log("Hello")