# Silvia Braga — Psicologia Cognitivo-Comportamental

Landing page institucional da psicóloga Silvia Sant'Anna Braga dos Santos
(CRP 12/00853) — psicoterapia online para mulheres.

## Stack

Site **100% estático**, sem etapa de build e sem dependências de Node:

- **HTML** — `index.html`
- **CSS puro** — `css/new-age.css` (editável diretamente)
- **JavaScript vanilla** — `js/new-age.js` (sem jQuery)
- **Imagens** — `img/`

Bootstrap 5, Font Awesome 6 e as fontes do Google são carregados via CDN
diretamente no `index.html` — não há `node_modules` nem `vendor/`.

## Como rodar localmente

Basta servir a pasta com qualquer servidor estático, por exemplo:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

Ou simplesmente abra o `index.html` no navegador.

## Como editar

- **Estilos:** edite `css/new-age.css` diretamente.
- **Comportamento:** edite `js/new-age.js` (navbar que encolhe ao rolar e
  fechamento do menu mobile ao clicar num link). A rolagem suave usa
  `scroll-behavior: smooth` em CSS.
- **Conteúdo:** edite o `index.html`.

## Deploy

É só publicar os arquivos estáticos no servidor (Apache, Nginx, etc.).
O `.htaccess` incluído cuida da configuração do Apache.

---

Baseado no tema [Start Bootstrap - New Age](https://startbootstrap.com/template-overviews/new-age)
(MIT License). Veja `LICENSE`.
