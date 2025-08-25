// src/library.js

let libros = [];

// 1. Agregar libro
function agregarLibro(titulo, autor, anio) {
  const libro = { titulo, autor, anio, prestado: false };
  libros.push(libro);
  return libro;
}

// 2. Listar libros
function listarLibros() {
  return libros;
}

// 3. Buscar libro por título
function buscarPorTitulo(titulo) {
  return libros.filter(l => l.titulo.toLowerCase().includes(titulo.toLowerCase()));
}

// 4. Buscar libro por autor
function buscarPorAutor(autor) {
  return libros.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}

// 5. Prestar libro
function prestarLibro(titulo) {
  const libro = libros.find(l => l.titulo === titulo);
  if (libro && !libro.prestado) {
    libro.prestado = true;
    return `${titulo} prestado con éxito.`;
  }
  return `No disponible.`;
}

// 6. Devolver libro
function devolverLibro(titulo) {
  const libro = libros.find(l => l.titulo === titulo);
  if (libro && libro.prestado) {
    libro.prestado = false;
    return `${titulo} devuelto con éxito.`;
  }
  return `Ese libro no estaba prestado.`;
}

// Exportar funciones
module.exports = {
  agregarLibro,
  listarLibros,
  buscarPorTitulo,
  buscarPorAutor,
  prestarLibro,
  devolverLibro
};

