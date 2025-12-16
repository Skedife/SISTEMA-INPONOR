 const authorizedUsers = [
            { 
                email: 'annielmve@gmail.com', 
                password: 'inponor2025', 
                name: 'Anniel MVE', 
                groups: ['OMT1', 'OMT2']
            },
            { 
                email: '17liomarespinal@gmail.com', 
                password: 'inponor2025', 
                name: 'Liomar Espinal', 
                groups: ['OMT2']
            },
            { 
                email: 'zahirbaez02@gmail.com', 
                password: 'inponor2025', 
                name: 'Zahir Baez', 
                groups: ['OMT1']
            },
            { 
                email: 'penatorreslenylaura9@gmail.com', 
                password: 'inponor2025', 
                name: 'Leny Laura Peña', 
                groups: ['OMT2']
            },
            { 
                email: 'nicoletc015@gmail.com', 
                password: 'inponor2025', 
                name: 'Nicole TC', 
                groups: ['OMT1']
            },
            { 
                email: 'claudiadalilvargasperz@gmail.com', 
                password: 'inponor2025', 
                name: 'Claudia Vargas', 
                groups: ['OMT1']
            },
            { 
                email: 'jeidenalvarez01@gmail.com', 
                password: 'inponor2025', 
                name: 'Jeiden Alvarez', 
                groups: ['OMT2']
            }
        ];

        const rubricaPLE = [
            { id: 0, name: 'Investigación académica', max: 15, category: 'Investigación y análisis crítico', categoryId: 0 },
            { id: 1, name: 'Pensamiento crítico', max: 15, category: 'Investigación y análisis crítico', categoryId: 0 },
            { id: 2, name: 'Oratoria', max: 10, category: 'Comunicación y lenguaje', categoryId: 1 },
            { id: 3, name: 'Argumentación', max: 10, category: 'Comunicación y lenguaje', categoryId: 1 },
            { id: 4, name: 'Redacción', max: 10, category: 'Comunicación y lenguaje', categoryId: 1 },
            { id: 5, name: 'Negociación', max: 10, category: 'Negociación y resolución de conflictos', categoryId: 2 },
            { id: 6, name: 'Resolución de conflictos', max: 10, category: 'Negociación y resolución de conflictos', categoryId: 2 },
            { id: 7, name: 'Liderazgo', max: 10, category: 'Liderazgo y colaboración', categoryId: 3 },
            { id: 8, name: 'Colaboración', max: 10, category: 'Liderazgo y colaboración', categoryId: 3 }
        ];

        const ESTADO_AUSENTE = 0;
        const ESTADO_PRESENTE = 1;
        const ESTADO_VOTANDO = 2;

        // Estado por país
        let estadoPorPais = JSON.parse(localStorage.getItem('inponor_estado_paises')) || {};

        let students = JSON.parse(localStorage.getItem('inponor_students_ple')) || {
            OMT1: [
                { code: 'OMT1-001', name: 'Shanell Colon Díaz', pais: 'Chile\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-002', name: 'Josmeyris', pais: 'Chile\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-003', name: 'Yordi Belliard', pais: 'Estados Unidos\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-004', name: 'Yehyka Doralus', pais: 'Estados Unidos\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-005', name: 'Isamar Ozorio Gómez', pais: 'Canadá\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-006', name: 'Arlin Rafelina Balbuena Sosa', pais: 'Canadá\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-007', name: 'Roselin Bejaran Torres', pais: 'Francia\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-008', name: 'Marbelis Cabrera', pais: 'Francia\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-009', name: 'Arienis Beato', pais: 'Australia\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-010', name: 'Destiny Polanco J.', pais: 'Australia\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-011', name: 'Joseph Pérez', pais: 'Honduras\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-012', name: 'Marian Abigail', pais: 'Honduras\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-013', name: 'Jeraldy García', pais: 'Nigeria\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-014', name: 'Choe Peralta', pais: 'Nigeria\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-015', name: 'Emely Esmeralda', pais: 'Costa Rica\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-016', name: 'Raquel Nuesi', pais: 'Costa Rica\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-017', name: 'Andru José Becerra Ruíz', pais: 'Bélgica\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-018', name: 'Manuela Pérez', pais: 'Bélgica\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-019', name: 'Rosaura Taveras', pais: 'Marruecos\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-020', name: 'Nadia Valdez', pais: 'Marruecos\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-021', name: 'Silenny Peña', pais: 'República Dominicana\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-022', name: 'Jean Carlos Castillo', pais: 'República Dominicana\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-023', name: 'Luis Rafael Fermín Beltre', pais: 'Panamá\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT1-024', name: 'Manuel Alejandro Tejada', pais: 'Panamá\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE }
            ],
            OMT2: [
                { code: 'OMT2-001', name: 'Hilari Lora', pais: 'Nicaragua\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-002', name: 'Yani Ortiz', pais: 'Nicaragua\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-003', name: 'Witnise André', pais: 'Portugal\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-004', name: 'Yarielis Corona', pais: 'Portugal\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-005', name: 'Orlyn Peñalo', pais: 'Países Bajos\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-006', name: 'Joseyris Ureta V.', pais: 'Países Bajos\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-007', name: 'Anjeli Cruz', pais: 'Kenia\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-008', name: 'Yoscilany Gerez Báez', pais: 'Kenia\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-009', name: 'Yaqueisy Corona', pais: 'Turquía\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-010', name: 'Alexander E. Rodriguez Colón', pais: 'Turquía\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-011', name: 'Jordin Jimenez', pais: 'México\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-012', name: 'Roselis', pais: 'México\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-013', name: 'Dierlys Núñez', pais: 'Noruega\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-014', name: 'Isaura Fermín', pais: 'Noruega\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-015', name: 'Aimee Rafelina Borbón', pais: 'Suecia\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-016', name: 'Keily Betances', pais: 'Suecia\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-017', name: 'Anderson Tineo', pais: 'Suiza\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-018', name: 'Jareline Álvarez', pais: 'Suiza\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-019', name: 'Hanoi Gómez', pais: 'Dinamarca\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-020', name: 'Dariel A- Alvarado Duran', pais: 'Dinamarca\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-021', name: 'Sahira Merliah Peña', pais: 'Uruguay\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-022', name: 'Said Rodriguez', pais: 'Argentina\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-023', name: 'Arianny Peña Vargas', pais: 'Argentina\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-024', name: 'Zoely Nicole Cabrera Marrero', pais: 'Brasil\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-025', name: 'Eriberto Peralta', pais: 'Brasil\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-026', name: 'Joel de Jesús Báez', pais: 'España\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-027', name: 'Josué Gómez Reyes', pais: 'España\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-028', name: 'Omairy Fernández', pais: 'Arabia Saudita\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-029', name: 'Ana Mercedes Salvatierra', pais: 'Arabia Saudita\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-030', name: 'Tamar Santana', pais: 'China\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE },
                { code: 'OMT2-031', name: 'Laura Genere', pais: 'China\nDelegado', grades: {}, asistencia: ESTADO_PRESENTE }
            ]
        };

        let currentUser = null;
        let currentGroup = 'OMT1';
        let editingStudentIndex = null;
        let paseListaRealizado = false;

        function switchTab(tab) {
            const adminLogin = document.getElementById('adminLogin');
            const qrLogin = document.getElementById('qrLogin');
            const buttons = document.querySelectorAll('.tab-btn');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            
            if (tab === 'admin') {
                adminLogin.classList.remove('hidden');
                qrLogin.classList.add('hidden');
                buttons[0].classList.add('active');
            } else {
                adminLogin.classList.add('hidden');
                qrLogin.classList.remove('hidden');
                buttons[1].classList.add('active');
            }
        }

        function loginAdmin() {
            const email = document.getElementById('emailInput').value.toLowerCase().trim();
            const password = document.getElementById('passwordInput').value;
            
            if (!email || !password) {
                alert('Por favor complete todos los campos');
                return;
            }
            
            const user = authorizedUsers.find(u => u.email.toLowerCase() === email && u.password === password);
            
            if (user) {
                currentUser = user;
                currentGroup = user.groups[0] || 'OMT1';
                
                // OBLIGAR A HACER PASE DE LISTA POR PAÍSES
                paseListaRealizado = false;
                showPaseListaObligatorio();
            } else {
                alert('❌ Correo o contraseña incorrectos');
            }
        }

        function loginStudent() {
            const code = document.getElementById('studentCode').value.trim().toUpperCase();
            let student = null;
            let foundGroup = null;
            
            for (let group in students) {
                student = students[group].find(s => s.code === code);
                if (student) {
                    foundGroup = group;
                    break;
                }
            }
            
            if (student) {
                showStudentView(student, foundGroup);
            } else {
                alert('❌ Código de estudiante no encontrado');
            }
        }

        // FUNCIÓN PRINCIPAL: MOSTRAR PASE DE LISTA POR PAÍSES (OBLIGATORIO)
        function showPaseListaObligatorio() {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('paseListaScreen').style.display = 'block';
            document.getElementById('paseEstudiantesScreen').style.display = 'none';
            document.getElementById('adminView').style.display = 'none';
            document.getElementById('studentView').style.display = 'none';
            
            document.getElementById('paseListaGroupCompact').textContent = currentGroup;
            document.getElementById('paseListaDateCompact').textContent = new Date().toLocaleDateString('es-ES');
            
            renderPaseListaCompact();
            
            // Enfocar el buscador
            setTimeout(() => {
                document.getElementById('paseListaSearchCompact').focus();
            }, 100);
        }

        function renderPaseListaCompact() {
            const container = document.getElementById('paseListaBodyCompact');
            const searchTerm = document.getElementById('paseListaSearchCompact').value.toLowerCase();
            
            container.innerHTML = '';
            
            if (!students[currentGroup] || students[currentGroup].length === 0) {
                container.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No hay estudiantes en este grupo.</p>';
                updateEstadisticasPaises(0, 0, 0, 0);
                return;
            }
            
            // Agrupar estudiantes por país
            const paises = {};
            students[currentGroup].forEach((student, index) => {
                const paisNombre = student.pais.split('\n')[0];
                if (!paises[paisNombre]) {
                    paises[paisNombre] = [];
                }
                paises[paisNombre].push({ ...student, originalIndex: index });
            });
            
            let totalPaises = 0;
            let paisesPresentes = 0;
            let paisesVotando = 0;
            let paisesAusentes = 0;
            
            // Ordenar países alfabéticamente
            const paisesOrdenados = Object.keys(paises).sort();
            
            paisesOrdenados.forEach(paisNombre => {
                const delegados = paises[paisNombre];
                
                // Verificar si el país coincide con la búsqueda
                const paisMatchesSearch = searchTerm === '' || 
                    paisNombre.toLowerCase().includes(searchTerm);
                
                if (!paisMatchesSearch) return;
                
                totalPaises++;
                
                // Obtener estado actual del país
                const paisKey = `${currentGroup}_${paisNombre}`;
                let estadoPais = estadoPorPais[paisKey];
                
                // Si no existe estado por país, usar el estado de los delegados
                if (estadoPais === undefined) {
                    // Verificar el estado de los delegados para determinar el estado del país
                    const todosPresentes = delegados.every(d => d.asistencia === ESTADO_PRESENTE);
                    const todosAusentes = delegados.every(d => d.asistencia === ESTADO_AUSENTE);
                    const todosVotando = delegados.every(d => d.asistencia === ESTADO_VOTANDO);
                    
                    if (todosPresentes) estadoPais = ESTADO_PRESENTE;
                    else if (todosAusentes) estadoPais = ESTADO_AUSENTE;
                    else if (todosVotando) estadoPais = ESTADO_VOTANDO;
                    else estadoPais = ESTADO_PRESENTE; // Por defecto
                    
                    // Guardar el estado del país
                    estadoPorPais[paisKey] = estadoPais;
                }
                
                // Actualizar contadores
                switch(estadoPais) {
                    case ESTADO_PRESENTE: paisesPresentes++; break;
                    case ESTADO_VOTANDO: paisesVotando++; break;
                    case ESTADO_AUSENTE: paisesAusentes++; break;
                }
                
                // Crear elemento del país
                const paisElement = document.createElement('div');
                paisElement.className = `pais-item-simple`;
                paisElement.innerHTML = `
                    <div class="pais-header-simple ${estadoPais === ESTADO_PRESENTE ? 'presente' : ''} ${estadoPais === ESTADO_VOTANDO ? 'votando' : ''} ${estadoPais === ESTADO_AUSENTE ? 'ausente' : ''}">
                        <div class="pais-info-simple">
                            <div class="pais-nombre-simple">${paisNombre}</div>
                            <div class="pais-delegados-simple">${delegados.length} delegado${delegados.length !== 1 ? 's' : ''}</div>
                        </div>
                        <div class="pais-estado-simple">
                            <button class="estado-btn-pais presente ${estadoPais === ESTADO_PRESENTE ? 'active' : ''}" 
                                    onclick="cambiarEstadoPais('${paisNombre}', ${ESTADO_PRESENTE})">
                                ✅ Presente
                            </button>
                            <button class="estado-btn-pais votando ${estadoPais === ESTADO_VOTANDO ? 'active' : ''}" 
                                    onclick="cambiarEstadoPais('${paisNombre}', ${ESTADO_VOTANDO})">
                                🗳️ Presente y Votando
                            </button>
                            <button class="estado-btn-pais ausente ${estadoPais === ESTADO_AUSENTE ? 'active' : ''}" 
                                    onclick="cambiarEstadoPais('${paisNombre}', ${ESTADO_AUSENTE})">
                                ❌ Ausente
                            </button>
                        </div>
                    </div>
                `;
                
                container.appendChild(paisElement);
            });
            
            if (totalPaises === 0) {
                container.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No se encontraron países que coincidan con la búsqueda.</p>';
            }
            
            updateEstadisticasPaises(totalPaises, paisesPresentes, paisesVotando, paisesAusentes);
        }

        function cambiarEstadoPais(paisNombre, nuevoEstado) {
            const paisKey = `${currentGroup}_${paisNombre}`;
            estadoPorPais[paisKey] = nuevoEstado;
            
            // Actualizar todos los delegados de ese país
            students[currentGroup].forEach((student, index) => {
                const estudiantePais = student.pais.split('\n')[0];
                if (estudiantePais === paisNombre) {
                    students[currentGroup][index].asistencia = nuevoEstado;
                }
            });
            
            // Guardar cambios
            saveEstadoPaises();
            
            // Actualizar la vista
            renderPaseListaCompact();
        }

        function saveEstadoPaises() {
            localStorage.setItem('inponor_estado_paises', JSON.stringify(estadoPorPais));
        }

        function updateEstadisticasPaises(total, presentes, votando, ausentes) {
            document.getElementById('totalPaisesCompact').textContent = total;
            document.getElementById('paisesPresentesCompact').textContent = presentes;
            document.getElementById('paisesVotandoCompact').textContent = votando;
            document.getElementById('paisesAusentesCompact').textContent = ausentes;
        }

        // FUNCIONES PARA PASE DE LISTA POR ESTUDIANTES
        function irAPaseEstudiantes() {
            document.getElementById('paseListaScreen').style.display = 'none';
            document.getElementById('paseEstudiantesScreen').style.display = 'block';
            
            document.getElementById('paseEstudiantesGroup').textContent = currentGroup;
            document.getElementById('paseEstudiantesDate').textContent = new Date().toLocaleDateString('es-ES');
            
            renderPaseEstudiantes();
            
            // Enfocar el buscador
            setTimeout(() => {
                document.getElementById('paseEstudiantesSearch').focus();
            }, 100);
        }

        function volverAPaises() {
            document.getElementById('paseEstudiantesScreen').style.display = 'none';
            document.getElementById('paseListaScreen').style.display = 'block';
            
            // Actualizar la vista de países
            renderPaseListaCompact();
            
            // Enfocar el buscador
            setTimeout(() => {
                document.getElementById('paseListaSearchCompact').focus();
            }, 100);
        }

        function renderPaseEstudiantes() {
            const container = document.getElementById('paseEstudiantesBody');
            const searchTerm = document.getElementById('paseEstudiantesSearch').value.toLowerCase();
            
            container.innerHTML = '';
            
            if (!students[currentGroup] || students[currentGroup].length === 0) {
                container.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No hay estudiantes en este grupo.</p>';
                updateEstadisticasEstudiantes(0, 0, 0, 0);
                return;
            }
            
            let totalEstudiantes = 0;
            let estudiantesPresentes = 0;
            let estudiantesVotando = 0;
            let estudiantesAusentes = 0;
            
            // Ordenar estudiantes por nombre
            const estudiantesOrdenados = [...students[currentGroup]].sort((a, b) => a.name.localeCompare(b.name));
            
            estudiantesOrdenados.forEach((student, index) => {
                // Verificar si coincide con la búsqueda
                const matchesSearch = searchTerm === '' || 
                    student.name.toLowerCase().includes(searchTerm) ||
                    student.code.toLowerCase().includes(searchTerm) ||
                    student.pais.toLowerCase().includes(searchTerm);
                
                if (!matchesSearch) return;
                
                totalEstudiantes++;
                const estado = student.asistencia !== undefined ? student.asistencia : ESTADO_PRESENTE;
                
                switch(estado) {
                    case ESTADO_PRESENTE: estudiantesPresentes++; break;
                    case ESTADO_VOTANDO: estudiantesVotando++; break;
                    case ESTADO_AUSENTE: estudiantesAusentes++; break;
                }
                
                const esAusente = estado === ESTADO_AUSENTE;
                const esVotando = estado === ESTADO_VOTANDO;
                
                const estudianteElement = document.createElement('div');
                estudianteElement.className = `estudiante-item-detallado ${esAusente ? 'ausente' : ''} ${esVotando ? 'votando' : ''}`;
                estudianteElement.innerHTML = `
                    <div class="estudiante-info-detallado">
                        <div class="estudiante-nombre-detallado">${student.name}</div>
                        <div class="estudiante-detalle-detallado">
                            <span class="estudiante-pais-detallado">${student.pais.split('\n')[0]}</span>
                            <span class="estudiante-code-detallado">${student.code}</span>
                        </div>
                    </div>
                    <div class="estudiante-estado-detallado">
                        <button class="estado-btn-detallado presente ${estado === ESTADO_PRESENTE ? 'active' : ''}" 
                                onclick="cambiarEstadoEstudiante(${index}, ${ESTADO_PRESENTE})">
                            ✅ Presente
                        </button>
                        <button class="estado-btn-detallado votando ${estado === ESTADO_VOTANDO ? 'active' : ''}" 
                                onclick="cambiarEstadoEstudiante(${index}, ${ESTADO_VOTANDO})">
                            🗳️ Presente y Votando
                        </button>
                        <button class="estado-btn-detallado ausente ${estado === ESTADO_AUSENTE ? 'active' : ''}" 
                                onclick="cambiarEstadoEstudiante(${index}, ${ESTADO_AUSENTE})">
                            ❌ Ausente
                        </button>
                    </div>
                `;
                
                container.appendChild(estudianteElement);
            });
            
            if (totalEstudiantes === 0) {
                container.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No se encontraron estudiantes que coincidan con la búsqueda.</p>';
            }
            
            updateEstadisticasEstudiantes(totalEstudiantes, estudiantesPresentes, estudiantesVotando, estudiantesAusentes);
        }

        function cambiarEstadoEstudiante(index, nuevoEstado) {
            if (!students[currentGroup] || !students[currentGroup][index]) {
                alert('Error: Estudiante no encontrado');
                return;
            }
            
            students[currentGroup][index].asistencia = nuevoEstado;
            renderPaseEstudiantes();
        }

        function updateEstadisticasEstudiantes(total, presentes, votando, ausentes) {
            document.getElementById('totalEstudiantesDetallado').textContent = total;
            document.getElementById('estudiantesPresentesDetallado').textContent = presentes;
            document.getElementById('estudiantesVotandoDetallado').textContent = votando;
            document.getElementById('estudiantesAusentesDetallado').textContent = ausentes;
        }

        function guardarPaseListaCompact() {
            saveData();
            saveEstadoPaises();
            paseListaRealizado = true;
            alert('✅ Pase de lista por países guardado correctamente');
            
            // Volver a enfocar el buscador
            document.getElementById('paseListaSearchCompact').focus();
        }

        function guardarPaseEstudiantes() {
            saveData();
            saveEstadoPaises();
            paseListaRealizado = true;
            alert('✅ Pase de lista por estudiantes guardado correctamente');
            
            // Volver a enfocar el buscador
            document.getElementById('paseEstudiantesSearch').focus();
        }

        function continuarAAdmin() {
            if (!paseListaRealizado) {
                const confirmar = confirm('⚠️ Aún no has guardado el pase de lista.\n\n¿Quieres guardar antes de continuar?');
                if (confirmar) {
                    saveData();
                    saveEstadoPaises();
                    paseListaRealizado = true;
                }
            }
            
            showAdminView();
        }

        function cancelarPaseListaCompact() {
            const confirmar = confirm('⚠️ ¿Estás seguro de que quieres cancelar?\n\nSe cerrará la sesión y perderás los cambios no guardados.');
            if (confirmar) {
                logout();
            }
        }

        // FUNCIONES PARA LA VISTA ADMIN
        function showAdminView() {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('paseListaScreen').style.display = 'none';
            document.getElementById('paseEstudiantesScreen').style.display = 'none';
            document.getElementById('adminView').style.display = 'block';
            document.getElementById('studentView').style.display = 'none';
            
            updateAdminHeader();
            renderGradesTable();
        }

        // Función para mostrar pase por países desde admin
        function showPasePaisesDesdeAdmin() {
            showPaseListaObligatorio();
        }

        // Función para mostrar pase por estudiantes desde admin
        function showPaseEstudiantesDesdeAdmin() {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('paseListaScreen').style.display = 'none';
            document.getElementById('paseEstudiantesScreen').style.display = 'block';
            document.getElementById('adminView').style.display = 'none';
            document.getElementById('studentView').style.display = 'none';
            
            document.getElementById('paseEstudiantesGroup').textContent = currentGroup;
            document.getElementById('paseEstudiantesDate').textContent = new Date().toLocaleDateString('es-ES');
            
            renderPaseEstudiantes();
            
            // Enfocar el buscador
            setTimeout(() => {
                document.getElementById('paseEstudiantesSearch').focus();
            }, 100);
        }

        function updateAdminHeader() {
            const adminHeader = document.getElementById('adminHeader');
            
            let groupOptions = '';
            if (currentUser.email === 'annielmve@gmail.com') {
                groupOptions = `
                    <option value="OMT1" ${currentGroup === 'OMT1' ? 'selected' : ''}>OMT1</option>
                    <option value="OMT2" ${currentGroup === 'OMT2' ? 'selected' : ''}>OMT2</option>
                `;
            } else {
                groupOptions = currentUser.groups.map(group => 
                    `<option value="${group}" ${currentGroup === group ? 'selected' : ''}>${group}</option>`
                ).join('');
            }
            
            adminHeader.innerHTML = `
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div class="user-info">
                        <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                        <div>
                            <h3 style="font-size: 16px;">${currentUser.name}</h3>
                            <p style="font-size: 12px; color: #666;">${currentUser.email}</p>
                        </div>
                    </div>
                    <div class="group-selector">
                        <label>Grupo:</label>
                        <select id="groupSelect" onchange="changeGroup(this.value)">
                            ${groupOptions}
                        </select>
                    </div>
                </div>
                <button class="btn-logout" onclick="logout()">🚪 Cerrar Sesión</button>
            `;
        }

        function changeGroup(group) {
            if (!currentUser.groups.includes(group) && currentUser.email !== 'annielmve@gmail.com') {
                alert('⚠️ No tienes acceso a este grupo');
                document.getElementById('groupSelect').value = currentGroup;
                return;
            }
            
            currentGroup = group;
            renderGradesTable();
        }

        function showStudentView(student, group) {
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('paseListaScreen').style.display = 'none';
            document.getElementById('paseEstudiantesScreen').style.display = 'none';
            document.getElementById('adminView').style.display = 'none';
            document.getElementById('studentView').style.display = 'block';
            
            document.getElementById('studentName').textContent = student.name;
            document.getElementById('studentComite').textContent = student.pais.split('\n')[0];
            document.getElementById('studentCodeDisplay').textContent = 'Código: ' + student.code;
            
            const evaluadores = Object.keys(student.grades);
            let totalGrades = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            
            evaluadores.forEach(evaluador => {
                student.grades[evaluador].forEach((grade, index) => {
                    totalGrades[index] += grade;
                });
            });
            
            const avgGrades = evaluadores.length > 0 ? 
                totalGrades.map(grade => Math.round(grade / evaluadores.length)) : 
                [0, 0, 0, 0, 0, 0, 0, 0, 0];
            
            document.getElementById('grade1').textContent = (avgGrades[0] + avgGrades[1]) + '/30';
            document.getElementById('grade2').textContent = (avgGrades[2] + avgGrades[3] + avgGrades[4]) + '/30';
            document.getElementById('grade3').textContent = (avgGrades[5] + avgGrades[6]) + '/20';
            document.getElementById('grade4').textContent = (avgGrades[7] + avgGrades[8]) + '/20';
            
            document.getElementById('detail1a').textContent = avgGrades[0];
            document.getElementById('detail1b').textContent = avgGrades[1];
            document.getElementById('detail2a').textContent = avgGrades[2];
            document.getElementById('detail2b').textContent = avgGrades[3];
            document.getElementById('detail2c').textContent = avgGrades[4];
            document.getElementById('detail3a').textContent = avgGrades[5];
            document.getElementById('detail3b').textContent = avgGrades[6];
            document.getElementById('detail4a').textContent = avgGrades[7];
            document.getElementById('detail4b').textContent = avgGrades[8];
            
            const finalGrade = avgGrades.reduce((a, b) => a + b, 0);
            document.getElementById('studentFinalGrade').textContent = finalGrade;
        }

        function renderGradesTable() {
            const tbody = document.getElementById('gradesBody');
            tbody.innerHTML = '';
            
            if (!students[currentGroup]) {
                students[currentGroup] = [];
            }
            
            const groupStudents = students[currentGroup];
            
            groupStudents.forEach((student, index) => {
                const row = document.createElement('tr');
                
                const finalGrade = calculateFinalGrade(student);
                const userGrades = student.grades[currentUser.email] || [0, 0, 0, 0, 0, 0, 0, 0, 0];
                
                const estadoAsistencia = student.asistencia || ESTADO_PRESENTE;
                let estadoText = '';
                switch(estadoAsistencia) {
                    case ESTADO_PRESENTE: estadoText = '✅ Presente'; break;
                    case ESTADO_VOTANDO: estadoText = '🗳️ Votando'; break;
                    case ESTADO_AUSENTE: estadoText = '❌ Ausente'; break;
                }
                
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td class="student-info-cell">
                        <div class="student-name">${student.name}</div>
                        <div class="student-pais">${student.pais || 'Sin país asignado'}</div>
                        <div class="student-code">${student.code}</div>
                        <div style="font-size: 9px; color: #888; margin-top: 2px;">${estadoText}</div>
                    </td>
                    ${rubricaPLE.map((competencia, i) => `
                        <td>
                            <input type="number" 
                                   min="0" 
                                   max="${competencia.max}" 
                                   value="${userGrades[i]}" 
                                   class="grade-input"
                                   data-index="${i}"
                                   onchange="updateStudentGrade(${index}, ${i}, this.value)">
                            <div style="font-size: 9px; color: #888;">max ${competencia.max}</div>
                        </td>
                    `).join('')}
                    <td class="final-grade-cell">
                        <strong>${finalGrade}/100</strong>
                        <div style="font-size: 10px; color: #666;">
                            ${Object.keys(student.grades).length} eval.
                        </div>
                    </td>
                    <td class="actions-cell">
                        <button class="btn-edit" onclick="editStudent(${index})">✏️ Editar</button>
                        <button class="btn-qr" onclick="generateQR('${student.code}', '${student.name}')">📱 QR</button>
                        <button class="btn-delete" onclick="deleteStudent(${index})">🗑️ Eliminar</button>
                    </td>
                `;
                
                tbody.appendChild(row);
            });
        }

        function calculateFinalGrade(student) {
            const evaluadores = Object.keys(student.grades);
            if (evaluadores.length === 0) return 0;
            
            let totalGrade = 0;
            evaluadores.forEach(evaluador => {
                totalGrade += student.grades[evaluador].reduce((a, b) => a + b, 0);
            });
            
            return Math.round(totalGrade / evaluadores.length);
        }

        function updateStudentGrade(studentIndex, gradeIndex, value) {
            if (!students[currentGroup] || !students[currentGroup][studentIndex]) {
                alert('Error: Estudiante no encontrado');
                return;
            }
            
            if (!students[currentGroup][studentIndex].grades[currentUser.email]) {
                students[currentGroup][studentIndex].grades[currentUser.email] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            }
            
            const numValue = parseFloat(value) || 0;
            const maxValue = rubricaPLE[gradeIndex].max;
            
            if (numValue < 0 || numValue > maxValue) {
                alert(`❌ El valor debe estar entre 0 y ${maxValue}`);
                document.querySelector(`[data-index="${gradeIndex}"]`).value = 
                    students[currentGroup][studentIndex].grades[currentUser.email][gradeIndex];
                return;
            }
            
            students[currentGroup][studentIndex].grades[currentUser.email][gradeIndex] = numValue;
            renderGradesTable();
        }

        function addStudent() {
            const name = prompt('Nombre completo del estudiante:');
            if (!name) return;
            
            const pais = prompt('País representado (puede incluir múltiples líneas):');
            if (!pais) return;
            
            const nextNumber = students[currentGroup] ? students[currentGroup].length + 1 : 1;
            const code = currentGroup + '-' + String(nextNumber).padStart(3, '0');
            
            if (!students[currentGroup]) {
                students[currentGroup] = [];
            }
            
            students[currentGroup].push({
                code: code,
                name: name,
                pais: pais || 'Delegado',
                grades: {},
                asistencia: ESTADO_PRESENTE
            });
            
            renderGradesTable();
            saveData();
            alert(`✅ Estudiante agregado en ${currentGroup} con código: ${code}`);
        }

        function editStudent(index) {
            editingStudentIndex = index;
            const student = students[currentGroup][index];
            
            document.getElementById('editForm').innerHTML = `
                <div class="edit-form-group">
                    <label>Nombre completo:</label>
                    <input type="text" id="editName" value="${student.name}" required>
                </div>
                <div class="edit-form-group">
                    <label>País representado (puede ser múltiples líneas):</label>
                    <textarea id="editPais">${student.pais || ''}</textarea>
                </div>
                <div class="edit-form-group">
                    <label>Código:</label>
                    <input type="text" id="editCode" value="${student.code}" readonly style="background: #f5f5f5;">
                </div>
            `;
            
            document.getElementById('editModal').classList.add('active');
        }

        function saveEdit() {
            if (editingStudentIndex === null) return;
            
            const name = document.getElementById('editName').value.trim();
            const pais = document.getElementById('editPais').value.trim();
            
            if (!name || !pais) {
                alert('❌ El nombre y el país son obligatorios');
                return;
            }
            
            students[currentGroup][editingStudentIndex].name = name;
            students[currentGroup][editingStudentIndex].pais = pais;
            
            closeEditModal();
            renderGradesTable();
            saveData();
        }

        function closeEditModal() {
            document.getElementById('editModal').classList.remove('active');
            editingStudentIndex = null;
        }

        function deleteStudent(index) {
            if (confirm('¿Está seguro de eliminar este estudiante?\n\nEsta acción no se puede deshacer.')) {
                students[currentGroup].splice(index, 1);
                renderGradesTable();
                saveData();
                alert('✅ Estudiante eliminado');
            }
        }

        function searchStudents() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const rows = document.querySelectorAll('#gradesBody tr');
            
            rows.forEach(row => {
                const studentInfo = row.querySelector('.student-info-cell');
                if (studentInfo) {
                    const text = studentInfo.textContent.toLowerCase();
                    row.style.display = text.includes(searchTerm) ? '' : 'none';
                }
            });
        }

        function sortStudents() {
            const sortBy = document.getElementById('sortSelect').value;
            
            students[currentGroup].sort((a, b) => {
                switch(sortBy) {
                    case 'name': return a.name.localeCompare(b.name);
                    case 'name-desc': return b.name.localeCompare(a.name);
                    case 'code': return a.code.localeCompare(b.code);
                    case 'pais': return (a.pais || '').localeCompare(b.pais || '');
                    case 'grade': return calculateFinalGrade(b) - calculateFinalGrade(a);
                    case 'grade-asc': return calculateFinalGrade(a) - calculateFinalGrade(b);
                    default: return 0;
                }
            });
            
            renderGradesTable();
        }

        function generateQR(code, name) {
            document.getElementById('qrcode').innerHTML = '';
            document.getElementById('qrStudentName').textContent = name + ' - ' + code;
            
            new QRCode(document.getElementById('qrcode'), {
                text: code,
                width: 150,
                height: 150
            });
            
            document.getElementById('qrModal').classList.add('active');
        }

        function closeQRModal() {
            document.getElementById('qrModal').classList.remove('active');
        }

        function exportToExcel() {
            let csvContent = "data:text/csv;charset=utf-8,";
            
            const headers = [
                'Código', 'Nombre', 'País', 
                ...rubricaPLE.map(c => c.name),
                'Nota Final', 'Estado Asistencia'
            ];
            csvContent += headers.join(',') + '\n';
            
            students[currentGroup].forEach(student => {
                const finalGrade = calculateFinalGrade(student);
                let estadoTexto = '';
                switch(student.asistencia) {
                    case ESTADO_PRESENTE: estadoTexto = 'Presente'; break;
                    case ESTADO_VOTANDO: estadoTexto = 'Presente y Votando'; break;
                    case ESTADO_AUSENTE: estadoTexto = 'Ausente'; break;
                    default: estadoTexto = 'Presente';
                }
                
                const row = [
                    student.code,
                    student.name,
                    `"${(student.pais || '').replace(/\n/g, ' ')}"`,
                    ...rubricaPLE.map((c, i) => {
                        const evaluadores = Object.keys(student.grades);
                        if (evaluadores.length === 0) return 0;
                        
                        let total = 0;
                        evaluadores.forEach(evaluador => {
                            total += student.grades[evaluador][i] || 0;
                        });
                        return Math.round(total / evaluadores.length);
                    }),
                    finalGrade,
                    estadoTexto
                ];
                csvContent += row.join(',') + '\n';
            });
            
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `calificaciones_${currentGroup}_${new Date().toISOString().split('T')[0]}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        function showStatistics() {
            const groupStudents = students[currentGroup] || [];
            if (groupStudents.length === 0) {
                alert('No hay estudiantes en este grupo');
                return;
            }
            
            let totalFinal = 0;
            let presenteCount = 0;
            let votandoCount = 0;
            let ausenteCount = 0;
            let minGrade = 100;
            let maxGrade = 0;
            
            groupStudents.forEach(student => {
                const grade = calculateFinalGrade(student);
                totalFinal += grade;
                if (grade < minGrade) minGrade = grade;
                if (grade > maxGrade) maxGrade = grade;
                
                switch(student.asistencia) {
                    case ESTADO_PRESENTE: presenteCount++; break;
                    case ESTADO_VOTANDO: votandoCount++; break;
                    case ESTADO_AUSENTE: ausenteCount++; break;
                }
            });
            
            const avgFinal = totalFinal / groupStudents.length;
            const totalPresentes = presenteCount + votandoCount;
            const porcentajePresentes = (totalPresentes / groupStudents.length) * 100;
            const porcentajeVotando = (votandoCount / groupStudents.length) * 100;
            const porcentajeAusentes = (ausenteCount / groupStudents.length) * 100;
            
            alert(`📊 ESTADÍSTICAS ${currentGroup}:
    • Total estudiantes: ${groupStudents.length}
    • Promedio general: ${avgFinal.toFixed(1)}/100
    • Nota más alta: ${maxGrade}/100
    • Nota más baja: ${minGrade}/100
    
    📋 ASISTENCIA:
    • Presentes: ${presenteCount} (${Math.round(porcentajePresentes - porcentajeVotando)}%)
    • Presentes y votando: ${votandoCount} (${Math.round(porcentajeVotando)}%)
    • Ausentes: ${ausenteCount} (${Math.round(porcentajeAusentes)}%)
    • Total presentes: ${totalPresentes} (${Math.round(porcentajePresentes)}%)`);
        }

        function saveData() {
            localStorage.setItem('inponor_students_ple', JSON.stringify(students));
        }

        function logout() {
            currentUser = null;
            paseListaRealizado = false;
            
            document.getElementById('loginScreen').style.display = 'flex';
            document.getElementById('paseListaScreen').style.display = 'none';
            document.getElementById('paseEstudiantesScreen').style.display = 'none';
            document.getElementById('adminView').style.display = 'none';
            document.getElementById('studentView').style.display = 'none';
            
            document.getElementById('emailInput').value = '';
            document.getElementById('passwordInput').value = '';
            document.getElementById('studentCode').value = '';
            document.getElementById('paseListaSearchCompact').value = '';
            document.getElementById('paseEstudiantesSearch').value = '';
            
            switchTab('admin');
        }

        // Cargar datos al iniciar
        window.onload = function() {
            if (window.location.hash) {
                const code = window.location.hash.substring(1);
                document.getElementById('studentCode').value = code;
                switchTab('qr');
                setTimeout(() => {
                    document.getElementById('studentCode').focus();
                }, 100);
            }
            
            // Configurar búsqueda en tiempo real para pase de lista por países
            document.getElementById('paseListaSearchCompact').addEventListener('input', function() {
                renderPaseListaCompact();
            });
            
            // Configurar búsqueda en tiempo real para pase por estudiantes
            document.getElementById('paseEstudiantesSearch').addEventListener('input', function() {
                renderPaseEstudiantes();
            });
        };