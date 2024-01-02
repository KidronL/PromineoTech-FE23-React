import React from 'react';


export default class Movies extends React.Component {
    constructor(props) {
        super(props)

        this.id = props.id
        this.img = props.img
        this.title = props.title
        this.year = props.year
        this.info = props.info
    }
    
    render() {
        return (
            <div>
               <img onScroll={this.img} alt={this.title}></img>
               <h4>
                {this.title} {this.year}
                </h4>
               <p>{this.info}</p>
            </div>
        )
    }
}