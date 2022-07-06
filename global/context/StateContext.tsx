import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import type { ChildrenProp } from "../../types/types";
import type { FC } from "react";
import type { Product } from "../../types/interfaces";
import currency from 'currency.js';

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
    const [category, setCategory] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState<string>('');

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
        setTotalPrice((prev: number) => Number(currency(prev).add(currency(product.price).multiply(quantity))));
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

        setTotalPrice((prev: number) => {
            const result = currency(prev).subtract(currency(foundProduct.price).multiply(foundProduct.quantity));
            return Number(result);
        });
        setTotalQuantities(prev => prev - foundProduct.quantity);
        setCartItems(newCartItems);
    }

    const toggleCartItemQuantity = (id: string, value: string) => {
        foundProduct = cartItems.find(item => item._id === id);
        const indexFoundProduct = cartItems.indexOf(foundProduct);
        let newCart = cartItems;
        if (value === 'inc') {
            newCart[indexFoundProduct].quantity = foundProduct.quantity + 1;
            setCartItems(newCart);
            setTotalPrice((prev: number) => {
                const math:any = currency(prev).add(foundProduct.price);
                return Number(math);
            });
            setTotalQuantities(prev => prev + 1);

        } else if( value === 'dec' ) {
            if (foundProduct.quantity > 1 ) {
                newCart[indexFoundProduct].quantity = foundProduct.quantity - 1;
                setCartItems(newCart);
                setTotalPrice((prev: number) => {
                    const math:any = currency(prev).subtract(foundProduct.price);
                    return Number(math);
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
            history,
            searchResults,
            setSearchResults,
            searchText,
            setSearchText
        }}
        >
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => useContext(Context);