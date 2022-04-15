// Nech uživatele zadat jeho rodné číslo.
// Proveď validaci, zda se jedná o rodné číslo (převzato z webu Ministerstva vnitra ČR):
// Rodné číslo je desetimístné číslo, které je dělitelné jedenácti beze zbytku; první dvojčíslí vyjadřuje poslední dvě číslice roku narození, druhé dvojčíslí vyjadřuje měsíc narození, u žen zvýšené o 50, třetí dvojčíslí vyjadřuje den narození; čtyřmístná koncovka je rozlišujícím znakem fyzických osob narozených v tomtéž kalendářním dnu.
// Rodná čísla přidělená fyzickým osobám narozeným před 1. 1. 1954 mají stejnou strukturu, jsou však devítimístná s třímístnou koncovkou a nesplňují podmínku dělitelnosti jedenácti.




function checkValidity() {
    let input = document.querySelector('input[name="rc"]').value;

    if (checkLength(input) == false) {
        return false;
    }

    let isOld = input.length == 9;

    if (!isOld) {
        if (checkDivisionByEleven(input) == false) {
            return false;
        }
    }

    if (checkDateValidity(input, isOld) == false) {
        return false;
    }

    showResult('Číslo je platné.', 'green');
    return true;
}



function checkLength(input) {
    if (input.length < 9) {
        showResult('Číslo je příliš krátké.', 'red');
        return false;
    }

    if (input.length > 10) {
        showResult('Číslo je příliš dlouhé.', 'red');
        return false;
    }

    return true;
}

function checkDivisionByEleven(input) {
    let inputAsNumber = parseInt(input);
    if ((inputAsNumber % 11) != 0) {
        showResult('Číslo je chybné.', 'red');
        return false;
    }

    return true;
}

function checkDateValidity(input, isOld) {
    // year, month/month+50, day
    let year = parseInt(input.slice(0,2));
    let month = parseInt(input.slice(2,4));
    let day = parseInt(input.slice(4,6));

    // <1953 = 9 long
    if (isOld) {
        if (year >= 54) {
            showResult('Číslo je chybné.', 'red');
            return false;
        }
    }

    //months = 1-12
    if (month > 12) {
        month = month - 50;
    }

    if (month < 1 || month > 12) {
        showResult('Číslo je chybné.', 'red');
        return false;
    }

    //date validity
    if (validateDay(year, month, day, isOld) == false) {
        return false;
    }
    
    return true;
}

function validateDay(year, month, day, isOld) {
    if (isOld || year >= 54) {
        year = 1900 + year;
    } 
    else {
        year = 2000 + year;
    }

    console.log(year, month, day);

    // date validity needs fixing

    if (day < 1 || day > 31 || (new Date(year, month, day)).getMonth() != month) {
        showResult('Číslo je chybné.', 'red');
        return false;
    }

    return true;
}



function showResult(result, color) {
    let resultSpan = document.querySelector('#result > span');
    resultSpan.innerHTML = result;
    resultSpan.style.color = color;
}


document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', checkValidity);
});
