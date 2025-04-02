import "kaplay/global";

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
