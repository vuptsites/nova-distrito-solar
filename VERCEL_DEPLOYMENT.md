# Deployment na Vercel - Guia Completo

## ✅ Agora funciona!

Adicionei as configurações necessárias para fazer deploy na Vercel. Aqui está o passo a passo:

## 🚀 Como fazer o Deploy

### Passo 1: Conectar o GitHub à Vercel

1. Vá para https://vercel.com
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Conecte sua conta GitHub
5. Selecione o repositório `vuptsites/nova-distrito-solar`

### Passo 2: Configurar Variáveis de Ambiente

Na Vercel, vá para **Settings → Environment Variables** e adicione:

```
DATABASE_URL=sua_url_mysql_aqui
JWT_SECRET=sua_chave_secreta_aqui
VITE_APP_ID=seu_app_id_manus
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
OWNER_OPEN_ID=seu_owner_id
OWNER_NAME=Nova Distrito
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=sua_chave_api
VITE_FRONTEND_FORGE_API_KEY=sua_chave_frontend
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_ANALYTICS_ENDPOINT=seu_endpoint
VITE_ANALYTICS_WEBSITE_ID=seu_website_id
VITE_APP_TITLE=Nova Distrito
VITE_APP_LOGO=seu_logo_url
```

### Passo 3: Deploy Automático

Depois de conectar, a Vercel fará o deploy automaticamente:

1. ✅ Instala dependências (`pnpm install`)
2. ✅ Faz build (`pnpm build`)
3. ✅ Inicia o servidor (`pnpm start`)

## 📋 Arquivos de Configuração

Adicionei 3 arquivos para compatibilidade com Vercel:

| Arquivo | Função |
|---------|--------|
| `vercel.json` | Configuração de build e output |
| `.vercelignore` | Arquivos a ignorar no deploy |
| `package.json` (main) | Define entrada do servidor |

## ⚠️ Limitações na Vercel

### Funcionalidades que podem ter limitações:

1. **Banco de Dados**
   - Vercel não fornece MySQL grátis
   - Use: PlanetScale, Supabase, Railway, ou outro provedor

2. **Google Maps**
   - Requer API Key válida
   - Configure em Environment Variables

3. **OAuth Manus**
   - Requer configuração de callback URL
   - Adicione: `https://seu-dominio-vercel.vercel.app/api/oauth/callback`

4. **Timeout de Requisições**
   - Vercel tem limite de 60s em plano gratuito
   - Plano Pro: 900s

## 🔧 Troubleshooting

### Erro: "No entrypoint found"
✅ **Resolvido** - Adicionei `"main": "dist/index.js"` no package.json

### Erro: "Build failed"
- Verifique se todas as variáveis de ambiente estão definidas
- Veja os logs no dashboard da Vercel

### Erro: "Database connection refused"
- Verifique se `DATABASE_URL` está correta
- Certifique-se que o banco de dados aceita conexões remotas

## 💡 Recomendações

### Para Produção:

1. **Use um banco de dados gerenciado:**
   - PlanetScale (MySQL)
   - Supabase (PostgreSQL)
   - Railway (MySQL/PostgreSQL)

2. **Configure domínio customizado:**
   - Vercel → Settings → Domains
   - Aponte seu domínio para Vercel

3. **Ative CI/CD:**
   - Vercel faz deploy automático a cada push no main

4. **Monitore performance:**
   - Vercel Analytics
   - Vercel Speed Insights

## 📚 Recursos Úteis

- [Vercel Docs](https://vercel.com/docs)
- [Node.js on Vercel](https://vercel.com/docs/concepts/functions/serverless-functions)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Seu site está pronto para Vercel! 🚀**

Qualquer dúvida, consulte os logs de deploy no dashboard da Vercel.
