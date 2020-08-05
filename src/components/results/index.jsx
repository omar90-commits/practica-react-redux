import React from 'react';
import Page from './page';
import { connect } from 'react-redux';
import detailsAction from '../../redux/actions/detailsAction';

const Results = ({ data, detailsAction }) => {

    return (
        <Page 
        	data={data}
        	detailsAction={detailsAction}
        />
    )
}

const mapStateToProps = state => {
	return {
		data: state.resultsReducer.resultados,
	}
}

const mapDispatchToProps = {
	detailsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);