import React from "react";
import { Footer } from "../style/styled/footerStyled";


function CreateFooter(){

  interface footerLinks{
    links:Array<string>;
  }

  /* let positionScroll:number = 0;
  window.addEventListener('scroll', ()=>{
    
    
    if(positionScroll < window.scrollY){
      positionScroll = window.scrollY
      console.log('desceu')
    }else{
      console.log('subiu')
      positionScroll = window.scrollY
    }   
  }) */

  return(

    <>
    <Footer>
      <div className="footer-box-link-todo">
        {/* coluna 1 */}
        <div className="link-box-footer">
          <span>Descobrir e Comprar</span>
          <nav>
            <ul>
              <li><a href="">Loja</a></li>
              <li><a href="">Mac</a></li>
              <li><a href="">iPad</a></li>
              <li><a href="">iPhone</a></li>
              <li><a href="">Watch</a></li>
              <li><a href="">AirPods</a></li>
              <li><a href="">TV e Casa</a></li>
              <li><a href="">AirTag</a></li>
              <li><a href="">Acessórios</a></li>
            </ul>
          </nav>
          <span>Carteira da Apple</span>
          <nav>
            <ul>
              <li><a href="">Carteira</a></li>
              <li><a href="">Apple Pay</a></li>
            </ul>
          </nav>
        </div>
        {/* coluna 2 */}
        <div className="link-box-footer">
          <span>Sua Conta</span>
          <nav>
            <ul>
              <li><a href="">Gerenciar seu ID Apple</a></li>
              <li><a href="">onta da Apple Store</a></li>
              <li><a href="">iCloud.com</a></li>
            </ul>
          </nav>

          <span>Entretenimento</span>
          <nav>
            <ul>
            <li><a href="">Apple One</a></li>
            <li><a href="">Apple TV+</a></li>
            <li><a href="">Apple Music</a></li>
            <li><a href="">Apple Arcade</a></li>
            <li><a href="">Apple Fitness+</a></li>
            <li><a href="">Apple Podcasts</a></li>
            <li><a href="">Apple Books</a></li>
            <li><a href="">App Store</a></li>
            </ul>
          </nav>
        </div>

        {/* coluna 3 */}
        <div className="link-box-footer">
          <span>Apple Store</span>
          <nav>
            <ul>
              <li><a href="">Encontre uma loja</a></li>
              <li><a href="">Genius Bar</a></li>
              <li><a href="">Today at Apple</a></li>
              <li><a href="">Reservas para grupos</a></li>
              <li><a href="">Apple Camp</a></li>
              <li><a href="">App Apple Store</a></li>
              <li><a href="">Financiamento</a></li>
              <li><a href="">Programa de Reciclagem da Apple</a></li>
              <li><a href="">Status do seu pedido</a></li>
              <li><a href="">Ajuda para comprar</a></li>
            </ul>
          </nav>
        </div>

        {/* coluna 4 */}
        <div className="link-box-footer">
          <span>Para Empresas</span>
          <nav>
            <ul>
              <li><a href="">Apple e os negócios</a></li>
              <li><a href="">Comprar para a sua empresa</a></li>
            </ul>
          </nav>
          
          <span>Para Educação</span>
          <nav>
            <ul>
              <li><a href="">Appel e a Educação</a></li>
              <li><a href="">Comprar para Educação Básica</a></li>
              <li><a href="">Comprar para a faculdade</a></li>
            </ul>
          </nav>

          <span>Para Saúde</span>
          <nav>
            <ul>
            <li><a href="">Apple e Saúde</a></li>
              <li><a href="">Saúde no Apple Watch</a></li>
            </ul>
          </nav>
        </div>

        {/* coluna 5 */}
        <div className="link-box-footer">
          <span>Valores da Apple</span>
          <nav>
            <ul>
              <li><a href="">Acessibilidade</a></li>
              <li><a href="">Educação</a></li>
              <li><a href="">Meio ambiente</a></li>
              <li><a href="">Privacidade</a></li>
              <li><a href="">Cadeia de fornecimento</a></li>
            </ul>
          </nav>

          <span>Sobre a Apple</span>
          <nav>
            <ul>
              <li><a href="">Newsroom</a></li>
              <li><a href="">Liderança da Apple</a></li>
              <li><a href="">Oportunidades de Carreira</a></li>
              <li><a href="">Investidores</a></li>
              <li><a href="">Ética e Compliance</a></li>
              <li><a href="">Eventos</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </nav>
        </div>

      </div>
      <div className="more-info-box-footer">
        <p>Outras formas de comprar: <a href="">encontre uma Apple Store</a> ou <a href="">revendedor Apple</a> na sua região. Ou ligue para 0800-761-0867. Rua Leopoldo Couto de Magalhães Jr., 700, 7º andar, Itaim Bibi. São Paulo, SP. CEP: 04542-000.
          Os Serviços de Mídia da Apple são fornecidos pela Apple Services LATAM LLC.</p>
        <p>Copyright © 2024 Apple Inc. Todos os direitos reservados. Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35 <a href="">Brasil</a></p>
        <aside>
          <a href="">Política de Privacidade</a>
          <a href="">Política de vendas</a>
          <a href="">Avisos Legais</a>
          <a href="">Mapa do Site</a>
        </aside>
      </div>
    </Footer>
    </>

  )
}

export default CreateFooter;