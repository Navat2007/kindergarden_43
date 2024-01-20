import React from "react";
import { Icons, SocialIcons } from "../../svgs";

const socialGroup = ({ extraClass }) => {
    return (
        <ul className={`social-group${extraClass ? ` ${extraClass}` : ""}`}>
            <li>
                <a
                    className='social-group__link-icon'
                    target='_blank'
                    href='https://vk.com/public219786348'
                    rel='noreferrer noopener nofollow'
                    aria-label='Вконтакте'
                >
                    {SocialIcons.vk_without_color}
                </a>
            </li>
            <li>
                <a
                    className='social-group__link-icon'
                    target='_blank'
                    href='http://t.me/Fgdou43'
                    rel='noreferrer noopener nofollow'
                    aria-label='Телеграм'
                >
                    {SocialIcons.t_without_color}
                </a>
            </li>
            <li>
                <a
                    className='social-group__link-icon'
                    target='_blank'
                    href='tel:84991493724'
                    rel='noreferrer noopener nofollow'
                    aria-label='Телефон'
                >
                    {Icons.phone}
                </a>
            </li>
        </ul>
    );
};

export default socialGroup;
