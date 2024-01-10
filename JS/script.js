
//# FUNZIONI
const cellGenerator = () =>{
    //CREO ELEMENTO CELLA
    const cellElement =document.createElement('div');
    console.log(cellElement)
    // GLI DO LA CLASSE
    cellElement.classList.add('cell');
    console.log(cellElement)
    return cellElement
}

//# RECUPERO GLI ELEMENTI
const gridElement = document.querySelector('.grid');

const button = document.querySelector('button');

const rows = 10;
const cols = 10;
const totalCell = rows * cols;

//CREO EVENT LISTNER
button.addEventListener('click', function(){
    for(let i = 1; i <= totalCell; i++){
        // AGGANGIO ALLA GRIGLIA
        const cellElement = cellGenerator();
        gridElement.appendChild(cellElement);
        console.log(gridElement)
    }
})

