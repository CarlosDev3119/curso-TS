(() => {

    //estructuras de control


    //condicional if


    // if( name.length > 0 ){
    //     console.log( 'El nombre no se encuentra vacio' )
    // }

    // console.log( 'El nombre esta vacio' )


    // //better
    // if( name.length > 0 ){
    //     console.log( 'El nombre no se encuentra vacio' )
    // }else{
    //     console.log( 'El nombre esta vacio' )
    // }


    //condicional if anidado

    // let edad: number = 60;
    // let message = 'Tu edad actual es: ';

    // if( edad > 18 && edad < 60){
    //     if( edad === 30){
    //         console.log( `${message}${edad}, ya estas en el tercer piso` );
    //     }else{
    //         console.log( `${message}${edad} y no eres de la tercera edad` )
    //     }
    // }else if( edad === 15){
    //     console.log( `${message}${edad}, ya tienes 15 primaveras`)
    // }else{
    //     if(edad < 18 && edad > 0){
    //         console.log( `${message}${edad}, aun eres joven`)
    //     }else{
    //         console.log( `${message}${edad}, ya estas en la tercera edad`)
    //     }
    // }


    // let numero = 9

    // if( numero % 2 === 0){
    //     console.log( `El numero ${ numero } es par` );
    // }else{
    //     console.log( `El numero ${ numero } es impar` );
    // }

    const checking: string = 'checking';

    switch( checking ){

        case 'Authenticated':
            console.log( 'Esta autenticado');
            break;

        case 'Not-authenticated':
            console.log( 'No Esta autenticado');
            break;
    
        case 'checking':
            console.log('Revisando...');
            break;

        default:
            return;

    }


    const opcion: number = 2;
    let menuCafe: string[];

    switch( opcion ){

        case 1: 
            menuCafe = ['cafe americano', 'hot cakes', 'huevos con jamon'] ;
            break;

        case 2: 
            menuCafe = ['capuccino', 'hot cakes', 'huevos con jamon y tocino', 'fruta con miel'] ;
            break;

        default: 
            menuCafe = [];
            break;
    }
    if( menuCafe.length === 0 ){
        alert('No se encontro ningun articulo con esa opcion')
    }else{
        console.log( menuCafe )
    }


})()