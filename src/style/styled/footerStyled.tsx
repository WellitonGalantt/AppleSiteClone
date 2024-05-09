import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 10vh;
  background-color: #1d1d1f;
  padding: 3rem 0 4rem;
  font-family: 'myriadPro';

  .footer-box-link-todo{
    display: flex;
    justify-content: space-between;
    width: 50%;
    gap: 2rem;
  }

  .link-box-footer{
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .link-box-footer ul{
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .link-box-footer span{
    color: #f7f7f7;
    font-size: 15px;
  }

  .footer-box-link-todo a{
    font-size: 13px;
    color: #8f8f8f;
  }


  /* more infos */
  .more-info-box-footer{
    width: 50%;
    padding-top: 2rem;
  }

  .more-info-box-footer p{
    font-size: 13px;
    color: #8f8f8f;
  }
  .more-info-box-footer p a{
    color: #1969e0;
    text-decoration: underline;
  }

  .more-info-box-footer p:first-of-type{
    border-bottom: solid 2px #8f8f8f;
    padding: 0 0 1rem;
  }

  .more-info-box-footer p:last-of-type{
    margin: 1rem 0 .5rem 0;
  }

  .more-info-box-footer p:last-of-type a{
    float: right;
    color: #f7f7f7;
    text-decoration: none;
  }

  .more-info-box-footer aside a{
    font-size: 13px;
    padding: 0 1rem 0 1rem;
    border-right: solid 1px #8f8f8f;
    color: #f7f7f7;
  }

  .more-info-box-footer aside a:last-child{
    border-right: none;
    padding: 0 0 0 1rem;
  }

  .more-info-box-footer aside a:first-child{
    padding: 0 1rem 0 0 ;
  }
`