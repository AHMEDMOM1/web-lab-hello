import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Alert from '../components/Alert';
import type { Project, FilterState, Category } from '../types/project';
import { fetchProjects } from '../services/projectService';
import { applyFilters } from '../utils/projectHelpers';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'All',
    sortField: 'createdAt',
    sortOrder: 'desc',
  });

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error occurred.');
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProjects = applyFilters(projects, filters);

  const categories: (Category | 'All')[] = ['All', 'Frontend', 'Backend', 'Fullstack', 'Mobile'];

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-text dark:text-dark-text">Projects</h1>
        <Button onClick={() => window.location.reload()} variant="secondary" size="sm">
          Refresh
        </Button>
      </div>

      {error && (
        <Alert variant="error" title="Error Loading Projects" className="mb-6">
          {error}
        </Alert>
      )}

      <Card className="mb-8" variant="outlined">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            label="Search Projects"
            placeholder="Type to search..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="flex-1"
          />
          
          <div className="flex flex-col gap-1.5 flex-1 md:max-w-xs">
            <label className="text-sm font-semibold text-text dark:text-dark-text">Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-dark-border bg-surface dark:bg-dark-surface text-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5 flex-1 md:max-w-xs">
            <label className="text-sm font-semibold text-text dark:text-dark-text">Sort By</label>
            <div className="flex gap-2">
              <select
                value={filters.sortField}
                onChange={(e) => handleFilterChange('sortField', e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-dark-border bg-surface dark:bg-dark-surface text-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              >
                <option value="createdAt">Date Created</option>
                <option value="name">Name</option>
                <option value="stars">Stars</option>
              </select>
              <Button
                variant="ghost"
                className="!px-3"
                onClick={() => handleFilterChange('sortOrder', filters.sortOrder === 'asc' ? 'desc' : 'asc')}
                aria-label="Toggle sort order"
              >
                {filters.sortOrder === 'asc' ? '↑' : '↓'}
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : filteredProjects.length === 0 && !error ? (
        <Alert variant="info" title="No projects found">
          Adjust your search or category filters to find what you're looking for.
        </Alert>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} title={project.name} footer={
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-primary">{project.category}</span>
                <span className="text-amber-500">⭐ {project.stars}</span>
              </div>
            }>
              <p className="mb-4 text-muted dark:text-dark-text-muted">{project.description}</p>
              <div className="text-xs text-muted/70">
                Created: {new Date(project.createdAt).toLocaleDateString()}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
