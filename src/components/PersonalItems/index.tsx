import * as C from './styles';
import perfilImage from '../../assets/perfil.png';

export const PersonalItems = () => {
    return (
        <C.Container>
            <h1>Hi, I'm Luan Silva</h1>
            <h3>Frontend Developer</h3>
            <h3>Always practicing and learning to be able to produce the best software with the best aesthetics.</h3>
            <img src={perfilImage} width="300px" alt="Photo" />
            <p>SCROLL</p>
        </C.Container>
    );
}