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

            const total = value * (1 + fee) ** time;

            document.getElementById('total').innerHTML = "R$ " + total.toFixed(2).replace('.', ',');
        });
    } else {
        console.error("Botão de calcular não encontrado.");
    }
});



