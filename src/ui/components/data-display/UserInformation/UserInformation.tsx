import React from 'react';
import { SystemProps } from '@material-ui/system';
import {
    UserInformationBox,
    UserName,
    UserDescription,
    AvatarStyled,
    RatingStyled
} from './UserInformation.style';

export interface UserInformationProps {
    name: string;
    picture: string;
    rating: number;
    description?: string;
    isRating?: boolean;
    sx?: SystemProps;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
    return (
        <UserInformationBox sx={props.sx} isRating={props.isRating}>
            <AvatarStyled src={props.picture}></AvatarStyled>
            <RatingStyled value={props.rating} readOnly></RatingStyled>
            <UserName>{props.name}</UserName>
            <UserDescription>{props.description}</UserDescription>
        </UserInformationBox>
    );
}

export default UserInformation;