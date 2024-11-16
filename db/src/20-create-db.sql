\c app;

BEGIN transaction;

CREATE TABLE especialidad (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
); 
 
CREATE TABLE medico (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    especialidad_id INTEGER NOT NULL REFERENCES especialidad(id)
);

CREATE TABLE paciente (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE citamedica (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    hour TIME NOT NULL,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id),
    medico_id INTEGER NOT NULL REFERENCES medico(id)
);

COMMIT transaction;