export interface NormalItem {
  imgIndex: string;
  hash: number;
  left: number;
  top: number;
}
export default {
  add(item: string, list: string[]): string[] {
    return [...list, item];
  },
};
