
const user = [
    { name: "Jakariya Ahmed", age: 25, desi: "Frontend Developer"},
    { name: "Ahmed Hussain", age: 25, desi: "Frontend Developer"}
];



// localStorage.setItem('user', JSON.stringify(user));

user.push({
    name: 'Jakariya Aman', age: 24, desi: 'Backend Developer'
});

localStorage.setItem('user', JSON.stringify(user));
let removeName = localStorage.getItem('name');
localStorage.removeItem(removeName);

const getUser = JSON.parse(localStorage.getItem('user'));
console.log(getUser);
document.getElementById('userInfo')
.innerHTML = getUser.map(user => `<li>Name: ${user.name }, Age: ${user.age}, Designation: ${user.desi}</li>`)
    .join('');

