var listaHoteles = ["La reconquista","Ritz","Plaza"];

listaHoteles["La reconquista"] = {
    locationHotel: "Oviedo",
    imageHotel: "https://static1.elcomercio.es/www/multimedia/201806/06/media/cortadas/hotel-reconquista-oviedo-U4023545416TC--624x385@El%20Comercio-ElComercio.jpg",
    ratingHotel: 0,
    ratingAnonymous: false
};

listaHoteles["Ritz"] = {
    locationHotel: "Madrid",
    imageHotel: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Hotel_Ritz_%28Madrid%29_01.jpg",
    ratingHotel: 0,
    ratingAnonymous: false
};

listaHoteles["Plaza"] = {
    locationHotel: "Nueva York",
    imageHotel: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Plaza_hotel.jpg/450px-Plaza_hotel.jpg",
    ratingHotel: 0,
    ratingAnonymous: false
};

var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

var currentHotel = "La reconquista";
currentHotel = prompt("¿De qué hotel desea hacer la reseña? (La reconquista, Ritz o Plaza)");
document.getElementById("name-hotel").innerHTML = "Hotel " + currentHotel;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + listaHoteles[currentHotel].locationHotel;
document.getElementById("img-hotel").src = listaHoteles[currentHotel].imageHotel;
listaHoteles[currentHotel].ratingHotel = prompt("Introduzca las estrellas del hotel (de una a cinco)");
document.getElementById("rating").innerHTML = stars[listaHoteles[currentHotel].ratingHotel];
listaHoteles[currentHotel].ratingAnonymous = confirm("¿Reseña anónima?");
document.getElementById("anonymous").checked = listaHoteles[currentHotel].ratingAnonymous;