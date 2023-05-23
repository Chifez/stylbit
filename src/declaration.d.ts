declare module "*.jpg" {
  const value: string | undefined;
  export = value;
}
declare module "*.png" {
  const value: string | undefined;
  export = value;
}

declare module "*.mp4" {
  const src: string;
  export default value;
}
