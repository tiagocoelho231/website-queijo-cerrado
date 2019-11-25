import React from 'react'
import MediaQuery from 'react-responsive'
import { CustomSlider } from '../components'

const Aprocer = () => {
  return (
    <main className="aprocer-content">
      <section className="aprocer-first-block brown-font">
        <h1><img src={require('../img/aprocer-page-top-image.svg')} alt="Aprocer" className="aprocer-page-top-image" /></h1>
        <p>Pautada nos princípios do associativismo, a APROCER foi fundada em 2015, a partir da união de produtores de queijo da região do Cerrado. A associação tem por objetivo buscar constantemente a valorização e o reconhecimento de um bem comum, histórico e cultural: o Queijo Minas Artesanal do Cerrado. Desde a sua fundação, a APROCER, a partir de parcerias e convênios fechados para promoção dos produtores e de seu valioso produto, vem ganhando força, robustez e representatividade. Hoje, sob a presidência do produtor Wellington Carlos Vieira, de Cruzeiro da Fortaleza, a associação já conta com 14 associados.</p>
        <p>Os benefícios para os membros associados vão desde a troca de experiências e compartilhamento de ideias para acelerar o aprendizado e crescimento, a captação de fornecedores, parceiros e possíveis clientes, o fortalecimento da marca individual por meio da força, representatividade e marca da associação, a solução de problemas e demandas junto às parcerias, até o acesso a programas de capacitação e treinamento e a ampliação da representatividade política junto a órgãos governamentais.</p>
        <p>A APROCER trabalha em prol dos associados, promovendo o desenvolvimento produtivo da região de maneira sustentável, gerando qualidade de vida para os membros. Ela almeja o alcance, cada vez mais, de novos mercados, fazendo com que as pessoas possam (re)conhecer e apreciar o Queijo Minas Artesanal do Cerrado, que se destaca por sua qualidade e pelo sabor suave e diferenciado. O desejo é que esse queijo se efetive como uma marca de nossa região, sendo evidência do excelente trabalho de cada produtor, que deixe muito de sua história revelada nesse produto.</p>
        <CustomSlider className="slider-aprocer">
          <img src={require('../img/slide-aprocer.jpg')} alt="" />
          <img src={require('../img/slide-aprocer.jpg')} alt="" />
          <img src={require('../img/slide-aprocer.jpg')} alt="" />
        </CustomSlider>
      </section>
      <section className="parcerias text-block brown-font">
        <h1>Parcerias</h1>
        <p>A APROCER enxerga nas parcerias o caminho para concretização de sua missão. Desde o início, conta com parcerias que fazem a diferença para os produtores associados, tanto para o fortalecimento da microrregião do Cerrado, quanto para a entrega de um produto que possui cada vez mais qualidade para o consumidor.</p>
        <p>EMATER, SEBRAE, UNIPAM, UFU, UFV e Sicoob Credicarpa são parceiros da APROCER na luta pela valorização do queijo produzido artesanalmente na Região do Cerrado Mineiro.</p>
        <h2>EMATER e SEBRAE</h2>
        <p>A parceria com a Empresa de Assistência Técnica e Extensão Rural (EMATER/MG) e com o Serviço Brasileiro de Apoio às Micro e Pequenas Empresas  (SEBRAE/MG) resultou na criação do Programa de Fortalecimento da Produção e Comercialização do Queijo Minas Artesanal do Cerrado, em 2016. O Programa já rendeu a realização de seminários, concursos regionais e ações de benchmarking, bem como a participação em cursos de capacitação, em feiras e em concursos estaduais e nacionais. Esse movimento resultou em prêmios para a região e evidenciou o potencial do Queijo Minas Artesanal do Cerrado. Além disso, desde o início de 2018, o SEBRAE oferece também aos associados o curso de Cultura da Cooperação, fundamental para o fortalecimento da APROCER.</p>
        <h2>Sicoob Credicarpa</h2>
        <p>O Sicoob Credicarpa é parceiro fiel da APROCER. Sediou as primeiras reuniões da associação, em Carmo do Paranaíba e, desde então, tem sido um fomentador de recursos e apoiador dos vários projetos desenvolvidos pela APROCER e seus parceiros.</p>
        <h2>UNIPAM, UFU e UFV</h2>
        <p>A parceria dessas instituições com a APROCER nasceu da busca pela qualificação e profissionalização da produção do Queijo Minas Artesanal feito em cidades do Cerrado e do Triângulo. Dessa parceria resultou o “Projeto de Estudo do Queijo Minas”.</p>
        <p>A APROCER conta, além do apoio institucional da Universidade Federal de Viçosa (UFV), com o apoio da Universidade Federal de Uberlândia (UFU), do Centro Universitário de Patos de Minas (UNIPAM), do SEBRAE e da EMATER, no desenvolvimento da pesquisa sobre o tempo de maturação do queijo minas artesanal. O estudo visa determinar qual o prazo de maturação ideal para garantir segurança alimentar ao consumidor. A pesquisa foi lançada em março de 2019, porém iniciou-se de fato em outubro deste ano e se estende por um ano e meio.</p>
        <p>Além do envolvimento na pesquisa do tempo de maturação, o UNIPAM intensificou sua parceria com a APROCER por meio do desenvolvimento, no segundo semestre de 2019, de um Projeto Intercursos, com alunos dos cursos de Gestão do Agronegócio, Jornalismo, Publicidade e Propaganda, Letras e Sistemas de Informação. Ao buscar conhecer a história do nosso queijo e dos próprios produtores, o projeto contribui na proposta de dar cara e forma à Associação.</p>
        <h2>Jornalista Laryssa Caixeta</h2>
        <p>Além de todas as parcerias já citadas, a APROCER conta, desde o início do segundo semestre de 2019, com o apoio da jornalista e também professora do UNIPAM, Laryssa Caixeta, que tem tomado a Associação como fonte de estudo para seu mestrado profissional, auxiliando no processo de divulgação e fortalecimento da marca.</p>
      </section>
      <section className="aprocer-yellow-block">
        <div>
          <div>
            <h2>Transformar</h2>
            <p>Unir os produtores de queijo artesanal e compartihar conhecimentos da região do cerrado mineiro para crescerem como pessoas e como comunidade, de forma sustentável e inovadora.</p>
          </div>
          <div>
            <h2>Reconhecer</h2>
            <p>Perpetuar a produção artesanal do Queijo Minas do Cerrado, que preserva a natureza e se preocupa com o bem-estar dos animais, para torná-lo reconhecido e desej do pelo mercado local, regional, nacional e global.</p>
          </div>
          <div>
            <h2>Experienciar</h2>
            <p>Facilitar o acesso ao queijo pelo consumidor e possibilitar experiências surpreendentes ao conectar a fazenda, o produtor e o queijo com os apreciadores de queijo artesanal.</p>
          </div>
        </div>
      </section>
      <section className="mapa-aprocer">
        <div>
          <h2>Mapa da Região APROCER</h2>
          <MediaQuery minWidth={998}>
            <img src={require('../img/mapa.svg')} alt="Mapa" />
          </MediaQuery>
          <MediaQuery maxWidth={997}>
            <img src={require('../img/mapa-mobile.svg')} alt="Mapa" />
          </MediaQuery>
          <ul>
            <li>1 - Abadia dos Dourados</li>
            <li>2 - Arapuá</li>
            <li>3 - Carmo do Paranaíba</li>
            <li>4 - Coromandel</li>
            <li>5 - Cruzeiro da Fortaleza</li>
            <li>6 - Guimarânia</li>
            <li>7 - Lagamar</li>
            <li>8 - Lagoa Formosa</li>
            <li>9 - Matutina</li>
            <li>10 - Patos de Minas</li>
            <li>11 - Patrocínio</li>
            <li>12 - Presidente Olegário</li>
            <li>13 - Rio Paranaíba</li>
            <li>14 - Santa Rosa da Serra</li>
            <li>15 - São Gonçalo do Abaeté</li>
            <li>16 - São Gotardo</li>
            <li>17 - Tiros</li>
            <li>18 - Varjão de Minas</li>
            <li>19 - Vazante</li>
          </ul>
        </div>
      </section>
      <section className="economia-crescente">
        <h1>Economia Crescente</h1>
        <p>As condições físico-ambientais encontradas no Cerrado são favoráveis à produção de queijo, certamente devido a um ambiente propício ao desenvolvimento de bactérias típicas, que promovem o sabor característico do queijo tão apreciado pelos consumidores.</p>
        <div>
          <div>
            <img src={require('../img/icon-mapa-minas.svg')} alt="Mapa Minas" />
            <p><strong>25%</strong> da produção de queijo é mineira. O Estado de Minas Gerais é <strong>MAIOR</strong> produtor de queijo do Brasil.</p>
          </div>
          <div>
            <img src={require('../img/icon-queijo.svg')} alt="Queijo" />
            <p>Produção de <strong>250 mil</strong> toneladas de queijo/dia.</p>
          </div>
          <div>
            <img src={require('../img/icon-produtores.svg')} alt="Produtores" />
            <p>Aproximadamente <strong>30 mil</strong> produtores de queijo minas artesanal.</p>
          </div>
          <div>
            <img src={require('../img/icon-dinheiro.svg')} alt="Dinheiro" />
            <p>O queijo movimenta na indústria <strong>R$22 bilhões</strong> no país.</p>
          </div>
        </div>
      </section>
      <section className="associacao-propositos">
        <div className="associacao-propositos-header">
          <div>
            <h2>Associação e Seus Propósitos</h2>
            <div className="plano-desenvolvimento">
              <h3>Plano de Desenvolvimento</h3>
              <p>Texto do plano de desenvolvimento</p>
            </div>
          </div>
        </div>
        <div className="associacao-propositos-content">
          <div>
            <p><strong>União no Associativismo:</strong> proporciona uma união capaz de fazer os empresários/produtores pensar coletivamente e permite a troca de experiências que os faz crescerem conjuntamente.</p>
            <p><strong>Aculturamento:</strong> os empresários com perfil associativista têm ganhos significativos no que se refere à cultura empreendedora.</p>
          </div>
          <img src={require('../img/associacao.jpg')} alt="" />
        </div>
      </section>
    </main>
  )
}

export default Aprocer
