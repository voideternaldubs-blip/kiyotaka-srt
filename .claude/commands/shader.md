Crie um shader GLSL customizado para uso com Three.js / React Three Fiber.

O shader deve:
- Ter arquivo `vertexShader` e `fragmentShader` como strings template literal (ou `.glsl` se babel-plugin-glsl estiver configurado)
- Usar `shaderMaterial` do `@react-three/drei` para criar o material
- Incluir `uniforms`: `uTime` (float, atualizado no `useFrame`), `uMouse` (vec2), `uResolution` (vec2)
- Efeito padrão: distorção de onda senoidal no vertex + gradiente de cor no fragment
- O material deve ser registrado com `extend()` do `@react-three/fiber`
- Incluir comentários explicando cada parte do GLSL

Tipos de shader disponíveis (usar conforme o pedido do usuário):
- `onda` — distorção líquida suave
- `holograma` — scanlines + ruído + alpha pulsante
- `fogo` — noise fractal + cores quentes
- `portal` — vórtice circular com UV distorcido
- `glitch` — deslocamento RGB aleatório
- `padrao` — onda senoidal simples (default)

Salvar em `components/shaders/` com nome descritivo.
