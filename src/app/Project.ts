export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  created_at: string;
  updated_at: string;
  zoomed?: boolean;
  showImage?: boolean;
}
