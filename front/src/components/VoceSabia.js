import React, { Component, createRef } from 'react';
import Slider from 'react-slick';
import MediaQuery from 'react-responsive';

const sliderProps = {
  arrows: false,
  fade: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 997,
      settings: {
        swipe: true,
        arrows: false
      }
    }
  ]
}

const triviaContent = [
  {
    title: '...QUE O PRIMEIRO QUEIJO TERIA SURGIDO ACIDENTALMENTE?',
    content: 'Apesar de o queijo existir há pelo menos seis mil anos, sua origem ainda é uma incógnita. Segundo contam, um mercador árabe saiu para cavalgar por uma região montanhosa. Como estava quente, levou consigo uma bolsa cheia de leite de cabra para saciar a sede. Depois de muito galope, num sol escaldante, ao pegar o seu cantil para matar sua sede, o árabe teve uma surpresa: o leite havia se separado em duas partes, uma líquida esbranquiçada e outra sólida, o queijo. Assim, acidentalmente, teria surgido o primeiro queijo. Em razão do calor, do galope do cavalo e do material do cantil (bolsa feita de estômago de carneiro), ocorreu a coagulação do leite. Até os dias de hoje, esse é o princípio seguido na fabricação do queijo.'
  },
  {
    title: '...QUE O QUEIJO MINAS ARTESANAL É PATRIMÔNIO CULTURAL?',
    content: 'Muita gente acha que apenas construções arquitetônicas são consideradas patrimônio cultural. Na verdade, tudo que representa a cultura de uma sociedade pode ser tombado. Em 2008, o modo como o Queijo Minas Artesanal é produzido foi reconhecido pelo Instituto Patrimônio Histórico Nacional (IPHAN) como Patrimônio Cultural Imaterial Brasileiro, tornando o nosso queijo parte da tradição e da história do nosso país.'
  },
  {
    title: '...QUE O PINGO É O “DNA” DO QUEIJO ARTESANAL MINEIRO?',
    content: 'Na fabricação do Queijo Minas Artesanal são utilizados o leite cru, retirado na própria fazenda, o coalho, o pingo e o sal. O grande diferencial, ingrediente fundamental no tradicional processo de produção, é o uso do pingo. Ele é o “DNA” do Queijo Artesanal Mineiro e nele está agregado o ecossistema de cada região: as peculiaridades do substrato geológico, do relevo, da água, do clima, das pastagens naturais. Então, ele é o elemento capaz de diferenciar o queijo de uma região do de outra. O pingo é recolhido a partir do soro que drena dos queijos após a salga, quando o sal grosso depositado em uma das superfícies do queijo neutraliza bactérias consideradas prejudiciais para o consumo humano e garante as boas condições do ingrediente que será utilizado no dia seguinte, para a composição de nova leva de queijos.'
  },
  {
    title: '...QUE EXISTEM VÁRIOS FESTIVAIS DO QUEIJO MINAS ARTESANAL?',
    content: 'Assim como existem diversas premiações que exaltam as diversas variedades de queijo, também existem festivais, inclusive no Brasil, que celebram a tradição do queijo minas artesanal. Em Belo Horizonte, por exemplo, é feito um festival em que se realiza um encontro de sabores do famoso queijo minas artesanal de leite cru, com ingredientes que harmonizam perfeitamente com ele. O intuito do festival é enaltecer a qualidade do queijo mineiro e evidenciar suas diversas formas de harmonização, atraindo, consequentemente, o interesse dos consumidores e privilegiando o trabalho de cada produtor. O evento é uma realização da FAEMG e do Sebrae, com produção da Panda Promoções e Eventos. Além desse, há vários outros, como o “Minas a Queijo e Viola”, realizado em Uberlândia, o “Festival Cultural de Paracatu”, em Paracatu, o “Balaio de Arte e Cultura”, em Patos de Minas...'
  },
  {
    title: '...QUE OS PRODUTORES DA APROCER JÁ CONQUISTARAM MUITAS MEDALHAS NOS CONCURSOS QUE PARTICIPARAM?',
    content: 'Concursos que exaltam o sabor e a importância dos queijos são feitos não só no Brasil, mas também no mundo inteiro. E os produtores da APROCER são destaques nos vários concursos que participam. Em 2019, foram premiados no 5º Prêmio Queijo Brasil, o maior concurso de queijo artesanal do Brasil, ocorrido em Florianópolis (SC) e na 12ª edição do Concurso Estadual do Queijo Minas Artesanal, realizado durante o Festival Minas à Queijo e Viola, em Uberlândia. No primeiro evento, foram 9 medalhas conquistadas: 01 medalha de ouro para o produtor Antônio Augusto, da região Abadia dos Dourados; 5 medalhas de prata, sendo 1 para o produtor Wellington Carlos Vieira, de Brejo Bonito, e 4 para Antônio Augusto; 3 medalhas de bronze, sendo 1 para o produtor Geraldo Brandão, de Carmo do Paranaíba e 2 para Antônio Augusto. No segundo eventos, foram 2 medalhas: a de 2º lugar para o produtor Elias Cortes, de Cruzeiro Fortaleza, e a de 5º lugar para Cleno Boaventura, de Carmo do Paranaíba.'
  },
  {
    title: '...QUE OS PRODUTORES DA APROCER SE PREOCUPAM COM O BEM-ESTAR ANIMAL?',
    content: 'Para que se tenha um queijo de qualidade, o gado leiteiro deve ser sadio e mantido sob controle veterinário, a fim de evitar a incidência de doenças. A qualidade higiênica do leite é influenciada, principalmente, pelo estado sanitário do rebanho, pelo manejo dos animais e dos equipamentos utilizados durante a ordenha. Os cuidados na obtenção higiênica do leite devem ter seu início na fonte de produção, a ordenha, que deve ser executada da forma mais criteriosa possível. Ou seja, quanto melhor tratado o animal, mais leite ele produzirá. O fazendeiro decide o que a vaca vai comer baseando-se na idade e no peso dela, assim como na quantidade de leite que ela produz por dia.'
  },
  {
    title: '...QUE EXISTE DIFERENÇA ENTRE O QUEIJO CURADO E O QUEIJO MEIA-CURA?',
    content: 'As diferenças entre cada tipo de queijo encontram-se no processo de produção, que influencia em tudo: na textura, na cor, no tipo, no sabor, etc. O queijo curado, também conhecido como “maduro”, é mais seco, graças a sua perda de água durante o processo de cura, e apresenta uma casca amarelada bem forte, além de sabor mais intenso. O período de maturação para o queijo curado é de, aproximadamente, 21 dias. Já o queijo meia-cura é aquele que se encontra no meio termo, entre maduro e fresco. Também apresenta uma casca de cor amarela, bem mais clara que no outro, porém com um sabor mais suave e com processo de maturação menor.'
  },
  {
    title: '...QUE O QUEIJO MINAS ARTESANAL DO CERRADO PODE SER UTILIZADO EM VÁRIAS RECEITAS?',
    content: 'Várias receitas típicas de Minas Gerais (e do restante do Brasil) utilizam o Queijo Minas Artesanal do Cerrado como ingrediente, por ele ser um alimento nutritivo e muito comum na mesa do brasileiro. Pamonhas, pães de queijo, queijo com goiabada, saladas e pudins são alguns dos exemplos de receitas simples, que podem ser feitas em família. Ah! E não podemos esquecer do queijinho assado, colocado entre as carnes do churrasco e ótimo para quem é vegetariano.'
  },
  {
    title: '...QUE O QUEIJO MINEIRO HARMONIZA COM DIVERSAS BEBIDAS?',
    content: 'Após o período de maturação, o queijo mineiro adquire um gosto intenso, ótimo para acompanhar diversas bebidas típicas brasileiras. Entre elas, destacam-se as cachaças armazenadas em amburana, espumante seco, vinhos tintos e cervejas artesanais. Uma sugestão bem mineira é o vinho Dom de Minas Cabernet, produzido na Cordislândia, que tem gosto mais leve e aroma de frutas vermelhas e especiarias.'
  },
  {
    title: '...QUE MUITOS SÃO OS BENEFÍCIOS PARA OS PRODUTORES DA APROCER?',
    content: 'A ideia do associativismo é somar forças para enfrentar os desafios do dia a dia e, ao mesmo tempo, desenvolver a atividade praticada para conquista de melhores resultados. O associativismo proporciona boas condições para que o produtor cresça, garantindo melhores desempenhos econômicos e mercadológicos. Os principais benefícios para os membros associados da APROCER são: troca de experiências e compartilhamento de ideias para acelerar o aprendizado e crescimento, captação de fornecedores, parceiros e possíveis clientes, fortalecimento da marca individual por meio da força, representatividade e marca da associação, solução de problemas e demandas junto às parcerias, acesso a programas de capacitação e treinamento e ampliação da representatividade política junto a órgãos governamentais.'
  },
  {
    title: '...QUE O MAIOR QUEIJO MINAS DO MUNDO PESA 1,98 TONELADAS?',
    content: 'A pequena cidade de Ipanema, no leste de Minas Gerais, produziu um queijo gigante, que pesou 1,98 toneladas. Foram gastos 21 mil litros de leite e ele conquistou o prêmio de Maior Queijo Minas já produzido.'
  },
  {
    title: '...QUE O QUEIJO PODE SER PRODUZIDO COM VÁRIOS TIPOS DE LEITE?',
    content: 'Aqui no Brasil, o queijo é comumente feito com o leite de vaca. Mas não se engane! Qualquer leite pode ser usado na produção de queijo: leite de búfalo, de cabra, de ovelha, de burro, etc. Na Suécia, existe um queijo que é feito, exclusivamente, com leite de alce, que demora mais de duas horas para ser ordenhado. Além disso, há os queijos produzidos com leite de origem vegetal.'
  },
  {
    title: '...QUE EXISTEM QUEIJOS QUE SÃO FEITOS SEM LEITE ANIMAL?',
    content: 'Os queijos veganos são aqueles produzidos sem a lactose, uma proteína do leite. Perfeito para quem é vegano, também pode ser consumido por quem tem intolerância à lactose e costuma não consumir queijos com leite animal. Na produção desses queijos, o leite animal é substituído pelo leite vegetal.'
  },
  {
    title: '...QUE O QUEIJO MAIS CARO DO MUNDO CUSTA 6 MIL REAIS?',
    content: 'O queijo mais caro do mundo custa, aproximadamente, 6 mil reais! Doeu no bolso, não é?! Ele é produzido com leite de burra, e, para cada peça do produto, são necessários 25 litros de leite, sendo que a fêmea só produz 20 litros por ano. Sendo assim, o preço médio da delícia é, em euros, de 1.260 €.'
  }
]

export default class VoceSabia extends Component {
  constructor(props) {
    super(props);
    this.slider = createRef();
  }

  render() {
    return (
      <section className="voce-sabia">
        <div className="voce-sabia-wrapper">
          <MediaQuery minWidth={998}>
            <button className="voce-sabia-prev" onClick={() => this.slider.current.slickPrev()}><img src={require('../img/prev-arrow.svg')} alt="Previous" /></button>
          </MediaQuery>
          <div className="voce-sabia-list">
            <h2>Você Sabia?...</h2>
            <img src={require('../img/voce-sabia.svg')} alt="Você Sabia?" />
            <Slider {...sliderProps} ref={this.slider}>
              {triviaContent.map(({ title, content }, index) => (
                <article key={index}>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </article>
              ))}
            </Slider>
          </div>
          <MediaQuery minWidth={998}>
            <button className="voce-sabia-next" onClick={() => this.slider.current.slickNext()}><img src={require('../img/next-arrow.svg')} alt="Next" /></button>
          </MediaQuery>
        </div>
      </section>
    )
  }
}
