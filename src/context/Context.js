import { createContext, useState, useEffect } from "react";

const headerLinksData = [
    {
        link: 'electronics',
        title: 'Electronics'
    },
    {
        link: 'jewelry',
        title: 'Jewelry'
    },
    {
        link: 'men-clothing',
        title: "Men's clothing"
    },
    {
        link: 'women-clothing',
        title: "Women's clothing"
    }
];

export const Context = createContext();

const ContextDataProvider = ({ children }) => {

    const [ cartItemsTotal, setCartItemsTotal ] = useState(0);

    const [ loading, setLoading ] = useState(true);
    const [ onInsideMenuOpen, setOnInsideMenuOpen ] = useState(false);

    const [ onCartMenuOpen, setOnCartMenuOpen ] = useState(false);
    const [ onNavMenuOpen, setOnNavMenuOpen ] = useState(false);

    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState([]);

    const [ selectedItem, setSelectedItem ] = useState(() => {
        const storedItem = JSON.parse(localStorage.getItem('selectedItem'));
        return storedItem || null;
    });

    const [ itemQuantity, setItemQuantity ] = useState(1);
    const [ errorMessage, setErrorMessage ] = useState('');

    const [ orderSuccess, setOrderSuccess ] = useState(false);

    const [ isScrolled, setIsScrolled ] = useState(false);

    const [ allProducts, setAllProducts ] = useState([]);
    const [ jewProducts, setJewProducts ] = useState([]);
    const [ electronicProducts, setElectronicProducts ] = useState([]);
    const [ menProducts, setMenProducts ] = useState([]);
    const [ womenProducts, setWomenProducts ] = useState([]);

    const [ isLoadMore, setIsLoadMore ] = useState(false);

    useEffect(() => {

        const getProducts = async () => {

            const productsFromServer = await fetchProducts();
            
            setProducts(productsFromServer);

            setLoading(false);
        }

        getProducts();

    }, [])

    useEffect(() => {

        localStorage.setItem('products', JSON.stringify(products));

    }, [products]);

    useEffect(() => {

        // localStorage.setItem('selectedItem', JSON.stringify(selectedItem));
        const storedItem  = JSON.parse(localStorage.getItem('selectedItem'));

        if (storedItem ) {
            setSelectedItem(storedItem );
        }

    }, []);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));

        if (storedCart) {
          setCart(storedCart);
        }

    }, []);

    const fetchProducts = async () => {

        const res = await fetch('https://fakestoreapi.com/products');

        const data = await res.json();

        return data;

    }

    const onDetailView = item => {
        localStorage.setItem('selectedItem', JSON.stringify(item));
        setSelectedItem(item);
    }

    // add to cart 
    const addToCart = (product, qty = 1) => {
        const exists = cart.find(i => i.id === product.id);
      
        if ( qty >= 1 ) {

            const updatedCart = exists
                ? cart.map( i =>
                        i.id === product.id ? { ...exists, qty: exists.qty + qty } : i
                    )
                : [ ...cart, { ...product, qty: qty } ];

            setCart( updatedCart );
            
            setErrorMessage('');
            
            localStorage.setItem('cart', JSON.stringify( updatedCart ));
            
        } else {
            setErrorMessage('Please select a quantity');
        }
    };

    // const addToCart = (product, qty = 1) => {
    //     const exists = cart.find(i => i.id === product.id);
      
    //     if (qty >= 1) {
    //         setCart(exists ? cart.map(i => i.id === product.id ? 
    //             {...exists, qty: exists.qty + qty} : i) : 
    //             [...cart, {...product, qty: qty}]
    //         );
    //         setErrorMessage('');
            
    //         localStorage.setItem(
    //             'cart',
    //             JSON.stringify(
    //               exists
    //                 ? cart.map((i) =>
    //                     i.id === product.id ? { ...exists, qty: exists.qty + qty } : i
    //                   )
    //                 : [...cart, { ...product, qty: qty }]
    //             )
    //         );
            
    //     } else {
    //         setErrorMessage('Please select a quantity');
    //     }
    // };

    // for the detailed view page
    const onQuantityIncrease = () => setItemQuantity( itemQuantity + 1 );
    const onQuantityDecrease = () => setItemQuantity( itemQuantity - 1 );

    // REMOVE OR DECREASE ITEM'S QTY FROM THE CART
    const removeFromCart = (product) => {
        const exists = cart.find((i) => i.id === product.id);
      
        if (exists.qty > 1) {
          const updatedCart = cart.map((i) =>
            i.id === product.id ? { ...exists, qty: exists.qty - 1 } : i
          );
      
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          setCart(updatedCart);
        } else {
          const updatedCart = cart.filter((i) => i.id !== product.id);
      
          localStorage.removeItem(product.id.toString());
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          setCart(updatedCart);
        }
    };

    // REMOVE THE WHOLE ITEM FROM THE CART
    const onCartItemDelete = product => {
        const updatedCart = cart.filter( i=> i.id !== product.id );
        localStorage.setItem('cart', JSON.stringify(updatedCart)); 
        setCart(updatedCart);
    }

    // CART ITEMS LENGTH
    const cartLength = () => cart.length;

    // TOTAL PRICE
    const totalCartPrice = () => cart.reduce((acc, curr) => acc + ( curr.price * curr.qty), 0);

    //menu 
    const onMenuToggle = () => setOnNavMenuOpen(!onNavMenuOpen);

    const onNavMenuClose = () => setOnNavMenuOpen(false);

    //cart
    const onCartToggle = () => setOnCartMenuOpen(!onCartMenuOpen);

    const onCartClose = () => setOnCartMenuOpen(false);

    const onCartOpen = () => setOnCartMenuOpen(true);

    const fromFinalPageGoBack = () => {

        setOrderSuccess(false);
        
        const updatedCart = [];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
        
    }

    return (
        <Context.Provider
            value={{ 
                cartItemsTotal, headerLinksData, products, 
                onDetailView, selectedItem, loading,
                onInsideMenuOpen, setOnInsideMenuOpen,
                addToCart, cart, onNavMenuClose,
                onMenuToggle, onCartMenuOpen,
                onNavMenuOpen, onCartToggle, onCartClose,
                onCartOpen, onCartItemDelete,
                cartLength, totalCartPrice, removeFromCart,
                itemQuantity, setItemQuantity,
                onQuantityIncrease, onQuantityDecrease,
                errorMessage, setErrorMessage,
                orderSuccess, setOrderSuccess,
                fromFinalPageGoBack, isScrolled, setIsScrolled,
                setAllProducts, setJewProducts, electronicProducts,
                setMenProducts, setWomenProducts, setLoading,
                allProducts, jewProducts, menProducts, 
                womenProducts,setElectronicProducts,
                isLoadMore, setIsLoadMore 
            }}
        >
            { children }
        </Context.Provider>
    )
}

export default ContextDataProvider;