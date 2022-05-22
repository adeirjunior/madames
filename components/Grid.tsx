import styled from "styled-components";
import type { FC } from "react";
import type { ChildrenProp } from '../types/types'

const Style = styled.div`
display: grid;
grid-template-columns: 125px 125px;
place-content: center;
gap: .5em
`;

const Grid = ({ children }: ChildrenProp) => {
    return (
        <Style>
            {children}
        </Style>
    )
}

export default Grid;