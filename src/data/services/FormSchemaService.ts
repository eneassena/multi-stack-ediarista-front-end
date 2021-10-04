import * as yup from 'yup';
import { ValidationService } from './ValidationService';
import { DateService } from './DateService';

export const FormSchemaService = {
    useData() {
        return yup.object().shape({
            usuario: yup.object().shape({
                nome_completo: yup.string().min(3, 'Digite seu nome completo'),
                nascimento: yup
                    .date()
                    .transform(DateService.transformDate)
                    .min(
                        DateService.maxAdultBirthday(),
                        'Digite uma data valida'
                    )
                    .max(
                        DateService.minAdultBirthday(),
                        'Proibido menores de idade'
                    )
                    .typeError('Digite uma data valida'),
                cpf: yup
                    .string()
                    .test('cpf', 'CPF Invalido', ValidationService.cpf),
                telefone: yup
                    .string()
                    .test(
                        'telefone',
                        'Telefone invalido',
                        ValidationService.telefone
                    ),
            }),
        });
    },
    newContact() {
        return yup
            .object()
            .shape({
                usuario: yup.object().shape({
                    email: yup.string().email('E-mail Inválido'),
                    password: yup.string().min(5, 'Senha muito curta'),
                    password_confirmation: yup
                        .string()
                        .min(5, 'Senha muito curta')
                        .oneOf(
                            [yup.ref('password'), null],
                            'As senhas não estão iguais'
                        ),
                }),
            })
            .defined();
    },
};
