import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/style.css';
import Card from '../components/Card/Card';

export default function Cinthia() {
    const [informacoes, setInformacoes] = useState({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: ''
    });

    const getInfoCEP = () => {
        axios.get('http://viacep.com.br/ws/04138002/json/')
            .then(response => {
                setInformacoes(response.data);
            });
    }

    return (
        <header className='header-body'>
            <div className="navbar">
                <svg viewBox='0 0 288 560' width="50px" height="50px" x="0px" y="0px">
                    <path class="st0" d="M132.64,257.54c0,4.7,0,9.41,0,14.11c0,4.7,0,9.41,0,14.11c5.26-5.1,13.61-4.93,18.4,0
	                c4.39,4.51,4.77,11.95,0.61,17.18"/>
                </svg>
                <ul className='navbar-items'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#'>Sobre</a></li>
                </ul>
            </div>
            <div className='row'>
                <div className='column'>
                    <Card title='Cinthia' text='39 anos, com mais de 13 anos de experiência em RH, optou pela transição de carreira e atualmente é estudante de tecnologia.' imgSrc='image/cinthia.jpeg' imgAlt='Alt'></Card>
                </div>
                <div className='column'>
                    <button className='btn' onClick={getInfoCEP}>Clique aqui</button>
                    <>
                        <ul>
                            <li>{informacoes['cep']}</li>
                            <li>{informacoes['logradouro']}</li>
                            <li>{informacoes['bairro']}</li>
                            <li>{informacoes['localidade']}</li>
                            <li>{informacoes['uf']}</li>
                        </ul>
                    </>
                </div>
            </div>
        </header >
    );
};