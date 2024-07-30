import style from './input.module.css'

export function Input(props) {
    return (
        <input className={style.input} type="text" {...props} />
    )
}