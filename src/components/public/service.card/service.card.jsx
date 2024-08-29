import React from 'react';

const ServiceCard = ({title, icon, link, showIcon = true}) => {
    return (
        <li>
            <a href={link} target={"_blank"} className='text-item services__item' style={{textDecoration: "none"}}>
                {showIcon && icon && <span className='text-item__icon'>{icon}</span>}
                <span className='text-item__text'>{title}</span>
            </a>
        </li>
    );
};

export default ServiceCard;