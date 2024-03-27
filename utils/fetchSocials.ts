import { Social } from '../typings'; // Import the 'Skill' type from the correct module

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

    const data = await res.json();

    const socials: Social[] = data.socials;

    return socials;
}