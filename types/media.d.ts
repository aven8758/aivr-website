declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  import type { StaticImageData } from "next/image";
  const src: StaticImageData;
  export default src;
}
