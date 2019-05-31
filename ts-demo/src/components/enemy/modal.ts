export interface NormalItem {
  img: string;
  hash: number;
  left: number;
  top: number;
  width: number;
  height: number;
  state: boolean;
  deadTime: number;
  speed: number;
}
export default {
  add(item: string, list: string[]): string[] {
    return [...list, item];
  },
};
