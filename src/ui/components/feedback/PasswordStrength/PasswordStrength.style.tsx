import { styled } from '@material-ui/core/styles';
import { LinearProgress, Theme } from '@material-ui/core';
// import { PasswordStrengthProps } from './PasswordStrength';

export const PasswordStrengthLabel = styled('span', {
    shouldForwardProp: (prop) => prop !== 'value'
}) <{ value: number }>`
    font-weight: bold;
    background-color: white;
    color: ${({ theme, value }) => handleBarColor(theme, value)};
`;
export const PasswordStrengthBar = styled(LinearProgress)`
   margin-top: ${({ theme }) => theme.spacing()};

    .MuiLinearProgress-bar {
        background-color: ${({ theme, value }) => handleBarColor(theme, value)};
    }

   &.MuiLinearProgress-root {
    background-color: ${({ theme }) => theme.palette.grey[200]};
   }
`;


function handleBarColor(theme: Theme, value = 0) {
    if (value <= 25) {
        return theme.palette.error.main;
    }
    if (value > 25 && value <= 50) {
        return theme.palette.warning.main;
    }
    return theme.palette.success.main;

}
