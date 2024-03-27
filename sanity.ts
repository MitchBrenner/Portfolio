// this is a helper

import { createClient } from 'next-sanity';
import  createImageBuilder from '@sanity/image-url';

export const config ={
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config);

// helper function for getting image url
export const urlFor = (source: any) => 
    createImageBuilder(config).image(source);