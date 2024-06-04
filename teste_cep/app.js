function buscarEndereco(cep) {
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extrai os dados necessários
            var endereco = data.logradouro;
            var cidade = data.localidade;
            var estado = data.uf;

            // Exibe os dados em um alerta
            alert("Endereço: " + endereco + "\nCidade: " + cidade + "\nEstado: " + estado);
        })
        .catch(error => {
            console.error('Erro ao buscar endereço:', error);
            alert("Erro ao buscar endereço. Por favor, verifique se o CEP está correto e tente novamente.");
        });
}

document.getElementById("buscar").addEventListener("click", () => {
    let cep = document.getElementById("cep").value;
    buscarEndereco(cep);
});