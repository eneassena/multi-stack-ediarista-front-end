export const ValidationService = {
    cep(cep: string): boolean {
        return cep.replace(/\D/g, '').length === 8;
    },
    telefone(telefone = ''): boolean {
        return telefone.replace(/\D/g, '').length === 11;
    },
    cpf(cpf = ''): boolean {
};
