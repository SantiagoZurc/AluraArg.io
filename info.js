function createNode(element) {
    return document.createElement(element);
}

function append(usuario, data) {
  return usuario.appendChild(data);
}

const div = document.getElementById('información');
const url = 'https://randomuser.me/api/?results=1';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let usuario = data.results;
  return usuario.map(function(persona) {

    let img = createNode('img');
    let h1 = document.getElementById('Nombre');
    let li2 = document.getElementById('Edad');
    let li3 = document.getElementById('Email');
    let li4 = document.getElementById('Dirección');
    let li5 = document.getElementById('Telefono');

    img.src = persona.picture.large;
    h1.innerHTML = ` ${persona.name.first} ${persona.name.last}`;
    li2.innerHTML = ` Edad: ${persona.dob.age} años`;
    li3.innerHTML = ` Email: ${persona.email}`;
    li4.innerHTML = ` Domicilio: Ciudad ${persona.location.city} Estado de ${persona.location.state}`;
    li5.innerHTML = ` Contacto: ${persona.cell}`;

    append(h1,img);
  })
})
.catch(function(error) {
  console.log(error);
});