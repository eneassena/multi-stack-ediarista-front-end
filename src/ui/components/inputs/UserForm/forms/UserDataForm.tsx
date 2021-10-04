import { Controller, useFormContext } from 'react-hook-form';
import TextField from 'ui/components/inputs/TextField/TextField';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { UserData } from '../UserForm.style'
import react from 'react';


export interface UserDataFormProps {
    cadastro?: boolean;
}

export const UserDataForm: React.FC<UserDataFormProps> = ({
    cadastro = false
}) => {
    const { register, formState: { errors }, control } = useFormContext();
    return <UserData>
        <TextField
            label={'Nome Completo'}
            style={{ gridArea: 'nome' }}
            defaultValue={''}
            {...register('usuario.nome_completo')}
            error={errors?.usuario?.nome_completo !== undefined}
            helperText={errors?.usuario?.nome_completo?.message}
        />
        <Controller
            name={'usuario.nascimento'}
            defaultValue={''}
            control={control}
            render={({ field: { ref, ...inputProps } }) => (
                <TextFieldMask
                    {...inputProps}
                    mask={'99/99/9999'}
                    label={'Data de nascimento'}
                    style={{ gridArea: 'data-nascimento' }}
                    error={errors?.usuario?.nascimento !== undefined}
                    helperText={errors?.usuario?.nascimento?.message}
                />
            )}
        />
        <Controller
            name={'usuario.cpf'}
            defaultValue={''}
            control={control}
            render={({ field: { ref, ...inputProps } }) => (
                <TextFieldMask
                    {...inputProps}
                    mask={'999.999.999-99'}
                    label={'CPF'}
                    style={{ gridArea: 'cpf' }}
                    error={errors?.usuario?.cpf !== undefined}
                    helperText={errors?.usuario?.cpf?.message}
                    InputProps={{ readOnly: !cadastro }}
                />
            )}
        />
        <Controller
            name={'usuario.telefone'}
            defaultValue={''}
            control={control}
            render={({ field: { ref, ...inputProps } }) => (
                <TextFieldMask
                    {...inputProps}
                    mask={'(99) 99999-9999'}
                    label={'Telefone'}
                    style={{ gridArea: 'telefone' }}
                    error={errors?.usuario?.telefone !== undefined}
                    helperText={errors?.usuario?.telefone?.message}
                />
            )}
        />
    </UserData>
}