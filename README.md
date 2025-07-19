# Game Press Kit Theme

A clean and minimal Jekyll theme for creating professional game press kits on GitHub Pages.

## 🚀 Quick Start

1. **Click "Use this template"** at the top of this page
2. **Name your repository** (e.g., `my-game-presskit`)
3. **Edit `_config.yml`** with your game information
4. **Add your images** to `assets/images/`
5. **Your press kit is live** at `https://yourusername.github.io/repository-name`

## 📝 Configuration

Edit `_config.yml` to customize your press kit:

```yaml
# Site settings
title: "Your Game Title"
description: "Your game description"
url: "https://yourusername.github.io/repository-name"

# Game Information
game:
  title: "Your Game Title"
  description: "Your game description"
  history: "Your game's story"
  features:
    - "Feature 1"
    - "Feature 2"
  developer: "Your Studio"
  developer_url: "https://yourstudio.com"
  release_date: "2024"
  platforms:
    - name: "Steam"
      url: "https://store.steampowered.com/app/yourgame"
    - name: "Nintendo Switch"
      url: "https://nintendo.com/yourgame"
  price:
    - "USD $19.99"
    - "USD $29.99"
  social:
    - name: "Twitter"
      url: "https://twitter.com/yourgame"
    - name: "Facebook"
      url: "https://facebook.com/yourgame"
# Logo & Icon
logo:
  download: "#"
  files:
    - "game-logo.png"
    - "game-icon.png"

# Images
images:
  download: "#"
  files:
    - "screenshot1.jpg"
    - "screenshot2.jpg"

# Videos
videos:
  - title: "Gameplay Trailer"
    url: "https://www.youtube.com/embed/VIDEO_ID"
    description: "Official gameplay trailer showcasing the main features"
  - title: "Developer Interview"
    url: "https://www.youtube.com/embed/VIDEO_ID"
    description: "Behind the scenes interview with the development team"

# Selected Articles
selected_articles:
  - quote: "This game is absolutely amazing! A masterpiece of modern gaming."
    author: "John Doe"
    link: "https://gamingreview.com/article1"
    name: "Gaming Review"
  - quote: "Innovative gameplay mechanics that will change the industry."
    author: "Jane Smith"
    link: "https://techgaming.com/article2"
    name: "Tech Gaming"

# Additional Links
links:
  - name: "Website"
    url: "https://yourgame.com"
  - name: "Twitter"
    url: "https://twitter.com/yourgame"



# Team
team:
  - name: "Your Name"
    role: "Game Designer"

# Contact
contact:
  - name: "General Inquiries"
    email: "contact@studio.com"
  - name: "Twitter"
    url: "https://twitter.com/studio"

# About Studio
about:
  description: "Your studio description"
```

## 🖼️ Adding Images

Place your images in `assets/images/`:

- **Screenshots**: `screenshot1.jpg`, `screenshot2.jpg`, etc.
- **Logos**: `game-logo.png`, `game-icon.png`, etc.

## 🎨 Customization

- **Colors & Layout**: Edit `assets/css/main.css`
- **Content**: All content is managed through `_config.yml`
- **Sections**: The theme includes Factsheet, Description, History, Features, Images, Logo, Links, About, Team, and Contact

## 📱 Features

- ✅ Responsive design (mobile-friendly)
- ✅ Clean, professional layout
- ✅ Easy customization via `_config.yml`
- ✅ SEO optimized
- ✅ Fast loading
- ✅ GitHub Pages ready

## 🔧 Local Development

```bash
# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## 📄 Sections

Your press kit will include:
1. **Factsheet** - Basic game info (includes social media)
2. **Description** - Game overview
3. **History** - Game story
4. **Features** - Key features
5. **Videos** - Gameplay trailers and interviews
6. **Images** - Screenshots (with download link)
7. **Logo & Icon** - Downloadable assets
8. **Selected Articles** - Press reviews and quotes
9. **Additional Links** - External resources
10. **About Studio** - Developer info
11. **Team** - Credits
12. **Contact** - Contact info

## 🤝 Contributing

Found a bug or have a suggestion? [Open an issue](https://github.com/yourusername/jekyll-game-presskit-theme/issues) or submit a pull request!

## 📄 License

MIT License - feel free to use this theme for your projects.

---

**Ready to showcase your game?** Click "Use this template" and start building your press kit! 🎮 