import React from 'react';
import { ContentBox, ContentIpadPro, ContentIpadAir } from '../style/styled/contentsStyled';


function MainContents(){

  return(
    <>
      <ContentBox>
        
        <img className='ilustration-apple-pencil' src="https://www.apple.com/v/home/takeover/l/images/overview/hero/hero__x15fcac9fw2q_large.jpg" alt="imagem-post-1" />
        <p className='description-content-apple-pencil'>Apresentamos o inacreditavelmente fino e portátil iPad Pro com chip M4, o iPad Air redesenhado em dois tamanhos e o novíssimo Apple Pencil Pro.</p>
        <button className='button-content-apple-pencil btn'>Assistir ao evento</button>
        
      </ContentBox>

      <ContentIpadPro>
        
        <span className='ipad-pro-title-content'>iPad Pro</span>
        <p className='ipad-pro-description-content'>O produto Apple mais fino até hoje. E mais poderoso do que nunca. Incrivelmente portátil em um design elegante. Ultra Retina XDR, a tela mais avançada do mundo. Desempenho absurdo e gráficos impressionantes com o chip M4 da Apple. E bateria para o dia todo.</p>
        <span className='ipad-pro-more-info-content'>Confira em breve a disponibilidade</span>
        <div className='ipad-pro-box-btn'>
          <button className='ipad-pro-more-info-btn-content btn'>Saiba Mais</button>
          <button className='ipad-pro-view-price-btn-content btn'>Ver Preços</button>
        </div>
        <img className='ipad-pro-image-content' src="https://www.apple.com/v/home/takeover/l/images/overview/ipad-pro/ipadpro__chs04vd4nw2u_large.jpg" alt="ipad-pro-image" />

      </ContentIpadPro>

      <ContentIpadAir black = {false}>
        
        <img className='ipad-pro-title-img-content' src="https://www.apple.com/v/home/takeover/l/images/overview/ipad-air/logo_ipadair__f9tyq827tdme_large.png" />
        <p className='ipad-air-description-content'>Agora em dois modelos, de 11 ou 13 polegadas, ambos com a linda tela Liquid Retina. Além do desempenho alucinante do chip M2 da Apple, nova câmera frontal horizontal e bateria para o dia todo.</p>
        <span className='ipad-air-more-info-content'>Confira em breve a disponibilidade</span>
        <div className='ipad-air-box-btn'>
          <button className='ipad-air-more-info-btn-content btn'>Saiba Mais</button>
          <button className='ipad-air-view-price-btn-content btn'>Ver Preços</button>
        </div>
        <img src="https://www.apple.com/v/home/takeover/l/images/overview/ipad-air/ipadair__eyyd0s8bgtg2_large.png" alt="ipad-air-image" />
        
      </ContentIpadAir>
      
      <ContentIpadAir black>
        
        <img alt='Pencil pro title image' className='ipad-pro-title-img-content' src="https://www.apple.com/v/home/takeover/l/images/overview/pencil-pro/logo_applepencil__f356pn1n49ay_large.png" />
        <p className='ipad-air-description-content'>Desenhado para você criar sem limites e suas ideias ganharem vida de um jeito inédito. Com controle intuitivo e preciso e recursos avançados como Apertar, Rotação e resposta tátil. Compatível com o app Buscar para ser encontrado com facilidade.</p>
        <span className='ipad-air-more-info-content'>Confira em breve a disponibilidade</span>
        <div className='ipad-air-box-btn'>
          <button className='ipad-air-more-info-btn-content btn'>Saiba Mais</button>
          <button className='ipad-air-view-price-btn-content btn'>Ver Preços</button>
        </div>
        <img src="https://www.apple.com/v/home/takeover/l/images/overview/pencil-pro/scribe_applepencil__dzbomsr666wm_large.jpg" />
        
      </ContentIpadAir>
    </>
  )
}

export default MainContents;