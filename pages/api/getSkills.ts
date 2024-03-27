import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Technology } from '@/typings';

const querry = groq`*[_type == "skill"]`

type Data = {
    skills: Technology[];
  };
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const skills: Technology[] = await sanityClient.fetch(querry);

    console.log("fetching", skills)

    res.status(200).json({ skills });
  }
  