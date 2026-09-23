# siticop-webpage

Site do SITICOP-MG (siticopmg.org.br).

## Branches

- `main`: página de contingência (manutenção), estática, publicada no domínio.
- `next`: novo site em Next.js, revisado pelas URLs de preview da Vercel. O merge em `main` coloca o site novo no ar.

## Página de contingência

HTML e CSS puros em `public/`, sem build e sem JavaScript.

```
public/
  index.html                 página única: contatos, pedido de CCT, homologação, endereços, boletos
  404.html                   qualquer URL desconhecida (inclui as antigas do WordPress)
  styles.css
  fonts/                     Manrope (self-hosted)
  img/                       logo, favicon e imagem do topo do site antigo
  relatorios-de-visita/      27 PDFs de fiscalização baixados do site antigo
vercel.json                  headers de segurança, cache e redirecionamentos das URLs antigas
```

Rodar localmente:

```bash
python3 -m http.server 4173 --directory public
```

O servidor local não aplica o `vercel.json`. Redirecionamentos e headers só valem no deploy da Vercel.

### URLs antigas

| URL antiga | Destino |
|---|---|
| `/homologacao/` | `/#homologacao` |
| `/pontos-de-apoio/` | `/#onde-estamos` |
| `/relatorios-de-visita/` | `/` |
| `/wp-content/uploads/2024/04/*.pdf` | `/relatorios-de-visita/*.pdf` |
