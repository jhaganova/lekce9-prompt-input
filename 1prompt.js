// sirka vyska hlbka
// vleze sa pracka do 62 / 70 / 80 ?
// vysledok html alebo alert

let spaceWidth = 62;
let spaceHeight = 70;
let spaceDepth = 80;

let machineWidth = prompt('Input WIDTH of the washing machine in cm');
let machineHeight = prompt('Input HEIGHT of the washing machine in cm');
let machineDepth = prompt('Input DEPTH of the washing machine in cm');

compareDimensions();


function compareDimensions() {
    let widthFit = false;
    let heightFit = false;
    let depthFit = false;

    if (spaceWidth >= parseInt(machineWidth)) {
        widthFit = true;
    }

    if (spaceHeight >= parseInt(machineHeight)) {
        heightFit = true;
    }

    if (spaceDepth >= parseInt(machineDepth)) {
        depthFit = true;
    }

    if ((widthFit == false) || (heightFit == false) || (depthFit == false)) {
        alert('The washing machine won\'t fit into the space :(');
    }

    else 
        alert('The washing machine will fit into the space!');
}