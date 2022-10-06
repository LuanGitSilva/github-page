import * as C from './styles';
import instagram from '../../assets/social/instagram.svg';
import github from '../../assets/social/github.svg';
import linkedin from '../../assets/social/linkedin.svg';
import configuracao from '../../assets/social/configuracao.svg';
import { useState } from 'react';


export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <C.Container>
            <C.Title>
                Luan Silva
            </C.Title>
            <C.Social>
                <div className={`reduzir ${isOpen ? '' : 'display'}`}>
                    <img src={instagram} alt="icon instagram" />
                    <img src={github} alt="icon github" />
                    <img src={linkedin} alt="icon linkedin" />
                </div>
                <div className='configuracao'>
                    <img src={configuracao} alt="icon configuração" onClick={handleToggle} />
                    <div className={`
                        cores 
                        ${isOpen ? 'display' : ''}
                    `}>
                        <ul>
                            <p>Tema</p>
                            <li><button className='dark'></button></li>
                            <li><button className='light'></button></li>
                        </ul>
                        <ul>
                            <li><button className='blue'></button></li>
                            <li><button className='white'></button></li>
                            <li><button className='purple'></button></li>
                            <li><button className='grey'></button></li>
                        </ul>
                    </div>
                </div>
            </C.Social>
        </C.Container>
    );
}