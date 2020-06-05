import React, {FC} from 'react';
import style from './FormControls.module.css';
import { Field, WrappedFieldProps, WrappedFieldMetaProps } from "redux-form";
import { FieldValidatorType } from '../../../utils/validators/validator';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: FC<FormControlPropsType> = ({meta, children}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>{children}</div>
            {hasError && <div><span>{meta.error}</span></div>}
        </div>    
        )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
        return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}



export function fieldCreator<FormKeysType extends string> (component: FC<WrappedFieldProps>, 
    name: FormKeysType, 
    placeholder: string | undefined, 
    validators: Array<FieldValidatorType>,
    props={}, text="") { 
        return <div>
        <Field
          component = {component}
          name = {name}
          placeholder = {placeholder}
          validate = {validators}
          {...props}
        /> {text}
      </div>
    }