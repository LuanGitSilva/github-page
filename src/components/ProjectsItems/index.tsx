import * as C from './styles';
import devImage from '../../assets/projectsItems/logo-dev-para-todos.png';
import functionImage from '../../assets/projectsItems/logo-functionflix.jpeg';
import contabilidadeImage from '../../assets/projectsItems/devcontabilidade.png';
import fotoImage from '../../assets/projectsItems/fotografia.png';

export const ProjectsItems = () => {
    return (
        <C.Container>
            <h3>Projetos Prórpios</h3>
            <div className='grid'>
                <div className='projeto'>
                    <div className='image'>
                        <img src={devImage} alt="" />
                    </div>
                    <div>
                        <h4>DevParaTodos</h4>
                        <p>Projeto iniciado em 2022 utilizando HTML, CSS e Javascript, pensado para disponibilizar conhecimento gratuito para pessoas interessadas em tecnologia frontend.</p>
                        <button>Acessar</button>
                    </div>
                </div>
            
                <div className='projeto'>
                    <div className='image'>
                        <img src={functionImage} width="300px" alt="" />
                    </div>
                    <div>
                        <h4>FunctionFlix</h4>
                        <p>Projeto iniciado em 2022 com ReactJS como continuação do DevParaTodos para disponibilizar conteúdos em vídeo para os interessados em tecnologia frontend de forma gratuita.</p>
                        <button>Acessar</button>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='image'>
                        <img src={contabilidadeImage} width="300px" alt="" />
                    </div>
                    <div>
                        <h4>Dev Contabilidade</h4>
                        <p>Projeto feito com HTML, CSS e Javascript direcionado para empresas contábeis e afins mostrando os serviços que a empresa oferece e as vantagens de contratá-los.</p>
                        <button>Acessar</button>
                    </div>
                </div>

                <div className='projeto'>
                    <div className='image'>
                        <img src={fotoImage} alt="" />
                    </div>
                    <div>
                        <h4>Site de Fotografias</h4>
                        <p>Projeto criado para apresentar produtos de fotógrafos aos clietes e mostrar os pacotes disponíveis e serviços já prestados.</p>
                        <button>Acessar</button>
                    </div>
                </div>
            </div>
        </C.Container>
    );
}