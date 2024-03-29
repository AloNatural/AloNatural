// Crear una nueva base de datos SQLite
var db = new SQL.Database();

// Crear una tabla de productos con imagen
db.run("CREATE TABLE IF NOT EXISTS productos (id INT, nombre TEXT, precio REAL, imagen TEXT)");

// Insertar datos de ejemplo
db.run("INSERT INTO productos (id, nombre, precio, imagen) VALUES (1, 'Producto 1', 10.99, 'ruta/a/la/imagen1.jpg')");
db.run("INSERT INTO productos (id, nombre, precio, imagen) VALUES (2, 'Producto 2', 15.99, 'ruta/a/la/imagen2.jpg')");
db.run("INSERT INTO productos (id, nombre, precio, imagen) VALUES (3, 'Producto 3', 20.99, 'ruta/a/la/imagen3.jpg')");

// Consultar datos de la tabla
var stmt = db.prepare("SELECT * FROM productos");
while (stmt.step()) {
  var row = stmt.getAsObject();
  console.log(row.id, row.nombre, row.precio);
}