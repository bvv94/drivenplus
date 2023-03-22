import styled from "styled-components"
import driven from "../assets/Driven_white 1.png"
import InputStyled from "../Style/StyledInput"
import ButtonStyled from "../Style/StyledButton"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import apiAuth from "../services/apiAuth";
import axios from "axios";

export default function LogIn() {
    // const [data, setData] = useState({ email: "", password: "" })
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [user, setUser] = useContext()
    const navigate = useNavigate();

    function login(e) {

        const body = {email, password}
        console.log(body)
        e.preventDefault();
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", body)

        promise.then((res) => {
                console.log(res.data)
                navigate('/subscriptions')
            })
        promise.catch((err) => {
                alert(err.response.data.message)
            })

    }

    return (
        <>
            <Form onSubmit={login}>
                <Logo src={driven} />
                <InputStyled name="email" type="email" placeholder="E-mail" required 
                    value={email} onChange={e=> setEmail(e.target.value)}/>
                <InputStyled name="password" type="password" placeholder="Senha" required 
                    value={password} onChange={e=> setPassword(e.target.value)}/>
                <ButtonStyled type="submit">ENTRAR</ButtonStyled>
                <Tosignin to="/cadastro">Não possui uma conta? Cadastre-se</Tosignin>
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