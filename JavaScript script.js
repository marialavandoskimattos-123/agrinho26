document.addEventListener("DOMContentLoaded", function () {
    
    // Captura dos elementos da tela
    const btnCalcular = document.getElementById("btn-calcular");
    const inputHectares = document.getElementById("hectares");
    const containerResultados = document.getElementById("resultados");
    
    const resAgua = document.getElementById("res-agua");
    const resInsumos = document.getElementById("res-insumos");
    const resProd = document.getElementById("res-prod");

    // Evento de clique para o cálculo
    btnCalcular.addEventListener("click", function () {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples para evitar valores zerados ou negativos
        if (isNaN(hectares) || hectares <= 0) {
            alert("Por favor, insira um número válido de hectares maior que zero.");
            return;
        }

        // Regras de negócio fictícias aproximadas baseadas em dados sustentáveis:
        // - Economia média de 15.000 litros de água por hectare/ano com gotejamento/precisão
        // - Redução estável de insumos químicos em torno de 25% com monitoramento
        // - Aumento médio de 18% na produtividade vertical
        const aguaEconomizada = hectares * 15000;
        const reducaoInsumos = 25;
        const aumentoProdutividade = 18;

        // Exibe e atualiza os resultados no HTML com formatação local
        resAgua.textContent = aguaEconomizada.toLocaleString('pt-BR');
        resInsumos.textContent = reducaoInsumos;
        resProd.textContent = aumentoProdutividade;

        // Remove a classe 'hidden' do CSS para exibir o bloco de resposta
        containerResultados.classList.remove("hidden");
    });
});
