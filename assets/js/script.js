import { robots } from './robotmaster.js'


let imagen = document.getElementById("imagen");
let nombre = document.getElementById("nombre");


const {series, id, name, weapon, avatar } = robots[4];

imagen.setAttribute("src", avatar);
nombre.innerHTML = name;



const getRobotById = (id = "1") => {
    return robots.find((robot)=>{
        return robot.id === id;
    });
}




for(robot of robots){
    console.log("------"+robot);
}

console.log(getRobotById("1"));
