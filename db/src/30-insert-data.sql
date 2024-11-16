BEGIN transaction;

INSERT INTO 
    especialidad (id, name) 
VALUES 
    ('101', 'MedicinaGeneral'),
    ('102', 'Cardiología'),
    ('103', 'Urología'),
    ('104', 'Fisiología'),
    ('105', 'Pediatría');

INSERT INTO 
    medico (id, name, age, email, password, especialidad_id) 
VALUES 
    (102948503,'Juan Pérez', 45, 'jperez@gmail.com', 'juan123', '101'),
    (120348493,'Ana López', 50, 'alopez@gmail.com', 'ana123', '102'),
    (123401948,'Brandon Gómez', 39, 'Bgomez@gmail.com', 'brandon123', '103'),
    (120048294,'lucia Sánchez', 34, 'Lusanchez@gmail.com', 'lucia123', '104'),
    (102481985,'Luis Munoz', 48, 'lmunoz@gmail.com', 'luis123', '105');

INSERT INTO 
    paciente (id, name, age, email, password) 
VALUES 
    ('109039405','Elias', 25, 'paciente1@gmail.com', 'El123'),
    ('103085028','Marta', 30, 'paciente2@gmail.com', 'Ma123'),
    ('108452837','Raul', 40, 'paciente3@gmail.com', 'Ra123'),
    ('130576383','Pepito', 50, 'paciente4@gmail.com', 'Pe123'),
    ('135680942','Juan', 60, 'paciente5@gmail.com', 'Ju123'),
    ('103846714','Ricardo', 35, 'paciente6@gmail.com', 'Ri123'),
    ('214974813','Sebastian', 28, 'paciente7@gmail.com', 'Se123'),
    ('124092839','Emanuel', 33, 'paciente8@gmail.com', 'Em123'),
    ('122408374','Carla', 44, 'paciente9@gmail.com', 'Ca123'),
    ('124947384','Sara', 38, 'paciente10@gmail.com', 'Sa123');

COMMIT transaction;