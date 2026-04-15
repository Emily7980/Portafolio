let edad = 30;
const esMayorEdad = true;
const nombre = "Emily Torres"
const precio = 99.99;
var marca = "Dell";
console.log(nombre,precio,edad)
edad += 5;
console.log(edad);
console.log("suma: ", 5+5);
if(edad >= 18){
    console.log("Mayor de edad");
}else{
    console.log("Menor de edad");
}
const frutas = ["manzana","pera","naranja","fresa"];
frutas.map((frutas)=>{
    console.log(frutas);
});