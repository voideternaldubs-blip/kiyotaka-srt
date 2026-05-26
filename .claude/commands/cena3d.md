Crie um novo componente de cena 3D em `components/` usando React Three Fiber.

O componente deve:
- Usar `<Canvas>` do `@react-three/fiber` com `dpr={[1,2]}` e câmera posicionada em `[0, 0, 5]`
- Ter uma geometria 3D animada com `useFrame` (rotação suave + flutuação senoidal)
- Usar `<Float>` e `<Environment preset="studio">` do `@react-three/drei`
- Ter `meshStandardMaterial` com `roughness` e `metalness` configurados
- Responder ao movimento do mouse via `useThree().mouse` com `THREE.MathUtils.lerp`
- Incluir campo de partículas esparso (100-150 pontos) com `<points>`
- Ser exportado como default e ter `'use client'` no topo
- Usar `position: absolute, inset: 0, pointerEvents: none` no wrapper div
- Fundo transparente (`style={{ background: 'transparent' }}`)

Paleta: preto `#111111`, metálico, minimalista.

Se o usuário especificou um nome de arquivo ou tipo de geometria, use-o. Caso contrário, use `TorusKnotGeometry`.
