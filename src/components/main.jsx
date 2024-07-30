import { useState } from "react";
import { Button } from "./button";
import { Input } from './Input'
import style from './main.module.css'

export function Main() {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)

    const products = [
        {
            nome: 'Arroz',
            quantidade: 100
        },
        {
            nome: 'Feijão',
            quantidade: 200
        },
    ]

    const [arrayProducts, setProducts] = useState(products)

    function addProduct(event) {
        event.preventDefault()
        
        setProducts(state => [...state, {nome: name, quantidade: quantity}])
    }

    return (
        <main>
            <form onSubmit={addProduct} className={style.form}>
                <Input placeholder='Nome' onChange={event => setName(event.target.value)} />
                <Input placeholder='Quantidade' onChange={event => setQuantity(event.target.value)}/>
                <Button type='submit' text='Enviar'/>
            </form>
            <div>
                {arrayProducts.map(product => {
                    return (
                        <ul key={product.nome}>
                            <li>Nome: {product.nome}</li>
                            <li>Quantidade: {product.quantidade}</li>
                        </ul>
                    )
                })}
            </div>
        </main>
    )
}