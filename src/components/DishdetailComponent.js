import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    renderComments(comments){

        const Comment=comments.map((comments)=>{
            return(
                <div key={comments.id} className="container">
                    <ul className="list-unstyled">
                        <li>{comments.comment}<br/><br/></li>
                        <li>--{comments.author}, {comments.date}</li>
                    </ul>
                </div>
                
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <h4>Comments</h4>
                    {Comment}
                </div>
            </div>
        )
    }

    render(){
        const selected = this.props.selectedDish;

        if(selected!=null)
        {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selected)}
                    </div>
    
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selected.comments)}
                    </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
        
    }
    
}

export default DishDetail;


