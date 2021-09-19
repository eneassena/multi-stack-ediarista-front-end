import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, SelectProps as MuiSelectProps } from '@material-ui/core';
import { SelectStyled } from './Select.style';
import { v4 as uuid } from 'uuid';

export interface SelectProps extends MuiSelectProps {
    label?: string;
}

const Select: React.FC<SelectProps> = ({
    label,
    style,
    children,
    ...props
}) => {
    const [elementId, setElementId] = useState('');

    useEffect(() => {
        if (window !== undefined) {
            setElementId(uuid());
        }
    }, []);

    return (

        <FormControl variant={'outlined'} style={style}>
            <InputLabel id={elementId}>{label}</InputLabel>
            <SelectStyled labelId={elementId} label={label} {...props}>
                {children}
            </SelectStyled>
        </FormControl>
    );
}

export default Select;