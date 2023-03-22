import styled from "styled-components"
import driven from "../assets/Driven_white 1.png"
import InputStyled from "../Style/StyledInput"
import ButtonStyled from "../Style/StyledButton"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <>
            <Form>
                <Logo src={driven} />
                <InputStyled name="email" type="email" placeholder="E-mail" required />
                <InputStyled name="password" type="password" placeholder="Senha" required />
                <ButtonStyled>ENTRAR</ButtonStyled>
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