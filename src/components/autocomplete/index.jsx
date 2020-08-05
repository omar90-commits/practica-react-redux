
import React, { useState, useEffect } from 'react';
import Page from './page';
import items from '../../data/items';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import results from '../../redux/actions/resultsAction';

const AutoComplete = ({ results, history }) => {

    const [text, guardarText] = useState('');
    const [dataFiltrada, guardarDataFiltrada] = useState([]);
    const [data, guardarData] = useState([]);
    const [estadoEnter, guardarEstadoEnter] = useState(false);

    useEffect(() => {

        let mounted = true;

		if (text === '') {
			guardarDataFiltrada([]);
			return;
		};

        const filtrarData = items.filter(element => (
        	element.title.toUpperCase().indexOf(text.toUpperCase().trim()) === 0 && element.title
        ));

        window.addEventListener('click', e => {
            if (mounted) {
                e.path[0].getAttribute('class') === 'form-control'
                ? guardarDataFiltrada(filtrarData)
                : guardarDataFiltrada([]);
            }
        });

        guardarDataFiltrada(filtrarData);
        guardarData(filtrarData);

        return () => {
            window.addEventListener('click', e => {
                if (mounted) {
                    e.path[0].getAttribute('class') === 'form-control'
                    ? guardarDataFiltrada(filtrarData)
                    : guardarDataFiltrada([]);
                }
            });

            mounted = false;
        }

    }, [text]);

    useEffect(() => {
        const seleccionados = [];

        dataFiltrada.forEach(element => {
            for (let i = 0; i < text.split(' ').length; i++) {
                if (i === text.split(' ').length - 1 && text.split(' ')[i] === element.title.split(' ')[i]) {
                    seleccionados.push(element);
                }
            }
        })
        
        seleccionados.length > 0 && results(seleccionados);
    }); 

    useEffect(() => {
        if (estadoEnter === 'Enter') {
            results(data);
            history.push('/results');
        }
    }, [estadoEnter, data, results, history]);

    return (
        <Page 
            dataFiltrada={dataFiltrada}
            text={text}
            history={history}
            guardarText={guardarText}
            guardarEstadoEnter={guardarEstadoEnter}
        />
    )
}

const mapDispatchToProps = {
    results
}

export default connect('', mapDispatchToProps)(withRouter(AutoComplete));