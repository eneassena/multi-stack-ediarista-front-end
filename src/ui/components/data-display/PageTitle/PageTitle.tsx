import { PageTitleContainer, PageTitleStyled, PageSubTitleStyled } from './PageTitle.style';
import React from 'react';

export interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return <div>
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      {subtitle && <PageSubTitleStyled>{subtitle}</PageSubTitleStyled>}
    </PageTitleContainer>
  </div>;
}

export default PageTitle;