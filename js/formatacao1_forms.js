 // Formatação   dd/mm/aa   enquanto o usuário digita
 function formatarData(inputValue) {
    if (/\D\/?$/.test(inputValue)) {
        inputValue = inputValue.slice(0, -1);
    }
    inputValue = inputValue.replace(/\D/g, '');
    if (inputValue.length > 8) {
        inputValue = inputValue.slice(0, 8);
    }
    if (inputValue.length > 6) {
        inputValue = inputValue.slice(0, 6);
    }
    if (inputValue.length > 4) {
        inputValue = inputValue.slice(0, 4) + '/' + inputValue.slice(4);
    }
    if (inputValue.length > 2) {
        inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
    }
    return inputValue;
}

let errorMessageTimeout;

function mostrarErro(message, inputElement) {
    if (errorMessageTimeout) {
        clearTimeout(errorMessageTimeout);
    }

    inputElement.value = '';
    inputElement.focus();
    inputElement.placeholder = message;

    errorMessageTimeout = setTimeout(function () {
        inputElement.placeholder = '';
    }, 3000);
}

function validarData(inputValue, inputElement) {
    const dateArray = inputValue.split('/');
    if (dateArray.length === 3) {
        const day = parseInt(dateArray[0]);
        const month = parseInt(dateArray[1]);

        if (month < 1 || month > 12 || day < 1 || day > 31) {
            mostrarErro('Por favor, digite uma data válida (DD/MM/AA).', inputElement);
        }
    } else {
        mostrarErro('Por favor, digite a data completa (DD/MM/AA).', inputElement);
    }
}

document.getElementById('inputDataInicio1').addEventListener('input', function (e) {
    let inputValue = e.target.value;
    inputValue = formatarData(inputValue);
    e.target.value = inputValue;
});

document.getElementById('inputDataTermino1').addEventListener('input', function (e) {
    let inputValue = e.target.value;
    inputValue = formatarData(inputValue);
    e.target.value = inputValue;
});

document.getElementById('inputDataInicio1').addEventListener('blur', function (e) {
    const inputValue = e.target.value;
    validarData(inputValue, e.target);
});

document.getElementById('inputDataTermino1').addEventListener('blur', function (e) {
    const inputValue = e.target.value;
    validarData(inputValue, e.target);
});

// Formatação HH:MM enquanto o usuário digita

document.getElementById('inputHoraInicio1').addEventListener('input', function (e) {
    let inputValue = e.target.value;
    if (/\D:$/.test(inputValue)) {
        inputValue = inputValue.slice(0, -1);
    }
    inputValue = inputValue.replace(/\D/g, '');
    if (inputValue.length > 4) {
        inputValue = inputValue.slice(0, 4);
    }
    if (inputValue.length > 2) {
        inputValue = inputValue.slice(0, 2) + ':' + inputValue.slice(2);
    }
    e.target.value = inputValue;
});

document.getElementById('inputHoraTermino').addEventListener('input', function (e) {
    let inputValue = e.target.value;
    if (/\D:$/.test(inputValue)) {
        inputValue = inputValue.slice(0, -1);
    }
    inputValue = inputValue.replace(/\D/g, '');
    if (inputValue.length > 4) {
        inputValue = inputValue.slice(0, 4);
    }
    if (inputValue.length > 2) {
        inputValue = inputValue.slice(0, 2) + ':' + inputValue.slice(2);
    }
    e.target.value = inputValue;
});