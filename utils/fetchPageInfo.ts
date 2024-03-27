import { PageInfo } from '../typings'; // Import the 'Skill' type from the correct module}

export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const data = await res.json();

    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}