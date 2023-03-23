import styled from "styled-components"
import yellow from "../assets/yellow.svg"
import green from "../assets/green.svg"
import { Link, useNavigate } from "react-router-dom"
import white from "../assets/white.svg"
import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { UserContext } from '../Contexts/UserContext';


export default function Subscriptions() {

    const { token } = useContext(UserContext)
    const [plans, setPlans] = useState([])
    
    console.log(token)
    console.log(plans)

    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
            .then((res) => {
                console.log(res.data)
                setPlans(res.data)
                console.log(plans)
            })
            .catch((err) => {
                console.error(err)
            })
    }, []);

    return (
        <>
            <Subs>
                <H1>Escolha seu Plano</H1>
                <ButtonPlan>
                    <LinkStyled to="/plus">
                        <img src={plans.image} />
                        <p>{plans.price}</p>
                    </LinkStyled>
                </ButtonPlan>
                <ButtonPlan>
                    <LinkStyled to="/gold">
                        <img src={yellow} />
                        <p>R$ 69,99</p>
                    </LinkStyled>
                </ButtonPlan>
                <ButtonPlan>
                    <LinkStyled to="/platinum">
                        <img src={green} />
                        <p>R$ 99,99</p>
                    </LinkStyled>
                </ButtonPlan>
            </Subs>
        </>
    )
}

const ButtonPlan = styled.button`
    width: 290px;
    height: 180px;
    background-color: #0E0E13;
    border-radius: 12px;
    border: 3px solid #7E7E7E;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'roboto';
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
`
const H1 = styled.h1`
    font-family: 'roboto';
    font-size: 32px;
    font-weight:700;
    margin-bottom: 24px;
    margin-top: 29px;
`

const Subs = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
`
const LinkStyled = styled(Link)`
    display: flex;
    flex-direction: row;
    display: flex;
    align-items: center;
    color: white;
`