# Game Press Kit Theme

A clean and minimal Jekyll theme for creating professional game press kits on GitHub Pages.

## 🚀 Quick Start

### Option 1: Use as Template (Recommended)

1. **Click "Use this template"** at the top of this page
2. **Name your repository** (e.g., `my-game-presskit`)
3. **Edit `_config.yml`** with your game information
4. **Add your images** to `assets/images/`
5. **Your press kit is live** at `https://yourusername.github.io/repository-name`

### Option 2: Fork the Repository

1. **Click "Fork"** at the top of this page
2. **Clone your forked repository** locally:
   ```bash
   git clone https://github.com/yourusername/jekyll-game-presskit-theme.git
   cd jekyll-game-presskit-theme
   ```
3. **Edit `_config.yml`** with your game information
4. **Add your images** to `assets/images/`
5. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Add my game press kit"
   git push origin main
   ```
6. **Enable GitHub Pages** in your repository settings
7. **Your press kit is live** at `https://yourusername.github.io/jekyll-game-presskit-theme`

### Which Option to Choose?

- **Use as Template**: Creates a clean copy, perfect for new projects
- **Fork**: Keeps connection to original, good for updates and contributions

## 📝 Configuration

Edit `_config.yml` to customize your press kit:

```yaml
# Site settings
title: "Your Game Title"
description: "Your game description"
url: "https://yourusername.github.io/repository-name"

# Google Analytics
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

#### Examples with Different Services:

```yaml
# Using Imgur
files:
  - "https://i.imgur.com/your-image-id.jpg"

# Using Cloudinary
files:
  - "https://res.cloudinary.com/your-cloud/image/upload/v1/your-image.jpg"

# Using GitHub (for images in your repo)
files:
  - "https://raw.githubusercontent.com/username/repo/main/images/screenshot.jpg"

# Using CDN
files:
  - "https://cdn.yourdomain.com/images/screenshot.jpg"
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

## 🎨 Customization

- **Colors & Layout**: Edit `assets/css/main.css`
- **Content**: All content is managed through `_config.yml`
- **Sections**: The theme includes Factsheet, Description, History, Features, Videos, Images, Logo, Selected Articles, Links, About, Team, and Contact

## 📊 Google Analytics

To enable Google Analytics:

1. **Get your GA4 ID** from [Google Analytics](https://analytics.google.com/)
2. **Replace the placeholder** in `_config.yml`:
   ```yaml
   google_analytics: "G-XXXXXXXXXX"  # Replace with your actual ID
   ```
3. **Deploy your site** - Analytics will be automatically included

The theme uses Google Analytics 4 (GA4) with the gtag.js implementation.

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

## 🛠️ Troubleshooting

### Images Not Displaying?

If images are not showing up:

1. **Check URLs**: Ensure image URLs in `_config.yml` are complete and accessible
2. **Test URLs**: Open image URLs directly in browser to verify they work
3. **Use HTTPS**: Prefer HTTPS URLs for better security and compatibility
4. **Check file formats**: Use common formats like PNG, JPG, or WEBP

### Common Issues

- **404 errors**: Verify image URLs are correct and accessible
- **Mixed content**: Use HTTPS URLs when your site is served over HTTPS
- **Slow loading**: Optimize image sizes (recommended max: 4MB per image)
- **CORS issues**: Host images on a CDN or your own domain

### 💡 Tips

- **Use CDN**: Services like Cloudinary, Imgur, or your own CDN for better performance
- **Optimize images**: Compress images before uploading
- **Test locally**: Run `bundle exec jekyll serve` to test before deploying

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

### For Contributors

If you've forked this repository and want to contribute back:

1. **Make your changes** in your forked repository
2. **Test locally** using `bundle exec jekyll serve`
3. **Create a pull request** to the original repository
4. **Describe your changes** clearly in the PR description

### For Template Users

If you used this as a template and want to share your press kit:

1. **Add your press kit** to the [Live Examples](#live-examples) section below
2. **Share on social media** with the hashtag `#GamePressKit`
3. **Credit the theme** by keeping the footer attribution

## 🌟 Live Examples

See this theme in action! Here are some press kits created with this template:

- **[Your Game Name](https://yourusername.github.io/your-game-presskit)** - Add your press kit here!
- **[Another Game](https://anotheruser.github.io/another-game-presskit)** - Add more examples here!

**Want to be featured?** Create your press kit and [open an issue](https://github.com/yourusername/jekyll-game-presskit-theme/issues) to add it to this list!

## 📄 License

MIT License - feel free to use this theme for your projects.

---

**Ready to showcase your game?** Click "Use this template" and start building your press kit! 🎮 