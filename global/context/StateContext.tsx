import { createContext, useContext, useState, useEffect } from "react";
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
    const [logo, setLogo] = useState("Perfumes");
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemsProps[]);
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);


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
        setTotalPrice((prev: any) => prev + product.price * quantity);
        setTotalQuantities(prev => prev + quantity);
            

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
        toast.success(`${qty} ${product.name} added to the cart`);
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
            setLogo
        }}
        >
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => useContext(Context);