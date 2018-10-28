import React, {Component} from 'react';
import NavigationMenu from '../components/partials/NavigationMenu'


class Landing extends Component{


	render(){
		return (
        <div> 
        	<NavigationMenu/>
	        <main role="main" className="container">
		        <div className="starter-template">
		        <h1>Create-React-App with Redux and Bootstrap starter template</h1>
		        <p className="lead">We are the world. We are the children</p>
		        </div>
		        <div className="container-fluid">

				  <div className="row">
				    <div className="col-sm-4" style={{backgroundColor:'lavender'}}>.col-sm-4</div>
				    <div className="col-sm-4"  style={{backgroundColor:'lavender'}}>.col-sm-4</div>
				    <div className="col-sm-4"  style={{backgroundColor:'lavender'}}>.col-sm-4</div>
				  </div>
				</div>
	        </main>
        </div>
		)
	}
}


export default Landing