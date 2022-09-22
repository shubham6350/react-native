export type ITODO = {
  heading: string;
  id: number;
  completed: boolean;
};
export type list = {
  data: string;
  id: string;
  Time: number;
  completed: boolean;
}[];
export type complete = {
  id: string;
  completed: boolean;
};
export type routes = {
  key: string;
  index: number;
  routeNames: never[];
  history?: unknown[] | undefined;
  navigate: any;
  type: string;
  stale: false;
};
