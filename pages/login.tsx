import type { NextPage } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import styled from "styled-components";
import { DivProp } from "../components/StyledComponents";

const Style = styled(DivProp)`

`;

const Login: NextPage = () => {
    return <Style>
        <NextSeo title="Entre" />
        <h2>Entrar</h2>
        <form>
            <input type="email" name="email" />
            <input type="password" name="password" />
        </form>
        <p>não tem uma conta?</p>
        <Link href="/signup">registre-se</Link>
    </Style>
}

export default Login;