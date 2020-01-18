import React from 'react'
import './Starship.css'
class Starship extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            item: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.link;
        fetch(`https://swapi.co/api/starships/${id}/`)
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

    render() {
        const { error, isLoaded, item} = this.state;
        if(error) return <div> Error: {error.message}</div>
        if(!isLoaded) return <div> Loading... </div>
        return(
            <div className="starship">
                <ul>
                    <h3>Характеристика корабля:</h3>
                    <li>Name: {item.name}</li>
                    <li>Model: {item.model}</li>
                    <li>Passengers: {item.passengers}</li>
                </ul>
            </div>
        )
    }
}
export default Starship;