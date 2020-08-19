import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Aprendiendo a manejar mi carro!</h1>
`;
class Carro {
  constructor(modelo,color,arrancar, cambio) {
    this.modelo = modelo;
    this.color = color;
    this.arrancar = arrancar;
    this.Cambio= cambio;

  }

  modelo() {
    console.log(`Enseñando mi carro`);
    console.log(`Mi carro es FORD EXPEDITION 2019, color rojo,cuesta $254,990,000`);
    var img = document.createElement("img");
    img.src = "https://ford-h.assetsadobe.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/expedition/2020/collections/dm/20_FRD_EPD_47042_KRanch.tif?croppathe=1_3x2&wid=720&fit=crop&hei=480";
    return this;
  }

  arrancar() {
     console.log(`Asegurar que todo el aparato eléctrico del vehículo esté apagado 
     (luces, radio, aire acondicionado, etc). Esto evitará que haya alguna sobre tensión 
     cuando se encienda el auto, así no se dañarán los fusibles.

     -Pisar a fondo el embrague, haya o no una marcha puesta.
     -Accionar la llave el mínimo tiempo posible para prender el carro.
     -Pisar el acelerador suavemente un par de veces, sin realizar repetidas
      aceleraciones (evita pisar repetidas veces este pedal porque se negará 
      el motor e impedirá poner alguna marcha).
     -Si el auto es a diésel, deberemos esperar aproximadamente un minuto antes de iniciar la marcha.
     -Si el auto es a gasolina, iniciaremos la marcha inmediatamente.
     -El inicio del trayecto (en ambos casos) se realizará lentamente y sin largas aceleraciones.`);
    return this;
  }

 cambio() {
  console.log(`Paso 1: familiarizarse con el pedal de embrague y la palanca de cambios`);
  console.log(`Suponiendo que posees o tienes acceso a un vehículo con transmisión manual, 
  ponte en el asiento del conductor y toma nota de las diversas características y componentes 
  mientras el carro no está en funcionamiento. Conoce el embrague, ese pedal adicional que se 
  encuentra a la izquierda del freno. Es el corazón de la diferencia entre un carro automático 
  y uno manual. Familiarízate sobre todo con su resistencia, al pisarlo y soltarlo. Después, 
  ubica la palanca de cambios, normalmente posicionada en la consola central, entre los asientos 
  delanteros, o junto al volante. Asegúrate de que tu asiento esté ajustado para que puedas alcanzar 
  fácilmente los tres pedales y, como siempre, asegúrate de que el cinturón de seguridad esté abrochado.
  Luego, examina el patrón de cambio, generalmente grabado sobre la perilla del cambio. Este diagrama 
  generalmente muestra una serie de líneas y números que corresponden a cada engranaje. Ten en cuenta 
  la ubicación de los engranajes individuales, y el de Reversa, al cual a menudo se accede bajando desde 
  la quinta marcha. Ocasionalmente, en muchos vehículos Volkswagen, por ejemplo, la Reversa se posiciona
  presionando primero hacia abajo la palanca de cambios y después moviéndola desde la primera posición. 
  También hay un engranaje Neutro, ubicado en la llamada “área gris”, al medio de todo, cuando la palanca
  no está en ninguna marcha o engranaje. Esa ubicación de Neutro te permite liberar el pedal del embrague
  mientras mantienes el carro en funcionamiento. Al presionar el embrague y mover la palanca de cambios 
  desde la primera y la segunda marcha, por ejemplo, la palanca pasara por la posición de Neutro. 
  Las transmisiones automáticas hacen todo esto… automáticamente.`);
  return this;
}
cambio() {
  console.log(`práctica de cambios con el motor apagado y el freno de mano puesto`);
  console.log(`Aquí está la regla de oro de las transmisiones manuales: el cambio comienza con el embrague, 
  pero termina con el acelerador. Con el motor todavía apagado, presiona el embrague hasta el fondo y mueve 
  la palanca de cambios a la primera marcha. Luego, ve soltando suavemente el embrague mientras presionas 
  lentamente el acelerador. Si el motor estuviera encendido y los frenos desconectados, esto impulsaría el
   vehículo hacia adelante. Para pasar a la segunda marcha, suelta el acelerador y presiona el embrague hasta 
   el fondo otra vez. En este punto, solo repites el paso anterior, pasando a la segunda marcha, luego a la 
   tercera, a la cuarta, y así sucesivamente. En pocas palabras, cambiar de marcha requiere las siguientes 
   tres acciones:
   1.Presionar el embrague con tu pie izquierdo.
   2.Cambiar las marchas manualmente con la mano derecha, generalmente en orden ascendente (1ª, 2ª, 3ª …)
   3.Pisar lentamente el pedal del acelerador con el pie derecho a medida que vas liberando el embrague.
  Mientras más rápido conduzcas, más rápido podrás soltar el embrague, pero ten en cuenta que la suavidad 
  cuenta aquí más que la rapidez.`);
  return this;
}

cambio() {
  console.log(`Paso 3: simular un escenario real de manejo`);
  console.log(`Acelerar y aumentar la velocidad requiere cambiar a engranajes o marchas más altas. En general,
   las transmisiones manuales requieren cambios cuando los vehículos alcanzan las 3,000 RPM, o cuando el motor
  parece estar trabajando demasiado: vigila el tacómetro, si no estás seguro de cuándo debes cambiar. Con el
  motor todavía apagado, practica los cambios de primera a segunda y a tercera marcha. Practica presionando 
  el embrague y cambiando manualmente a la cuarta marcha. Pon en práctica tus pies, sobre todo. Soltar el
  embrague y, al mismo tiempo, pisar suavemente el acelerador para darle gasolina al motor. Ahora, imagina 
  que ves una señal de tráfico a la distancia
  El cambio descendente requiere cambiar a marchas más bajas. Si parece que el motor está acelerando, deberás
  bajar la velocidad para subir el RPM y acceder a una mayor potencia del motor. Presiona el embrague y mueve
  cuidadosamente la palanca de cambios de la tercera a la segunda, para practicar el cambio descendente. Al 
  igual que la aceleración, asegúrate de presionar lentamente el pedal del acelerador mientras liberas el 
  embrague. Este vídeo instructivo puede ayudarte.
 Detenerse por completo requiere que los conductores presionen el embrague y muevan la palanca de cambios al 
 punto muerto o Neutro, la posición convenientemente ubicada entre todos los engranajes. El punto Neutro no se
  indica normalmente en la palanca de cambios (en algunos sí, pero no es lo habitual), pero una vez que llevas 
  palanca a esa posición, puedes quitar el pie del embrague mientras mantienes el automóvil en funcionamiento. 
  Nuevamente, deberás cambiar de marcha cuando el auto marque aproximadamente 3,000 RPM.`);
  return this;
}

cambio() {
  console.log(`Paso 4: comienza suavemente, y luego repite`);
  console.log(`Practicar con el motor apagado es como se empieza, pero no tiene comparación con los escenarios 
  reales a los que te enfrentarás en el camino. El siguiente paso es practicar el manejo, preferiblemente en un 
  área plana y relativamente desprovista de tráfico y peatones: estacionamientos, carreteras secundarias, etc.
  Aunque puedes practicar solo. siempre que poseas una licencia de conducir válida, considera la posibilidad de 
  ir con un amigo que sepa cómo manejar un vehículo manual. Al encender el motor, asegúrate de que la palanca 
  está en punto muerto o Neutro. Después, para poner el carro en movimiento, asegúrate de poner la primera marcha,
  presionando primero el embrague, poniendo la primera marcha, soltando el embrague a medida que presionas 
  suavemente el acelerador. Ojo, que también puedes encender el motor teniendo presionado ya el embrague y con
  la primera marcha puesta. Cuando el motor se encienda, deberás hacer lo que ya te hemos dicho: soltar el 
  embrague a la vez que presionas suavemente el acelerador. Eso sí: hagas lo que hagas, no aceleres demasiado.`);
  return this;
}

terminos() {
  console.log(`Embrague`);
  console.log(`Un embrague engancha y desengancha dos ejes independientes. En un vehículo, se utiliza para acoplar
 o desacoplar el cigüeñal (que lleva al motor) del eje de transmisión (que lleva al eje motorizado). El embrague está,
 de forma predeterminada, activado, pero al presionar el pedal se desacopla para así poder cambiar de marcha.`);
  return this;
}
terminos() {
  console.log(`Engranaje`);
  console.log(`en un vehículo, los engranajes transfieren la potencia del cigüeñal al eje motriz. Existen
 múltiples engranajes para cambiar la forma en que la potencia del motor hace girar las ruedas de un automóvil.
 Se utilizan engranajes más pequeños para que el auto acelere. Se usan engranajes más grandes para alcanzar y
 mantener esa velocidad..`);
  return this;
}

terminos() {
  console.log(`RPM (revoluciones)`);
  console.log(`Revoluciones Por Minuto es una medida sobre cuántas rotaciones en un eje fijo se completan en un 
solo minuto. En un automóvil, el tacómetro mide las rotaciones del cigüeñal del vehículo. Por ejemplo, si está
 inactivo a 1,000 rpm, entonces el cigüeñal de tu automóvil está girando sobre su eje 1,000 veces por minuto.`);
  return this;
}
terminos() {
  console.log(`Tacómetro`);
  console.log(`dentro del grupo de indicadores, el tacómetro mide las RPM. Por lo general, el tacómetro se 
  encuentra justo al lado del velocímetro, pero en algunos vehículos de alto rendimiento aparece centrado entre
  el grupo de indicadores. A medida que acelera, la aguja del tacómetro subirá hasta que alcance la 
  “línea roja”. Debes subir de marcha (pasar de un cambio a otro) antes de que la aguja alcance esa línea roja.`);
  return this;
}
terminos() {
  console.log(`Cambio ascendente`);
  console.log(`mover la palanca de una velocidad inferior a una más alta se denomina “cambio ascendente”. 
  Para cambiar, debes pisar el embrague y mover la palanca a la muesca del engranaje deseado.`);
  return this;
}

terminos() {
  console.log(`Cambio descendente`);
  console.log(`Lo contrario del cambio ascendente. Es cuando mueves la palanca de una marcha más alta a una 
marcha más baja (cuando comienzas a subir una pendiente inclinada, por ejemplo, se suele pasar de una marcha 
mayor a una menor, hasta que el vehículo vuelva a agarrar potencia o velocidad)`);
  return this;
}

terminos() {
  console.log(`Doble embrague`);
  console.log(`por lo general, los conductores desconectarán el embrague y moverán la palanca directamente de
 una marcha a otra. Esta transición se basa en un sincronizador que hace coincidir la velocidad de rotación 
 del cigüeñal con la velocidad de rotación del eje de transmisión. Para evitar el uso del sincronizador, los
 conductores pueden desconectar el embrague para mover la palanca de cambio al punto muerto (neutro), soltar 
 el pedal del embrague y luego pisarlo nuevamente para pasar del punto muerto al nuevo. Esa pausa en el punto
 muerto o neutro permite que el cigüeñal y el eje de transmisión se sincron`);
  return this;
}

terminos() {
  console.log(`Cajas de cambios dual/doble embrague`);
  console.log(`las cajas de cambios de duales o de doble embrague utilizan dos embragues, cada uno con su propio 
 juego de engranajes. Por ejemplo, en un automóvil de seis velocidades, un embrague será responsable de los 
 engranajes 1,3 y 5, mientras que el otro maneja los engranajes 2,4 y 6. El beneficio de un doble embrague es
 que las transiciones entre los engranajes son más rápidas; mientras un engranaje está enganchado en un embrague,
 el otro está preparando la siguiente marcha más alta o más baja.`);
  return this;
}

terminos() {
  console.log(`CVT`);
  console.log(`Una CVT no es ni una transmisión manual ni automática. En lugar de engranajes, una CVT se basa en
  un sistema de correas y poleas que proporciona un número infinito de relaciones. En otras palabras, se trata de
 transmisión que nunca cambia.`);
  return this;
}
palanca() {
  console.log(`P (Parking)`);
  setTimeout(() => console.log(`Empezamos por lo más fácil: P es la posición de aparcamiento. Su función es la de
  bloquear la caja de cambios ya sea con el motor parado o en funcionamiento y sin tener ninguna marcha engranada. 
  Este modo evita que el coche se mueva, incluso si estamos en una pendiente sin el freno de estacionamiento 
  activado.`), 2000);
  var img = document.createElement("img");
   img.src = "https://i.blogs.es/f8435c/botones-caja-cambios-5/1366_2000.jpg";
  return this;
}
palanca() {
  console.log(`R (Reverse)`);
  setTimeout(() => console.log(`También es sencillo, especialmente porque se corresponde con la posición R de una
  caja de cambios manual. En esta ocasión hace referencia a la marcha atrás. Para su activación, generalmente en 
  una caja de cambios automática hay que pulsar un botón de forma simultánea.`), 2000);
  var img = document.createElement("img");
  img.src = "https://i.blogs.es/6b6baa/botones-caja-cambios-2/1366_2000.jpg";
  return this;
}
palanca() {
  console.log(`N (Neutral)`);
  setTimeout(() => console.log(`Se trata del punto muerto de toda la vida. Aquí la caja de cambios no tendrá 
 engranada ninguna marcha pero habrá que tener cuidado porque la caja de cambios no está bloqueada, sino que 
 la transmisión está suelta y sin los frenos (de servicio o estacionamiento) el coche se moverá.`), 2000);
 var img = document.createElement("img");
  img.src = "https://i.blogs.es/c099f7/botones-caja-cambios-4/1366_2000.jpg";
  return this;
}
palanca() {
  console.log(`D (Drive)`);
  setTimeout(() => console.log(`Es la posición de avance. En este modo, la caja de cambios engranará de manera
 automática cada una de las marchas tanto de manera ascendente como descendente, olvidándonos por completo del 
 funcionamiento de las relaciones y centrándonos así en dirigir el coche, acelerar y frenar.`), 2000);
 var img = document.createElement("img");
  img.src = "https://i.blogs.es/06671d/botones-caja-cambios-1/1366_2000.jpg";
  return this;
}
palanca() {
  console.log(`Otros`);
  setTimeout(() => console.log(`En coches automáticos con una cierta antigüedad las cajas de cambio venían con
   ciertos modos de funcionamiento preestablecidos (1, 2, 3, 4, 5...), forzando marchas más cortas o priorizando
   el freno motor por poner dos ejemplos. Estos modos prácticamente están desterrados de los coches nuevos y los 
   comportamientos se varían (si lo hacen) con las electrónicas inteligentes o los modos Sport, que varían la
   respuesta del acelerador, el rango de revoluciones de las marchas o incluso el tarado de las suspensiones en 
   algunos coches.`), 2000);
   var img = document.createElement("img");
  img.src = "https://i.blogs.es/06671d/botones-caja-cambios-1/1366_2000.jpg";
  return this;
}
palanca() {
  console.log(`M (Manual)`);
  setTimeout(() => console.log(` Esta posición hace referencia al modo manual que equipan algunas cajas de cambio
 automáticas. También puede representarse con una S (por Secuencial). En este modo la caja de cambios no es la
 que decide cuando cambiar, sino que es el conductor el que manda la orden de cambio a través de movimientos en 
 la palanca de cambios o en las levas en tras el volante marcadas como "+" o "-" para subir o bajar marchas 
 respectivamente. En los vehículos modernos existe por norma general un modo de seguridad con el que pese a 
 funcionar en modo manual no podremos hacer reducciones demasiado bestias ni llegar al corte de encendido para 
 salvaguardar la integridad mecánica.`), 2000);
 var img = document.createElement("img");
 img.src = "https://i.blogs.es/66d838/posiciones-caja-de-cambios-automatica-/1366_2000.jpg";
  return this;
}