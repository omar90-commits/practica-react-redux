import React, { useState, useEffect } from 'react';
import Page from './page';
import { connect } from 'react-redux';
import items from '../../data/items';

const Details = ({ data, match }) => {

	const { id } = match.params;

	const [dataLocal, guardarDataLocal] = useState({});

	useEffect(() => {
		
		guardarDataLocal(data);

		if (Object.keys(data).length !== 0) return;

		const itemSeleccionado = items.find(item => item.id === parseInt(id));
		guardarDataLocal(itemSeleccionado);
		
	}, [data, id]);

	return (
		<Page 
			data={dataLocal}
		/>
	)
}

const mapStateToProps = state => {
	return {
		data: state.detailsReducer.elementoInfo
	}
} 

export default connect(mapStateToProps)(Details);