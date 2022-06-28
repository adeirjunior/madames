import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import type { ChildrenProp } from "../../types/types";
import type { FC } from "react";
import type { Product } from "../../types/interfaces";

interface CartItemsProps {
    _id: any,
    quantity: number
}
const Context = createContext({});
export const StateContext: FC<ChildrenProp> = ({ children }) => {
    const [logo, setLogo] = useState<string>("Perfumes");
    const [showCart, setShowCart] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState([] as CartItemsProps[]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalQuantities, setTotalQuantities] = useState<number>(0);
    const [qty, setQty] = useState<number>(1);
    const [path, setPath] = useState<string>()
    const [ category, setCategory ] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);
    const [searchData, setSearchData] = useState<string>('');

    let foundProduct: any;

    const incQty = () => {
        setQty((prev) => prev + 1);
    }
    const decQty = () => {
        setQty((prev) => {
            if (prev - 1 < 1) return 1;

            return prev - 1
        });
    }
    const onAdd = (product: Product, quantity: number) => {
        const checkProductInCart = cartItems.find((item: {_id: any}) => item._id === product._id);
        setTotalPrice((prev: number) => prev + product.price * quantity);
        setTotalQuantities((prev: number) => prev + quantity);
            

        if (checkProductInCart) {
            

            const updatedCartItems = cartItems.map( (cartProduct: CartItemsProps) => {
                if (cartProduct._id === product._id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
                }
            }) as unknown as CartItemsProps[]
            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}]);
        }
        setQty(1);
        toast.success(`${qty} ${product.name} Adicionado Ao Carrinho`);
    }
    const remove = (id: string) => {
        foundProduct = cartItems.find(item => item._id === id);
        const newCartItems = cartItems.filter(item => item._id !== id);

        setTotalPrice(prev => prev - foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prev => prev - foundProduct.quantity);
        setCartItems(newCartItems);
    }

    const toggleCartItemQuantity = (id: string, value: string) => {
        foundProduct = cartItems.find(item => item._id === id);
        const newCartItems = cartItems.filter(item => item._id !== id);
        if (value === 'inc') {
            setCartItems([{ ...foundProduct, quantity: foundProduct.quantity + 1}, ...newCartItems]);
            setTotalPrice((prev: number) => {
                const math: number = prev + foundProduct.price;
                const str: string[] = String(math).split('.');
                const decimalPart: string = str[1]?.substr(0, 2) ?? '00'; 
                const newStr: string = `${str[0]}.${decimalPart}`;
                return Number(newStr);
            });
            setTotalQuantities(prev => prev + 1);

        } else if( value === 'dec' ) {
            if (foundProduct.quantity > 1 ) {
                setCartItems([{ ...foundProduct, quantity: foundProduct.quantity - 1}, ...newCartItems]);
                setTotalPrice((prev: number) => {
                    const math: number = prev - foundProduct.price;
                    const str: string[] = String(math).split('.');
                    const decimalPart: string = str[1]?.substr(0, 2) ?? '00'; 
                    const newStr: string = `${str[0]}.${decimalPart}`;
                    return Number(newStr);
                });
                setTotalQuantities(prev => prev - 1);
            } else if (foundProduct.quantity === 1 ) {
                remove(id);
            }
        }
    }
    return (
        <Context.Provider
        value={{
            showCart,
            setShowCart,
            cartItems,
            qty,
            incQty,
            decQty,
            totalPrice,
            totalQuantities,
            logo,
            setLogo,
            path, 
            setPath,
            onAdd,
            category,
            setCategory,
            remove,
            toggleCartItemQuantity,
            setHistory,
            history
        }}
        >
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => useContext(Context);