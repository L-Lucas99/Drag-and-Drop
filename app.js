//Evento asignado al elemento que se desea poder arrastrar y mover
const dragStart = (ev) => {
   /*ev.dataTransfer.effectAllowed='move'; */
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    /*ev.dataTransfer.setDragImage(ev.target,0,0); */
    return true;
 }

//Se activa cuando el elemento arrastrado 
//entra en una zona permitida para dejar el elemento
const dragEnter = (ev) => {
    ev.preventDefault();
    return true;
 }

 //Se activa mientras el elemento arrastrado se 
 //matenga sobre la zona permitida para dejar el elemento
const dragOver = (ev) =>  {
    return false;
 }

 //Se activa cuando el elemento arrastrado se 
 //haya dejado en la zona permitida para dejar el elemento
const dragDrop = (ev) => {
    var src = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(src));
    ev.stopPropagation();
    return false;
 }