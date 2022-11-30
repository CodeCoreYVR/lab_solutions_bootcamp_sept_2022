import React, { Component } from "react";

 export default class NewReviewForm extends Component {
   constructor(props) {
     super(props);
   }

   render() {
     const { props } = this;
     return (
         <form onSubmit={props.createReview}>
           <div>
             <label htmlFor="body">Feedback</label>
             <br />
             <input type="text" name="body" id=""
                 value={props.review.body}
                 onChange={props.onChange}
             />
           </div>{" "}
           <div>
             <label htmlFor="rating">Rating (0 to 5)</label>
             <br />
             <input type="text" name="rating" id="" 
                 value={props.review.rating}
                 onChange={props.onChange}
             />
           </div>
           <div>
             <input type="submit" value="Submit Feedback" />
           </div>
         </form>
       );
   }
 }