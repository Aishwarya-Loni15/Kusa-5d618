# ✨ Birthday Celebration Interactive Website

An award-winning, interactive, single-page birthday celebration website designed for **[Name/Nickname]**. Built with modern HTML5, Tailwind CSS, Web Audio API, Canvas Confetti, and 3D card interactions.

---

## 🌟 Key Features & Interactive Sections

1. **Aesthetic Themes Switcher**:
   - **Cosmic Stargazer** (Deep navy/midnight purple gradient with gold & floating particles)
   - **Champagne & Rose Gold** (Warm editorial tones, silk cream & rose gold glow)
   - **Cozy Retro Scrapbook** (Vintage paper aesthetic & parchment textures)

2. **Hero Landing**:
   - Dynamic greeting with smooth gradient text reveal: *"Celebrating [Name]'s Special Day"*
   - Animated milestone counter pill and floating bokeh particles.

3. **Interactive Timeline / Memory Lane**:
   - 4 Alternating 3D tilt polaroid cards with customizable images (`images/polaroid_1.jpg`, etc.).
   - Lightbox modal trigger to view full story notes.

4. **"Reasons You Make Life Brighter" (3D Flip Grid)**:
   - 6 Interactive cards with 3D perspective flip on click to reveal heartfelt reasons.

5. **The Digital Birthday Cake (Interactive Candle Blowing Ritual)**:
   - Multi-tier SVG birthday cake with flickering candle flames.
   - Click individual flames or tap *"Blow Out All Candles 💨"* to trigger realistic smoke animations, web audio synth blow sounds, and a full-screen multi-phase confetti burst (`canvas-confetti`).

6. **Secret Letter / Message Vault**:
   - Wax seal envelope with unsealing animation on tap.
   - Expands into a warm letter formatted with editorial typography and handwritten signature.

7. **Live Customizer & Quick Personalizer**:
   - Floating gear icon (top right) allows changing Name, Subtitle, Age, Date, Letter Text, and Signature live in real-time.

8. **Ambient Audio Soundtrack**:
   - Floating mute/unmute control with Web Audio API procedurally synthesized melody and animated audio visualizer.

---

## 📸 Customizing Placeholders

To personalize this website for your friend/loved one:

1. **Name & Headings**:
   - Open `index.html` and search for `Sophia` or use the **Quick Settings Gear Icon** in the top right corner of the website.
2. **Photos**:
   - Replace the files in the `images/` directory:
     - `images/polaroid_1.jpg`
     - `images/polaroid_2.jpg`
     - `images/polaroid_3.jpg`
     - `images/polaroid_4.jpg`
   - Or update the `src` attribute on `memImg1`, `memImg2`, `memImg3`, and `memImg4` inside `index.html`.
3. **Secret Letter Content**:
   - In `index.html`, update the text inside `<div id="letterTextContent">` or edit `YOUR_LETTER_HERE`.

---

## 🚀 How to Run

### Method 1: Double-Click
Simply double-click `index.html` in any web browser!

### Method 2: Local Web Server
Run the following command in your terminal:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.
