import { Technology } from '../typings'; // Import the 'Skill' type from the correct module

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

    const data = await res.json();

    const skills: Technology[] = data.skills;

    return skills;
}