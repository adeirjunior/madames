interface Product {
    _id: any,
    price: number,
    quantity: number,
    name: string
}
interface DivStyleProps{
    className?: string;
    fontSize?: any;
    color?: string;
    children?: any;
    active?: boolean;
}
interface FormStyleProps{
    className?: string;
    fontSize?: any;
    color?: string;
    children?: any;
    active?: boolean;
}
interface SearchBarProp {
    filter?: boolean
}

export type { Product, DivStyleProps, FormStyleProps, SearchBarProp };