import '../../src/style.css';

export default function Home() {
    return (
        <header className='header'>
            <div className="navbar">
                <svg viewBox='0 0 288 560' width="50px" height="50px" x="0px" y="0px">
                    <path class="st0" d="M132.64,257.54c0,4.7,0,9.41,0,14.11c0,4.7,0,9.41,0,14.11c5.26-5.1,13.61-4.93,18.4,0
	c4.39,4.51,4.77,11.95,0.61,17.18"/>
                </svg>

                <ul className='navbar-items'>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>SOBRE</a></li>
                </ul>
            </div>

            <div className='row'>
                <div className='column'>
                    <h6 className='h6'><strong>PODER FEMININO</strong></h6>
                    <h2 className='h2'>As Mulheres <br /> na área <br /> da tecnologia!</h2>
                    <h5 className='h5'>Uma pesquisa do Instituto Brasileiro de Geografia e <br /> Estatística (IBGE) aponta que apenas 20% dos profissionais <br />que atuam nessa área são mulheres.</h5>
                </div>
                <div className='column'>
                    <img src="image/image.jpeg" alt="imagem mulheres"></img>
                </div>
            </div>

        </header >
    );
};
