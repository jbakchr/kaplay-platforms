# KAPLAY Platforms

A simple npm package that allows you to easily add platforms to your KAPLAY game.

## 📦 Installation

Install via npm:

```bash
npm i kaplay-platforms
```

## 🚀 Usage

This makes the following platforms available:

- Simple platform
- Sprite platform
- Scrolling sprite platform

### Simple platform

Example usage of a simple platform in your kaplay project:

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { addSimplePlatform } from "kaplay-platforms";

kaplay();

addSimplePlatform();
```

<br>

### Sprite platform

Example usage of a sprite platform in your kaplay project:

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { addSpritePlatform } from "kaplay-platforms";

kaplay({
  width: 1280,
});

loadSprite("platform", "graphics/platforms.png");

addSpritePlatform("platform", 65);
```

<br>

## License

This project is licensed under the MIT License - see the LICENSE file for details.

<br>

## Contact

Have questions or suggestions? Reach out via:

- GitHub Issues
