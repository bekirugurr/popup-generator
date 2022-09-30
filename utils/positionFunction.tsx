const positionFunction = (position: {
  x: "left" | "center" | "right";
  y: "top" | "center" | "bottom";
}): string => {
  let str = position.x + "-" + position.y;
  if (str === "left-top") {
    return "left-2 top-2";
  } else if (str === "center-top") {
    return "left-1/2 -translate-x-1/2 top-2 ";
  } else if (str === "right-top") {
    return "right-2 top-2";
  } else if (str === "left-center") {
    return "left-2  top-1/2 -translate-y-1/2";
  } else if (str === "right-center") {
    return "right-2 top-1/2 -translate-y-1/2";
  } else if (str === "left-bottom") {
    return "left-2 bottom-1";
  } else if (str === "center-bottom") {
    return "left-1/2 -translate-x-1/2 bottom-1";
  } else if (str === "right-bottom") {
    return "right-2 bottom-1";
  } else {
    return "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2";
  }
};
export default positionFunction;
