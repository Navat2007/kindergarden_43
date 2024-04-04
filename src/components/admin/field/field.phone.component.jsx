import React, { forwardRef } from "react";

const FieldPhone = (
    {
        errorText,
        extraClass,
        label = "Телефон",
        visuallyLabel = true,
        placeholder = "+7(___)___-__-__",
        required = false,
        ...rest
    },
    ref
) => {
    return (
        <div className={`admin-field${errorText ? " admin-field_state_error" : ""}${extraClass ? ` ${extraClass}` : ``}`}>
            <label
                className={`admin-field__label${extraClass ? ` ${extraClass}-label` : ``}${
                    !visuallyLabel ? ` visually-hidden` : ``
                }`}
                htmlFor='tel'
            >
                {label}
            </label>
            <div className={`admin-field__inner${extraClass ? ` ${extraClass}-inner` : ``}`}>
                <input
                    ref={ref}
                    className={`admin-field__input${extraClass ? ` ${extraClass}-input` : ``}`}
                    id='tel'
                    type='tel'
                    autoComplete='tel'
                    name='tel'
                    placeholder={placeholder}
                    pattern='\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'
                    required={required}
                    {...rest}
                />
                <span className={`admin-field__info-text${extraClass ? ` ${extraClass}-info-text` : ``}`}>{errorText}</span>
            </div>
        </div>
    );
};

export default forwardRef(FieldPhone);
