document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');

    if (calculateButton) {
        calculateButton.addEventListener('click', function () {
            const valueField = document.getElementById('value');
            const feeField = document.getElementById('fee');
            const timeField = document.getElementById('time');
            const resultField = document.getElementById('total');

            const value = parseFloat(valueField.value);
            const fee = parseFloat(feeField.value) / 100;
            const time = parseFloat(timeField.value);

            resetInputBorders([valueField, feeField, timeField]);

            if (isInvalidInput(value, fee, time)) {
                highlightInvalidFields(valueField, feeField, timeField, value, fee, time);
                showErrorMessage('Por favor, preencha todos os campos corretamente.');
                resultField.innerHTML = 'R$ 0,00';
                return;
            }

            const total = calculateCompoundInterest(value, fee, time);
            resultField.innerHTML = formatCurrency(total);
        });
    } else {
        showErrorMessage('Botão de calcular não encontrado.');
    }
});

function resetInputBorders(fields) {
    fields.forEach(field => field.classList.remove('error'));
}

function isInvalidInput(value, fee, time) {
    return isNaN(value) || isNaN(fee) || isNaN(time) || value <= 0 || fee <= 0 || time <= 0;
}

function highlightInvalidFields(valueField, feeField, timeField, value, fee, time) {
    if (value <= 0 || isNaN(value)) valueField.classList.add('error');
    if (fee <= 0 || isNaN(fee)) feeField.classList.add('error');
    if (time <= 0 || isNaN(time)) timeField.classList.add('error');
}

function showErrorMessage(message) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: message,
        });
    } else {
        alert(message);
    }
}

function calculateCompoundInterest(value, fee, time) {
    return value * Math.pow(1 + fee, time);
}

function formatCurrency(value) {
    return "R$ " + value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
