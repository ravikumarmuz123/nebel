import siteLogo from './images/logo.svg';
import duetschFlag from './images/deutsch_icon.png';
import secondaryLogo from './images/secondarylogo.png';
import dbFooterLogo from './images/db-logo.png';
import dpdFooterLogo from './images/dpd-logo.png';
import fscFooterLogo from './images/fsclogo2.png';
import interbookFooterLogo from './images/interbooklogo.png';

export const images = {
    siteLogo, duetschFlag, secondaryLogo, dbFooterLogo, dpdFooterLogo, fscFooterLogo, interbookFooterLogo
}

// Featured Category Images

import img1 from './images/featured-category-1.png';
import img2 from './images/featured-category-2.png';
import img3 from './images/featured-category-4.png';
import img4 from './images/featured-category-3.png';

export const featuredCategoryImages = {img1, img2, img3, img4}

export const categories = [
    {
        title: 'Bucheinbandstoffe',
        url: '/bucheinbandstoffe',
    },
    {
        title: 'Bänder und Schnüre',
        url: '/baender-und-schnuere',
        children: [
            {
                heading: 'Bande',
                links: [
                    { title: 'Bande', url: '/baender-und-schnuere/bande' },
                    { title: 'Bande', url: '/baender-und-schnuere/bande' },
                    { title: 'Bande', url: '/baender-und-schnuere/bande' },
                    { title: 'Bande', url: '/baender-und-schnuere/bande' },
                ]
            }
        ]
    },
    {
        title: 'Dekoplatten',
        url: '/dekoplatten',
    },
    {
        title: 'Heißprägen', 
        url: '/heisspraegen',
    },
    {
        title: 'Kleinmaterial',
        url: '/kleinmaterial',
    },
    {
        title: 'Loseblattsysteme',
        url: '/loseblattsysteme',
    },
    {
        title: 'Maschinen',
        url: '/maschinen',
    },
    {
        title: 'Panta Bürosysteme',
        url: '/panta-buerosysteme',
    },
    {
        title: 'Papier und Karton',
        url: '/papier-und-karton',
    },
    {
        title: 'Selbstklebefolien', 
        url: '/selbstklebefolien',
    },
    {
        title: 'Werkzeuge',
        url: '/werkzeuge',
    },
    {
        title: 'Abverkauf',
        url: '/abverkauf',
    }
];

// Featured Products for Homepage Slider
import productBgImage1 from './images/featured-product-1.png';

export const featuredProducts = [
    {
        title: 'vienna leinen Bucheinbandstoffe',
        url: '/vienna-leinen-bucheinbandstoffe',
        image: productBgImage1
    },
    {
        title: 'Test product title 2',
        url: '/vienna-leinen-bucheinbandstoffe',
        image: productBgImage1
    },
    {
        title: 'Test product title 3',
        url: '/vienna-leinen-bucheinbandstoffe',
        image: productBgImage1
    }
]

// Brands

import kurz from './images/brands/kurz.svg';
import orafel from './images/brands/orafel.png';
import bamberger from './images/brands/bamberger.png';
import payerCover from './images/brands/payercover.png';
import herka from './images/brands/herka.png';
import foamX from './images/brands/foamx.png';
import vanHeekTextiles from './images/brands/vanheektextiles.png';
import guthWolf from './images/brands/guthwolf.png';
import hahnemuhle from './images/brands/hahnemuhle.png';
import balacron from './images/brands/balacron.png';
import moorman from './images/brands/moorman.png';


export const brands = [
    {
        title: 'KURZ',
        url: 'manufacturer/kurz',
        logo: kurz
    },
    {
        title: 'ORAFEL',
        url: 'manufacturer/orafel',
        logo: orafel
    },
    {
        title: 'BAMBERGER',
        url: 'manufacturer/bamberger',
        logo: bamberger
    },
    {
        title: 'PAYERCOVER',
        url: 'manufacturer/payercover',
        logo: payerCover
    },
    {
        title: 'HERKA',
        url: 'manufacturer/herka',
        logo: herka
    },
    {
        title: 'FOAMX',
        url: 'manufacturer/foamx',
        logo: foamX
    },
    {
        title: 'VAN HEEK TEXTILES',
        url: 'manufacturer/vanheektextiles',
        logo: vanHeekTextiles
    },
    {
        title: 'GUTH WOLF',
        url: 'manufacturer/guthwolf',
        logo: guthWolf
    },
    {
        title: 'HAHNEMUHLE',
        url: 'manufacturer/hahnemuhle',
        logo: hahnemuhle
    },
    {
        title: 'BALACRON',
        url: 'manufacturer/balacron',
        logo: balacron
    },
    {
        title: 'MOORMAN',
        url: 'manufacturer/moorman',
        logo: moorman
    },
    
]
