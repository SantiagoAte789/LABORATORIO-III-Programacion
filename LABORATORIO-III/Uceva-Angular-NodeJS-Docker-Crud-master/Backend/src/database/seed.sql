INSERT INTO students (
    id,
    name,
    email,
    phone,
    address,
    birthdate,
    semester,
    status
) VALUES
(1001, 'Juan Perez', 'juan.perez@gmail.com', '3001234567', 'Calle 10 # 15-20', '2002-05-15', 3, TRUE),

(1002, 'Maria Gomez', 'maria.gomez@gmail.com', '3012345678', 'Carrera 20 # 10-30', '2001-08-22', 5, TRUE),

(1003, 'Carlos Rodriguez', 'carlos.rodriguez@gmail.com', '3023456789', 'Calle 25 # 12-40', '2003-01-10', 2, TRUE),

(1004, 'Laura Martinez', 'laura.martinez@gmail.com', '3034567890', 'Carrera 15 # 8-25', '2000-11-30', 7, TRUE),

(1005, 'Andres Lopez', 'andres.lopez@gmail.com', '3045678901', 'Calle 30 # 20-15', '2002-03-18', 4, TRUE),

(1006, 'Daniela Ramirez', 'daniela.ramirez@gmail.com', '3056789012', 'Carrera 12 # 5-18', '2001-06-25', 6, TRUE),

(1007, 'Santiago Torres', 'santiago.torres@gmail.com', '3107890123', 'Calle 18 # 22-10', '2003-09-12', 1, TRUE),

(1008, 'Valentina Hernandez', 'valentina.hernandez@gmail.com', '3118901234', 'Carrera 8 # 14-32', '2002-12-05', 8, TRUE),

(1009, 'Sebastian Castro', 'sebastian.castro@gmail.com', '3129012345', 'Calle 40 # 18-22', '2001-04-14', 9, TRUE),

(1010, 'Camila Moreno', 'camila.moreno@gmail.com', '3130123456', 'Carrera 25 # 30-12', '2000-07-20', 10, TRUE);

INSERT INTO courses (
    name,
    description,
    credits,
    semester,
    status
) VALUES
('Programación I', 'Fundamentos de programación, algoritmos y lógica computacional.', 3, 1, TRUE),

('Matemáticas I', 'Fundamentos de álgebra, ecuaciones, funciones y operaciones matemáticas.', 4, 1, TRUE),

('Bases de Datos', 'Modelado de datos, lenguaje SQL y sistemas gestores de bases de datos.', 3, 3, TRUE),

('Programación Web I', 'Desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript y TypeScript.', 3, 4, TRUE),

('Arquitectura de Software', 'Principios, patrones y estilos arquitectónicos para el desarrollo de software.', 3, 6, TRUE),

('Ingeniería de Software', 'Procesos, metodologías ágiles y buenas prácticas para el desarrollo de software.', 3, 5, TRUE),

('Redes de Computadores', 'Fundamentos de redes, protocolos de comunicación y modelos de referencia.', 3, 4, TRUE),

('Sistemas Operativos', 'Administración de procesos, gestión de memoria y sistemas de archivos.', 3, 3, TRUE),

('Desarrollo de Aplicaciones Móviles', 'Fundamentos y desarrollo de aplicaciones para dispositivos móviles.', 3, 7, TRUE),

('Inteligencia Artificial', 'Fundamentos de inteligencia artificial, aprendizaje automático y algoritmos inteligentes.', 4, 8, TRUE);

INSERT INTO teachers (
    name,
    email,
    phone,
    department,
    experience_years,
    status
) VALUES
('Jesus David Mejia', 'jesus.mejia@uceva.edu.co', '3201000001', 'Ingeniería de Sistemas', 10, TRUE),

('Ana Maria Ospina', 'ana.ospina@uceva.edu.co', '3201000002', 'Matemáticas', 8, TRUE),

('Luis Fernando Vargas', 'luis.vargas@uceva.edu.co', '3201000003', 'Ingeniería de Sistemas', 15, TRUE),

('Paola Andrea Rios', 'paola.rios@uceva.edu.co', '3201000004', 'Bases de Datos', 6, TRUE),

('Ricardo Salazar', 'ricardo.salazar@uceva.edu.co', '3201000005', 'Redes y Telecomunicaciones', 12, TRUE),

('Claudia Patricia Mora', 'claudia.mora@uceva.edu.co', '3201000006', 'Ingeniería de Software', 9, TRUE),

('Hernan Dario Cardona', 'hernan.cardona@uceva.edu.co', '3201000007', 'Inteligencia Artificial', 7, TRUE),

('Monica Lucia Duque', 'monica.duque@uceva.edu.co', '3201000008', 'Física', 11, TRUE),

('Julian Esteban Becerra', 'julian.becerra@uceva.edu.co', '3201000009', 'Sistemas Operativos', 5, TRUE),

('Diana Carolina Soto', 'diana.soto@uceva.edu.co', '3201000010', 'Desarrollo Móvil', 4, TRUE);

INSERT INTO classrooms (
    name,
    building,
    capacity,
    type,
    floor,
    status
) VALUES
('Aula 101', 'Bloque A', 40, 'Teórica', 1, TRUE),

('Aula 102', 'Bloque A', 35, 'Teórica', 1, TRUE),

('Aula 201', 'Bloque A', 40, 'Teórica', 2, TRUE),

('Laboratorio de Sistemas 1', 'Bloque B', 30, 'Laboratorio', 1, TRUE),

('Laboratorio de Sistemas 2', 'Bloque B', 30, 'Laboratorio', 2, TRUE),

('Laboratorio de Redes', 'Bloque B', 25, 'Laboratorio', 2, TRUE),

('Auditorio Principal', 'Bloque C', 200, 'Auditorio', 1, TRUE),

('Sala de Conferencias', 'Bloque C', 60, 'Sala', 2, TRUE),

('Aula 301', 'Bloque D', 45, 'Teórica', 3, TRUE),

('Sala de Cómputo', 'Bloque D', 50, 'Sala de cómputo', 1, TRUE);