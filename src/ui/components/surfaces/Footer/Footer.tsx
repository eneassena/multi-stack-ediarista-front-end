import {
  FooterContainer,
  FooterTitle,
  FooterListItem,
  SocialContainer,
  AppList,
  FooterSocialList,
  SocialButtom,
  FooterGrid
} from "./Footer.style";

import { List, Box, Typography } from "@material-ui/core";
import React from "react";
import Link from "ui/components/navigation/Link/Link";

const Footer: React.FC = () => {
  return <FooterContainer>
    <FooterGrid>
      <div>
        <FooterTitle> Menu </FooterTitle>
        <List>
          <FooterListItem>
            <Link
              href={'/'} // encontro-diarista
              mui={{ color: 'inherit', variant: 'body2' }}
            >
              Encontrar um(a) diarista
            </Link>
          </FooterListItem>
          <FooterListItem>
            <Link
              href={'/'} //cadastro/diarista
              mui={{ color: 'inherit', variant: 'body2' }}
            >
              Seja um(a) diarista
            </Link>
          </FooterListItem>
          <FooterListItem>
            <Link
              href={'/'}
              mui={{ color: 'inherit', variant: 'body2' }}
            >
              Por que usar o E-Diarista
            </Link>
          </FooterListItem>
          <FooterListItem>
            <Link
              href={'/'}
              mui={{ color: 'inherit', variant: 'body2' }}
            >
              Principais Dúvidas
            </Link>
          </FooterListItem>
        </List>
      </div>

      <Box sx={{ maxWidth: '400px' }}  >
        <FooterTitle>Quem somos</FooterTitle>
        <Typography variant={'body2'} sx={{ mt: 2 }} >
          E-Diaristas te ajuda a encontrar um profissional perfeito para realizar a limpeza da sua casa. Garantimos o(a) melhor profissional com total segurança e praticidade! São milhares de clientes satisfeitos por todo o país.
        </Typography>
      </Box>

      <SocialContainer>
        <Box>
          <FooterTitle>Baixe Nosso aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href="/#" target={'_blank'} rel={'noopener noreferrer'} >
                <img src={"/img/logos/app-store.png"} alt="App Store" />
              </a>
            </li>
            <li>
              <a href="/#" target={'_blank'} rel={'noopener noreferrer'} >
                <img src={"/img/logos/google-play.png"} alt="Google Play" />
              </a>
            </li>
          </AppList>
        </Box>
        <div>
          <FooterTitle> Redes Sociais </FooterTitle>
          <FooterSocialList>
            <FooterListItem>
              <SocialButtom href={"/"}>
                <i className={'twf-facebook-f'} ></i>
              </SocialButtom>
            </FooterListItem>
            <FooterListItem>
              <SocialButtom href={"/"}>
                <i className={'twf-instagram'} ></i>
              </SocialButtom>
            </FooterListItem>
            <FooterListItem>
              <SocialButtom href={"/"}>
                <i className={'twf-youtube'} ></i>
              </SocialButtom>
            </FooterListItem>
          </FooterSocialList>
        </div>
      </SocialContainer>

    </FooterGrid>
  </FooterContainer >;
}


export default Footer;