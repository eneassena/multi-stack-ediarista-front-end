import { styled } from '@material-ui/core/styles';
// import {  } from '@material-ui/core';
// import { UserFormProps } from './UserForm';

export const BaseGrid = styled('div')`
    display: grid;
    grid-auto-rows: auto;
    gap: ${({ theme }) => theme.spacing(2) + ' ' + theme.spacing(3)};
    padding: ${({ theme }) => '0 0 ' + theme.spacing(5)};
    
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(3)};
    }    
`;

export const UserData = styled(BaseGrid)`
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 
      'nome nome nome'
      'data-nascimento cpf telefone';

    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-areas: 
          'nome'
          'data-nascimento'
          'cpf'
          'telefone';
    }
`;
export const NewContactData = styled(BaseGrid)`
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
      'email email'
      'senha password-strength'
      'confirmar-senha password-strength';

    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-areas: 
          'email'
          'senha'
          'confirmar-senha'
          'password-strength';
    }
`;

export const PictureSelection = styled(BaseGrid)`
  grid-template-columns: 1fr;
    padding: 0;
`;

