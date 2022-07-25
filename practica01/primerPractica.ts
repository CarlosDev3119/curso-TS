(() => {

    interface User {
        user: UserProps;
    }
    
    interface UserProps {
        id: number;
        name: string;
        email: string;
        password: string;
    }

    
    let btnLogin:        HTMLButtonElement  = document.querySelector('button')! as HTMLButtonElement; //operador de asercion no nula
    const userInput:     HTMLInputElement   = document.getElementById('email')! as HTMLInputElement;
    const passwordInput: HTMLInputElement   = document.getElementById('password')!  as HTMLInputElement;;
    // const h1Resultados:  HTMLHeadingElement = document.querySelector('#resultado')! as HTMLHeadingElement;
    
    
    const resultados:NodeListOf<HTMLDivElement> = document.querySelectorAll('.resultado > h3 > span')! as NodeListOf<HTMLDivElement>;
    // if( !btn ) return;
    const dataUser: User = {
        user: {
            "id": new Date().getTime(),
            "name": "Carlos",
            "email": "terry@gmail.com",
            password: "123456"
        }
    }
    
 

    btnLogin.addEventListener('click', () => {
        
        //obtener datos de usuario y contraseña del dom
        const email = dataUser.user.email;
        const password = dataUser.user.password;

        // h1Resultados.innerHTML = `${ JSON.stringify(dataUser, null, 2) }`;	
        resultados[0].innerHTML = `${ dataUser.user.name }`;

    });



})()