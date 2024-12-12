// Este es mi archivo javaScript
var hola = "hola mundo"
console.log(hola)
let hello = "hello world"
console.log(hello)

//cadena de texto
let nombre = "Natalia";
let apellido = "Salcedo";
let saludo = `Hola, mi nombre es ${nombre} ${apellido}.`
console.log(saludo)

//Instrucción en JavaScrip, mosntrando un cuadro de dialogo emergente
alert("¡Bienvenido al sitio web de los Bomberos Voluntarios!") //CADENA DE TEXTO

console.log("****elementos del documento****")
console.log (window.docunment)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.characterSet)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.getElementsByTagName('img'))
console.log(document.getElementsByClassName('header'))
console.log(document.getElementsByClassName('navegador-links'))
console.log(document.getElementsByClassName('contenedor-imagenes'))
console.log(document.getElementsByClassName('blockquote'))
console.log(document.getElementsByClassName('History'))
console.log(document.getElementsByClassName('tres-columnas'))
console.log(document.getElementsByClassName('boton-inicio'))
console.log(document.getElementsByClassName('news'))
console.log(document.getElementsByClassName('card-group'))
console.log(document.getElementsByClassName('card'))
console.log(document.getElementsByClassName('card-img-top'))
console.log(document.getElementsByClassName('card-body'))
console.log(document.getElementsByClassName('card-title'))
console.log(document.getElementsByClassName('card-text'))
console.log(document.getElementsByClassName('card-footer'))
console.log(document.getElementsByClassName('text-body-secondary'))
console.log(document.getElementsByClassName('fotos-titulo'))
console.log(document.getElementsByClassName('contenedor-desplazamiento'))
console.log(document.getElementsByClassName('contacto-titulo'))
console.log(document.getElementsByClassName(console.log('contenedor-contacto')))
document.querySelectorAll('a').forEach((el) => console.log(el));



//utiliza la API de Speech Synthesis de JavaScript, que permite convertir texto en voz
let texto =  "¡Bienvenido al sitio web de los Bomberos Voluntarios!"
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
hablar(texto)

//datos de atributo
console.log(document.documentElement.getAttribute('lang'))
//cambiamos el atributo lenguaje
document.documentElement.lang= "es"

