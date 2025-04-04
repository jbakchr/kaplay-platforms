# KAPLAY Platforms

A simple npm package that allows you to easily add platforms to the <u>_**bottom**_</u> of your KAPLAY game.

## 📦 Installation

Install via npm:

```bash
npm i kaplay-platforms
```

## 🚀 Usage

This package makes the following platforms available:

- Simple platform
- Sprite platform
- Scrolling sprite platform

<br>

### Simple platform

Example usage of adding a simple platform at the _bottom_ of your kaplay game:

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { addSimplePlatform } from "kaplay-platforms";

kaplay();

addSimplePlatform();
```

#### Parameters

A simple platform can take the following parameters:

| Parameter | Type     | Default | Required | Description     |
| --------- | -------- | ------- | -------- | --------------- |
| `h`       | `number` | 48      | ❌ No    | Platform height |
| `colour`  | `Color`  | WHITE   | ❌ No    | Platform color  |

<br>

### Sprite platform

Example usage of a sprite platform  at the _bottom_ of your kaplay game:

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

#### Parameters

A sprite platform takes the following parameters:

| Parameter    | Type     | Default | Required | Description                                   |
| ------------ | -------- | ------- | -------- | --------------------------------------------- |
| `spriteName` | `string` | N/A     | ✅ Yes   | Name of previously loaded sprite for platform |
| `h`          | `number` | N/A     | ✅ Yes   | Height of platform                            |

<br>

### Scrolling sprite platform

Example usage of a scrolling sprite platform at the _bottom_ of your kaplay game:

```javascript
import kaplay from "kaplay";
import "kaplay/global";

import { addScrollingSpritePlatform } from "kaplay-platforms";

kaplay({
  debugKey: "d",
  width: 1280,
  height: 1080,
  letterbox: true,
});

loadSprite("platform", "graphics/platforms.png");

addSpritePlatform("platform", 65, 200);
```

#### Parameters

A scrolling sprite platform takes the following parameters:

| Parameter      | Type     | Default | Required | Description                                   |
| -------------- | -------- | ------- | -------- | --------------------------------------------- |
| `spriteName`   | `string` | N/A     | ✅ Yes   | Name of previously loaded sprite for platform |
| `spriteHeight` | `number` | N/A     | ✅ Yes   | Height of platform                            |
| `scrollSpeed`  | `number` | N/A     | ✅ Yes   | Scroll speed of platform                      |

<br>

#### State

The scrolling sprite platform has the following state:

| state   | Type     | Initial value                   |
| ------- | -------- | ------------------------------- |
| `speed` | `number` | value of `scrollSpeed`parameter |

<br>

## License

This project is licensed under the MIT License - see the LICENSE file for details.

<br>

## Contact

Have questions or suggestions? Reach out via:

- GitHub Issues
