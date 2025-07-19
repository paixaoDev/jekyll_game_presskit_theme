# Configuração do Projeto no GitHub

## Passos para configurar este projeto Jekyll no GitHub:

### 1. Criar um novo repositório no GitHub

1. Vá para [github.com](https://github.com)
2. Clique em "New repository" ou "Novo repositório"
3. Dê um nome ao repositório (ex: `meu-jogo-presskit`)
4. Deixe como público (public)
5. **NÃO** inicialize com README, .gitignore ou license (já temos esses arquivos)
6. Clique em "Create repository"

### 2. Conectar o repositório local ao GitHub

Execute estes comandos no terminal (substitua `SEU_USUARIO` e `NOME_DO_REPOSITORIO`):

```bash
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git branch -M main
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Vá para o seu repositório no GitHub
2. Clique na aba "Settings" (Configurações)
3. Role para baixo até encontrar "Pages" no menu lateral esquerdo
4. Em "Source", selecione "Deploy from a branch"
5. Em "Branch", selecione "main" e deixe a pasta como "/ (root)"
6. Clique em "Save"

### 4. Personalizar o conteúdo

Edite o arquivo `_config.yml` para adicionar as informações do seu jogo:

```yaml
# Game Information
game:
  title: "Nome do Seu Jogo"
  description: "Descrição do seu jogo"
  history: "História e background do jogo"
  features:
    - "Característica 1"
    - "Característica 2"
    - "Característica 3"
  developer: "Nome do Estúdio"
  developer_description: "Descrição do estúdio"
  developer_url: "https://seuestudio.com"
  release_date: "2024"
  platforms: "PC, Console, Mobile"
  price: "R$ 29,90"
  website: "https://seujogo.com"
  logo_download: "/assets/images/logo.zip"
  logo_files:
    - "logo.png"
    - "icon.png"
    - "banner.jpg"

# Team Information
team:
  - name: "Seu Nome"
    role: "Game Design / Programação"
  - name: "Nome do Artista"
    role: "Direção de Arte / Assets"

# Contact Information
contact:
  inquiries: "contato@seuestudio.com"
  social_media: "@seuestudio"
  social_url: "https://twitter.com/seuestudio"

# About Studio
about:
  description: "Descrição do estúdio aqui."

# Images
images:
  - "screenshot1.jpg"
  - "screenshot2.jpg"
  - "screenshot3.jpg"
```

### 5. Adicionar imagens

1. Crie a pasta `assets/images/` se não existir
2. Adicione suas imagens do jogo nesta pasta
3. Atualize a lista de imagens no `_config.yml`

### 6. Fazer commit e push das mudanças

```bash
git add .
git commit -m "Personalizar conteúdo do press kit"
git push
```

### 7. Aguardar o deploy

O GitHub Pages levará alguns minutos para fazer o deploy. Você receberá um email quando estiver pronto.

### 8. Acessar seu site

Seu press kit estará disponível em:
`https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO`

## Solução de Problemas

### Se o site não aparecer:
1. Verifique se o GitHub Pages está ativado nas configurações
2. Aguarde alguns minutos para o deploy
3. Verifique se não há erros no arquivo `_config.yml`

### Se houver erros de build:
1. Vá para a aba "Actions" no seu repositório
2. Verifique os logs de build para identificar o problema
3. Corrija os erros no `_config.yml` ou outros arquivos

### Para desenvolvimento local (opcional):
Se quiser testar localmente antes de fazer push:

```bash
# Instalar Ruby e Jekyll (se não tiver)
# No macOS: brew install ruby
# No Ubuntu: sudo apt-get install ruby-full

# Instalar dependências
bundle install

# Executar servidor local
bundle exec jekyll serve
```

Acesse `http://localhost:4000` para ver o site localmente. 