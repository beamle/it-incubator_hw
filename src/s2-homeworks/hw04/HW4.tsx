import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайнom
* https://www.youtube.com/watch?v=J23s8r-byN8&t=721s
* */

const HW4 = () => {
    return (
        <div id={'hw4'}>
            <div className={s2.hwTitle}>Homework #4</div>
            {/*демонстрация возможностей компонент:*/}
            <hr/>
            <div className={s2.hw}>
                <Stand />
            </div>
            <hr/>
        </div>
    )
}

export default HW4
