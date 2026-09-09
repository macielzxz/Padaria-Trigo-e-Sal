  const toggle = document.querySelector('.menutoggle');
  const navlinks = document.querySelector('.navlinks');
  toggle.addEventListener('click', () => {
    const open = navlinks.style.display === 'flex';
    navlinks.style.display = open ? 'none' : 'flex';
    navlinks.style.flexDirection = 'column';
    navlinks.style.position = 'absolute';
    navlinks.style.top = '68px';
    navlinks.style.left = '0';
    navlinks.style.right = '0';
    navlinks.style.background = 'var(--parchment)';
    navlinks.style.padding = '20px 22px';
    navlinks.style.borderBottom = '1px solid var(--line)';
    navlinks.style.gap = '18px';
  });

  const categoryItems = {
    cafe: [
      { name: 'Croissant amanteigado', desc: 'Manteiga de garrafa, 27 camadas', price: 'R$ 12' },
      { name: 'Broa de fubá e erva-doce', desc: 'Receita da cozinha original', price: 'R$ 9' },
      { name: 'Café coado, xícara', desc: 'Grãos de produtor único, torra média', price: 'R$ 7' }
    ],
    paes: [
      { name: 'Fermentação natural, tradicional', desc: 'Casca grossa, 24h de fermentação', price: 'R$ 22' },
      { name: 'Integral com sementes', desc: 'Linhaça, girassol e gergelim tostados', price: 'R$ 26' },
      { name: 'Focaccia de ervas', desc: 'Alecrim e flor de sal, tabuleiro de ferro', price: 'R$ 24' }
    ],
    doces: [
      { name: 'Broa de fubá e erva-doce', desc: 'Receita da cozinha original', price: 'R$ 9' },
      { name: 'Bolo de fubá cremoso', desc: 'Camada cremosa no meio, fatia generosa', price: 'R$ 14' },
      { name: 'Cookie de aveia e mel', desc: 'Crocante por fora, macio no centro', price: 'R$ 8' }
    ],
    bebidas: [
      { name: 'Café coado, xícara', desc: 'Grãos de produtor único, torra média', price: 'R$ 7' },
      { name: 'Cappuccino cremoso', desc: 'Espuma de leite feita na hora', price: 'R$ 9' },
      { name: 'Chá de ervas da estação', desc: 'Mistura própria da casa', price: 'R$ 6' }
    ]
  };

  const catTiles = document.querySelectorAll('.cat-tile');
  const catPanel = document.getElementById('catPanel');
  const catPanelInner = document.getElementById('catPanelInner');

  catTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const cat = tile.getAttribute('data-cat');
      const alreadyActive = tile.classList.contains('active');

      catTiles.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-expanded', 'false'); });

      if (alreadyActive) {
        catPanel.hidden = true;
        catPanelInner.innerHTML = '';
        return;
      }

      tile.classList.add('active');
      tile.setAttribute('aria-expanded', 'true');

      const items = categoryItems[cat] || [];
      catPanelInner.innerHTML = items.map(item => `
        <div class="cat-panel-item">
          <span class="name">${item.name}</span>
          <span class="desc">${item.desc}</span>
          <span class="price">${item.price}</span>
        </div>
      `).join('');

      catPanel.hidden = false;
    });
  });
