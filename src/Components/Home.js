import styled from "styled-components"
import user from "../assets/profile.png"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../Contexts/UserContext';
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function Home() {

    const { name, setName, token, setToken, UserData, setUserData, id } = useContext(UserContext)
    const [data, setData] = useState([])
    const [perks, setPerks] = useState([]);


    useEffect(() => {

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`, config)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                console.log("entrou")
                const perksArray = res.data.perks.map((perk) => ({
                    id: perk.id,
                    title: perk.title,
                    link: perk.link,
                }));

                setPerks(perksArray);

            })
            .catch((err) => {
                console.log("erro")
                alert(err.response.data.message)
            })
    }, []);

    console.log(perks)
    console.log(UserData)

    //CANCELAR PLANO

    function cancelar() {

        const headers = {
            Authorization: `Bearer ${token}`
        };

        const url = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";

        axios.delete(url, { headers })
            .then(response => {
                console.log("Assinatura cancelada com sucesso");
                console.log(response.data)
            })
            .catch(error => {
                console.error("Erro ao cancelar assinatura", error);
            });
    }

    return (
        <>
            <Screen>
                <Top>
                    <img src={data.image} alt="driven" />
                    <User src={user} alt="user-image" />
                </Top>
                <H1>Olá, {name}</H1>

                {perks.map((perk) => (
                    <ButtonPlan key={perk.id} to={perk.link}>{perk.title}</ButtonPlan>
                ))}

                <Change>
                    <ChangeButton >
                        <ButtonPlan to="/subscriptions">
                            Mudar Plano
                        </ButtonPlan>
                    </ChangeButton>
                    <ChangeButton>
                        <ButtonCancelar to="/subscriptions" onClick={cancelar}>
                            Cancelar Plano
                        </ButtonCancelar>
                    </ChangeButton>

                </Change>
            </Screen>
        </>
    )
}

const ChangeButton = styled.div`
`
const Screen = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
`
const ButtonPlan = styled(Link)`
    width: 299px;
    height: 52px;
    background-color: #FF4791;
    border-radius: 12px;
    border: 1px solid #FF4791;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'roboto';
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
`
const H1 = styled.h1`
    font-family: 'roboto';
    font-size: 24px;
    font-weight:700;
    margin-bottom: 24px;
    margin-top: 29px;
`
const Top = styled.div`
    margin-top: 32px;
    width: 375px;
    /* background-color: green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        height: 51px;
    }
`
const User = styled.img`
    /* height: 20px;
    width: 34px;
    background-color: red; */
`
const Change = styled.div`
    position: absolute;
    top: 505px;
`
const ButtonCancelar = styled(Link)`
    width: 299px;
    height: 52px;
    background-color: #FF4747;
    border-radius: 12px;
    border: 1px solid #FF4791;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'roboto';
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
`