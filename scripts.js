// Função para verificar se pelo menos 50% do elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
    // Calcular a quantidade visível do elemento
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    
    // Verificar se pelo menos 50% da altura do elemento está visível
    return visibleHeight >= elementHeight / 2;
  }
  
  // Função que será chamada durante o scroll
  function checkScroll() {
    const elements = document.querySelectorAll('.box'); // Seleciona todos os elementos com a classe 'box'
  
    elements.forEach(element => {
      // Se 50% do elemento estiver visível, adicionar a classe 'move'
      if (isElementInViewport(element)) {
        element.classList.add('move');
      } else {
        element.classList.remove('move'); // Remover a animação se o elemento sair de 50% visível
      }
    });
  }
  
  // Ativar a função ao rolar a página
  window.addEventListener('scroll', checkScroll);
  
  // Chama a função para garantir que o efeito ocorra quando a página for carregada
  checkScroll();

  // ======================================================================

  // Função para verificar se o card está centralizado na tela
function isCardCentered(el) {
    const rect = el.getBoundingClientRect();
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    // Verifica se o card está centralizado (meio da tela)
    return rect.left <= windowWidth / 2 && rect.right >= windowWidth / 2;
  }
  
  // Função que será chamada durante o scroll
  function checkScroll() {
    const cards = document.querySelectorAll('.card'); // Seleciona todos os cards
    
    cards.forEach(card => {
      if (isCardCentered(card)) {
        card.classList.add('active'); // Adiciona a classe 'active' quando o card estiver centralizado
      } else {
        card.classList.remove('active'); // Remove a classe 'active' quando o card não estiver centralizado
      }
    });
  }
  
  // Ativar a função ao rolar a página
  window.addEventListener('scroll', checkScroll);
  
  // Chama a função para garantir que o efeito ocorra quando a página for carregada
  checkScroll();