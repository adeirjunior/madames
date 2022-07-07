import type { NextPage } from "next";
import styled from "styled-components";
import Form from "../components/Form";
import { DivProp } from "../components/StyledComponents";

const Style = styled(DivProp)`

`;

const Login: NextPage = () => {
    return <Style>
        <Form />
    </Style>
}