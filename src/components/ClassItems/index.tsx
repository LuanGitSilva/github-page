import * as C from './styles';
import perfilImage from '../../assets/perfil.png';

export const ClassItems = () => {
    return (
        <C.Container>
            <h3>Projetos Acadêmicos</h3>
            <img src={perfilImage} width="300px" alt="" />
            <h4>lorem lorem</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa soluta consequuntur inventore placeat quidem libero sequi neque, nemo excepturi dolorem nihil est saepe in similique eos quia facere adipisci accusantium!</p>

            <img src={perfilImage} width="300px" alt="" />
            <h4>lorem lorem</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa soluta consequuntur inventore placeat quidem libero sequi neque, nemo excepturi dolorem nihil est saepe in similique eos quia facere adipisci accusantium!</p>            
        </C.Container>
    );
}