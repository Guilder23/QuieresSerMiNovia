
        document.addEventListener('DOMContentLoaded', function() {
            // Crear estrellas de fondo
            createStars();
            
            const btnYes = document.getElementById('btnYes');
            const btnNo = document.getElementById('btnNo');
            const response = document.getElementById('response');
            const persuasiveMessage = document.getElementById('persuasiveMessage');
            const container = document.querySelector('.container');
            const initialContainer = document.getElementById('initialContainer');
            const romanticContainer = document.getElementById('romanticContainer');
            const messageContent = document.querySelector('.message-content');
            
            // Efecto espectacular al hacer clic en Sí
            btnYes.addEventListener('click', function() {
                const initialContainer = document.getElementById('initialContainer');
                const romanticContainer = document.getElementById('romanticContainer');
                const messageContent = romanticContainer.querySelector('.message-content');
                
                // Ocultar contenedor inicial
                initialContainer.style.opacity = '0';
                initialContainer.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    initialContainer.style.display = 'none';
                    romanticContainer.style.display = 'block';
                    
                    // Mostrar nuevo contenedor con animación
                    setTimeout(() => {
                        romanticContainer.classList.add('show');
                        
                        // Secuencia de mensajes románticos
                        const mensajes = [
                            {texto: "¡Sabía que dirías que sí! 💖💝😍", tiempo: 0},
                            {texto: "Desde el primer momento supe que eras especial ✨", tiempo: 3000},
                            {texto: "Cada momento contigo es mágico 💫", tiempo: 6000},
                            {texto: "Prometo hacerte feliz cada día 🌹", tiempo: 9000},
                            {texto: "Eres el amor de mi vida 💖", tiempo: 12000}
                        ];
                        
                        mensajes.forEach(mensaje => {
                            setTimeout(() => {
                                messageContent.style.opacity = '0';
                                setTimeout(() => {
                                    messageContent.innerHTML = mensaje.texto;
                                    messageContent.style.opacity = '1';
                                    createHearts();
                                    if (mensaje.tiempo > 0) {
                                        createFireworks();
                                    }
                                }, 500);
                            }, mensaje.tiempo);
                        });
                    }, 100);
                }, 500);
                
                // Cambiar fondo gradualmente
                document.body.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #4a1e4e 100%)';
            });
            
            // Mensajes persuasivos cuando intentan hacer clic en No
            const messages = [
                "¿Estás completamente segura? 😢",
                "¿En serio ese es tu respuesta final? 😏💔",
                "Ah, claro. Porque decir 'sí' sería demasiado fácil. 🙄",
                "¡El 'sí' es la palabra más bonita! 🥰✨",
                "Vale, lo entiendo… el miedo al éxito es real. 😏",
                "Piénsalo otra vez, por favor",
                "Vamos, dale una oportunidad",
                "¡El botón 'Sí' está mucho más bonito! 🌟",
                "¿Y si lo reconsideras?",
                "¡Por favor, dime que sí! 🥺",
                "¡Bueno... pero seguiré aquí esperando! ⏳💘",
                "¿Seguro que no quieres cambiar de opinión? 🤔",
            ];
            let messageIndex = 0;
            
            btnNo.addEventListener('mouseenter', function() {
                // Mover el botón No a posición aleatoria dentro del contenedor
                const containerRect = container.getBoundingClientRect();
                const btnRect = btnNo.getBoundingClientRect();
                
                const maxX = containerRect.width - btnRect.width - 40;
                const maxY = containerRect.height - btnRect.height - 40;
                
                const randomX = Math.random() * maxX;
                const randomY = Math.random() * maxY;
                
                btnNo.style.position = 'absolute';
                btnNo.style.left = randomX + 'px';
                btnNo.style.top = randomY + 'px';
                
                // Mostrar mensaje persuasivo
                const persuasiveMessage = document.getElementById('persuasiveMessage');
                persuasiveMessage.textContent = messages[messageIndex];
                persuasiveMessage.classList.add('show');
                
                // Rotar mensajes
                messageIndex = (messageIndex + 1) % messages.length;
                
                // Ocultar mensaje después de un tiempo
                setTimeout(() => {
                    persuasiveMessage.classList.remove('show');
                }, 5000);
            });
            
            // Función para crear corazones
            function createHearts() {
                for (let i = 0; i < 80; i++) {
                    setTimeout(() => {
                        const heart = document.createElement('div');
                        heart.innerHTML = '❤️';
                        heart.classList.add('heart');
                        
                        // Posición aleatoria
                        const x = Math.random() * window.innerWidth;
                        const y = window.innerHeight + 50;
                        
                        heart.style.left = x + 'px';
                        heart.style.top = y + 'px';
                        heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
                        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                        
                        document.body.appendChild(heart);
                        
                        // Eliminar después de la animación
                        setTimeout(() => {
                            heart.remove();
                        }, 4000);
                    }, i * 100);
                }
            }
            
            // Función para crear estrellas
            function createStars() {
                const starsContainer = document.getElementById('stars');
                const starCount = 150;
                
                for (let i = 0; i < starCount; i++) {
                    const star = document.createElement('div');
                    star.classList.add('star');
                    
                    // Tamaño aleatorio
                    const size = Math.random() * 3;
                    star.style.width = size + 'px';
                    star.style.height = size + 'px';
                    
                    // Posición aleatoria
                    star.style.left = Math.random() * 100 + '%';
                    star.style.top = Math.random() * 100 + '%';
                    
                    // Animación diferente para cada estrella
                    star.style.animationDelay = Math.random() * 2 + 's';
                    star.style.animationDuration = (Math.random() * 3 + 1) + 's';
                    
                    starsContainer.appendChild(star);
                }
            }
            
            // Función para crear fuegos artificiales
            function createFireworks() {
                for (let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        const firework = document.createElement('div');
                        firework.classList.add('firework');
                        
                        // Posición aleatoria
                        const x = Math.random() * window.innerWidth;
                        const y = Math.random() * window.innerHeight;
                        
                        firework.style.left = x + 'px';
                        firework.style.top = y + 'px';
                        firework.style.boxShadow = `0 0 15px 5px ${getRandomColor()}`;
                        
                        document.body.appendChild(firework);
                        
                        // Eliminar después de la animación
                        setTimeout(() => {
                            firework.remove();
                        }, 1000);
                    }, i * 200);
                }
            }
            
            // Función para crear rayos de amor
            function createLoveBeams() {
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        const beam = document.createElement('div');
                        beam.classList.add('love-beam');
                        
                        // Posición alrededor del botón Sí
                        const btnYesRect = btnYes.getBoundingClientRect();
                        const x = btnYesRect.left + btnYesRect.width/2;
                        const y = btnYesRect.top + btnYesRect.height/2;
                        
                        beam.style.left = x + 'px';
                        beam.style.top = y + 'px';
                        beam.style.boxShadow = `0 0 15px 5px ${getRandomColor()}`;
                        
                        document.body.appendChild(beam);
                        
                        // Eliminar después de la animación
                        setTimeout(() => {
                            beam.remove();
                        }, 1000);
                    }, i * 150);
                }
            }
            
            // Función para obtener color aleatorio
            function getRandomColor() {
                const colors = ['#ff4d6d', '#ff8fa3', '#ffb3c1', '#ffccd5', '#ff758f'];
                return colors[Math.floor(Math.random() * colors.length)];
            }
        });
