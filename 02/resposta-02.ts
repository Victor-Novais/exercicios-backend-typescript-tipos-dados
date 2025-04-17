
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
const searchName = (list: User[], nameSearch: string) => {
    return list.filter(user => {
        return user.name.toLowerCase().includes(nameSearch.toLocaleLowerCase());
    })

}

console.log(searchName(user, 'Victor'));