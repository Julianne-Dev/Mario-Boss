// Seleção de elementos
const card = document.getElementById('card');
const blocoQ = document.getElementById('bloco-q');
const somMoeda = document.getElementById('som-moeda');

/**
 * 1. Efeito de Inclinação 3D (Tilt)
 * Faz o card seguir a posição do mouse suavemente.
 */
document.addEventListener('mousemove', (e) => {
    // Cálculo do ângulo com base na posição do mouse
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Aplica a rotação ao card
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

/**
 * 2. Sistema de Partículas e Som (Ao clicar)
 * Cria uma moeda visual na posição do clique.
 */
document.addEventListener('click', (e) => {
    // Tocar o som clássico do Mario
    somMoeda.currentTime = 0; // Reinicia o som se clicar rápido
    somMoeda.play();

    // Criar a moeda (elemento div)
    const moeda = document.createElement('div');
    moeda.className = 'moeda-particula';
    
    // Posiciona exatamente onde o usuário clicou
    moeda.style.left = `${e.pageX - 17}px`;
    moeda.style.top = `${e.pageY - 17}px`;
    
    document.body.appendChild(moeda);

    // Remove do HTML após 800ms (tempo da animação CSS)
    setTimeout(() => {
        moeda.remove();
    }, 800);
});

/**
 * 3. Easter Egg (Modo Noturno)
 * Se clicar 10 vezes no bloco "?" algo acontece!
 */
let cliquesNoBloco = 0;

blocoQ.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede de criar duas moedas no mesmo clique
    cliquesNoBloco++;

    // Feedback visual de clique no bloco
    blocoQ.style.transform = "scale(0.8)";
    setTimeout(() => blocoQ.style.transform = "scale(1)", 100);

    if (cliquesNoBloco === 10) {
        document.body.classList.toggle('dark-mode');
        
        // Mensagem divertida
        const msg = document.body.classList.contains('dark-mode') 
            ? "MUNDO 1-2: Modo Noturno Ativado!" 
            : "Voltando para o Reino dos Cogumelos!";
        console.log(msg);
        
        cliquesNoBloco = 0; // Reseta o contador
    }
});

// Reseta o card quando o mouse sai da tela
document.addEventListener('mouseleave', () => {
    card.style.transition = "transform 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

document.addEventListener('mouseenter', () => {
    card.style.transition = "none";
});