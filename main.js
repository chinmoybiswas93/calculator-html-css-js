const dis = document.querySelector('#result');
function key_press(keyn){
    dis.value += keyn;
}

function calc(){
    const dval = dis.value;
    dis.value = eval(dval);
}

function cleardis(){
    dis.value="";
}

function delval(){
    dis.value = dis.value.slice(0, -1);
}