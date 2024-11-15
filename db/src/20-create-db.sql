\c app;

BEGIN transaction;

CREATE TABLE especialidad (
    id SMALLSERIAL PRIMARY KEY,
    name TEXT NOT NULL
); 
 
CREATE TABLE medico (
    id SMALLSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age SMALLINT NOT NULL,
    email VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(10) NOT NULL,
    especialidad_id INTEGER NOT NULL REFERENCES especialidad(id)
);

CREATE TABLE paciente (
    id SMALLSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age SMALLINT NOT NULL,
    email VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(10) NOT NULL
);

CREATE TABLE citamedica (
    id SMALLSERIAL PRIMARY KEY,
    date DATE NOT NULL,
    hour TIME NOT NULL,
    paciente_id INTEGER NOT NULL REFERENCES paciente(id),
    medico_id INTEGER NOT NULL REFERENCES medico(id)
);

COMMIT transaction;