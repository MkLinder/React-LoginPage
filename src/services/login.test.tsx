import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'mike@email.com'

    it('Deve exibir um alert com boas vindas, caso o email seja válido', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    });

    it('Não deve exibir mensagem de boas vindas sem email informado', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('qualquer@email.com')
        expect(mockAlert).toHaveBeenLastCalledWith('Email inválido!')
    })
})