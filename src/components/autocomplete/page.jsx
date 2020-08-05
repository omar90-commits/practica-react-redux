import React from  'react';
import './style.css';
import { ReactComponent as IconBusqueda } from '../../assets/busqueda.svg';

const Page = ({ dataFiltrada, text, clickInput, history, guardarText, guardarEstadoEnter }) => (
	<div className="mx-2 dataFiltrada">
		<form className="form-inline">
            <div className="input-group w-100">
              <div className="input-group-prepend">
                <span className="input-group-text"><IconBusqueda /></span>
              </div>

                <input  
                    className="form-control"
                    placeholder="Search..."
                    onKeyDown={ e => {
                        e.key === 'Enter' && e.preventDefault();
                        guardarEstadoEnter(e.key);
                    } }
                    onChange={ e => guardarText(e.target.value) }
                    value={text}
                />
            </div>    
        </form>

    	<div className="completado">
    		{
    			dataFiltrada.map(element => (
    				<p 
    					key={element.id}
						className="mb-0"
                        onClick={ () => {
                            guardarText(element.title);
                            history.push('/results');
                        } }
    				>{element.title}</p>	
    			))
    		}
    	</div>
	</div>
)

export default Page;