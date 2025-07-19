# Game Press Kit Theme

A clean and minimal Jekyll theme for creating professional game press kits on GitHub Pages.

## Quick Start

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
    - "logo.png"
    - "icon.png"
    - "banner.jpg"

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
  more_info: "More information"

# Images
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
- Screenshots
- Logo files
- Press kit images

### 6. Your site is live!

Your press kit will be available at `https://yourusername.github.io/repository-name`

## Configuration Options

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
- `game.logo_files` - Array of logo filenames (logo.png, icon.png, etc.)

### Team Information
- `team` - Array of team members with `name` and `role`

### Contact Information
- `contact.inquiries` - Contact email
- `contact.social_media` - Social media handle
- `contact.social_url` - Social media URL

### About Studio
- `about.description` - Studio description
- `about.more_info` - Additional information text

### Images
- `images` - Array of image filenames

## Structure

```
jekyll-game-presskit-theme/
├── _config.yml          # Site configuration with game data
├── _layouts/            # Page layouts
├── assets/              # CSS, JS, and images
│   ├── css/
│   └── js/
├── index.html           # Main press kit page (uses _config.yml data)
├── Gemfile              # Jekyll dependencies
└── README.md           # This file
```

## Customization

### Colors and Styling

Edit `assets/css/main.css` to customize:
- Colors
- Typography
- Layout spacing
- Responsive breakpoints

### Layout

The theme uses a two-column layout:
- **Left Sidebar**: Navigation and game title
- **Main Content**: Game information in organized sections

## Sections

The press kit includes these sections:
1. **Factsheet** - Basic game information
2. **Description** - Game overview
3. **History** - Game story and background
4. **Features** - Key gameplay features
5. **Videos** - Game trailers and gameplay
6. **Images** - Screenshots and artwork
7. **Logo & Icon** - Downloadable assets
8. **Additional Links** - External resources
9. **About Studio** - Developer information
10. **Team** - Credits and team members
11. **Contact** - Contact information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Local Development Issues

**Problem**: `bundler: command not found: jekyll`
**Solution**: Run `bundle install` first

**Problem**: Permission errors during `bundle install`
**Solution**: Try `bundle install --path vendor/bundle`

**Problem**: Jekyll build fails
**Solution**: Make sure all YAML syntax in `_config.yml` is correct (proper indentation)

**Problem**: Site looks different locally vs GitHub Pages
**Solution**: This is normal - GitHub Pages may use different Jekyll versions. Test the final result on GitHub Pages.

## License

This theme is open source and available under the [MIT License](LICENSE).

---

**Note**: This theme is designed to be simple and clean. It focuses on presenting your game information clearly and professionally without unnecessary distractions. All content is managed through `_config.yml` for easy customization. 