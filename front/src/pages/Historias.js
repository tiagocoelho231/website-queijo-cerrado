import React from 'react'

const Historias = () => {
  return (
    <main className="stories-content">
      <section className="historias-que-encantam">
        <h1>Histórias que Encantam</h1>
        <div>
          <p>Neste espaço, você irá conhecer histórias encantadoras e inspiradoras, que envolvem o queijo não só como um produto, mas também como o resultado. Por meio de narrativas que buscam mostrar um pouco da personalidade e “raízes” dos produtores veremos o Queijo Minas Artesanal do Cerrado carregado de sinônimos e memórias surpreendentes.</p>
          <p>E para mergulhar nessas histórias e descobrir pessoas inspiradoras, por trás de um produto tão tradicional, foi necessário, antes, conhecer a produção, um pouco sobre o queijo, sobre o produto fresco e o produto maturado e também compreender como era a lida diária dessas pessoas, em busca de entregar a seus consumidores um excelente queijo, agregado de sabor, tradição, cultura e também valor. Muito mais que contar histórias, as narrativas nos permitem buscar as raízes do queijo, possibilitando a criação de perspectivas, da divulgação do produto e também da importância de se tornar um associado e alcançar parcerias de órgãos importantes.</p>
        </div>
      </section>
      <section className="stories-list">
        <div className="stories-grid brown-font">
          <div>
            <img src={require('../img/historias.jpg')} alt="História 1" />
            <p>Para mostrar o processo de produção, o pontapé inicial se deu na fazenda do presidente da APROCER, “O Casquinha”, da região de Cruzeiro da Fortaleza. Ele esbanja simpatia e mostrou, de forma sustentável, como cumprir exigências sem perder qualidade e tradição.</p>
          </div>
          <div>
            <img src={require('../img/historias.jpg')} alt="História 2" />
            <p>A segunda entrevista/história aconteceu com o Sr. Geraldo Brandão, morador da região de Carmo do Paranaíba, que, com muita garra e resiliência, mostrou a importância de não desistir de um sonho, por mais que venham ventos contrários.</p>
          </div>
          <div>
            <img src={require('../img/historias.jpg')} alt="História 3" />
            <p>A terceira história veio por meio de um empreendedor, cujo nome é Eudes Braga, também morador de Carmo do Paranaíba, que ensinou como agregar valor e multiplicar oportunidades, fazendo com que a própria produção se encarregue de crescer.</p>
          </div>
          <div>
            <img src={require('../img/historias.jpg')} alt="História 4" />
            <p>A quarta narrativa foi pura doçura, Sr. Antônio Lino, do município de Patrocínio, ensinou que, com muito jogo de cintura, é possível unir a produção de queijo com outras atividades, e ensinou, principalmente, que a receita da vida é nunca desistir, e selecionar ingredientes de primeira qualidade. </p>
          </div>
          <div>
            <img src={require('../img/historias.jpg')} alt="História 5" />
            <p>A quinta narrativa nos apresenta ao Sr. Ronaldo PAM, do município de Patos de Minas, que, com simpatia e humildade, faz entender que não é preciso ser “grande” para sermos melhor, e que não é preciso ter muito para ser “Ouro” – literalmente.</p>
          </div>
        </div>
        <p>As histórias aqui mostradas evidenciam que é preciso valorizar as pessoas, seu valor humano, antes da “confecção de um produto”.</p>
      </section>
      <section className="historias-ilustradas">
        <div className="historias-ilustradas-header">
          <h2>Histórias Ilustradas</h2>
        </div>
        <div className="historias-ilustradas-content">
          <div className="historias-ilustradas-top-block">
            <img src={require('../img/historias-ilustradas-topo.jpg')} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="comic-strips">
            <div className="comic-strip">
              {/* <img src={require('../img/')} alt="Tirinha 1" /> */}
              <p>Tirinha 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="comic-strip">
              {/* <img src={require('../img/')} alt="Tirinha 2" /> */}
              <p>Tirinha 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="comic-strip">
              {/* <img src={require('../img/')} alt="Tirinha 3" /> */}
              <p>Tirinha 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="charge"><img src={require('../img/charge.jpg')} alt="Charge" /></div>
        </div>
      </section>
    </main>
  )
}

export default Historias
