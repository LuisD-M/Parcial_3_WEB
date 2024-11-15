BEGIN transaction;

INSERT INTO 
    especialidad (id, name) 
VALUES 
    ('101', 'Medicina General'),
    ('102', 'Cardiología'),
    ('103', 'Urología'),
    ('104', 'Fisiología'),
    ('105', 'Pediatría');

INSERT INTO 
    medico (id, name, age, email, password, specialty_id) 
VALUES 
    ('Juan Pérez', 45, 'jperez@gmail.com', 'juan123', '101'),
    ('Ana López', 50, 'alopez@gmail.com', 'ana123', '102'),
    ('Brandon Gómez', 39, 'Bgomez@gmail.com', 'brandon123', '103'),
    ('lucia Sánchez', 34, 'Lusanchez@gmail.com', 'lucia123', '104'),
    ('Luis Munoz', 48, 'lmunoz@gmail.com', 'luis123', '105');

INSERT INTO 
    paciente (id, name, age, email, password) 
VALUES 
    ('','Elias', 25, 'paciente1@gmail.com', 'El123'),
    ('','Marta', 30, 'paciente2@gmail.com', 'Ma123'),
    ('','Raul', 40, 'paciente3@gmail.com', 'Ra123'),
    ('','Pepito', 50, 'paciente4@gmail.com', 'Pe123'),
    ('','Juan', 60, 'paciente5@gmail.com', 'Ju123'),
    ('','Ricardo', 35, 'paciente6@gmail.com', 'Ri123'),
    ('','Sebastian', 28, 'paciente7@gmail.com', 'Se123'),
    ('','Emanuel', 33, 'paciente8@gmail.com', 'Em123'),
    ('','Carla', 44, 'paciente9@gmail.com', 'Ca123'),
    ('','Sara', 38, 'paciente10@gmail.com', 'Sa123');

COMMIT transaction;