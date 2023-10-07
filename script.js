let res="";
let displayBar = document.getElementById('disp');
let inputs = document.querySelectorAll('input');
let equal = document.getElementById('equals');
let clear = document.getElementById('clear');
let erase = document.getElementById('erase');

equal.addEventListener('click',result)
clear.addEventListener('click',clearDisplay)
erase.addEventListener('click',eraseElement);
for(let inp of inputs)
{
    if(inp.id==='disp' || inp.id==='equals' || inp.id==='clear' || inp.id==='erase')
    {
        continue;
    }
    else
    {
        inp.addEventListener('click',findRes);
    }
}

function findRes(){
    res+=this.value;
    displayBar.value=res;
}
  
function result(){
    let answer = eval(res);
    displayBar.value=answer;
    res=answer;
}

function clearDisplay(){
    res="";
    displayBar.value=res;
}

function eraseElement(){
    res = String(res);
    let n = res.length;
    if(res.length >=1)
    {
        res = String(res);
        res = res.substring(0,n-1); 
    }
    displayBar.value=res;
}
