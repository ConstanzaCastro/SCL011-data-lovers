const filterByType = (dataPokemon, filterValue) => {
    
    const resultType = dataPokemon.filter(Element => {
        return Element.type.includes(filterValue);
        //versión marcia
        //return. element.type===condition;
    });

    return resultType;
};

window.filterByType=filterByType;


//Hacer funcion filtrar por tipo con argumentos genericos 
//filterByType(dataPokemon,selectedType)
//terminada la funcion declararla global:
//window.filterByType=filterByType , de esta forma desde cualquier ventana
//accedemos a la funcion filterByType de modo: window.filterByType