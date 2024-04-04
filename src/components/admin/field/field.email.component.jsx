import React, { forwardRef } from "react";

const FieldEmail = ({ errorText, extraClass, visuallyLabel = true, required = false, ...rest }, ref) => {
    return (
        <div className={`admin-field${errorText ? ` admin-field_state_error` : ``}${extraClass ? ` ${extraClass}` : ``}`}>
            <label
                className={`admin-field__label${extraClass ? ` ${extraClass}-label` : ``}${
                    !visuallyLabel ? ` visually-hidden` : ``
                }`}
                htmlFor='email'
            >
                E-mail
            </label>
            <div className={`admin-field__inner${extraClass ? ` ${extraClass}-inner` : ``}`}>
                <input
                    ref={ref}
                    className={`admin-field__input${extraClass ? ` ${extraClass}-input` : ``}`}
                    id='email'
                    type='email'
                    autoComplete='email'
                    name='email'
                    placeholder='Введите email...'
                    required={required}
                    {...rest}
                />
                <span className={`admin-field__info-text${extraClass ? ` ${extraClass}-info-text` : ``}`}>{errorText}</span>
            </div>
        </div>
    );
};

export default forwardRef(FieldEmail);
