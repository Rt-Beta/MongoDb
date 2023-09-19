// Punto 1: Colecciones referenciadas

// Base de datos
use yeferson_estrada_ref

// Colecciones referenciadas
db.createCollection("vehiculos")
db.createCollection("clientes")
db.createCollection("alquileres")

// Insertar documentos en la colección vehiculos
db.vehiculos.insertMany([
    { placa: "ABC123", color: "Rojo", modelo: "Sedán", sillas: 4, marca: "Toyota" },
    { placa: "XYZ789", color: "Azul", modelo: "SUV", sillas: 7, marca: "Honda" },
]);

// Insertar documentos en la colección clientes
db.clientes.insertMany([
    { documento: "123456789", nombre: "Juan", apellidos: "Pérez", celular: "1234567890", email: "juan@example.com", direccion: "Calle 123" },
    { documento: "987654321", nombre: "María", apellidos: "López", celular: "9876543210", email: "maria@example.com", direccion: "Avenida 456" },
]);

// Insertar documentos en la colección alquileres
db.alquileres.insertMany([
    { cliente: "123456789", vehiculo: "ABC123", fechainicio: ISODate("2023-09-01"), fechafin: ISODate("2023-09-10"), valor: 500 },
    { cliente: "987654321", vehiculo: "XYZ789", fechainicio: ISODate("2023-08-15"), fechafin: ISODate("2023-08-20"), valor: 700 },
]);

// Eliminar un registro de la colección vehiculos
db.vehiculos.deleteOne({ placa: "ABC123" });

// Consultar todos los registros de la colección clientes
db.clientes.find();

// Consultar un registro de la colección alquileres por cliente
db.alquileres.findOne({ cliente: "123456789" });

// Actualizar registros en la colección vehiculos
db.vehiculos.updateMany({ marca: "Toyota" }, { $set: { color: "Negro" } });

// Actualizar registros en la colección alquileres
db.alquileres.updateMany({ valor: { $lt: 600 } }, { $set: { valor: 600 } });


// Punto 2: Colecciones embebidas

// Base de datos
use yeferson_estrada_emb

// Colecciones embebidas
db.createCollection("vehiculos_embebidos")
db.createCollection("clientes_embebidos")

// Insertar documentos en la colección clientes_embebidos con vehículos embebidos
db.clientes_embebidos.insertMany([
    {
        documento: "111111111",
        nombre: "Pedro",
        apellidos: "Gómez",
        celular: "1111111111",
        email: "pedro@example.com",
        direccion: "Calle 789",
        vehiculos: [
            { placa: "DEF456", color: "Verde", modelo: "Hatchback", sillas: 5, marca: "Ford" },
        ]
    },
]);

// Eliminar un registro de la colección clientes_embebidos
db.clientes_embebidos.deleteOne({ documento: "111111111" });

// Consultar todos los registros de la colección vehiculos_embebidos
db.vehiculos_embebidos.find();

// Consultar un registro de la colección clientes_embebidos por dirección
db.clientes_embebidos.findOne({ direccion: "Calle 789" });

// Actualizar un registro en la colección vehiculos_embebidos
db.vehiculos_embebidos.updateOne({ placa: "DEF456" }, { $set: { color: "Azul" } });

// Actualizar un registro en la colección clientes_embebidos
db.clientes_embebidos.updateOne({ documento: "222222222" }, { $set: { direccion: "Avenida 123" } });
