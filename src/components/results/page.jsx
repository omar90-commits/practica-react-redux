import React from  'react';
import './style.css';
import { withRouter } from 'react-router-dom';

const Page = ({ data, detailsAction, history }) => (
	<React.Fragment>
		{
			data.length === 0 
			? <p className="sin-resultados mt-5 text-center">There are no results</p>
			: <div className="row no-gutters mt-5">
				{
					data.map(element => (
						<div key={element.id} className="d-flex justify-content-center">
							<div className="col-10 col-sm-5 col-lg-4 mb-4">
								<div 
									className="card" 
									onClick={ () => {
										detailsAction(element);
										history.push(`/details/${element.id}`);
									} }>
									<img  src={element.image} alt={element.title} className="card-img-top img-fluid" />
								
									<div className="card-body">
										<h3 className="card-title">{element.title}</h3>
										<p className="card-text">{element.content}</p>		
									</div>		
								</div>
							</div>
						</div>
					))
				}
			</div>
		}
	</React.Fragment>
)

export default withRouter(Page);