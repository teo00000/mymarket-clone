export interface Item {
  id: number;
  title: string;
  availability: boolean;
  shortDescription: string;
  price: number | null;
  image: string;
  description: string;
}