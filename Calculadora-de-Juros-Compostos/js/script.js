document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    console.log(calculateButton);

    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            const valueField = document.getElementById('value');
            const feeField = document.getElementById('fee');
            const timeField = document.getElementById('time');
            const resultField = document.getElementById('total');

            const value = parseFloat(valueField.value);
            const fee = parseFloat(feeField.value) / 100;
            const time = parseFloat(timeField.value);

            valueField.style.borderColor = '';
            feeField.style.borderColor = '';
            timeField.style.borderColor = '';

            if (isNaN(value) || isNaN(fee) || isNaN(time) || value <= 0 || fee <= 0 || time <= 0) {
                alert("Por favor, preencha todos os campos corretamente.");

                if (isNaN(value) || value <= 0) {
                    valueField.style.borderColor = 'red';
                }
                if (isNaN(fee) || fee <= 0) {
                    feeField.style.borderColor = 'red';
                }
                if (isNaN(time) || time <= 0) {
                    timeField.style.borderColor = 'red';
                }

                resultField.innerHTML = '';

                return;
            }

            const total = value * (1 + fee) ** time;

            resultField.innerHTML = "R$ " + total.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        });
    } else {
        console.error("Botão de calcular não encontrado.");
    }
}); 