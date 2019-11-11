import React from 'react'
import { CustomSlider } from '../components'

const Aprocer = () => {
  return (
    <main className="aprocer-content">
      <section className="aprocer-first-block">
        <h1><img src={require('../img/aprocer-page-top-image.svg')} alt="Aprocer" className="aprocer-page-top-image" /></h1>
        <p className="brown-font">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        <CustomSlider className="slider-aprocer">
          <img src={require('../img/slide-aprocer.jpg')} alt="" />
          <img src={require('../img/slide-aprocer.jpg')} alt="" />
          <img src={require('../img/slide-aprocer.jpg')} alt="" />
        </CustomSlider>
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
          <img src={require('../img/mapa.svg')} alt="Mapa" />
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
        <h2>Economia Crescente</h2>
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
              <h2>Plano de Desenvolvimento</h2>
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
