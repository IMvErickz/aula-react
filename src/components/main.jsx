import { Button } from "./button";
import { Input } from './Input'
import style from './main.module.css'

export function Main() {

    return (
        <main>
            <form className={style.form}>
                <Input />
                <Input />
                <Button text='Enviar'/>
            </form>
        </main>
    )
}