import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data)
            console.log("response", response);
            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
        // const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
    }

    useEffect(() => {
        console.log('effect')
        fetchProducts().catch()
    }, [])

    return {products, loading, error, addProduct}
}
