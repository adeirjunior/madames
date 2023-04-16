import styled, { css } from "styled-components";
import type { ChildrenProp } from '../types/types';
import { DivProp } from "./StyledComponents";

const Style = styled(DivProp)`

${props => props.mode === false && css`
    display: grid;
    position: relative;
    grid-template-columns: repeat(2, 125px);
    place-content: center;
    gap: .5em;

    @media only screen and (min-width: 540px) {
        grid-template-columns: repeat(3, 125px);
        gap: 1em;
    }
    @media only screen and (min-width: 720px) {
        grid-template-columns: repeat(4, 125px);
        gap: 1em;
    }
    @media only screen and (min-width: 900px) {
        grid-template-columns: repeat(5, 125px);
        gap: 1em;
    }
    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(5, 150px);
        gap: 1em;
    }
    @media only screen and (min-width: 1440px) {
        grid-template-columns: repeat(5, 225px);
        gap: 1.5em;
    }
`}

${props => props.mode && css`
    display: flex;

`}

`;

const Grid = ({ children, productPage }: ChildrenProp) => {
    return (
        <Style mode={productPage ?? false}>
            {children}
        </Style>
    )
}

export default Grid;