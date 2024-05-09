import styled from 'styled-components'

const teste = ()=>{
  console.log('pla')
}

export const ContentBox = styled.section`
  display: flex ;
  align-items: center;
  flex-direction: column;
  min-height: fit-content;
  width: 100%;
  padding: 3rem 0 5rem;

  .ilustration-apple-pencil{
    width: 450px;
    height: 450px;
    margin: 0 0 2rem
  }

  .description-content-apple-pencil{
    font-size: 32px;
    width: 600px;
    text-align: center;
    margin: 0 0 2rem;
  }

  .btn{
    background: none;
    border: solid 2px #000000;
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 19px;
    font-family: 'myriadProLight';
    cursor: pointer;
  }

  .button-content-apple-pencil.btn:hover{
    background-color: #0e0e0e;
    color: #f7f7f7;
    border-color: #f7f7f7;
  }
  
`
export const ContentIpadPro = styled.section`
    overflow: hidden;
    display: flex ;
    align-items: center;
    flex-direction: column;
    height: 1000px;
    width: 100%;
    padding: 3rem 0 5rem;
    background-color: #000000;

  .ipad-pro-title-content{
    font-family: 'myriadProBold';
    font-size: 80px;
    color: #f7f7f7;
    margin: 0 0 2rem;
  }

  .ipad-pro-description-content{
    font-family: 'myriadPro';
    font-size: 24px;
    color: #c7c7c7;
    width: 600px;
    text-align: center;
    margin: 0 0 1rem;
  }

  .ipad-pro-more-info-content{
    font-size: 20px;
    color: #f7f7f7;
    margin: 0 0 2rem;
  }

  .ipad-pro-box-btn{
    display: flex;
    gap: 2rem;
    margin: 0 0 2rem;
  }

  .btn{
    background: none;
    border: solid 2px #000000;
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 19px;
    font-family: 'myriadProLight';
    cursor: pointer;
  }

  .ipad-pro-more-info-btn-content{
    background-color: #f7f7f7;
    border-color: #000000;
  }

  .ipad-pro-view-price-btn-content{
    color: #f7f7f7;
    border-color: #f7f7f7;
  }

  .ipad-pro-more-info-btn-content:hover{
    background-color: #000000;
    color: #f7f7f7;
    border-color: #f7f7f7;
  }

  .ipad-pro-view-price-btn-content:hover{
    color: #000000;
    background-color: #f7f7f7;
    border-color: #000000;
  }
  `

  type blackTheme = {
    black:boolean;
  }

  export const ContentIpadAir = styled.section<blackTheme>`
    display: flex ;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    padding: 4rem 0 5rem;
    background-color: ${(e)=> e.black ? '#000' : '#ADDCEE'};

    .btn{
    background: none;
    border: solid 2px ${(e)=> e.black ? '#f7f7f7' : '#000'};
    color: ${(e)=> e.black ? '#f7f7f7' : '#000'};
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 19px;
    font-family: 'myriadProLight';
    cursor: pointer;
    }

    .ipad-pro-title-img-content{
      margin: 0 0 2rem;
    }

    .ipad-air-description-content{
      color: ${(e)=> e.black ? '#f7f7f7' : '#000'};
      width: 600px;
      text-align: center;
      font-family: 'myriadPro';
      font-size: 24px;
      margin: 0 0 1rem;
    }

    .ipad-air-more-info-content{
      color: ${(e)=> e.black ? '#c7c7c7' : '#000'};
      font-size: 20px;
      margin: 0 0 2rem;
    }

    .ipad-air-box-btn{
      display: flex;
      gap: 2rem;
      margin: 0 0 2rem;
    }

    .ipad-air-more-info-btn-content{
      color: ${(e)=> e.black ? '#000' : '#ADDCEE'};
      background-color: ${(e)=> e.black ? '#f7f7f7' : '#000'};
    }

    .ipad-air-more-info-btn-content:hover{
      color: ${(e)=> e.black ? '#f7f7f7' : '#000'};
      background-color: ${(e)=> e.black ? '#000' : '#ADDCEE'};
    }

    .ipad-air-view-price-btn-content:hover{
      color: ${(e)=> e.black ? '#000' : '#ADDCEE'};
      background-color: ${(e)=> e.black ? '#f7f7f7' : '#000'};
    }
  `