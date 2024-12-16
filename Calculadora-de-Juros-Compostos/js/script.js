document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    console.log(calculateButton);

    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            const value = parseFloat(document.getElementById('value').value);
            const fee = parseFloat(document.getElementById('fee').value) / 100;
            const time = parseFloat(document.getElementById('time').value);

            if (isNaN(value) || isNaN(fee) || isNaN(time) || value <= 0 || fee <= 0 || time <= 0) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }

            // Cálculo do montante com juros compostos
            const total = value * (1 + fee) ** time;

            // Formata o valor final com pontos e vírgula no padrão brasileiro
            document.getElementById('total').innerHTML = "R$ " + total.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        });
    } else {
        console.error("Botão de calcular não encontrado.");
    }
}); 