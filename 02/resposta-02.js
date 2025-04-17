var user = [
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
var searchName = function (list, nameSearch) {
    return list.filter(function (user) {
        return user.name.toLowerCase().includes(nameSearch.toLocaleLowerCase());
    });
};
console.log(searchName(user, 'Victor'));
