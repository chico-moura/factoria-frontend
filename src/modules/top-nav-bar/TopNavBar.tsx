import React from 'react';
import './TopNavBar.css';
import button from './button-factory'


export default function TopNavBar() {
    return (
        <nav className='top-nav-bar shadow'>
            {button('INÍCIO').link('/')}
            
            {button('CADASTROS').withFirstChild([
                button('Clientes').link(),
                button('Fornecedores').link(),
                button('Transportadores').link(),
                button('Produtos ...').withSecondChild([
                    button('Produtos').link('/produtos'),
                    button('Categorias').link(),
                    button('Kits').link(),
                    button('Receitas').link()
                ]),
                button('Serviços').link(),
                button('Usuários').link()
            ])}          
            {button('OPERAÇÕES').withFirstChild([
                button('Vender produtos').link(),
                button('Enviar mercadoria').link(),
                button('Ordens de serviço').link(),
                button('Ordens de produção').link(),
                button('Ajuste de estoque').link(),
                button('PDV').link()
            ])}
            {button('FINANCEIRO').withFirstChild([
                button('Caixa').link(),
                button('Contas a pagar').link(),
                button('Contas a receber').link(),
                button('Transferência entre contas').link(),
                button('Conciliação bancária').link()
            ])}
            {button('ACESSÓRIOS').withFirstChild([
                button('NF-E ...').withSecondChild([
                    button('Emitir/listas').link(),
                    button('Carregar XML').link(),
                    button('Carta de correção').link(),
                    button('Download de notas').link(),
                    button('Configurações das notas').link(),
                    button('Cadastro de CFOP').link(),
                ]),
                button('Boleto on-line ...').withSecondChild([
                    button('Listar boletos').link(),
                    button('Listas remessas').link(),
                    button('Tratar retorno').link(),
                ]),
                button('Gestão de tarefas').link(),
                button('Disco virtual').link(),
            ])}         
            {button('IMPRESSÕES').withFirstChild([
                button('Relatórios').link(),
                button('Recibos').link()
            ])}
            {button('USUÁRIO', true).withFirstChild([
                button('Login').link('/login'),
                button('blablablablabla').link(),
            ])}
            {button('CONFIGURAÇÕES', true).withFirstChild([
                button('blabla').link(),
                button('blablabla').link(),
            ])}     
        </nav>
    )
};