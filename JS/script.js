
//# RECUPERO GLI ELEMENTI

const gridElement = document.querySelector('.grid');

const button = document.querySelector('button');

const rows = 10;
const cols = 10;
const totalCell = rows * cols;

//CREO EVENT LISTNER
button.addEventListener('click', function(){
    
    const cellGenerator = () =>{
        for(let i = 1; i<= totalCell;i++){
            //CREO ELEMENTO CELLA
            const cellElement =document.createElement('div');
            // GLI DO LA CLASSE
            cellElement.classList.add('cell');
            // AGGANGIO ALLA GRIGLIA
            gridElement.appendChild(cellElement);
        }
        }
        cellGenerator()




})

