import type { Project } from '../types/project';

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    // Adding a slight delay to simulate actual network request and show the loading state properly
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const response = await fetch('/data/projects.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    throw new Error('Failed to load projects. Please check your connection and try again.');
  }
};
