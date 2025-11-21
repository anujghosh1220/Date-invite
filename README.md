# Date Invitation Webpage

A beautiful and interactive web page designed to ask someone special on a date. Features smooth animations, responsive design, and a playful user interface.

## Features

- Interactive buttons with visual feedback
- Animated heart and sparkle effects
- Responsive design that works on all devices
- Smooth animations and transitions
- Playful messaging system

## How to Run

### Option 1: Open Directly in Browser
1. Simply double-click on the `index.html` file to open it in your default web browser.

### Option 2: Using a Local Server (Recommended)
For the best experience, it's recommended to run this project using a local server:

1. **Using Python (Built-in server):**
   - Open a terminal in the project directory
   - Run one of these commands based on your Python version:
     ```
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     ```
   - Open your browser and go to: `http://localhost:8000`

2. **Using Node.js with http-server:**
   - Install http-server globally (if not already installed):
     ```
     npm install -g http-server
     ```
   - Run the server:
     ```
     http-server -p 8000
     ```
   - Open your browser and go to: `http://localhost:8000`

## Project Structure

```
ask-date/
├── assets/
│   ├── erm-fingers.gif
│   ├── oh-yay.gif
│   └── date.png
├── index.html      # Main HTML file
├── main.js         # JavaScript for interactivity
├── styles.css      # Styling
└── README.md       # This file
```

## Customization

1. **Change the text:**
   - Open `index.html` and modify the text inside the elements with classes `title`, `card-text`, and the messages in the `messages` div.

2. **Change images:**
   - Replace the images in the `assets` folder with your own, keeping the same filenames.
   - Or update the image paths in `index.html` to point to your new images.

3. **Styling:**
   - Customize colors, fonts, and layout in `styles.css`.
   - The color scheme uses a soft pink/orange gradient background with complementary text colors.

## Dependencies

- Google Fonts (Poppins, Montserrat, Tangerine)
- No external JavaScript libraries required

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS, Android)

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created with ❤️ by [Your Name]

---

💡 **Tip:** For an extra special touch, consider hosting this on a personal domain or GitHub Pages to share it with your special someone!
