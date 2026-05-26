# Kiyotaka — Creative Dev Stack

## Projeto
Site imersivo minimalista com WebGL, 3D, animações cinematográficas.

## Stack instalada
- **Next.js** — framework React (App Router)
- **Three.js** — engine 3D/WebGL
- **React Three Fiber** — Three.js dentro do React
- **Drei** — componentes prontos para R3F (câmera, luzes, ambiente)
- **GSAP** — animações profissionais e timelines
- **Lenis** — smooth scroll
- **Framer Motion** — animações de UI
- **GLSL / babel-plugin-glsl** — shaders customizados
- **Spline** — cenas 3D visuais exportadas para React
- **Theatre.js** — timeline cinematográfica
- **PixiJS** — efeitos 2D em GPU
- **BabylonJS** — engine 3D alternativa

## Estrutura
```
app/
  layout.tsx     — providers globais (Lenis, fonte, metadata)
  page.tsx       — página principal
  globals.css    — reset + variáveis CSS

components/
  Scene.tsx      — cena 3D (R3F + Three.js)
  Hero.tsx       — seção hero com animação de título
  Nav.tsx        — navbar fixa
  About.tsx      — seção sobre
  Work.tsx       — lista de projetos
  Footer.tsx     — rodapé + contato
  SmoothScroll.tsx — wrapper Lenis
  Cursor.tsx     — cursor customizado
```

## Comandos disponíveis
- `/cena3d` — cria novo componente de cena 3D
- `/shader` — cria shader GLSL customizado
- `/animacao` — adiciona animação GSAP a um componente
- `/scroll` — configura scroll animado com GSAP + Lenis
- `/deploy` — faz deploy no Vercel

## Como rodar
```bash
npm run dev      # desenvolvimento em localhost:3000
npm run build    # build de produção
npx vercel --prod  # deploy no Vercel
```

## Paleta minimalista
- `--black: #0a0a0a`
- `--white: #f4f4f0`
- `--gray: #999`
- `--border: #e2e2e2`
