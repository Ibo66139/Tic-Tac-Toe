const itemElements = document.querySelectorAll('[data-cell]');
const Container = document.getElementById("Container");
const x = "x"
const kreis = "kreis"
let KreisDrehen 



StarteGame()


function StarteGame(){
    
    KreisDrehen = false ;

itemElements.forEach(item =>{

    item.addEventListener("click", handleClick, {once: true}  )
});

ClassenwechslerHover()

}








function handleClick(e){
const item = e.target
const AktuelleClasse = KreisDrehen ? kreis : x 

platzmarkieren(item,AktuelleClasse)
TauschtElemente()
ClassenwechslerHover()
}




function platzmarkieren(item, AktuelleClasse){
    item.classList.add(AktuelleClasse)
}




function TauschtElemente(){
    KreisDrehen = !KreisDrehen
}

function ClassenwechslerHover(){
    Container.classList.remove(x)
    Container.classList.remove(kreis)

    if (KreisDrehen) {
        Container.classList.add(kreis)
    }else{
        Container.classList.add(x)
    }



}



