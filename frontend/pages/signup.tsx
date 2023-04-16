import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import styled from "styled-components";
import { DivProp } from "../components/StyledComponents";

const Style = styled(DivProp)`

`;

const Signup: NextPage = () => {
    return <Style>
        <NextSeo title="Registre-se" />
        <h2>Registre-se</h2>
        <form>
            <input type="email" name="email" />
            <input type="password" name="password" />
        </form>
        <p>não tem uma conta?</p>
        <Link href="/login">entre</Link>
    </Style>
}

export default Signup;