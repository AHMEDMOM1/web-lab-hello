export type Category = 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile';
export type SortField = 'name' | 'createdAt' | 'stars';
export type SortOrder = 'asc' | 'desc';

export interface Project {
  id: string;
  name: string;
  description: string;
  category: Category;
  createdAt: string;
  stars: number;
}

export interface FilterState {
  search: string;
  category: Category | 'All';
  sortField: SortField;
  sortOrder: SortOrder;
}
