import { robots } from './robotmaster.js'


let imagen = document.getElementById("imagen");
let nombre = document.getElementById("nombre");


const {series, id, name, weapon, avatar } = robots[0];

imagen.setAttribute("src", avatar);
nombre.innerHTML = name;


console.table(robots[0]);


const getRobotById = (id = "1") => {
    return robots.find((robots)=>{
            robots.id === id;
    })
}

