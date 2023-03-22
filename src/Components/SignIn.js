import styled from "styled-components"
import InputStyled from "../Style/StyledInput"
import ButtonStyled from "../Style/StyledButton"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function login(e) {

        const body = { email, name, cpf, password }

        e.preventDefault();
        console.log("Cadastrando");

        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", body)

        //se sucesso to=/subscriptions
        promise.then((res) => {
            console.log(res)
            navigate("/subscriptions")
        })
        //se falha to=/home e exibir alert
        promise.catch((err) =>
            alert(err.response.statusText)
        )
    }

    return (
        <>
            <Form onSubmit={login}>
                <InputStyled onChange={e=> setName(e.target.value)} value={name} name="name" type="text" placeholder="Nome" required />
                <InputStyled onChange={e=> setCpf(e.target.value)} value={cpf} name="cpf" type="text" placeholder="CPF" required />
                <InputStyled onChange={e=> setEmail(e.target.value)} value={email} name="email" type="email" placeholder="E-mail" required />
                <InputStyled onChange={e=> setPassword(e.target.value)} value={password} name="password" type="password" placeholder="Senha" required />
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
    align-items: center;
`
const Tosignin = styled(Link)`
    font-family: "roboto";
    font-size: 14px;
    font-weight: 400;
    color: white;
`