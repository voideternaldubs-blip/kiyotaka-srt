Configure ou adicione scroll animado usando Lenis + GSAP ScrollTrigger.

O que fazer:
1. Verificar se `SmoothScroll.tsx` já existe em `components/`. Se sim, apenas integrar o ScrollTrigger.
2. Se não existir, criar o componente Lenis completo:
   - `'use client'`
   - `useEffect` que instancia `new Lenis({ duration: 1.4, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })`
   - Loop RAF com `requestAnimationFrame`
   - Cleanup com `lenis.destroy()` e `cancelAnimationFrame()`

3. Integrar Lenis com GSAP ScrollTrigger (obrigatório para sincronizar):
```ts
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
```

4. Se o usuário pediu uma seção com parallax, adicionar:
   - `data-speed` attribute nos elementos
   - ScrollTrigger com `scrub: 1` e `start: 'top bottom'`

5. Se pediu scroll horizontal, usar `horizontal: true` no Lenis + wrapper com `overflow: hidden`.

Velocidade padrão: `duration: 1.4` — aumentar para mais suave, diminuir para mais responsivo.
