import React,{FC} from 'react';
import style from './FormControls.module.css';
import { Field } from "redux-form";

type FormPropsType = {
    input: string
    meta: any
    child: any
    props: any
}

const FormControl: FC<FormPropsType> = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>{props.children}</div>
            {hasError && <div><span>{meta.error}</span></div>}
        </div>    
        )
}

type TextAreaPropsType = {
    props: any
}

export const Textarea: FC<TextAreaPropsType> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}

export const fieldCreator = (component, name, placeholder, validators, props={}, text="") => {
    return (
        <div>
        <Field
          component={component}
          name={name}
          placeholder={placeholder}
          validate={validators}
          {...props}
        /> {text}
      </div>
    )
}