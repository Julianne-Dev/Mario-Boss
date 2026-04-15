
const card = document.getElementById('card');
const blocoQ = document.getElementById('bloco-q');
const somMoeda = document.getElementById('som-moeda');


document.addEventListener('mousemove', (e) => {
   
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


 
document.addEventListener('click', (e) => {
    
    somMoeda.currentTime = 0; 
    somMoeda.play();

    
    const moeda = document.createElement('div');
    moeda.className = 'moeda-particula';
    
    
    moeda.style.left = `${e.pageX - 17}px`;
    moeda.style.top = `${e.pageY - 17}px`;
    
    document.body.appendChild(moeda);

   
    setTimeout(() => {
        moeda.remove();
    }, 800);
});


let cliquesNoBloco = 0;

blocoQ.addEventListener('click', (e) => {
    e.stopPropagation(); 
    cliquesNoBloco++;

   
    blocoQ.style.transform = "scale(0.8)";
    setTimeout(() => blocoQ.style.transform = "scale(1)", 100);

    if (cliquesNoBloco === 10) {
        document.body.classList.toggle('dark-mode');
        
        
        const msg = document.body.classList.contains('dark-mode') 
            ? "MUNDO 1-2: Modo Noturno Ativado!" 
            : "Voltando para o Reino dos Cogumelos!";
        console.log(msg);
        
        cliquesNoBloco = 0; // Reseta o contador
    }
});


document.addEventListener('mouseleave', () => {
    card.style.transition = "transform 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

document.addEventListener('mouseenter', () => {
    card.style.transition = "none";
});