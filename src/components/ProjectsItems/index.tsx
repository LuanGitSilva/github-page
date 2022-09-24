import * as C from './styles';
import perfilImage from '../../assets/perfil.png';

export const ProjectsItems = () => {
    return (
        <C.Container>
            <h3>Projetos Prórpios</h3>
            <img src={perfilImage} width="300px" alt="" />
            <h4>DevParaTodos</h4>
            <p>Projeto iniciado em 2022 utilizando HTML, CSS e Javascript, pensado para disponibilizar conhecimento gratuito para pessoas interessadas em tecnologia frontend.</p>
        
            <img src={perfilImage} width="300px" alt="" />
            <h4>FunctionFlix</h4>
            <p>Projeto iniciado em 2022 com ReactJS como continuação do DevParaTodos para disponibilizar conteúdos em vídeo para os interessados em tecnologia frontend de forma gratuita.</p>
        </C.Container>
    );
}