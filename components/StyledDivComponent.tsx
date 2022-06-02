import { FC } from 'react';

interface Props{
    className?: string;
    fontSize?: any;
    color?: string;
    children?: any;
    active?: boolean;
}
const Div:FC <Props> = ({className, children}) => {
    return (
        <div className={className}>
           {children}
        </div>
    )
}

export default Div;