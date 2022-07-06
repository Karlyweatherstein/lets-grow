import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useQuery } from '@apollo/client';
import { QUERY_TRAINERS } from '../../utils/queries';
import { Auth } from '../../utils/auth'

     


function TrainerCard(item) {
const { data } = useQuery(QUERY_TRAINERS);
console.log('hello world', data)
  const { image, name, _id, description, key } = item;
  const token = Auth.loggedIn();

  // const shopAuth = () => {
  //   const token = data.login.token;
  //       tokenAuth.login(token); 
  //   if (token) {
  //     return (
  //       <li key={key}>
  //         <Link to={`/shop/${_id}`}>
  //           <div className="trainers">
  //           <div className="trainer-container paragraphFonts">
  //           <div className="trainers-card mx-3">
              
  //           <div className="img-container">
  //           <img alt={name} src={`/images/${image}`} />
  //           </div>
  //           <p>{name}</p>
  //           <p>{description}</p>
  //           </div>
  //           </div>
  //           </div>
  //         </Link>
  //         <div>
            
  //         </div>
  //       </li>
  //     );
  //   } else {
  //     <p>Login to Shop!</p>
  //   }
  // };
  
  if (token) {
    return (
      <li key={key}>
        <div className="trainers">
          <div className="trainer-container paragraphFonts">
          <div className="trainers-card mx-3">
          <Link to={`/shop/${_id}`} >
        
        </Link>  
          <div className="img-container">
          <img alt={name} src={`/images/${image}`} />
          </div>
          <p>{name}</p>
          <p>{description}</p>
          </div>
          </div>
          </div>
      </li>
    );
  } else {
    return (
      <p>Please login to Shop!</p>
    )
  }
  
  
  
    
   
}


  

export default TrainerCard;

<div className="trainers">
<div className="trainers-title">
  <h1 className="titleFonts">Meet the Trainers!</h1>
</div>
<div className="trainer-container paragraphFonts">
  <div className="trainers-card mx-3">
    <div className="img-container"></div>
    <h3>
      Hi my name is who, my name is what, my name is chicka chicka slim
      shady
    </h3>
  </div>
</div>
</div>