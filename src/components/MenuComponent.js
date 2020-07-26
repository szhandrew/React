import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <DishDetail dish={dish}/>
            );
        }
        else
            return(
                <div></div>
            );
    }

    renderComments(dish){
        if(dish!=null)
            if(dish.comments!=null){
                const title=<h4>Comment</h4>
                const Comment=dish.comments.map((comments)=>
                        <div className="container">
                            <ul class="list-unstyled">
                                <li>{comments.comment}</li>
                                <li>--{comments.author}, {comments.date}</li>
                            </ul>
                        </div>
                    );
                return(
                    <div>{title} {Comment}</div>
                );
            }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                      {this.renderComments(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}

export default Menu;