# Game Press Kit Theme

A clean, modern, and professional Jekyll theme for creating stunning game press kits. Perfect for indie developers, game studios, and publishers who want to showcase their games with style.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with beautiful typography
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Loading**: Optimized for speed and performance
- 🔧 **Easy Customization**: Everything configurable via `_config.yml`
- 📊 **Google Analytics**: Built-in GA4 support
- 🖼️ **Flexible Images**: Support for any image hosting service
- 🎬 **Video Integration**: YouTube and Vimeo support
- 📝 **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- 🚀 **GitHub Pages Ready**: Deploy instantly to GitHub Pages
- 🎮 **Game-Focused**: Designed specifically for game press kits

## 🚀 Quick Start

### Option 1: Use as Template (Recommended)

1. **Click "Use this template"** at the top of this page
2. **Name your repository** (e.g., `my-game-presskit`)
3. **Edit `_config.yml`** with your game information
4. **Add your images** using URLs or local files
5. **Your press kit is live** at `https://yourusername.github.io/repository-name`

### Option 2: Fork the Repository

1. **Click "Fork"** at the top of this page
2. **Clone your forked repository** locally:
   ```bash
   git clone https://github.com/yourusername/jekyll-game-presskit-theme.git
   cd jekyll-game-presskit-theme
   ```
3. **Edit `_config.yml`** with your game information
4. **Add your images** using URLs or local files
5. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Add my game press kit"
   git push origin main
   ```
6. **Enable GitHub Pages** in your repository settings
7. **Your press kit is live** at `https://yourusername.github.io/jekyll-game-presskit-theme`

## 📝 Configuration

Edit `_config.yml` to customize your press kit:

```yaml
# Site settings
title: "Your Game Title"
description: "Your game description"
url: "https://yourusername.github.io/repository-name"
lang: "en"

# Google Analytics (Optional)
google_analytics: "G-XXXXXXXXXX"  # Replace with your Google Analytics ID

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
    - "https://yourdomain.com/images/game-logo.png"
    - "https://yourdomain.com/images/game-icon.png"

# Images
images:
  download: "#"
  files:
    - "https://yourdomain.com/images/screenshot1.jpg"
    - "https://yourdomain.com/images/screenshot2.jpg"

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

### Option 1: Using Full URLs (Recommended)

Add complete image URLs directly in `_config.yml`:

```yaml
# Logo & Icon
logo:
  download: "#"
  files:
    - "https://yourdomain.com/images/game-logo.png"
    - "https://yourdomain.com/images/game-icon.png"
    - "https://yourdomain.com/images/game-banner.png"

# Images (Screenshots)
images:
  download: "#"
  files:
    - "https://yourdomain.com/images/screenshot1.jpg"
    - "https://yourdomain.com/images/screenshot2.jpg"
    - "https://yourdomain.com/images/screenshot3.jpg"
```

### Option 2: Using Local Assets

Place your images in `assets/images/` and use relative paths:

```yaml
logo:
  files:
    - "/assets/images/game-logo.png"
    - "/assets/images/game-icon.png"

images:
  files:
    - "/assets/images/screenshot1.jpg"
    - "/assets/images/screenshot2.jpg"
```

### 🎯 Recommended Image Sizes

- **Logos**: 800x400px (16:9 ratio)
- **Icons**: 512x512px (square)
- **Screenshots**: 1920x1080px (16:9 ratio)
- **Banners**: 1200x630px (social media optimized)

### 📝 Supported Formats

- **PNG**: For logos and icons (transparency support)
- **JPG/JPEG**: For screenshots and photos
- **WEBP**: For better compression
- **GIF**: For simple animations

## 📊 Google Analytics

To enable Google Analytics:

1. **Get your GA4 ID** from [Google Analytics](https://analytics.google.com/)
2. **Replace the placeholder** in `_config.yml`:
   ```yaml
   google_analytics: "G-XXXXXXXXXX"  # Replace with your actual ID
   ```
3. **Deploy your site** - Analytics will be automatically included

The theme uses Google Analytics 4 (GA4) with the gtag.js implementation.

## 🔧 Local Development

```bash
# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Visit http://localhost:4000
```
## 🤝 Contributing

Found a bug or have a suggestion? [Open an issue](https://github.com/yourusername/jekyll-game-presskit-theme/issues) or submit a pull request!

### For Contributors

If you've forked this repository and want to contribute back:

1. **Make your changes** in your forked repository
2. **Test locally** using `bundle exec jekyll serve`
3. **Create a pull request** to the original repository
4. **Describe your changes** clearly in the PR description

## 🌟 Live Examples

See this theme in action! Here are some press kits created with this template:

- **[The tale  of dragons ans oceans](https://taledragonsoceans.com.br/)**

**Want to be featured?** Create your press kit and [open an issue](https://github.com/yourusername/jekyll-game-presskit-theme/issues) to add it to this list!

## 📄 License

MIT License - feel free to use this theme for your projects.

## 🙏 Acknowledgments

This press kit theme was inspired by [presskit()](https://dopresskit.com/) by [Rami Ismail](https://twitter.com/tha_rami) of [Vlambeer](https://vlambeer.com/).

## 🌍 Other Languages

- [Português Brasileiro](README.pt-BR.md) - Leia em português 