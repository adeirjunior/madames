import styled from "styled-components";
import type { ChildrenProp } from '../types/types'

const Style = styled.div`
display: grid;
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
`;

const Grid = ({ children }: ChildrenProp) => {
    return (
        <Style>
            {children}
        </Style>
    )
}

export default Grid;