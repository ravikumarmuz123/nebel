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

// Categories Images
import bucheinbandstoffe from './images/categories/1.jpg';
import baenderUndSchnuere from './images/categories/2.png';
import dekoplatten from './images/categories/3.jpg';
import heisspraegen from './images/categories/4.jpg';
import klebstoffe from './images/categories/5.jpg';
import kleinmaterial from './images/categories/6.jpg';
import loseblattsysteme from './images/categories/7.jpg';
import maschinen from './images/categories/8.jpg';
import pantaBuerosysteme from './images/categories/9.jpg';
import papierUndKarton from './images/categories/10.jpg';
import selbstklebefolien from './images/categories/11.png';
import werkzeuge from './images/categories/12.jpg';

export const categories = [
    {
        title: 'Bucheinbandstoffe',
        url: '/bucheinbandstoffe',
        image: bucheinbandstoffe
    },
    {
        title: 'Bänder und Schnüre',
        url: '/baender-und-schnuere',
        image: baenderUndSchnuere,
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
        image: dekoplatten
    },
    {
        title: 'Heißprägen', 
        url: '/heisspraegen',
        image: heisspraegen
    },
    {
        title: 'Klebstoffe',
        url: '/klebstoffe',
        image: klebstoffe
    },
    {
        title: 'Kleinmaterial',
        url: '/kleinmaterial',
        image: kleinmaterial
    },
    {
        title: 'Loseblattsysteme',
        url: '/loseblattsysteme',
        image: loseblattsysteme
    },
    {
        title: 'Maschinen',
        url: '/maschinen',
        image: maschinen
    },
    {
        title: 'Panta Bürosysteme',
        url: '/panta-buerosysteme',
        image: pantaBuerosysteme
    },
    {
        title: 'Papier und Karton',
        url: '/papier-und-karton',
        image: papierUndKarton
    },
    {
        title: 'Selbstklebefolien', 
        url: '/selbstklebefolien',
        image: selbstklebefolien
    },
    {
        title: 'Werkzeuge',
        url: '/werkzeuge',
        image: werkzeuge
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
