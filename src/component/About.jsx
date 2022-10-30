import React from 'react';
import { NavLink } from 'react-router-dom';
const About=()=>{
    return(
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold mb-4'>About us</h1>
                        <p className="lead mb-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestiae quidem odio numquam animi optio, tenetur sit ea perferendis odit placeat culpa rem,
                            laudantium impedit incidunt tempore reprehenderit accusantium eos doloremque. 
                            Necessitatibus reiciendis et veritatis placeat eaque dolor dignissimos iusto eveniet? Fugit laborum quae molestias nisi 
                            aut porro neque assumenda architecto sunt. Ut accusantium commodi deserunt dolor ipsum a deleniti, expedita velit. Ea,
                            earum odio veritatis dolor, quas voluptate eos explicabo nam numquam vitae exercitationem quidem provident perferendis
                            sapiente modi dignissimos, tempora esse! Natus reiciendis cum alias ex dignissimos deleniti rerum, totam aspernatur
                            suscipit odit ea ad dicta adipisci exercitationem blanditiis?
                        </p>
                        <NavLink to='/contact' className="btn btn-outline-primary px-3"> Contact us</NavLink>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src='/assets/about.png' alt='About us' height='400px' width='400px'/>
                        </div>
        
    
                    
                </div>
            </div>
        </div>
    )
};
export default About;