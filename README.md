# Game Press Kit Theme

A clean and minimal Jekyll theme for creating professional game press kits on GitHub Pages.

## ✨ Features

- **Clean & Professional Design** - Modern, minimalist layout perfect for press kits
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
- **Easy Customization** - All content managed through `_config.yml`
- **Dynamic Links** - Easy to add and manage additional links
- **Optimized Images** - Automatic image sizing and responsive grid layout
- **Fast Loading** - Optimized CSS and minimal dependencies
- **SEO Ready** - Open Graph and Twitter Card meta tags included

## 🚀 Quick Start

### 1. Fork this repository

Click the "Fork" button at the top of this page to create your own copy.

### 2. Enable GitHub Pages

1. Go to your forked repository
2. Click "Settings" tab
3. Scroll down to "GitHub Pages" section
4. Select "main" branch as source
5. Click "Save"

### 3. Customize Content

Edit `_config.yml` to add your game information:

```yaml
# Game Information
game:
  title: "Your Game Title"
  description: "Your game description"
  history: "Your game's story and background"
  features:
    - "Epic battles with unique bosses"
    - "Explore hand-crafted worlds"
    - "Unique gameplay experience"
  developer: "Your Studio Name"
  developer_description: "Your studio description"
  developer_url: "https://yourstudio.com"
  release_date: "2024"
  platforms: "PC, Console, Mobile"
  price: "USD $19.99"
  website: "https://yourgame.com"
  logo_download: "/assets/images/logo.zip"
  logo_files:
    - "game-logo.png"
    - "game-icon.png"
    - "game-banner.jpg"

# Additional Links
links:
  - name: "Website"
    url: "https://yourgame.com"
  - name: "Twitter"
    url: "https://twitter.com/yourgame"
  - name: "Facebook"
    url: "https://facebook.com/yourgame"
  - name: "YouTube"
    url: "https://youtube.com/yourgame"

# Team Information
team:
  - name: "Your Name"
    role: "Game Design / Programming"
  - name: "Artist Name"
    role: "Art Direction / Assets"
  - name: "Designer Name"
    role: "Level Design / UI"

# Contact Information
contact:
  inquiries: "contact@yourstudio.com"
  social_media: "@yourstudio"
  social_url: "https://twitter.com/yourstudio"

# About Studio
about:
  description: "Your studio description goes here."

# Images - Add your game screenshots here
images:
  - "screenshot1.jpg"
  - "screenshot2.jpg"
  - "screenshot3.jpg"
```

### 4. Test Locally (Optional)

To preview your changes before deploying:

1. Install dependencies:
```bash
bundle install
```

2. Start the local server:
```bash
bundle exec jekyll serve
```

3. Open your browser and go to `http://localhost:4000`

4. Make changes to `_config.yml` and see them update automatically!

### 5. Add Images

Place your game images in `assets/images/`:

**Screenshots:**
- `screenshot1.jpg` - Main gameplay screenshot
- `screenshot2.jpg` - Second gameplay screenshot  
- `screenshot3.jpg` - Third gameplay screenshot

**Logo Files:**
- `game-logo.png` - Main game logo (512x512px recommended)
- `game-icon.png` - Game icon (256x256px recommended)
- `game-banner.jpg` - Game banner (1200x630px recommended)

**Image Specifications:**
- **Format**: JPG for screenshots, PNG for logos
- **Size**: Maximum 2MB per image
- **Resolution**: 1920x1080 or 1280x720 for screenshots

### 6. Your site is live!

Your press kit will be available at `https://yourusername.github.io/repository-name`

## 📋 Configuration Options

### Game Information
- `game.title` - Game title (appears in sidebar)
- `game.description` - Game description
- `game.history` - Game story and background
- `game.features` - List of game features
- `game.developer` - Studio/developer name
- `game.developer_description` - Studio description
- `game.developer_url` - Link to studio website
- `game.release_date` - Release date
- `game.platforms` - Available platforms
- `game.price` - Game price
- `game.website` - Game website URL
- `game.logo_download` - Logo download link
- `game.logo_files` - Array of logo filenames

### Additional Links
- `links` - Array of additional links with `name` and `url`

### Team Information
- `team` - Array of team members with `name` and `role`

### Contact Information
- `contact.inquiries` - Contact email
- `contact.social_media` - Social media handle
- `contact.social_url` - Social media URL

### About Studio
- `about.description` - Studio description

### Images
- `images` - Array of screenshot filenames

## 🏗️ Structure

```
jekyll-game-presskit-theme/
├── _config.yml          # Site configuration with game data
├── _layouts/            # Page layouts
│   └── default.html     # Main layout template
├── assets/              # CSS, JS, and images
│   ├── css/
│   │   └── main.css     # Main stylesheet
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/          # Game images (screenshots, logos)
├── index.html           # Main press kit page
├── Gemfile              # Jekyll dependencies
├── GITHUB_SETUP.md      # Detailed GitHub Pages setup guide
└── README.md           # This file
```

## 🎨 Customization

### Colors and Styling

Edit `assets/css/main.css` to customize:
- Colors and typography
- Layout spacing and grid system
- Responsive breakpoints
- Image display and sizing

### Layout Features

The theme uses a modern responsive layout:
- **Fixed Sidebar**: Navigation and game title
- **Main Content**: Organized sections with grid layout
- **Responsive Images**: Automatic sizing and grid display
- **Mobile Optimized**: Single column layout on mobile devices

## 📄 Sections

The press kit includes these organized sections:

1. **Factsheet** - Basic game information (developer, release date, platforms, price)
2. **Description** - Game overview and description
3. **History** - Game story and background
4. **Features** - Key gameplay features list
5. **Videos** - Game trailers and gameplay videos (placeholder)
6. **Images** - Screenshots in responsive grid layout
7. **Logo & Icon** - Downloadable logo assets
8. **Additional Links** - External resources and social media
9. **About Studio** - Developer information
10. **Team** - Credits and team members
11. **Contact** - Contact information

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Local Development Issues

**Problem**: `bundler: command not found: jekyll`
**Solution**: Run `bundle install` first

**Problem**: Permission errors during `bundle install`
**Solution**: Try `bundle install --path vendor/bundle`

**Problem**: Jekyll build fails with YAML errors
**Solution**: Check `_config.yml` syntax - ensure proper indentation (use spaces, not tabs)

**Problem**: Images not displaying
**Solution**: 
- Ensure images are in `assets/images/` folder
- Check that filenames match exactly with `_config.yml`
- Verify image formats are supported (JPG, PNG, WebP)

**Problem**: Site looks different locally vs GitHub Pages
**Solution**: This is normal - GitHub Pages may use different Jekyll versions. Test the final result on GitHub Pages.

### Common Issues

**Images too large**: The theme automatically sizes images to fit the layout. If you need larger images, edit the CSS in `assets/css/main.css`.

**Links not working**: Make sure URLs in `_config.yml` include `http://` or `https://` for external links.

**Layout broken**: Check that all YAML arrays in `_config.yml` are properly formatted with consistent indentation.

## 📚 Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://pages.github.com/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## 📄 License

This theme is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

---

**Note**: This theme is designed to be simple, clean, and professional. It focuses on presenting your game information clearly without unnecessary distractions. All content is managed through `_config.yml` for easy customization and maintenance. 