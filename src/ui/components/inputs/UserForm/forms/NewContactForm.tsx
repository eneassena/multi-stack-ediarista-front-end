import react from 'react'
import { useFormContext } from "react-hook-form";
import { NewContactData } from '../UserForm.style';
import TextField from "ui/components/inputs/TextField/TextField";
import PasswordStrength from 'ui/components/feedback/PasswordStrength/PasswordStrength';

export const NewContactForm = () => {
    const { 
        register, 
        formState: {errors},
        watch
    } = useFormContext();
    const newPassword = watch('usuario.password')
    
    return <NewContactData>
        <TextField 
            label={'E-mail'}
            style={{gridArea: 'email'}}
            {...register('usuario.email')}
            error={errors?.usuario?.email !== undefined}
            helperText={errors?.usuario?.email?.message}
        />
        <TextField
            type={'password'}            
            label={'Senha'}
            style={{gridArea: 'senha'}}
            {...register('usuario.password')}
            error={errors?.usuario?.password !== undefined}
            helperText={errors?.usuario?.password?.message}
        />
        <TextField
            type={'password'}            
            label={'Confirmação da Senha'}            
            style={{gridArea: 'confirmar-senha'}}
            {...register('usuario.password_confirmation')}
            error={errors?.usuario?.password_confirmation !== undefined}
            helperText={errors?.usuario?.password_confirmation?.message}
        />
        <PasswordStrength 
            password={newPassword || ''}
        />        
    </NewContactData>;
}

