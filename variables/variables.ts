(()=> {

    //tipos de datos
    // String, boolean, number, float, double, array, object, personalizados

    //tipos de datos string son cadenas de caracteres, 
    // las cadenas se llaman asi por que es la union de varios caracteres

    //javascript 

    //bad 
    let n = 'Carlos';
    //better
    let nombreEmpleado = 'Carlos';

    //typeSript 

    //bad 
    let m: string = 'Alberto';
    //better
    let nombreCliente: string = 'Alberto';

    let apellidoCliente: string = 'Ortega';


    let nombreCompleto: string;

    nombreCompleto = nombreCliente + ' ' + apellidoCliente;

    // console.log(nombreCompleto);


    nombreCompleto = nombreCliente + '\n' + apellidoCliente;

    // console.log(nombreCompleto);


    nombreCompleto = nombreCliente + '\t' + apellidoCliente;

    // console.log(nombreCompleto);


    nombreCompleto = `${ nombreCliente } ${apellidoCliente}`

    // console.log(nombreCompleto);

    //javascript
    let numberPositive = 10;

    //typeSript
    let numberNegative: number = -20;

    numberPositive = 20.6;

    //operadores matematicos
    let suma: number,
        multiplicacion: number,
        division: number,
        resta: number,
        modulo: number;

    suma = 10 + 34.6;
    resta = suma - 10;
    division = suma / resta;
    multiplicacion = division * suma;
    modulo = multiplicacion % 2;
    
    // cconsole.log({ suma, resta, division, multiplicacion, modulo });


    // booleanos
    
    // javascript
    let isValid = true;

    //bad
    let valid = false;


    // typescript
    let isActive: boolean;


    // console.log( typeof valid );




    //arrays
    let numeros: (number)[] = [1, 20, 30];
    let nombresClientes: (string|number)[];

    nombresClientes = ['Luis', 24, 'Hector', 24, 'Magdalena', 22];

    nombresClientes.push('Carlos')
    nombresClientes.push(21);
    
    // numeros.map((n) => {
    //     nombresClientes.push(n);
    // })
    let nombresCopia: (string|number) [][] = [numeros, nombresClientes];

    let nombres: (string|number)[] = [...nombresClientes, ...numeros];

    
    // // agregar datos a un array
    // nombresClientes.push('');

    // problema de valor y referencia
    // nombresCopia[0][0] = 2;
    // console.log( nombresCopia );
    // console.log( numeros );
    // console.log( nombres );


    // indices
    let nombre = nombresClientes[0];
    let edad   = nombresClientes[1];
    // console.log( nombre, edad );

    //propiedad lenght, sirve para medir la longitud del array, string u objeto 
    let ultimoDato = nombresClientes[ nombresClientes.length - 1 ];

    // console.log( ultimoDato );


    //objetos 

    type Game = {
        names: string[] ;
        console: string[];
        releaseYear: number;
        players?: number
    }


    let game: Game = {
        names: ['God of War'],
        console: ['PC', 'PS4', 'PS5'],
        releaseYear: 2018,
    }

    game.names = [...game.names, 'Street Fighter']
    game.names.push('KOF')
    // console.log( game.names );
    // console.log( game.console );

    


    //diferencia entre let var y const
    // let fruta: string | string[] = 'sandia';
    {
        let fruta: any = ['melon', 'sandia']; //variable local solo existe en el scope 
        
        fruta = 'platano';
    }
    
    // console.log( fruta );
    
    // console.log( fruta );
    {
        var promedios: any = [9.5, 8.7, 8.0];

    }
    promedios = [7.8, 7.9, 5.7]
    // console.log(promedios)



    {
        const edades: any = [19, 8, 12];

        // edades = [7.8, 7.9, 5.7]
    }
    // edades = [7.8, 7.9, 5.7]


    // var calificaciones = [10, 9, 7];




    //tuplas


    let tupla: [boolean, string] = [true, 'carlos'];

    // console.log( tupla);


    
    



   

})()