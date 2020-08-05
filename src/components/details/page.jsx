import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';

const Page = ({ data, history }) => (
	<div className="row no-gutters my-5">
		<div className="d-flex justify-content-center px-md-5 px-lg-0">
			<div className="col-8 col-lg-5 col-xl-4">
				<div className="card card-details" >
					<img  src={data.image} alt={data.title} className="card-img-top img-fluid" />
				
					<div className="card-body">
						<h3 className="card-title">{data.title}</h3>
						<p className="card-text">{data.content}</p>	

						<button 
							className="card-details__btn btn"
							onClick={ () => history.push(`/results`) }
						>Back</button>	
					</div>		
				</div>
			</div>
		</div>
	</div>
)

export default withRouter(Page);