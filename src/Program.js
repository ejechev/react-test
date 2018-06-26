import React, { Component } from "react";
import Movie from './Movie'
class Program extends Component {
    state = {
        programa: [
            {
                name: 'Deadpool',
                time: 'dnes po nqkoe vreme',
                mesta: 10
            },
            {
                name: 'React lekciq 2',
                time: 'dnes po nqkoe vreme',
                mesta: 10
            },
            {
                name: 'React lekciq 3',
                time: 'dnes po nqkoe vreme',
                mesta: 10
            },
            {
                name: 'React lekciq 4',
                time: 'dnes po nqkoe vreme',
                mesta: 10
            }
        ]
    }

    zapazi(event) {
         console.log('zapazih 1 mqsto')
        
    }

    render() {
       return (
           <div>
               {this.state.programa.map((film) => {
                   return <Movie key={film.name} name={film.name} time={film.time} zapazi={this.zapazi} mesta={film.mesta}/>
               })}
            </div>
       );
    }
}

export default Program