
const user = [
    { name: "Jakariya Ahmed", age: 25, desi: "Frontend Developer"},
    { name: "Ahmed Hussain", age: 25, desi: "Frontend Developer"}
];



localStorage.setItem('user', JSON.stringify(user));

const getUser = JSON.parse(localStorage.getItem('user'));

document.getElementById('userInfo')
.innerHTML = getUser.map(user => `<li>Name: ${user.name }, Age: ${user.age}, Designation: ${user.desi}</li>`)
    .join('');