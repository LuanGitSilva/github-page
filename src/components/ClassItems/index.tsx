import * as C from './styles';
import albumImage from '../../assets/classItems/album.png';
import memoryImage from '../../assets/classItems/memory.png';
import calcImage from '../../assets/classItems/calc.png';
import doctorImage from '../../assets/classItems/doctor.png';
import marvelImage from '../../assets/classItems/marvel.png';
import androidImage from '../../assets/classItems/android.png';
import cordelImage from '../../assets/classItems/cordel.png';

export const ClassItems = () => {
    return (
        <C.Container>
            <h3>Projetos Acadêmicos</h3>
            <div className='grid'>
                <div className='projeto'>
                    <div className='image'>
                        <img src={albumImage} alt="" />
                    </div>
                    <div>
                        <h4>Album React</h4>
                        <p>Projeto criado em aula utilizando a API fake JSONPlaceholder para acessar as informações em seu banco de dados com rotas de acesso.</p>
                        <button>Acessar</button>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='image'>
                        <img src={memoryImage} alt="" />
                    </div>
                    <div>
                        <h4>Jogo React</h4>
                        <p>Projeto criado em aula com ReactJS. Um jogo da memória com relógio de tempo e número de jogadas realizadas pelo jogador da vez.</p>
                        <button>Acessar</button>
                    </div>
                </div>  

                <div className='projeto'>
                    <div className='image'>
                        <img src={calcImage} alt="" />
                    </div>
                    <div>
                        <h4>Calculadore de IMG</h4>
                        <p>Projeto criado em aula com ReactJS. Uma calculadora baseada em qualidade da saúde para identificar se o usuário está acima ou abaixo do peso, ou com o peso ideal.</p>
                        <button>Acessar</button>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='image'>
                        <img src={doctorImage} alt="" />
                    </div>
                    <div>
                        <h4>DoctorCare</h4>
                        <p>Projeto criado durante participação de evento para criação de landing page responsiva de uma clínica médica.</p>
                        <button>Acessar</button>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='image'>
                        <img src={marvelImage} alt="" />
                    </div>
                    <div>
                        <h4>Projeto Mravel</h4>
                        <p>Projeto criado em evento. Página web que simula uma seleção de personagens para 2 jogadores onde temos os personagens marcados para o peimeiro e para o segundo console.</p>
                        <button>Acessar</button>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='image'>
                        <img src={androidImage} alt="" />
                    </div>
                    <div>
                        <h4>Projeto Android</h4>
                        <p>Projeto criado em aula durante um curso de HTML, CSS e Javascript. Nele temos a responsividade web e mobile, e vemos algumas informações sobre o logo da Android.</p>
                        <button>Acessar</button>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='image'>
                        <img src={cordelImage} alt="" />
                    </div>
                    <div>
                        <h4>Projeto Cordel</h4>
                        <p>Projeto criado em aula HTML e CSS. Projeto responsivo criado em aula durante um curso de HTML e CSS. Nele temos o efeito responsivo web e mobile e um efeito parallax nas imagens que dão a impressão de sobrepostas.</p>
                        <button>Acessar</button>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='image'>
                        <img src={calcImage} alt="" />
                    </div>
                    <div>
                        <h4>Calculadore de IMG</h4>
                        <p>Projeto criado em aula com ReactJS. Uma calculadora baseada em qualidade da saúde para identificar se o usuário está acima ou abaixo do peso, ou com o peso ideal.</p>
                        <button>Acessar</button>
                    </div>
                </div>
            </div>          
        </C.Container>
    );
}