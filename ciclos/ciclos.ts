(() => {

    // for( let i: number = 0; i < 10; i++ ) {
    //     console.log(i);
    // }

    // for ( let x: number = 1; x <= 10; x++ ) {
    //     console.log( `2 x ${x} = ${ x * 2}`)
    // }

    //for anidado

    // for( let j: number = 2; j <= 10; j+=2 ) {

    //     for( let k: number = 1; k <= 10; k++){
    //         console.log( `${j} x ${k} = ${ j*k}` )
    //     }
    //     console.log( '\n')
    // }


    //while misma accion
    // let i: number = 2;
    // let j: number = 1;
    // let resultado: string[] = [];
    // while( i <= 10 ){

    //     while( j <= 10 ){
    //         resultado.push(`${i} x ${j}: ${i*j}`);

    //         j++
    //     }
    //     resultado.push(' ');
    //     // console.log( j );
    //     j = 1;
    //     i+=2;
    // }
    
    // console.log( resultado)
    
    let i: number = 1;
    do{
        
        console.log(i);
        
        i++
        
    }while( i < 10 );


    //ciclo forEach
    // sirve para recorrer arreglos de una manera mas sencilla

    let peliculas: string[] = ['Toy Story', 'Toy story 2', 'Bichos'];

    // for( let i: number = 0; i < peliculas.length; i++ ){
    //     console.log( peliculas[i] )
    // }

    // peliculas.forEach( function ( pelicula ) {
    //     console.log( pelicula )
    // })

    // peliculas.forEach(  ( pelicula ) => {
    //     console.log( pelicula )
    // })

    // peliculas.forEach(  ( pelicula ) => {

    //     if( pelicula === 'Toy Story' ){
    //         peliculas = [ pelicula ]
            
    //     }else if ( pelicula === 'Toy story 2'){
    //         peliculas = [ ...peliculas, pelicula ]

    //     }

    // })
    
    // // console.log( peliculas );

    // let peliculasMap = peliculas.map( ( pelicula ) => {
    //     if( pelicula === 'Toy Story' || pelicula === 'Toy story 2'){
    //         return pelicula;
    //     }
    // })

    // console.log( peliculasMap )


    let peliculasFilter: string[] = peliculas.filter( ( pelicula ) => pelicula !== 'Toy Story' && pelicula !== 'Toy story 2')

    console.log( peliculasFilter );
        // let peliculas: string[] = ['Toy Story', 'Toy story 2', 'Bichos'];
    
        // console.log(peliculas[0]);
        // console.log(peliculas[1]);
        // console.log(peliculas[2]);
    
        //ciclo for para mostrar datos de un array
        // for(let i: number = 0; i < 3; i++) {
        //     console.log(peliculas[i]);
        // }
    
})()