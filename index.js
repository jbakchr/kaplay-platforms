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
