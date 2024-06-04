function validarsenha() {
    var senha = document.getElementById("senha1").value;
    var confirmarsenha = document.getElementById("confirmarsenha1").value;
    
    if (senha !== confirmarsenha){
       event.preventDefault();
        alert ("senhas diferentes!");
    }
    
        

}