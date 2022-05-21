import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '7g410ehe',
    dataset: 'production',
    apiVersion: '2022-05-20',
    useCdn: false,
    token: process.env.TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);