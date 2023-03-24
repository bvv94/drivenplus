import styled from "styled-components"
import driven from "../assets/Driven_white 1.png"
import InputStyled from "../Style/StyledInput"
import ButtonStyled from "../Style/StyledButton"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../Contexts/UserContext';
import axios from "axios";
import { useContext } from "react"

export default function LogIn() {
    // const [data, setData] = useState({ email: "", password: "" })
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const {token, setToken} = useContext(TokenContext)
    const { name, setName, token, setToken, id, setId } = useContext(UserContext)
    const navigate = useNavigate();

    function login(e) {

        const body = { email, password }
        e.preventDefault();
        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", body)


        promise.then((res) => {
            setToken(res.data.token)
            setName(res.data.name)
            // setId(res.data.membership.id)
            if (res.data.membership && res.data.membership.id) {
                setId(res.data.membership.id)
                console.log(res.data)
                console.log(res.data.membership.id)
            }

            if (res.data.membership === null) {
                // alert("Assine Já!")
                navigate('/subscriptions')
            }
            else {
                // alert("Já Inscrito!")
                navigate('/home')
            }

        })
        promise.catch((err) => {
            alert(err.response.data.message)
        })

        console.log(token)
        console.log(name)

    }

    return (
        <>
            <Form onSubmit={login}>
                <Logo src={driven} />
                <InputStyled name="email" type="email" placeholder="E-mail" required
                    value={email} onChange={e => setEmail(e.target.value)} />
                <InputStyled name="password" type="password" placeholder="Senha" required
                    value={password} onChange={e => setPassword(e.target.value)} />
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