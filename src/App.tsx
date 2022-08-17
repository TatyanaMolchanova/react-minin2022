import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path={"/"} element={<ProductsPage />}></Route>
                <Route path={"/about"} element={<AboutPage />}></Route>
            </Routes>
        </>
    )
}

export default App;







//
//
// import React, {useState} from 'react';
// import {Product} from "./components/Product";
// import {useProducts} from "./hooks/products";
// import {Loader} from "./components/Loader";
// import {ErrorMessage} from "./components/ErrorMessage";
// import {Modal} from "./components/Modal";
// import {CreateProduct} from "./components/CreateProduct"
// import {IProduct} from "./models";
//
// function App() {
//     const {loading, error, products, addProduct} = useProducts()
//     const [modal, setModal] = useState(true)
//
//     const createHandler = (product: IProduct) => {
//         setModal(false)
//         addProduct(product)
//     }
//
//     return (
//         <div className={"container mx-auto max-w-2xl pt-5"}>
//             {loading && <Loader />}
//             {error && <ErrorMessage error={error} />}
//
//             {/*{ products.map((product, index) => <Product product={product} key={index} />) } */}
//             { products.map(product => <Product product={product} key={product.id} />) }
//
//             {modal && <Modal title="Create new Product" onClose={() => setModal(false)}>
//                 <CreateProduct onCreate={createHandler} />
//                 {/*<CreateProduct onCreate={() => setModal(false)} />*/}
//             </Modal>}
//
//             <button
//                 className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
//                 onClick={() => setModal(true)}
//             >+</button>
//
//             {/*<Product product={ products[0] } />*/}
//             {/*<Product product={ products[1] } />*/}
//             {/*<Product product={ products[0] } title={'test'} count={42} />*/}
//         </div>
//     )
//
//
//     // const [count, setCount] = useState(0)
//     // return (
//     //     <h1>Hello React!!!!</h1>
//     // );
//     // return React.createElement('h1', {}, 'Hello From JS')
//
//     // return e('div', {className: 'container'}, [
//     //     e('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
//     //     e('button', {
//     //         className: 'py-2 px-4 border',
//     //         key: 2,
//     //         onClick: () => setCount(count + 1)
//     //     }, 'Click me!')
//     // ])
// }
//
// export default App;





// import React, {createElement as e, useEffect, useState} from 'react';
// import {Product} from "./components/Product";
// import {products} from "./data/products";
// import axios, {AxiosError} from "axios";
// import {IProduct} from "./models";
//
// function App() {
//
//     const [products, setProducts] = useState<IProduct[]>([])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState('')
//
//     async function fetchProducts() {
//         try {
//             setError('')
//             setLoading(true)
//             const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
//             setProducts(response.data)
//             console.log("response", response);
//             setLoading(false)
//         } catch (e) {
//             const error = e as AxiosError
//             setLoading(false)
//             setError(error.message)
//         }
//         // const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
//     }
//
//     useEffect(() => {
//         console.log('effect')
//         fetchProducts().catch()
//     }, [])
//
//
//     return (
//         <div className={"container mx-auto max-w-2xl pt-5"}>
//             {loading && <p className={"text-center"}>Loading...</p>}
//             {error && <p className={"text-center text-red-600"}>{error}</p>}
//
//             {/*{ products.map((product, index) => <Product product={product} key={index} />) } */}
//             { products.map(product => <Product product={product} key={product.id} />) }
//
//             {/*<Product product={ products[0] } />*/}
//             {/*<Product product={ products[1] } />*/}
//             {/*<Product product={ products[0] } title={'test'} count={42} />*/}
//         </div>
//     )
//
//
//     // const [count, setCount] = useState(0)
//     // return (
//     //     <h1>Hello React!!!!</h1>
//     // );
//     // return React.createElement('h1', {}, 'Hello From JS')
//
//     // return e('div', {className: 'container'}, [
//     //     e('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
//     //     e('button', {
//     //         className: 'py-2 px-4 border',
//     //         key: 2,
//     //         onClick: () => setCount(count + 1)
//     //     }, 'Click me!')
//     // ])
// }
//
// export default App;





























// import React, {createElement as e, useEffect, useState} from 'react';
// import {Product} from "./components/Product";
// import {products} from "./data/products";
// import axios, {AxiosError} from "axios";
// import {IProduct} from "./models";
//
// function App() {
//
//     const [products, setProducts] = useState<IProduct[]>([])
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState('')
//
//     async function fetchProducts() {
//         try {
//             setError('')
//             setLoading(true)
//             const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
//             setProducts(response.data)
//             console.log("response", response);
//             setLoading(false)
//         } catch (e) {
//             const error = e as AxiosError
//             setLoading(false)
//             setError(error.message)
//         }
//         // const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
//     }
//
//     useEffect(() => {
//         console.log('effect')
//         fetchProducts().catch()
//     }, [])
//
//
//     return (
//         <div className={"container mx-auto max-w-2xl pt-5"}>
//             {loading && <p className={"text-center"}>Loading...</p>}
//             {error && <p className={"text-center text-red-600"}>{error}</p>}
//
//             {/*{ products.map((product, index) => <Product product={product} key={index} />) } */}
//             { products.map(product => <Product product={product} key={product.id} />) }
//
//             {/*<Product product={ products[0] } />*/}
//             {/*<Product product={ products[1] } />*/}
//             {/*<Product product={ products[0] } title={'test'} count={42} />*/}
//         </div>
//     )
//
//
//     // const [count, setCount] = useState(0)
//     // return (
//     //     <h1>Hello React!!!!</h1>
//     // );
//     // return React.createElement('h1', {}, 'Hello From JS')
//
//     // return e('div', {className: 'container'}, [
//     //     e('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
//     //     e('button', {
//     //         className: 'py-2 px-4 border',
//     //         key: 2,
//     //         onClick: () => setCount(count + 1)
//     //     }, 'Click me!')
//     // ])
// }
//
// export default App;

