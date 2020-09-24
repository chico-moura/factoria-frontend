import React from 'react';
import '../styles/TopNavBar.css';
import NavButtonLink from './NavButtonLink'
import NavButtonDrop from './NavButtonDrop'


export default function TopNavBar() {
    return (
        <nav className='top-nav-bar shadow'>
            <div className='align-left'>
                <NavButtonLink to='/' text='INÍCIO'/>
                <NavButtonDrop text='CADASTROS'>
                    <NavButtonLink to='/clientes'text='Clientes'/>
                    <NavButtonLink to='/'text='Fornecedores' />
                    <NavButtonLink to='/'text='Transportadores'/>
                    <NavButtonDrop text='Produtos...'>
                        <NavButtonLink to='/produtos/' text='Produtos'/>
                        <NavButtonLink to='/' text='Categorias' />
                        <NavButtonLink to='/' text='Kits' />
                        <NavButtonLink to='/' text='Receitas'/>
                    </NavButtonDrop>
                    <NavButtonLink to='/' text='Serviços'/>
                    <NavButtonLink to='/' text='Usuários'/>
                </NavButtonDrop>
                <NavButtonDrop text='OPERAÇÕES'>
                    <NavButtonLink to='/' text='Vernder produtos'/>
                    <NavButtonLink to='/' text='Enviar mercadoria'/>
                    <NavButtonLink to='/' text='Ordens de serviço'/>
                    <NavButtonLink to='/' text='Ordens de produção'/>
                    <NavButtonLink to='/' text='PDV'/>
                </NavButtonDrop>
                <NavButtonDrop text='FINANCEIRO'>
                    <NavButtonLink to='/' text='Caixa'/>
                    <NavButtonLink to='/' text='Contas a pagar'/>
                    <NavButtonLink to='/' text='Contas a receber'/>
                    <NavButtonLink to='/' text='Transferência entre contas'/>
                    <NavButtonLink to='/' text='Conciliação bancária'/>
                </NavButtonDrop>
                <NavButtonDrop text='ACESSÓRIOS'>
                    <NavButtonDrop text='NF-E...'>
                        <NavButtonLink to='/' text='Emitir/listar'/>
                        <NavButtonLink to='/' text='Carregar XML'/>
                        <NavButtonLink to='/' text='Carta de correção'/>
                        <NavButtonLink to='/' text='Download de notas'/>
                        <NavButtonLink to='/' text='Configurações das notas'/>
                        <NavButtonLink to='/' text='Cadastro de CFOP'/>
                    </NavButtonDrop>
                    <NavButtonDrop text='Boleto on-line...'>
                        <NavButtonLink to='/' text='Listar boletos'/>
                        <NavButtonLink to='/' text='Listar remessas'/>
                        <NavButtonLink to='/' text='Tratar retorno'/>
                    </NavButtonDrop>
                    <NavButtonLink to='/' text='Gestão de tarefas'/>
                    <NavButtonLink to='/' text='Disco virtual'/>
                </NavButtonDrop>
                <NavButtonDrop text='IMPRESSÕES'>
                    <NavButtonLink to='/' text='Relatórios'/>
                    <NavButtonLink to='/' text='Recibos'/>
                </NavButtonDrop>
            </div>
            <div className='align-right'>
                <NavButtonDrop text='CONFIGURAÇÕES'>
                    <NavButtonLink to='/' text='blablaba'/>
                    <NavButtonLink to='/' text='blablbalb'/>
                </NavButtonDrop>
                <NavButtonDrop text='USUÁRIO'>
                    <NavButtonLink to='/login' text='Login'/>
                    <NavButtonLink to='/' text='blabla'/>
                </NavButtonDrop>
            </div>  
        </nav>
    )
};