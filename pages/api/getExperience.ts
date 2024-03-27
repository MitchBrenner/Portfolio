import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Experience } from '@/typings';

const querry = groq`*[_type == "project"] {
  ...,
technologies[]->
}`

type Data = {
    experiences: Experience[];
  };
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {
    const experiences: Experience[] = await sanityClient.fetch(querry);

    res.status(200).json({ experiences });
  }
  