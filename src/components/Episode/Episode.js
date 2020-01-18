import React from 'react';
import './Episode.css'
import { Link } from 'react-router-dom';

class Episode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: ''
        }
    }

    componentDidMount() {
        fetch(`https://swapi.co/api/films/1/`)
        .then(res => res.json()) 
        .then(
            (result) => {
                this.setState({
                    isLoaded:true,
                    item: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                })
            }  
        )
    }

    validate(str) {
        const searchNumb = /\d+/;
        const id = searchNumb.exec(str)
        return id;
    }

    render() {
        const { error, isLoaded, item} = this.state;
        if(error) return <div> Error: {error.message}</div>
        if(!isLoaded) return <div> Loading... </div>
        return(
            <div className="episode">
                <h3>Эпизод: {item.title}</h3>
                <p> Описание: {item.opening_crawl}</p>
                <ul>
                    Список звездолетов:
                    {item.starships.map((s, i) => (
                        <li>
                           <Link to={`/starship/${this.validate(s)}`}> Корабль {this.validate(s)}. </Link> 
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}


export default Episode;