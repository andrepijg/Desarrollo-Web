var app = new Vue ({
    el : "#app",
    data : {
        titulo : "Intro con Vue grupo 45, lunes",
        peliculas: [],
        enlace: 'https://www.google.com.co',
        imagen: 'https://placeimg.com/640/480/any',
        tituloH1: 'alert',
        cantidad:8,
        contingencia: "soy un texto de contingencia",
        tareas:[
            {text: "Aprender JavaScript"},
            {text: "Aprender Vue"},
            {text: "Construir algo Increible"}
        ]
    },
    methods:{
        reverseMessage() {
            console.log(this.titulo);
            this.titulo = this.titulo.split('').reverse().join('')
            //this.message = this.message.split('').reverse().join('')
    }
}
})