import React from  'react';
import AutoComplete from '../autocomplete/';
import { ReactComponent as Usuario } from '../../assets/usuario.svg';
import './style.css';

const Page = () => (
    <nav className="nav justify-content-center align-items-center p-3 text-light">
        <p className="d-flex align-items-center mb-0">Programax</p>

        <AutoComplete />

        <div className="circulo">
			<Usuario />
        </div>   
    </nav>
)

export default Page;