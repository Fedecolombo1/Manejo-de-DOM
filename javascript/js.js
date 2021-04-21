alert('Bienvenidos a mi sitio')
var confirmacion = confirm('Queres avanzar?')
console.log(confirmacion);

if(confirmacion == true){
    document.querySelector('.hola').innerHTML = "Qué alegría que quieras con tu visita por este maravilloso sitio."
} else {
    document.querySelector('.hola').innerHTML =  "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
}
var nombre = prompt('Ingresa tu nombre')
nombre = '<span>'+nombre+'</span>'
document.querySelector('h1').innerHTML = 'Bienvenido ' + nombre

var edad = prompt('Ingresa tu edad')
if(edad < 18){
    document.querySelector('div.container-general').style.display = 'none';
    document.querySelector('#accesoDenegado').style.display = 'block'
}

var hobbies = prompt('Ingresa tus hobbies separados por coma (programación 😉)').split(",")
var contador = 0
hobbies.forEach(hobbie => {
    if(hobbie == 'programacion' || hobbie ==  "programación" || hobbie ==  "programar" && hobbie.length > 5 && hobbie.length < 10){
        contador++
    } 
})
if(contador != 0){
    alert('Que bueno que te gusta la programacion!!')
    document.querySelector('.background-img').style.backgroundImage = 'url(img/programmer.jpeg)'
} else {
    alert('Que lastima que no te gusta la programacion :(')
    document.querySelector('.background-img').style.backgroundImage = 'url(img/gatito.jpeg)'
}
if(hobbies != undefined){
    hobbies.forEach(hobbie => {
        document.querySelector('ol').innerHTML += '<li>' + hobbie + '</li>'
    })
        
}

var colorFav = prompt('Ingresa tu color favorito en ingles')
console.log(colorFav);

document.querySelector('h1 span').classList.add('color-preferido')
document.querySelector('.color-preferido').style.color = colorFav

var hobbiesUrls = prompt('Ingresa las url de tus hobbies separados por coma').split(",")

if(hobbiesUrls != undefined){
        hobbiesUrls.forEach(hobbieUrl => {
            document.querySelector('ul.urlHobbies').innerHTML += '<li>' + '<a href=' + hobbieUrl + '>' + hobbieUrl + '</a>' + '</li>'
        })
}

var lis = document.querySelectorAll('ol.olHobbies li')
lis.forEach(li => {
    li.style.textAlign = 'center'
})



