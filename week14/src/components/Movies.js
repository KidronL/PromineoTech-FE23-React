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
                
            </div>
        )
    }
}