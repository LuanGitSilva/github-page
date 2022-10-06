import * as C from './styles';
import perfilImage from '../../assets/perfil.png';

export const PersonalItems = () => {
    return (
        <C.Container>
            <div className='grid'>
                <div className='gridUm'>
                    <h1>Hi, I'm Luan Silva</h1>
                    <h3 className='subUm'>Frontend Developer</h3>
                    <h3 className='subDois'>Always practicing and learning to be able to produce the best software with the best aesthetics.</h3>
                </div>
                <div className='gridDois'>
                    <img src={perfilImage} width="300px" alt="Photo" />
                </div>
            </div>
            <p>SCROLL</p>
        </C.Container>
    );
}