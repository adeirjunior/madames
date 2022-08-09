import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = sanityClient({
    projectId: '7g410ehe',
    dataset: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    apiVersion: '2022-05-20',
    useCdn: true,
    token: process.env.TOKEN
});

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) =>  builder.image(source);
