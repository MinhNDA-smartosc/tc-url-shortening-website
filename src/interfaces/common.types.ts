export interface IAppResponse<T> {
  status?: number;
  data?: T;
  success: boolean;
  code: number;
  message?: string;
  title?: string;
  meta?: {
    total?: number;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
