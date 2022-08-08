export interface TripInfo {
  id: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  info: string;
  src: string;
  rating: number;
}

export interface TripDetailsType {
  title: string;
  info: string;
  images: string[];
}
