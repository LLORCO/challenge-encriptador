let output;

function cifrar (){
    document.getElementById("container-muñeco").style.display = "none";
    document.getElementById("container-salida").style.display = "inline";
    if(validar()){
        output = document.getElementById("texto-entrada").value;
        output = output.replaceAll('e','enter');
        output = output.replaceAll('i', 'imes');
        output = output.replaceAll('a', 'ai');
        output = output.replaceAll('o', 'ober');
        output = output.replaceAll('u', 'ufat');
        document.getElementById("texto-salida").value = output;
        return;
    }else{
        alert("EL texto introducido es inválido, no debe contener mayúsculas ni caracteres especiales");
    }
}

function decifrar (){
    document.getElementById("container-muñeco").style.display = "none";
    document.getElementById("container-salida").style.display = "inline";
    if(validar()){
        output = document.getElementById("texto-entrada").value;
        output = output.replaceAll('ai', 'a');
        output = output.replaceAll('enter','e');
        output = output.replaceAll('imes', 'i');
        output = output.replaceAll('ober', 'o');
        output = output.replaceAll('ufat', 'u');
        document.getElementById("texto-salida").value = output;
        return;
    }else{
        alert("EL texto introducido es inválido, no debe contener mayúsculas ni caracteres especiales");
    }
}

function validar (){
    for (let letra of document.getElementById("texto-entrada").value){
        if (!"abcdefghijklmnñopqrstuvwxyz 0123456789".includes(letra)){
            return false;
        }
    }
    return true;
}

function copiar(){
    navigator.clipboard.writeText(document.getElementById("texto-salida").value);
}

function salidaValida(){
    if(true){

    }
}