import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (id: string) => {
        if (onChangeOption) {
            console.log(id)
            onChangeOption(id)
        }

    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => {
            console.log(o.id, "ovalue id")
            console.log(value, "value ")
            return(
                <label key={name + '-' + o.id} className={s.label}>
                    <input
                        id={id + '-input-' + o.id}
                        className={finalRadioClassName}
                        type={'radio'}
                        checked={o.id === Number(value)}

                        onChange={() => onChangeCallback(o.id)}
                        {...restProps}
                    />
                    <span
                        id={id + '-span-' + o.id}
                        {...spanProps}
                        className={spanClassName}
                    >
                      {o.value}
                  </span>
                </label>
            )
        })
        : []
    console.log("insuepr Radio rerender", value)
    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
