import { Project } from '../typings'; // Import the 'Skill' type from the correct module

export const fetchProjects = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/getProjects`);

    const data = await res.json();

    const projects: Project[] = data.projects;

    return projects;
}