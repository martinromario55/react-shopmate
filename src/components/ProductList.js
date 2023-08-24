import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

import Loading from '../assets/loading.gif'

export const ProductList = () => {
  //   const [products, setProducts] = useState([])
  const [url, setUrl] = useState('http://localhost:8000/products')

  //   Custom Hook
  const { data: products, loading, error } = useFetch(url)

  //   console.log(products)

  // async await
  //   const fetchProducts = useCallback(async () => {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setProducts(data)
  //   }, [url])

  //   useEffect(() => {
  //     // fetch api
  //     // fetch(url)
  //     //   .then(response => response.json())
  //     //   .then(data => setProducts(data))

  //     fetchProducts()
  //     console.log('-')
  //   }, [fetchProducts])

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl('http://localhost:8000/products')}>
          All
        </button>
        <button
          onClick={() => setUrl('http://localhost:8000/products?in_stock=true')}
        >
          In Stock Only
        </button>
      </div>
      {loading && (
        <p className="loading">
          <img src={Loading} alt="" />
        </p>
      )}

      {error && <p className="loading">{error}</p>}

      {products &&
        products.map(product => (
          <div className="card" key={product.id}>
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span className="price">{product.price}</span>
              &nbsp;
              <span className={product.in_stock ? 'instock' : 'unavailable'}>
                {product.in_stock ? 'In Stock' : 'Unavailable'}
              </span>
            </p>
          </div>
        ))}
    </section>
  )
}
