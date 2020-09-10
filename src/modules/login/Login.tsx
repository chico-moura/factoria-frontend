import React from 'react'
import './Login.css'

export default function Login(){
    return (
        <div className='flex-container'>
            <div className='login-container shadow'>
                <h1>LOGIN</h1>
                <form action='POST'>
                    <label htmlFor='email'>E-mail</label><br/>
                    <input type='text' id='email' name='email'/><br/><br/>
                    <label htmlFor="senha">Senha</label><br/>
                    <input type='text' id='senha' name='senha'/><br/><br/>
                    <input type='submit'/>
                </form>
            </div>
        </div>
    )
}