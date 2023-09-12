import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yasin Walum',
    short_name: 'Walum',
    description: 'Yasin Walum - Web Developer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#2b2b2b',
    theme_color: '#d1d1d1',
    orientation: "portrait-primary",
    icons: [
      {
        src: '/icons/fav-72x86.png',
        sizes: '72*86',
        type: 'image/png',
      },
      {
        src: '/icons/fav-96x115.png',
        sizes: '96*115',
        type: 'image/png',
      },
      {
        src: '/icons/fav-128x153.png',
        sizes: '128*153',
        type: 'image/png',
      },
      {
        src: '/icons/fav-144x172.png',
        sizes: '144*172',
        type: 'image/png',
      },
      {
        src: '/icons/fav-152x182.png',
        sizes: '152*182',
        type: 'image/png',
      },
      {
        src: '/icons/fav-192x229.png',
        sizes: '192*229',
        type: 'image/png',
      },
      {
        src: '/icons/fav-384x459.png',
        sizes: '384*459',
        type: 'image/png',
      },
      {
        src: '/icons/fav-512x612.png',
        sizes: '512*612',
        type: 'image/png',
      },
    ],
  }
}