/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  salud : 0,
  mover : function(x,y){
    this.x += x;
    this.y += y;
  },
  /* Estas funciones ayudarán a que cuando el auto cambie de dirección, dependiendo si es en x o en y, se adapte el ancho
    y alto para que el dibujo no tenga problemas */
  cambiarHorizontal : function(){
    this.alto = 15;
    this.ancho = 30;
  },
  cambiarVertial : function(){
    this.alto = 30;
    this.ancho = 15;
  },
  perdervida: function(){}
}
