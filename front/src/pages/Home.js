import React from 'react';
import { CustomSlider, VoceSabia } from '../components';

export default () => (
  <main className="home-content">
    <section className="home-banner">
      <img src={require('../img/banner.jpg')} alt="" />
      <div><p>O Queijo Minas Artesanal do Cerrado <br /> transforma uma cultura em uma <br /> referência de processo e sabor.</p></div>
    </section>
    <section className="queijo-minas">
      <img src={require('../img/IMG_8471.jpg')} alt="" />
      <div className="text-block">
        <h1>Queijo Minas Artesanal do Cerrado</h1>
        <p>Em Minas Gerais, o Queijo Minas Artesanal sobreviveu às pressões da modernização dos processos de produção, não só pelo apego às tradições, mas também pelo isolamento das propriedades produtoras, espalhadas pelas colinas e pelos vales do Estado. Isso contribuiu para que se preservassem produtos com características próprias e de imenso valor cultural e econômico.</p>
      </div>
    </section>
    <section className="singularidade text-block brown-font">
      <h2>A singularidade do Queijo Minas Artesanal do Cerrado</h2>
      <p>A produção do queijo minas artesanal está associada à maneira única que o mineiro percebe o mundo que o cerca. Pode-se dizer que o ingrediente especial, que diferencia o Queijo Minas Artesanal do Cerrado, é o respeito pela tradição, que, além de tudo, busca preservar a identidade mineira e a memória daqueles que há décadas produzem essa receita. Porém, manter essa particularidade nem sempre é algo simples, já que muitas vezes os produtores artesanais são pressionados pelas grandes empresas de queijo. Isso faz com que estes produtores sejam forçados a concorrer numa condição desigual e, muitas vezes, desvantajosa. Ainda assim, por amor a suas raízes e por acreditarem em suas tradições, com persistência, os produtores fazem com que o Queijo Minas Artesanal sobreviva a todas essas pressões da modernização dos processos de produção. Seja como alimento, seja como manifestação cultural, o Queijo Minas Artesanal está presente no dia a dia e no imaginário dos mineiros. Em 2008, o modo artesanal da fabricação do queijo em Minas Gerais foi registrado como patrimônio cultural imaterial brasileiro pelo Conselho Consultivo do Instituto do Patrimônio Histórico e Artístico Nacional (Iphan).</p>
    </section>
    <section className="contexto-historico text-block brown-font">
      <h2>Contexto histórico</h2>
      <p>Não é à toa que, logo que se fala em Minas Gerais, muitos fazem a associação com o queijo. Isso porque já os primeiros povoadores trouxeram consigo o processo de fabricação do queijo, sendo, portanto, uma tradição de séculos e séculos de história. Uma alternativa que os primeiros colonos encontraram para não perderem o leite durante as bandeiras e expedições em busca do ouro foi a produção do queijo. A microrregião do Alto Paranaíba está localizada a oeste do Estado de Minas Gerais e tem como característica grande quantidade de água e um clima ameno, o que possibilita um lugar favorável para a produção do queijo. Nesta região está o Cerrado Mineiro, que muito se destaca pela produção queijeira.</p>
    </section>
    <section className="importancia-economica text-block brown-font">
      <h2>Sua importância econômica</h2>
      <p>Atualmente, 19 municípios compõem a região produtora do queijo minas artesanal do Cerrado. São eles: Abadia dos Dourados, Arapuá, Carmo do Paranaíba, Coromandel, Cruzeiro da Fortaleza, Guimarânia, Lagamar, Lagoa Formosa, Matutina, Patos de Minas, Patrocínio, Presidente Olegário, Rio Paranaíba, Santa Rosa da Serra, São Gonçalo do Abaeté, São Gotardo, Tiros, Varjão de Minas e Vazante. O número estimado de produtores é 6.112, com uma produção média de 17.137 t/ano, aproximadamente 17.582 empregos diretos que se distribuem por uma área de 29.397 km². Esses números provam a importância econômica desse queijo para a região.</p>
    </section>
    <section className="consumo text-block brown-font">
      <h2>O consumo do queijo artesanal é seguro?</h2>
      <p>Sim. Justamente com o objetivo de regularizar todo o processo de produção e divulgar o queijo artesanal no estado de Minas de Gerais, normatizado pela Lei Estadual 14.185/02, a Secretaria de Agricultura, Pecuária e Abastecimento de Minas Gerais e a Empresa de Assistência Técnica e Extensão Rural do Estado de Minas Gerais (Emater-MG) estão sempre em ação. Como destaque temos o programa de Apoio aos Queijos Tradicionais de Fabricação Artesanal, da Emater-MG, que busca garantir a segurança alimentar desses queijos, por meio do controle sanitário no processo de produção.</p>
    </section>
    <section className="home-slider-container">
      <CustomSlider className="home-slider">
        <img src={require('../img/slider-home-1.jpg')} alt="" />
        <img src={require('../img/slider-home-2.jpg')} alt="" />
        <img src={require('../img/slider-home-3.jpg')} alt="" />
      </CustomSlider>
    </section>
    <VoceSabia />
  </main>
);