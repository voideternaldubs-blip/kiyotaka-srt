Faça deploy do projeto no Vercel.

Passos:
1. Verificar se há alterações não commitadas: `git status`
2. Se houver, adicionar e commitar com mensagem descritiva
3. Push para a branch atual: `git push`
4. Executar deploy: `npx vercel --prod`

Checklist antes do deploy:
- `next build` passa sem erros?
- `vercel.json` tem `"framework": "nextjs"`?
- Variáveis de ambiente necessárias estão configuradas no Vercel?

Se for o primeiro deploy do projeto:
- Rodar `npx vercel link` primeiro para conectar ao projeto existente
- Ou `npx vercel --prod` para criar projeto novo (vai perguntar nome e team)

Após deploy bem-sucedido:
- Mostrar a URL de produção gerada
- Verificar se o site abre corretamente
