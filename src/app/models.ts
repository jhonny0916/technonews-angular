export interface Category {
  name: string;
  color: string;
  icon: string;
}

export interface News {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  date: string;
  readTime: string;
  highlights?: string[];
}

export interface NewsData {
  categories: Category[];
  news: News[];
}
