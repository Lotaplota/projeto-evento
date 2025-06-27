// Script para expandir o card da atração clicada
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const sectionToExpand = urlParams.get('expand');
  
  if (sectionToExpand) {
    const element = document.getElementById(sectionToExpand);
    if (element) {
      new bootstrap.Collapse(element, { show: true });
    }
  }
});

// Script para deixar os links da nav dos cards mutuamente exclusivos
// Tab do Bootstrap não tava funcionando...
document.addEventListener('DOMContentLoaded', function() {
  
  // Loopa entre cada nav-pill da página e adiciona um escutador que espera um click
  var pills = document.querySelectorAll('.nav-pills .nav-link:not(.disabled)');
  
  // Add click handler to each pill
  for (var i = 0; i < pills.length; i++) {
    pills[i].addEventListener('click', function() {
      
      // Remove o ativo de todas as pills
      for (var j = 0; j < pills.length; j++) {
        pills[j].classList.remove('active');
      }
      
      // Adiciona o ativo pra pill que a pessoa clicou
      this.classList.add('active');
    });
  }
});