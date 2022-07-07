import { FC } from 'react';
import { DivStyleProps, FormStyleProps } from '../types/interfaces';


const DivProp:FC <DivStyleProps> = ({className, children}) => {
    return (
        <div className={className}>
           {children}
        </div>
    )
}
const FormProp:FC <FormStyleProps> = ({className, children}) => {
    return (
        <form className={className}>
           {children}
        </form>
    )
}

export { DivProp, FormProp };