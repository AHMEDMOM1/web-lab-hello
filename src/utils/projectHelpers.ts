import type { Project, FilterState } from '../types/project';

export const filterBySearch = (projects: Project[], search: string): Project[] => {
  if (!search.trim()) return projects;
  const lowerSearch = search.toLowerCase();
  return projects.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerSearch) ||
      p.description.toLowerCase().includes(lowerSearch)
  );
};

export const filterByCategory = (projects: Project[], category: FilterState['category']): Project[] => {
  if (category === 'All') return projects;
  return projects.filter((p) => p.category === category);
};

export const sortProjects = (
  projects: Project[],
  sortField: FilterState['sortField'],
  sortOrder: FilterState['sortOrder']
): Project[] => {
  return [...projects].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else if (sortField === 'createdAt') {
      comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sortField === 'stars') {
      comparison = a.stars - b.stars;
    }

    return sortOrder === 'asc' ? comparison : -comparison;
  });
};

export const applyFilters = (projects: Project[], filters: FilterState): Project[] => {
  let result = projects;
  result = filterByCategory(result, filters.category);
  result = filterBySearch(result, filters.search);
  result = sortProjects(result, filters.sortField, filters.sortOrder);
  return result;
};
