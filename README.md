# Which Quarter Is It? - Chrome Extension

A Chrome extension that displays the current fiscal quarter and shows how many days are remaining until the end of the quarter, right in your browser's toolbar.

## Features

- Displays the current fiscal quarter (Q1-Q4) in the extension popup
- Shows the start and end dates of the current quarter
- Counts down the days remaining in the current quarter
- Clean, minimal interface that's easy to read at a glance

## Fiscal Year Structure

This extension uses the following fiscal year structure:
- **Q1**: April 1 - June 30
- **Q2**: July 1 - September 30
- **Q3**: October 1 - December 31
- **Q4**: January 1 - March 31

## Installation and Setup

### Method 1: From Chrome Web Store (Recommended)
*(Coming soon!)*

### Method 2: Manual Installation (For Development or Testing)

#### Step 1: Download or Clone the Extension
- Clone this repository:
  ```bash
  git clone https://github.com/charlesRepo/which-quarter-is-it.git
  ```
- Or download the ZIP file and extract it to a folder

#### Step 2: Enable Developer Mode in Chrome
1. Open Google Chrome
2. Type `chrome://extensions/` in the address bar and press Enter
3. In the top-right corner, toggle the switch that says "Developer mode" to ON
   - This will reveal additional options

#### Step 3: Load the Extension
1. Click the "Load unpacked" button that appears after enabling Developer mode
2. Navigate to the folder where you cloned/downloaded the extension
3. Select the folder and click "Select Folder"
   - The extension should now appear in your extensions list

#### Step 4: Pin the Extension to Your Toolbar
1. Click the puzzle piece icon (Extensions) in your Chrome toolbar
2. Find "Which quarter is it?" in the list
3. Click the pin icon (📌) to pin it to your toolbar for easy access

#### Step 5: Access the Extension
- Click the extension icon in your toolbar to open the popup
- The current quarter and days remaining will be displayed

### Troubleshooting
- If you don't see the extension icon, try refreshing the page or restarting Chrome
- If you make changes to the code, click the refresh icon on the extension card in `chrome://extensions/` to update it
- Ensure you're using a recent version of Google Chrome (version 88 or later)

## Development

### Prerequisites
- Google Chrome browser
- Basic knowledge of web development (HTML, CSS, JavaScript)

### Building
1. Clone the repository:
   ```bash
   git clone https://github.com/charlesRepo/which-quarter-is-it.git
   cd which-quarter-is-it
   ```

2. Make your changes to the code

3. To test your changes:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Reload" on the extension card
   - Click the extension icon in your toolbar to test

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Chrome Extension API (Manifest V3)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Created with ❤️ by Charles Hanna
