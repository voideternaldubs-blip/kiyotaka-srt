Adicione animações GSAP ao componente ou elemento especificado pelo usuário.

Regras:
- Sempre usar `useRef` para referenciar os elementos DOM
- Registrar plugins necessários: `gsap.registerPlugin(ScrollTrigger)` no topo do arquivo se for scroll
- Animações de entrada: usar `gsap.fromTo()` dentro de `useEffect` com cleanup (`return () => ctx.revert()`)
- Usar `gsap.context()` para isolar animações e evitar memory leak
- Stagger padrão para múltiplos elementos: `0.05s` para chars, `0.1s` para linhas, `0.15s` para cards
- Ease preferido: `expo.out` para entradas, `expo.inOut` para transições, `back.out(1.7)` para bounces

Tipos de animação (aplicar conforme pedido):
- `titulo` — split por caractere, entra de baixo com `y: 100` e clip com `overflow: hidden`
- `fade` — `opacity 0→1` + `y: 30→0`, simples e limpo
- `linha` — `scaleX: 0→1` com `transformOrigin: left`, para linhas divisórias
- `cards` — stagger de entrada em grid, `y: 50→0` + `opacity`
- `scroll` — ScrollTrigger com `start: 'top 85%'`, sem pin
- `hover` — `gsap.to` no `onMouseEnter/Leave`, movimento sutil de `x` ou `scale`
- `counter` — número animado de 0 até o valor final com `snap: 1`

Sempre adicionar `will-change: transform` via GSAP quando necessário para performance.
