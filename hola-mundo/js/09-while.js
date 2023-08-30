'use strict'

//While

var year = 2018;
//mientras que se ejecuta esa condicion se ejecuta ese codigo
while(year != 1991){
    //ejecuta esto
    console.log("Estamos en el año: "+ year);

    if(year == 2000){
        break;
    }

    year--;
}


//Do while
var years = 30;
do{
    alert("Solo cuando sea a 20")
    years--;
}while(years > 25){

}