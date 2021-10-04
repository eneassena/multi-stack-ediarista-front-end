export const ValidationService = {
    cep(cep: string = ''): boolean {
        return cep.replace(/\D/g, '').length === 8;
    },
    telefone(telefone: string = ''): boolean {
        return telefone.replace(/\D/g, '').length === 11;
    },
    cpf(cpf: string = ''): boolean {
        // buscar a função de validação no github
        return cpf.length !== 11;
    },
};
