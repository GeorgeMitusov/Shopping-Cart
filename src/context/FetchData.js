import { useEffect, useContext } from 'react';
import { Context } from './Context';

const FetchData = () => {

    const { setAllProducts, setJewProducts, setElectronicProducts,
        setMenProducts, setWomenProducts, setLoading, isLoadMore } = useContext(Context);

    // useEffect(() => {

    //     const getAllProducts = async () => {

    //         setLoading(true);

    //         const productsFromServer = await fetchAllProducts();
            
    //         setAllProducts(productsFromServer);

    //         setLoading(false);
    //     }

    //     getAllProducts();
      
    // }, [])

    // useEffect(() => {

    //     const getJewProducts = async () => {

    //         setLoading(true);

    //         const productsFromServer = await fetchJewProducts();
            
    //         setJewProducts(productsFromServer);

    //         setLoading(false);
    //     }

    //     getJewProducts();
      
    // }, [])

    // useEffect(() => {

    //     const getElectrProducts = async () => {

    //         setLoading(true);

    //         const productsFromServer = await fetchElectronicProducts();
            
    //         setElectronicProducts(productsFromServer);

    //         setLoading(false);
    //     }

    //     getElectrProducts();
      
    // }, [])

    // useEffect(() => {

    //     const getMenProducts = async () => {

    //         setLoading(true);

    //         const productsFromServer = await fetchMenProducts();
            
    //         setMenProducts(productsFromServer);

    //         setLoading(false);
    //     }

    //     getMenProducts();
      
    // }, [])

    // useEffect(() => {

    //     const getWomenProducts = async () => {

    //         setLoading(true);

    //         const productsFromServer = await fetchWomenProducts();
            
    //         setWomenProducts(productsFromServer);

    //         setLoading(false);
    //     }

    //     getWomenProducts();
      
    // }, [])

    // useEffect(() => {

    //     const getAllProducts = async () => {

    //         setLoading(true);

    //         const productsFromServer = await fetchMoreAllProducts();
            
    //         setAllProducts( prevState => [ ...prevState, ...productsFromServer ])

    //         setLoading(false);
    //     }

    //     getAllProducts();
      
    // }, [isLoadMore])

    const fetchAllProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
    
        const data = await res.json();
    
        return data;
    }

    const fetchMoreAllProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products?limit=10&offset=20');
    
        const data = await res.json();
    
        return data;
    }
    
    const fetchJewProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products/category/jewelery');
    
        const data = await res.json();
    
        return data;
    }
    
    const fetchElectronicProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    
        const data = await res.json();
    
        return data;
    }
    
    const fetchMenProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products/category/men%27s%20clothing');
    
        const data = await res.json();
    
        return data;
    }
    
    const fetchWomenProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products/category/women%27s%20clothing');
    
        const data = await res.json();
    
        return data;
    }

    return null;
}

export default FetchData;