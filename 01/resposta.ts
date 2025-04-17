type User = { name: string, pets: string[] };
const user: User[] = [
    {
        name: 'Victor',
        pets: ['max']
    },
    {
        name: "João",
        pets: ["Max"],
    },
    {
        name: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        name: "Beatriz",
        pets: ["Lessie"],
    },
    {
        name: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        name: "Antonio",
        pets: ["Naninha"],
    },
];
const searchDoPet = (list: User[], petName: string) => {
    let userFound: string[] = [];
    for (const user of list) {
        if (user.pets.includes(petName)) {
            userFound.push(user.name);
        }
    }

    if (userFound) {
        console.log(`O dono(a) do(a) ${petName} é o ${userFound}`)

    } else {
        console.log(`Que pena ${petName}, não encontramos seu dono(a)`);

    }

}

searchDoPet(user, 'Victor');