import styled from "styled-components";

type onMouseCheck = {
  onMouse:string | boolean,
}

export const Header = styled.header<onMouseCheck>`
  display: flex;
  justify-content: center;
  /* height: 300px; */
  height: ${(e)=> e.onMouse ? '300px' : '44px'};
  width: 100%;
  background-color: #c5c5c5cc;
  position: sticky;
  z-index: 10;
  top: 0;
  overflow: hidden;
  transition: all 300ms ease-in-out;

  div{
    display: flex;
    gap: 2rem;
    align-items: center;
    position: absolute;
    height: 44px;
    top: 0;
  }

  ul{
    display: flex;
    gap: 2.5rem;
  }

  li{
    text-decoration: none;
    list-style: none;
    cursor: pointer;
  }

  li a{
    font-family: 'myriadProLight';
    font-size: 14px
  }

  .apple-logo-icon{
    font-size: 18px;
    cursor: pointer;
  }

  .search-icon, .bag-shop{
    font-size: 13px;
    color: #333;
    cursor: pointer;
  }

  //menu hover

  .options-box-menu-hover{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 900px;
    height: 80%;
    top: 50px;
  }

  .loja{
    display: ${(e)=> e.onMouse === 'loja' ? 'block' : 'none'};
  }

  .mac{
    display: ${(e)=> e.onMouse === 'mac' ? 'block' : 'none'};
  }

  .ipad{
    display: ${(e)=> e.onMouse === 'ipad' ? 'block' : 'none'}
  }

  .iphone{
    display: ${(e)=> e.onMouse === 'iphone' ? 'block' : 'none'};
  }

  .watch{
    display: ${(e)=> e.onMouse === 'watch' ? 'block' : 'none'};
  }

  .airpods{
    display: ${(e)=> e.onMouse === 'airpods' ? 'block' : 'none'};
  }

  .tv-casa{
    display: ${(e)=> e.onMouse === 'tv-casa' ? 'block' : 'none'};
  }

  .entretenimento{
    display: ${(e)=> e.onMouse === 'entretenimento' ? 'block' : 'none'};
  }

  .acessorios{
    display: ${(e)=> e.onMouse === 'acessorios' ? 'block' : 'none'};
  }

  .suporte{
    display: ${(e)=> e.onMouse === 'suporte' ? 'block' : 'none'};
  }
`