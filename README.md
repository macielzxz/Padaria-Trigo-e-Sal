# Padaria Trigo & Sal

Site institucional de uma página (one-page) para uma padaria artesanal fictícia, desenvolvido como peça de portfólio front-end.

> **Projeto de portfólio.** A "Padaria Trigo & Sal", seus endereços, números e depoimentos são fictícios — criados para demonstrar habilidades de front-end (HTML, CSS e JavaScript puro), não para representar um negócio real.

## Sobre o projeto

O site simula a presença digital de uma rede local de padarias artesanais, com estrutura de informação inspirada em sites reais do setor (destaques de produtos, números da marca, categorias navegáveis, unidades, depoimentos e formulário de contato).

## Estrutura de arquivos

```
├── index.html      → estrutura e conteúdo da página
├── style.css       → todo o estilo visual
├── script.js       → interações (menu mobile e filtro de categorias)
└── img/
    ├── foto-pao-hero.png            → ilustração principal do topo
    ├── foto-cesta-paes.png          → foto usada na seção "Nossa história"
    ├── foto-fermentacao-natural.svg → ícone do destaque "Fermentação natural"
    ├── foto-croissant.svg           → ícone do destaque "Croissant amanteigado"
    ├── foto-focaccia.svg            → ícone do destaque "Focaccia de ervas"
    ├── foto-broa.svg                → ícone do destaque "Broa de fubá"
    ├── icon-croissant.svg           → ícone da categoria "Café da manhã"
    ├── icon-baguete.svg             → ícone da categoria "Pães do dia"
    ├── icon-bolo.svg                → ícone da categoria "Doces e bolos"
    ├── icon-xicara.svg              → ícone da categoria "Bebidas quentes"
    ├── pattern-trigo.svg            → padrão decorativo das laterais (telas largas)
    └── ilustracao-pao-fatiado.svg   → ilustração reserva (não usada atualmente)
```

**Importante:** os caminhos das imagens são relativos. Mantenha a pasta `img/` sempre no mesmo nível de `index.html`.

## Como visualizar

Não é necessário nenhum servidor ou instalação. Basta abrir o `index.html` diretamente no navegador (duplo clique ou arrastar para uma aba).

Para editar com recarregamento automático, qualquer servidor local simples funciona, por exemplo:

```bash
# Python
python3 -m http.server 8000

# Node (com o pacote serve instalado)
npx serve .
```

Depois acesse `http://localhost:8000` (ou a porta indicada).

## Funcionalidades

- **Layout responsivo** — do celular a telas grandes, com decoração lateral extra em monitores muito largos (acima de 1500px).
- **Menu mobile** — abre/fecha por JavaScript (`script.js`).
- **Categorias interativas** — ao clicar em uma categoria ("Café da manhã", "Pães do dia" etc.), um painel abre logo abaixo mostrando os itens correspondentes, com nome, descrição e preço. Clicar novamente na mesma categoria fecha o painel.
- **Sem dependências externas** — apenas HTML, CSS e JavaScript puro, além da fonte do Google Fonts (Fraunces + Work Sans) carregada via `<link>`.

## Paleta e tipografia

| Elemento | Valor |
|---|---|
| Fundo (parchment) | `#F2E9DC` |
| Fundo alternativo | `#E9DCC6` |
| Texto principal | `#3B2A1E` |
| Texto secundário | `#5A4433` |
| Destaque dourado | `#C08A3E` |
| Destaque vinho | `#8C3B3B` |
| Fonte de títulos | Fraunces (serifada) |
| Fonte de texto | Work Sans |

## Possíveis próximos passos

- Integrar o formulário de contato a um serviço real de envio (ex.: Formspree, EmailJS ou back-end próprio) — atualmente ele não envia dados para nenhum lugar.
- Adicionar mais fotos reais dos produtos com licença própria, caso o site deixe de ser apenas um exemplo de portfólio.
- Otimizar as imagens PNG (compressão) antes de qualquer publicação em produção.

---

Desenvolvido por [seu nome] como peça de portfólio front-end.
