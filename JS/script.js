
//# FUNZIONI
const cellGenerator = () =>{
    //CREO ELEMENTO CELLA
    const cellElement =document.createElement('div');
    // GLI DO LA CLASSE
    cellElement.classList.add('cell');
    return cellElement
}

//# RECUPERO GLI ELEMENTI
const gridElement = document.querySelector('.grid');

const button = document.querySelector('button');

const rows = 10;
const cols = 10;
const totalCell = rows * cols;
let hasCells = false;

//CREO EVENT LISTNER SUL BOTTONE
button.addEventListener('click', function(){
    if(hasCells){ return;
    }else{
        for(let i = 1; i <= totalCell; i++){
            //CREO LA CELLA
            let cellElement = cellGenerator();
    
            // AGGANGIO LA CELLA ALLA GRIGLIA
            gridElement.appendChild(cellElement);
    
            // AGGIUNGO IL NUMERO ALLA CELLA
            cellElement.innerText = i;
            
            hasCells = true
            // CREO EVENT LISTNER SULLA CELLA
            cellElement.addEventListener('click', function(){
                
                //STAMPO IN CONSOLE IL NUMERO DELLA CELLA
                console.log('sono la cella', i)
    
                // COLORO LA CELLA DI BLU AL CLICK
                cellElement.classList.add('clicked');
            })
        }
    }
})


