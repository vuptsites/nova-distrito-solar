# Deployment na Netlify - Guia Importante

## ⚠️ AVISOS CRÍTICOS

Este projeto é um **full-stack Node.js + React** com backend integrado. A Netlify é otimizada para **sites estáticos**. Para hospedar aqui, você enfrentará limitações:

### Funcionalidades que NÃO funcionarão na Netlify:
- ❌ **Autenticação OAuth Manus** - Requer backend Node.js
- ❌ **Calculadora Solar** - Usa API backend (tRPC)
- ❌ **Google Maps com proxy Manus** - Requer autenticação backend
- ❌ **Banco de dados** - Sem suporte a MySQL/TiDB
- ❌ **APIs tRPC** - Sem suporte a servidor Node.js

### Funcionalidades que funcionarão:
- ✅ Design visual e layout
- ✅ Navegação entre seções
- ✅ Links para WhatsApp e Instagram
- ✅ Conteúdo estático

## 🚀 Alternativas Recomendadas

### Opção 1: Manus (RECOMENDADO) ⭐
```bash
# Simplesmente clique "Publish" na interface Manus
# Tudo funciona automaticamente
```
**Vantagens:**
- Todas as funcionalidades funcionam
- Domínio personalizado incluído
- Sem configuração necessária
- Suporte a OAuth, banco de dados, APIs

### Opção 2: Railway ou Render
```bash
# Ambas suportam Node.js full-stack
# Basta fazer push do repositório
```

### Opção 3: Vercel
```bash
# Otimizada para Next.js, mas suporta Node.js
# Requer algumas configurações
```

## 📦 Se insistir em usar Netlify...

### Passo 1: Extrair apenas o frontend
```bash
# O arquivo ZIP contém apenas os arquivos necessários
# Mas as funcionalidades backend não funcionarão
```

### Passo 2: Configurar no Netlify
1. Fazer upload do arquivo ZIP
2. Configurar build command: `pnpm build`
3. Configurar publish directory: `dist/public`

### Passo 3: Limitações esperadas
- Calculadora não salvará dados
- Google Maps pode não funcionar
- Formulários não enviarão dados
- Autenticação não funcionará

## 🔧 Estrutura do Projeto

```
nova-distrito-solar/
├── client/              # Frontend React
├── server/              # Backend Node.js/Express
├── drizzle/             # Schema do banco de dados
├── dist/                # Build compilado
└── dist/public/         # Frontend estático compilado
```

## 💡 Recomendação Final

**Use Manus!** É a forma mais simples e todas as funcionalidades funcionarão perfeitamente. Basta clicar "Publish" e pronto.

Se realmente precisa usar Netlify, considere:
1. Remover funcionalidades que dependem de backend
2. Usar serviços terceiros (Formspree para formulários, etc.)
3. Migrar para Railway/Render depois

---

**Dúvidas?** Entre em contato com o suporte Manus em https://help.manus.im
