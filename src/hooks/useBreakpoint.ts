import { useWindowSize } from "@uidotdev/usehooks";

export default function useBreakpoint() {
  const screenSize = useWindowSize();
  const width = screenSize?.width;
  if (!width) {
    return "xl";
  }
  if (width < 640) {
    return "xs";
  } else if (width < 768) {
    return "sm";
  } else if (width < 1024) {
    return "md";
  } else if (width < 1280) {
    return "lg";
  } else {
    return "xl";
  }
}
