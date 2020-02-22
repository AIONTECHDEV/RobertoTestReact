export const alfabeto = 'abcdefghijklmnñopqrstuvwxyz!"$%&/1234567890';
export const strongRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[!"$%&/]).{8,}$/
export const expresionEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i

export function caracteresEspeciales(campo: string): boolean {
    let encontrado = false;
    // @ts-ignore
    for (let campoKey in campo) {
        // @ts-ignore
        for (let alfabetoKey in alfabeto) {
            if (campo[campoKey] === alfabeto[alfabetoKey]) {
                encontrado = true;
            }
        }
        if (!encontrado) {
            return false;
        }
        encontrado = false
    }
    return true;
}

export function obtenerUsuario() {
    return localStorage.getItem('user')
}

export function obtenerPass() {
    return localStorage.getItem('pass')
}


export const history = {
    "transactions": [
        {
            "fromAccount": 123456789,
            "toAccount": 192837465,
            "amount": {
                "currency": "€",
                "value": 876.88
            },
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 123456789,
            "toAccount": 192837465,
            "amount": {
                "currency": "€",
                "value": 654.88
            },

            "sentAt": "2012-04-21T18:25:43.511Z"
        },
        {
            "fromAccount": 987654321,
            "toAccount": 543216789,
            "amount": {
                "currency": "$",
                "value": 543
            },
            "sentAt": "2012-04-23T18:25:43.511Z"
        },
        {
            "fromAccount": 987654321,
            "toAccount": 543216789,
            "amount": {
                "currency": "$",
                "value": 987.54
            },
            "sentAt": "2012-04-23T18:25:43.511Z"
        }
    ]
};


export function agruparDatos(arrayRespuesta: {}) {
    let nuevoObjeto = {};
    // @ts-ignore
    arrayRespuesta.transactions.forEach(x => {
        // @ts-ignore
        if (!nuevoObjeto.hasOwnProperty(x.toAccount)) {
            // @ts-ignore
            nuevoObjeto[x.toAccount] =[]
        }
        // @ts-ignore
        nuevoObjeto[x.toAccount].push([x.toAccount,x.amount.value]);

    });

    return nuevoObjeto;
}

