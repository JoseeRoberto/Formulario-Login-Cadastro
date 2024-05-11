function logarr(){
    var logar = document.getElementById('campo1').value;
    var senhar = document.getElementById('campo2').value;

    if(logar === "admin@com" && senhar === "12345"){
        location.href = "palmas.gif";
    }
    else{
        location.href = "banido.gif"
    }
}
