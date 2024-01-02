import React from 'react';
import Movies from './Movies';

export default class MovieList extends React.Component {
    constructor() {
        super()

        this.movies = [
            {
                id: 1,
                img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91D+a2gMnSL._AC_UY218_.jpg',
                title: 'Training Day',
                year: 2001,
               info: 'A rookie cop spends his first day as a Los Angeles narcotics officer with a rogue detective who isn\'t what he appears to be.',
            },
            {
                id: 2,
                img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91BZ8lELhXL._AC_UY218_.jpg',
                title: 'Napoleon Dynamite',
                year: 2004,
               info: 'A listless and alienated teenager decides to help his new friend win the class presidency in their small western high school, while he must deal with his bizarre family life back home.',
            },
            {
                id: 3,
                img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Lx8v1Gh9L._AC_UY218_.jpg',
                title: 'Monster-in-Law',
                year: 2005,
               info: 'The love life of Charlotte is reduced to an endless string of disastrous blind dates, until she meets the perfect man, Kevin. Unfortunately, his merciless mother will do anything to destroy their relationship.',
            }, 
            {
                id: 4,
                img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81k-aZyx2EL._AC_UY218_.jpg',
                title: 'Elemental',
                year: 2023,
               info: 'Follows Ember and Wade, in a city where fire-, water-, earth- and air-residents live together.',
            },
            {
                id: 5,
                img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91D+a2gMnSL._AC_UY218_.jpg',
                title: 'Hunger Games',
                year: 2012,
               info: 'Katniss Everdeen voluntarily takes her younger sister\'s place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.',
            },

        ]
    }
   render() {
    return ( 
    <div>
        {this.movies.map((movie, index) => (
        <div key={index}>
            <Movies
                id={movie.id}
                img={movie.img}
                title={movie.title}
                year={movie.year}
                info={movie.info}
            />
        </div>
    
    ))}
    </div>
    )
   } 
}