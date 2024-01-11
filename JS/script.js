
//# FUNZIONI
const cellGenerator = () =>{
    //CREO ELEMENTO CELLA
    const cellElement =document.createElement('div');
    // GLI DO LA CLASSE
    cellElement.classList.add('cell');
    return cellElement
}

//# RECUPERO GLI ELEMENTI
const formElement = document.querySelector('form')
const selectElement = document.querySelector('select')
console.log(formElement,selectElement)
const button = document.querySelector('button');



const gridElement = document.querySelector('.grid');


const rows = 10;
const cols = 10;
const totalCell = rows * cols;
let hasCells = false;
const mode = selectElement.value;

//CREO EVENT LISTNER SUL BOTTONE
formElement.addEventListener('submit', function(event){
    event.preventDefault();
    
    if(hasCells){
        return;
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
                //EVITO CHE LO STAMPI SE GIA E' STATA CLICCATA
                if(!cellElement.classList.contains('clicked')){
                    //STAMPO IN CONSOLE IL NUMERO DELLA CELLA
                    console.log('sono la cella', i)
                }else return;
    
                // COLORO LA CELLA DI BLU AL CLICK
                cellElement.classList.add('clicked');
            })
        }
    }
})


