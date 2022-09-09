export interface Image {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

export interface GetImagesResponse {
  after: string;
  data: Image[];
}

export type FetchImagesParams = {
  pageParam?: number;
};
