//Objetos para - > strings ; Strings para -> Objetos
const people = [
{
    },
        {
        id: 1,
        name: "Felipe",
        lastName: "Fontoura",
        bornDate: new Date(1982, 1, 18),
        address: {
            city: "são josé dos campos",
        },
        city: "São José dos Campos",
        id: 2,
        name: "Eduardo",
        lastName: "Moraes",
        bornDate: new Date(2001, 3, 5),
        address: {
            city: "Recife",
        },
    }
]


//console.log(JSON.stringify(people)) // tipo String

const json = JSON.stringify(people)

//transformando em obj novamente
console.log(JSON.parse(json))