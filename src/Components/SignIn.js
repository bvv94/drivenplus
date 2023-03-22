import styled from "styled-components"
import InputStyled from "../Style/StyledInput"
import ButtonStyled from "../Style/StyledButton"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login(){
        //se sucesso to=/subscriptions
        //se falha to=/home e exibir alert
    }

    return (
        <>
            <Form onSubmit={login}>
                <InputStyled name="name" type="name" placeholder="Nome" required />
                <InputStyled name="cpf" type="cpf" placeholder="CPF" required minLength="11"/>
                <InputStyled name="email" type="email" placeholder="E-mail" required />
                <InputStyled name="password" type="password" placeholder="Senha" required />
                <ButtonStyled type="submit">ENTRAR</ButtonStyled>
                <Tosignin to="/">Já possui uma conta? Entre</Tosignin>
            </Form>
        </>)
}

const Logo = styled.img`
            width: 299px;
            height: 49px;
            margin: 134px auto 100px auto;
            display: flex;
            align-items: center;
`
const Form = styled.form`
    margin-top: 147px;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
`
const Tosignin = styled(Link)`
    font-family: "roboto";
    font-size: 14px;
    font-weight: 400;
    color: white;
`