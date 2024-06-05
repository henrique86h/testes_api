function buscarEndereco(cep) {
    fetch("https://cep.awesomeapi.com.br/json/" + cep)
        .then(response => response.json())
        .then((data) => alert(data.address +" "+ data.district +" "+ data.state ))
        .catch((error) => alert(error));
            
        
}


document.getElementById("endereco").addEventListener("click", () => {
    let cep = document.getElementById("cep").value;
    buscarEndereco(cep);
})