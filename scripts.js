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

// Função para verificar se o card está centralizado na tela
function isCardCentered(el) {
  const rect = el.getBoundingClientRect();
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Verifica se o card está centralizado (meio da tela)
  return rect.left <= windowWidth / 2 && rect.right >= windowWidth / 2;
}

// Função que será chamada durante o scroll
function checkScroll() {
  const boxes = document.querySelectorAll('.box'); // Seleciona todos os elementos com a classe 'box'
  boxes.forEach(element => {
      if (isElementInViewport(element)) {
          element.classList.add('move'); // Adiciona a classe 'move' quando pelo menos 50% do elemento está visível
      } else {
          element.classList.remove('move'); // Remove a classe 'move' quando o elemento não está 50% visível
      }
  });

  const cards = document.querySelectorAll('.card'); // Seleciona todos os cards
  cards.forEach(card => {
      if (isCardCentered(card)) {
          card.classList.add('active'); // Adiciona a classe 'active' quando o card está centralizado
      } else {
          card.classList.remove('active'); // Remove a classe 'active' quando o card não está centralizado
      }
  });
}

// Ativar a função ao rolar a página
window.addEventListener('scroll', checkScroll);

// Chama a função para garantir que o efeito ocorra quando a página for carregada
checkScroll();