
export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  availability: string;
  experience: string;
  image: string;
}

export interface Medicine {
  id: number;
  name: string;
  category: string;
  stock: number;
  expiry: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}
