# Tema de Press Kit para Jogos

Um tema Jekyll limpo, moderno e profissional para criar press kits impressionantes para jogos. Perfeito para desenvolvedores independentes, estúdios de jogos e publishers que querem mostrar seus jogos com estilo.

## ✨ Características

- 🎨 **Design Moderno**: Layout limpo e profissional com tipografia bonita
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Carregamento Rápido**: Otimizado para velocidade e performance
- 🔧 **Fácil Customização**: Tudo configurável via `_config.yml`
- 📊 **Google Analytics**: Suporte integrado ao GA4
- 🖼️ **Imagens Flexíveis**: Suporte para qualquer serviço de hospedagem de imagens
- 🎬 **Integração de Vídeo**: Suporte para YouTube e Vimeo
- 📝 **SEO Otimizado**: Meta tags, Open Graph e Twitter Cards
- 🚀 **Pronto para GitHub Pages**: Deploy instantâneo no GitHub Pages
- 🎮 **Focado em Jogos**: Projetado especificamente para press kits de jogos

## 🚀 Início Rápido

### Opção 1: Usar como Template (Recomendado)

1. **Clique em "Use this template"** no topo desta página
2. **Nomeie seu repositório** (ex: `meu-jogo-presskit`)
3. **Edite `_config.yml`** com as informações do seu jogo
4. **Adicione suas imagens** usando URLs ou arquivos locais
5. **Seu press kit está no ar** em `https://seuusuario.github.io/nome-do-repositorio`

### Opção 2: Fazer Fork do Repositório

1. **Clique em "Fork"** no topo desta página
2. **Clone seu repositório forkado** localmente:
   ```bash
   git clone https://github.com/seuusuario/jekyll-game-presskit-theme.git
   cd jekyll-game-presskit-theme
   ```
3. **Edite `_config.yml`** com as informações do seu jogo
4. **Adicione suas imagens** usando URLs ou arquivos locais
5. **Faça commit e push** das suas alterações:
   ```bash
   git add .
   git commit -m "Adicionar meu press kit de jogo"
   git push origin main
   ```
6. **Ative o GitHub Pages** nas configurações do repositório
7. **Seu press kit está no ar** em `https://seuusuario.github.io/jekyll-game-presskit-theme`

## 📝 Configuração

Edite `_config.yml` para personalizar seu press kit:

```yaml
# Configurações do site
title: "Nome do Seu Jogo"
description: "Descrição do seu jogo"
url: "https://seuusuario.github.io/nome-do-repositorio"
lang: "pt-BR"

# Google Analytics (Opcional)
google_analytics: "G-XXXXXXXXXX"  # Substitua pelo seu ID do Google Analytics

# Informações do Jogo
game:
  title: "Nome do Seu Jogo"
  description: "Descrição do seu jogo"
  history: "História do seu jogo"
  features:
    - "Recurso 1"
    - "Recurso 2"
  developer: "Seu Estúdio"
  developer_url: "https://seuestudio.com"
  release_date: "2024"
  platforms:
    - name: "Steam"
      url: "https://store.steampowered.com/app/seujogo"
    - name: "Nintendo Switch"
      url: "https://nintendo.com/seujogo"
  price:
    - "R$ 29,90"
    - "R$ 39,90"
  social:
    - name: "Twitter"
      url: "https://twitter.com/seujogo"
    - name: "Facebook"
      url: "https://facebook.com/seujogo"

# Logo e Ícone
logo:
  download: "#"
  files:
    - "https://seudominio.com/images/logo-jogo.png"
    - "https://seudominio.com/images/icone-jogo.png"

# Imagens
images:
  download: "#"
  files:
    - "https://seudominio.com/images/screenshot1.jpg"
    - "https://seudominio.com/images/screenshot2.jpg"

# Vídeos
videos:
  - title: "Trailer de Gameplay"
    url: "https://www.youtube.com/embed/ID_DO_VIDEO"
    description: "Trailer oficial de gameplay mostrando os principais recursos"
  - title: "Entrevista com Desenvolvedores"
    url: "https://www.youtube.com/embed/ID_DO_VIDEO"
    description: "Entrevista nos bastidores com a equipe de desenvolvimento"

# Artigos Selecionados
selected_articles:
  - quote: "Este jogo é absolutamente incrível! Uma obra-prima dos jogos modernos."
    author: "João Silva"
    link: "https://reviewjogos.com/artigo1"
    name: "Review de Jogos"
  - quote: "Mecânicas de gameplay inovadoras que vão mudar a indústria."
    author: "Maria Santos"
    link: "https://techjogos.com/artigo2"
    name: "Tech Jogos"

# Links Adicionais
links:
  - name: "Website"
    url: "https://seujogo.com"
  - name: "Twitter"
    url: "https://twitter.com/seujogo"

# Equipe
team:
  - name: "Seu Nome"
    role: "Game Designer"

# Contato
contact:
  - name: "Inquéritos Gerais"
    email: "contato@estudio.com"
  - name: "Twitter"
    url: "https://twitter.com/estudio"

# Sobre o Estúdio
about:
  description: "Descrição do seu estúdio"
```

## 🖼️ Adicionando Imagens

### Opção 1: Usando URLs Completas (Recomendado)

Adicione URLs completas de imagens diretamente no `_config.yml`:

```yaml
# Logo e Ícone
logo:
  download: "#"
  files:
    - "https://seudominio.com/images/logo-jogo.png"
    - "https://seudominio.com/images/icone-jogo.png"
    - "https://seudominio.com/images/banner-jogo.png"

# Imagens (Screenshots)
images:
  download: "#"
  files:
    - "https://seudominio.com/images/screenshot1.jpg"
    - "https://seudominio.com/images/screenshot2.jpg"
    - "https://seudominio.com/images/screenshot3.jpg"
```

#### Exemplos com Diferentes Serviços:

```yaml
# Usando Imgur
files:
  - "https://i.imgur.com/seu-id-da-imagem.jpg"

# Usando Cloudinary
files:
  - "https://res.cloudinary.com/seu-cloud/image/upload/v1/sua-imagem.jpg"

# Usando GitHub (para imagens no seu repo)
files:
  - "https://raw.githubusercontent.com/usuario/repo/main/images/screenshot.jpg"

# Usando CDN
files:
  - "https://cdn.seudominio.com/images/screenshot.jpg"
```

### Opção 2: Usando Arquivos Locais

Coloque suas imagens em `assets/images/` e use caminhos relativos:

```yaml
logo:
  files:
    - "/assets/images/logo-jogo.png"
    - "/assets/images/icone-jogo.png"

images:
  files:
    - "/assets/images/screenshot1.jpg"
    - "/assets/images/screenshot2.jpg"
```

### 🎯 Tamanhos Recomendados

- **Logos**: 800x400px (proporção 16:9)
- **Ícones**: 512x512px (quadrado)
- **Screenshots**: 1920x1080px (proporção 16:9)
- **Banners**: 1200x630px (otimizado para redes sociais)

### 📝 Formatos Suportados

- **PNG**: Para logos e ícones (suporte a transparência)
- **JPG/JPEG**: Para screenshots e fotos
- **WEBP**: Para melhor compressão
- **GIF**: Para animações simples

## 🎨 Personalização

### Cores e Layout
Edite `assets/css/main.css` para personalizar:
- Cores e tipografia
- Espaçamento e grid do layout
- Breakpoints responsivos
- Efeitos de animação

### Conteúdo
Todo o conteúdo é gerenciado através do `_config.yml`:
- Informações do jogo
- Imagens e vídeos
- Detalhes da equipe e contato
- Links de redes sociais

### Seções
O tema inclui estas seções:
1. **Factsheet** - Informações básicas do jogo
2. **Description** - Visão geral do jogo
3. **History** - História do jogo
4. **Features** - Recursos principais
5. **Videos** - Trailers de gameplay
6. **Images** - Screenshots
7. **Logo & Icon** - Assets para download
8. **Selected Articles** - Reviews da imprensa
9. **Additional Links** - Recursos externos
10. **About Studio** - Informações do desenvolvedor
11. **Team** - Créditos
12. **Contact** - Informações de contato

## 📊 Google Analytics

Para ativar o Google Analytics:

1. **Obtenha seu ID GA4** no [Google Analytics](https://analytics.google.com/)
2. **Substitua o placeholder** no `_config.yml`:
   ```yaml
   google_analytics: "G-XXXXXXXXXX"  # Substitua pelo seu ID real
   ```
3. **Faça deploy do site** - O Analytics será incluído automaticamente

O tema usa Google Analytics 4 (GA4) com a implementação gtag.js.

## 🔧 Desenvolvimento Local

```bash
# Instalar dependências
bundle install

# Iniciar servidor local
bundle exec jekyll serve

# Visitar http://localhost:4000
```

## 🤝 Contribuindo

Encontrou um bug ou tem uma sugestão? [Abra uma issue](https://github.com/seuusuario/jekyll-game-presskit-theme/issues) ou envie um pull request!

### Para Contribuidores

Se você fez fork deste repositório e quer contribuir de volta:

1. **Faça suas alterações** no seu repositório forkado
2. **Teste localmente** usando `bundle exec jekyll serve`
3. **Crie um pull request** para o repositório original
4. **Descreva suas alterações** claramente na descrição do PR


## 🌟 Exemplos ao Vivo

Veja este tema em ação! Aqui estão alguns press kits criados com este template:

- **[The tale  of dragons ans oceans](https://taledragonsoceans.com.br/)**

**Quer ser destacado?** Crie seu press kit e [abra uma issue](https://github.com/seuusuario/jekyll-game-presskit-theme/issues) para adicioná-lo a esta lista!

## 📄 Licença

Licença MIT - sinta-se livre para usar este tema em seus projetos.

## 🙏 Agradecimentos

Este tema de press kit foi inspirado no [presskit()](https://dopresskit.com/) de [Rami Ismail](https://twitter.com/tha_rami) da [Vlambeer](https://vlambeer.com/).

---

**Pronto para mostrar seu jogo?** Clique em "Use this template" e comece a construir seu press kit! 🎮 