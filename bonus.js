// Nech uživatele zadat jeho rodné číslo.
// Proveď validaci, zda se jedná o rodné číslo (převzato z webu Ministerstva vnitra ČR):
// Rodné číslo je desetimístné číslo, které je dělitelné jedenácti beze zbytku; první dvojčíslí vyjadřuje poslední dvě číslice roku narození, druhé dvojčíslí vyjadřuje měsíc narození, u žen zvýšené o 50, třetí dvojčíslí vyjadřuje den narození; čtyřmístná koncovka je rozlišujícím znakem fyzických osob narozených v tomtéž kalendářním dnu.
// Rodná čísla přidělená fyzickým osobám narozeným před 1. 1. 1954 mají stejnou strukturu, jsou však devítimístná s třímístnou koncovkou a nesplňují podmínku dělitelnosti jedenácti.

// (rc % 11) - expected output 0


function checkValidity() {
    let inputValue = document.querySelector('input[name="rc"]').value;

    let result = isValid(inputValue);
}

function isValid(input) {
    if (input.length < 9) {
        showResult('Číslo je príliš krátké.');
        return;
    }

    let isLong = input.length > 10;


    let isOld = input.length == 9;



}

function showResult(result) {
    document.querySelector('#result > span').innerHTML = result;
}


document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', checkValidity);
});

//if result = OK, color green pls