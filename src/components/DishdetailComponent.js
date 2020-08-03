import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

    
    function RenderDish({dish}){
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

    

    function RenderComments({comments}){

        const Comment=comments.map((comments)=>{
            return(
                <div key={comments.id} className="container">
                    <ul className="list-unstyled">
                        <li>{comments.comment}<br/><br/></li>
                        <li>--{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</li>
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

    const DishDetail = (props) => {
        const selected = props.dish;
        

        if(selected!=null)
        {
            return(
                <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={selected}/>
                        
                    </div>
    
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={selected.comments}/>
                    </div>
                </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

export default DishDetail;


