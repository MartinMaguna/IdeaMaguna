const usuarios = [
    {
        username: "usuario1",
        password: "contraseña1"
    },
    {
        username: "usuario2",
        password: "contraseña2"
    },
    {
        username: "usuario3",
        password: "contraseña3"
    },
];

const peliculas = [
    {
        titulo: "30 años de oscuridad",
        director: "Manuel H. Martin",
        año: 2012,
        genero: "Documental",
        duración: "Largometraje",
        imagen: "assets/img/29.webp",
    },
    {
        titulo: "Años de calle",
        director: "Alejandra Grinschpun",
        año: 2013,
        genero: "Documental",
        duración: "Largometraje",
        imagen: "assets/img/34.webp",
    },
    {
        titulo: "Bolishopping",
        director: "Pablo Stigliani",
        año: 2014,
        genero: "Ficción",
        duración: "Largometraje",
        imagen: "assets/img/33.webp",
    },
    {
        titulo: "Guaraní",
        director: "Luis Zorraquín",
        año: 2016,
        genero: "Ficción",
        duración: "Largometraje",
        imagen: "assets/img/32.webp",
    },
    {
        titulo: "El otro lado de todo",
        director: "Mira Turajlik",
        año: 2017,
        genero: "Ficción",
        duración: "Largometraje",
        imagen: "assets/img/30.webp",
    },
    {
        titulo: "A new home",
        director: "Žiga Virc",
        año: 2016,
        genero: "Ficción",
        duración: "Cortometraje",
        imagen: "assets/img/28.webp",
    },
    {
        titulo: "Chike",
        sinopsis: "La adolescencia es muchas veces un camino sinuoso y solitario. Ana y Carla se encuentran para experimentar con sus deseos, determinaciones y miedos para vivir momentos fugaces pero decisivos.",
        director: "Lucia Ravanelli",
        año: 2016,
        genero: "Ficción",
        duración: "Cortometraje",
        imagen: "assets/img/31.webp",
    },
    {
        titulo: "Les miserables",
        imagen: "",
        sinopsis: "En el barrio de la novela de Victor Hugo, devenido al día de hoy en barrio marginal, un policía recién transferido aprende prácticas policiales abusivas de sus dos compañeros más veteranos. La comunidad amenaza con explotar cuando un adolescente logra filmarlos.",
        director: "Ladj Ly",
        año: 2017,
        genero: "Ficción",
        duración: "Cortometraje",
        imagen: "assets/img/35.webp",
    },
];

function iniciarSesion(username, password) {
    // Buscar el usuario en el objeto
    const usuarioEncontrado = usuarios.find(user => user.username === username);

    // Verificar si se encontró un usuario y si la contraseña coincide
    if (usuarioEncontrado && usuarioEncontrado.password === password) {
        return true; // Acceso correcto
    } else {
        return false; // Acceso denegado
    }
}

const loginForm = document.getElementById("loginForm");
const mensajeLogin = document.getElementById("mensajeLogin");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Capturar el nombre de usuario y la contraseña ingresados
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar usuario
    if (iniciarSesion(username, password)) {
        mensajeLogin.textContent = "Bienvenido a Contrapikado";
        // Redirigir al usuario a la página principal
    } else {
        mensajeLogin.textContent = "Inténtalo de nuevo.";
    }
});

function mostrarPeliculasEnPagina() {
    const peliculasContainer = document.getElementById("peliculasContainer");

    peliculas.forEach(pelicula => {
        const peliculaDiv = document.createElement("div");
        peliculaDiv.className = "pelicula";

        const titulo = document.createElement("h2");
        titulo.textContent = pelicula.titulo;

        const director = document.createElement("p");
        director.textContent = "Director: " + pelicula.director;

        const genero = document.createElement("p");
        genero.textContent = "Género: " + pelicula.genero;

        const imagen = document.createElement("img");
        imagen.src = pelicula.imagen;
        imagen.alt = pelicula.titulo;

        const verMasTardeButton = document.createElement("button");
        verMasTardeButton.textContent = "Ver más tarde";
        verMasTardeButton.addEventListener("click", function () {
            agregarAVerMasTarde(pelicula);
        });

        const favoritosButton = document.createElement("button");
        favoritosButton.textContent = "Favoritos";
        favoritosButton.addEventListener("click", function () {
            agregarAFavoritos(pelicula);
        });

        peliculaDiv.appendChild(titulo);
        peliculaDiv.appendChild(director);
        peliculaDiv.appendChild(genero);
        peliculaDiv.appendChild(imagen);
        peliculaDiv.appendChild(verMasTardeButton);
        peliculaDiv.appendChild(favoritosButton);

        peliculasContainer.appendChild(peliculaDiv);
    });
}

// Llama a la función para mostrar películas en la página
mostrarPeliculasEnPagina();

const verMasTardeList = [];
const favoritosList = [];

function agregarAVerMasTarde(pelicula) {
    if (!verMasTardeList.includes(pelicula)) {
        verMasTardeList.push(pelicula);
        mostrarPeliculasEnVerMasTarde();
    }
}

function quitarDeVerMasTarde(pelicula) {
    const index = verMasTardeList.indexOf(pelicula);
    if (index !== -1) {
        verMasTardeList.splice(index, 1);
        mostrarPeliculasEnVerMasTarde();
    }
}

function agregarAFavoritos(pelicula) {
    if (!favoritosList.includes(pelicula)) {
        favoritosList.push(pelicula);
        mostrarPeliculasEnFavoritos();
    }
}

function quitarDeFavoritos(pelicula) {
    const index = favoritosList.indexOf(pelicula);
    if (index !== -1) {
        favoritosList.splice(index, 1);
        mostrarPeliculasEnFavoritos();
    }
}

function mostrarPeliculasEnVerMasTarde() {
    const verMasTardeContainer = document.getElementById("watchLaterList");
    verMasTardeContainer.innerHTML = "";

    verMasTardeList.forEach(pelicula => {
        const peliculaItem = document.createElement("li");
        peliculaItem.textContent = pelicula.titulo;

        const quitarButton = document.createElement("button");
        quitarButton.textContent = "Quitar";
        quitarButton.addEventListener("click", () => {
            quitarDeVerMasTarde(pelicula);
        });

        peliculaItem.appendChild(quitarButton);
        verMasTardeContainer.appendChild(peliculaItem);
    });
}

function mostrarPeliculasEnFavoritos() {
    const favoritosContainer = document.getElementById("favoritesList");
    favoritosContainer.innerHTML = "";

    favoritosList.forEach(pelicula => {
        const peliculaItem = document.createElement("li");
        peliculaItem.textContent = pelicula.titulo;

        const quitarButton = document.createElement("button");
        quitarButton.textContent = "Quitar";
        quitarButton.addEventListener("click", () => {
            quitarDeFavoritos(pelicula);
        });

        peliculaItem.appendChild(quitarButton);
        favoritosContainer.appendChild(peliculaItem);
    });
}
