import React from 'react';
// import { } from '@material-ui/core';
import {
    SideInformationContainer,
    SideInformationHeader,
    SideInformationFooter,
    SideInformationListItem
} from './SideInformation.style';

export interface SideInformationProps {
    title?: string;
    items: {
        title: string;
        description: string[];
        icon?: string;
    }[];
    footer?: {
        text: string;
        icon: string;
    }
}

const SideInformation: React.FC<SideInformationProps> = (props) => {
    return (
        <SideInformationContainer>
            {props.title && (
                <SideInformationHeader>
                    <h3>{props.title}</h3>
                </SideInformationHeader>
            )}
            <ul>
                {props.items.map((item, index) => (
                    <SideInformationListItem key={index}>
                        {item.icon && <i className={item.icon}> </i>}
                        <div>
                            <h4>{item.title}</h4>
                            <ul>
                                {item.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </SideInformationListItem>
                ))}
            </ul>

            {props.footer && (
                <SideInformationFooter>
                    {props.footer.icon && <i className={props.footer.icon}></i>}
                    {props.footer.text}
                </SideInformationFooter>
            )}
        </SideInformationContainer>
    );
}

export default SideInformation;