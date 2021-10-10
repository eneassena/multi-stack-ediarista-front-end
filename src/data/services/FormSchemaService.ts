import * as yup from 'yup';
 
import { DateService } from './DateService';
import { PaymentService } from './PaymentService';
import { ValidationService } from './ValidationService';

export const FormSchemaService = {
    useData() {
        return yup
            .object()
            .shape({
                usuario: yup.object().shape({
                    nome_completo: yup
                        .string()
                        .min(3, 'Digite seu nome completo'),
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
            })
            .defined();
 
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
     payment() {
        return yup
            .object()
            .shape({
                pagamento: yup.object().shape({
                    numero_cartao: yup
                        .string()
                        .test(
                            'card_number',
                            'Número de Cartão invalido',
                            (value) => {
                                return PaymentService.validate({
                                    card_number: value as string,
                                    card_holder_name: '',
                                    card_expiration_date: '',
                                    card_cvv: '',
                                }).card_number;
                            }
                        ),
                    nome_cartao: yup.string(),
                    validade: yup
                        .string()
                        .test(
                            'card_expiration_date',
                            'Data de validação inválida',
                            (value) => {
                                return PaymentService.validate({
                                    card_number: '',
                                    card_holder_name: '',
                                    card_expiration_date: value as string,
                                    card_cvv: '',
                                }).card_expiration_date;
                            }
                        ),
                    codigo: yup
                        .string()
                        .test(
                            'card_cvv',
                            'Código de validação inválido',
                            (value) => {
                                return PaymentService.validate({
                                    card_number: '',
                                    card_holder_name: '',
                                    card_expiration_date: '',
                                    card_cvv: value as string,
                                }).card_cvv;
                            }
                        ),
                }),
            })
            .defined();
    },
};
