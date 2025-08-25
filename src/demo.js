const biblioteca = require("./library");

// Agregar libros
biblioteca.agregarLibro("Cien Años de Soledad", "Gabriel García Márquez", 1967);
biblioteca.agregarLibro("El Principito", "Antoine de Saint-Exupéry", 1943);

// Listar
console.log("📚 Libros disponibles:", biblioteca.listarLibros());

// Buscar
console.log("🔎 Buscar 'principito':", biblioteca.buscarPorTitulo("principito"));

// Prestar
console.log(biblioteca.prestarLibro("El Principito"));

// Devolver
console.log(biblioteca.devolverLibro("El Principito"));

