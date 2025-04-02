import "kaplay/global";

/**
 * Adds a simple platform to the bottom of the screen
 * @param {number} h - Height of platform (default is 48)
 * @param {Color} colour - Color of platform (default is WHITE)
 * @returns {GameObj}
 */
export const addSimplePlatform = (h = 48, colour = WHITE) => {
  // Platform
  const platform = add([
    rect(width(), h),
    pos(0, height() - h),
    area(),
    body({ isStatic: true }),
    color(colour),
    outline(2),
  ]);

  return platform;
};

/**
 * Adds a sprite platform to the bottom of the screen
 * @param {string} spriteName - Name of previously loaded sprite
 * @param {number} h - Height of platform
 * @returns {GameObj}
 */
export const addSpritePlatform = (spriteName, h) => {
  const platform = add([
    sprite(spriteName),
    pos(0, height() - h),
    area(),
    body({ isStatic: true }),
  ]);

  return platform;
};

/**
 * Adds a scrolling sprite platform to the bottom of the screen
 * @param {string} spriteName - Name of previously loaded sprite
 * @param {number} spriteHeight - Height of platform / sprite
 * @param {number} scrollSpeed - Scroll speed of platform
 * @returns {GameObj}
 */
export const addScrollingSpritePlatform = (
  spriteName,
  spriteHeight,
  scrollSpeed
) => {
  // Platform base
  const platformBase = add([
    rect(width(), spriteHeight),
    pos(0, height() - spriteHeight),
    area(),
    body({ isStatic: true }),
    color(BLACK),
    {
      speed: scrollSpeed,
    },
  ]);

  // Platforms
  const platforms = [
    add([sprite(spriteName), pos(0, height() - spriteHeight)]),
    add([sprite(spriteName), pos(width(), height() - spriteHeight)]),
  ];

  onUpdate(() => {
    if (platforms[1].pos.x < 0) {
      platforms[0].moveTo(
        platforms[1].pos.x + width(),
        height() - spriteHeight
      );
      platforms.push(platforms.shift());
    }

    platforms[0].move(-platformBase.speed, 0);
    platforms[1].moveTo(platforms[0].pos.x + width(), height() - spriteHeight);
  });

  return platformBase;
};
