export interface Estimate {
  amount: number;
  client: string;
  count: number;
  due: string;
  id: number;
  material: string[];
  method: string[];
  status: string;
  title: string;
}

export interface Category {
  method: string[];
  material: string[];
}
