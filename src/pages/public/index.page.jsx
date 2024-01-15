import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import useNewsStore from "../../store/public/newsStore";

import BasicPage from "../../components/public/basic.page/basic.page.component";
import { Icons, AdvantagesIcons, SocialIcons } from "../../components/svgs";
import Tabs from "../../components/public/tabs/tabs.component";
import Tab from "../../components/public/tabs/tab.component";

const IndexPage = () => {
    const store = useNewsStore();
    const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);
    const [subMenuOpened, setSubMenuOpened] = React.useState(false);
    const [moreMenuOpened, setMoreMenuOpened] = React.useState(false);
    const [dropDownMenuOpened, setDropDownMenuOpened] = React.useState(false);
    const [thirdDropDownMenuOpened, setThirdDropDownMenuOpened] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            //await store.loadAllMain();
        };

        fetchData();
    }, []);

    return (
        <BasicPage>
            <Helmet>
                <title>Детский сад № 43 УДПРФ</title>
            </Helmet>
            {/* Шапка */}
            <header className='header page__header'>
                <div className='header__wrap'>
                    {/* Лого-компонент */}
                    <a className='header__logo-link logo-link' href='./' aria-label='Логотип' />
                    <menu
                        className={classNames({
                            "header__menu menu": true,
                            menu_opened: mobileMenuOpened,
                        })}
                    >
                        <ul className='menu__list'>
                            <li>
                                <a className='menu__link' href='./'>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    О нас
                                </a>
                            </li>
                            <li
                                className={classNames({
                                    submenu: true,
                                    submenu_opened: subMenuOpened,
                                })}
                            >
                                <button
                                    className={classNames({
                                        "menu__link submenu__button": true,
                                        submenu__button_actived: subMenuOpened,
                                    })}
                                    type='button'
                                    aria-label='Развернуть список'
                                    onClick={() => {
                                        setSubMenuOpened(!subMenuOpened);
                                    }}
                                >
                                    <span className='submenu__button-text'>
                                        Сведения об образовательной организации
                                    </span>
                                    <span className='submenu__button-icon'>{Icons.chevron_down}</span>
                                </button>
                                {/* первая вложенность с большим заголовком и оберткой для размещения под шапкой */}
                                <div className='submenu__wrap'>
                                    <div className='submenu__top-list-container'>
                                        <p className='submenu__title'>Сведения об образовательной организации</p>
                                        <ul className='submenu__top-list'>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Основные сведения
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Структура и органы управления образовательной организацией
                                                </a>
                                            </li>
                                            {/* Вторая вложенность без заголовка раздела и обертки, с классом submenu__item submenu__item_has-submenu */}
                                            <li
                                                className={classNames({
                                                    "submenu__item submenu__item_has-submenu": true,
                                                    "submenu__item_has-submenu_opened": dropDownMenuOpened,
                                                })}
                                            >
                                                <button
                                                    className={classNames({
                                                        "submenu__button menu__link": true,
                                                        submenu__button_actived: dropDownMenuOpened,
                                                    })}
                                                    type='button'
                                                    aria-label='Развернуть список'
                                                    onClick={() => {
                                                        setDropDownMenuOpened(!dropDownMenuOpened);
                                                    }}
                                                >
                                                    <span className='submenu__button-text'>Документы</span>
                                                    <span className='submenu__button-icon'>{Icons.chevron_down}</span>
                                                </button>
                                                <div className='submenu__list-container'>
                                                    <ul className='submenu__list'>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Основные сведения
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Структура и органы управления образовательной
                                                                организацией
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Документы
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образование
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образовательные стандарты и требования
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образование
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образовательные стандарты и требования
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Руководство. Педагогический (научно-педагогический) состав
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Материально-техническое обеспечение и оснащённость образовательного
                                                    процесса
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Стипендии и меры поддержки обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Платные образовательные услуги
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Финансово-хозяйственная деятельность
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Вакантные места для приёма (перевода) обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Доступная среда
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Международное сотрудничество
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Организация питания в образовательной организации
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Программы
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Режим
                                </a>
                            </li>
                            <li
                                className={classNames({
                                    submenu: true,
                                    submenu_opened: moreMenuOpened,
                                })}
                            >
                                <button
                                    className={classNames({
                                        "menu__link submenu__button": true,
                                        submenu__button_actived: moreMenuOpened,
                                    })}
                                    type='button'
                                    aria-label='Развернуть список'
                                    onClick={() => {
                                        setMoreMenuOpened(!moreMenuOpened);
                                    }}
                                >
                                    <span className='submenu__button-text'>Еще</span>
                                    <span className='submenu__button-icon'>{Icons.chevron_down}</span>
                                </button>
                                {/* первая вложенность с большим заголовком и оберткой для размещения под шапкой */}
                                <div className='submenu__wrap'>
                                    <div className='submenu__top-list-container'>
                                        <p className='submenu__title'>Меню</p>
                                        <ul className='submenu__top-list'>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Основные сведения
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Структура и органы управления образовательной организацией
                                                </a>
                                            </li>
                                            {/* Вторая вложенность без заголовка раздела и обертки, с классом submenu__item submenu__item_has-submenu */}
                                            <li
                                                className={classNames({
                                                    "submenu__item submenu__item_has-submenu": true,
                                                    "submenu__item_has-submenu_opened": dropDownMenuOpened,
                                                })}
                                            >
                                                <button
                                                    className={classNames({
                                                        "menu__link submenu__button": true,
                                                        submenu__button_actived: dropDownMenuOpened,
                                                    })}
                                                    type='button'
                                                    aria-label='Развернуть список'
                                                    onClick={() => {
                                                        setDropDownMenuOpened(!dropDownMenuOpened);
                                                    }}
                                                >
                                                    <span className='submenu__button-text'>Документы</span>
                                                    <span className='submenu__button-icon'>{Icons.chevron_down}</span>
                                                </button>
                                                <div className='submenu__list-container'>
                                                    <ul className='submenu__list'>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Основные сведения
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образовательные стандарты и требования
                                                            </a>
                                                        </li>
                                                        {/* Третья вложенность без заголовка раздела и обертки, с классом submenu__item submenu__item_has-submenu */}
                                                        <li
                                                            className={classNames({
                                                                "submenu__item submenu__item_has-submenu": true,
                                                                "submenu__item_has-submenu_opened":
                                                                    thirdDropDownMenuOpened,
                                                            })}
                                                        >
                                                            <button
                                                                className={classNames({
                                                                    "menu__link submenu__button": true,
                                                                    submenu__button_actived: thirdDropDownMenuOpened,
                                                                })}
                                                                type='button'
                                                                aria-label='Развернуть список'
                                                                onClick={() => {
                                                                    setThirdDropDownMenuOpened(
                                                                        !thirdDropDownMenuOpened
                                                                    );
                                                                }}
                                                            >
                                                                <span className='submenu__button-text'>Документы</span>
                                                                <span className='submenu__button-icon'>
                                                                    {Icons.chevron_down}
                                                                </span>
                                                            </button>
                                                            <div className='submenu__list-container'>
                                                                <ul className='submenu__list'>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Основные сведения
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Структура и органы управления
                                                                            образовательной организацией
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Документы
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Образование
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Образовательные стандарты и требования
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Документы
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образование
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образовательные стандарты и требования
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образование
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образовательные стандарты и требования
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Руководство. Педагогический (научно-педагогический) состав
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Материально-техническое обеспечение и оснащённость образовательного
                                                    процесса
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Стипендии и меры поддержки обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Платные образовательные услуги
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Финансово-хозяйственная деятельность
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Вакантные места для приёма (перевода) обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Доступная среда
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Международное сотрудничество
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Организация питания в образовательной организации
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </menu>
                    <div className='header__panel'>
                        {/* Панель соцссылок */}
                        <ul className='social-group'>
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
                        {/* Кнопка перехода к форме обратной связи - можно якорем */}
                        <a href='#feedback-form' className='header__feedback-button button button_theme_fill-main'>
                            <span className='button__text'>Задать вопрос</span>
                        </a>
                        {/* Кнопка для вызова панели с поиском */}
                        <button className='button button_theme_outline-main header__search-button' type='button'>
                            <span className='button__icon'>{Icons.search}</span>
                            <span className='button__text'>Найти...</span>
                        </button>
                    </div>
                    <button
                        className={classNames({
                            "icon-button header__mobile-button": true,
                            "header__mobile-button_actived": mobileMenuOpened,
                        })}
                        type='button'
                        aria-label='Мобильное выпадающее меню'
                        onClick={() => {
                            setMobileMenuOpened(!mobileMenuOpened);
                        }}
                    >
                        {mobileMenuOpened ? Icons.close : Icons.menu}
                    </button>
                </div>
            </header>
            <main className='page__content'>
                {/* Главный баннер со слайдером */}
                <section className='lead page__section-indent section wave-decor wave-decor_place_bottom blobs'>
                    <div
                        className='blobs__item blobs__item_theme_secondary blobs__item_place_lead-top-left'
                        aria-hidden='true'
                    ></div>
                    <div
                        className='blobs__item blobs__item_type_secondary blobs__item_theme_accent blobs__item_place_lead-bottom-right'
                        aria-hidden='true'
                    ></div>
                    <div className='lead__columns section__wrap'>
                        <div className='lead__column'>
                            <p className='lead__subtitle'>Центр развития ребёнка</p>
                            <h1 className='lead__title'>Детский сад № 43</h1>
                            <div className='lead__main-text'>
                                <p>
                                    Мы осуществляем качественное воспитание и обучение детей благодаря подбору
                                    квалифицированных педагогов и использованию инновационных эффективных методик.
                                </p>
                                <p>
                                    Мы успешно создаём в детском саду атмосферу дома, мира удивительных открытий, мира
                                    творчества и познания.
                                </p>
                            </div>
                            <a href='#0' className='button button_theme_outline-white button_content_icon-arrow-next'>
                                <span className='button__text'>Об учреждении</span>
                                <span className='button__icon'>{Icons.arrow_next}</span>
                            </a>
                        </div>
                        <Splide
                            aria-label='Фотографии детского садика'
                            options={{
                                type: "fade",
                                rewind: true,
                                autoplay: true,
                                cover: true,
                                heightRatio: 0.608,
                                pagination: false,
                                arrows: false,
                            }}
                        >
                            <SplideSlide className='corner-rounded corner-rounded_size_lg'>
                                <img
                                    src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                    alt='Описание изображения'
                                />
                            </SplideSlide>
                            <SplideSlide className='corner-rounded corner-rounded_size_lg'>
                                <img
                                    src='https://img.goodfon.ru/original/1600x900/7/f4/novyi-god-bokaly-shampanskoe-ukrashenie-lenta-dekor.jpg'
                                    alt='Image 2'
                                />
                            </SplideSlide>
                        </Splide>
                    </div>
                </section>
                {/* Блок преимуществ */}
                <section className='section page__section-indent advantages' aria-label='Преимущества'>
                    <div className='section__wrap'>
                        <ul className='section__card-deck advantages__color-list'>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.time}
                                    </span>
                                    <span className='text-item__text'>
                                        Режим работы: <span className='text-item__text-accent'>с 07:00 до 19:00</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.child}
                                    </span>
                                    <span className='text-item__text'>
                                        Группы: <span className='text-item__text-accent'>до 15 человек</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.territory}
                                    </span>
                                    <span className='text-item__text'>
                                        Площадь для прогулок:{" "}
                                        <span className='text-item__text-accent'>
                                            собственная оборудованная территория для прогулок
                                        </span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.medical_v3}
                                    </span>
                                    <span className='text-item__text'>
                                        Утренний фильтр медработником:{" "}
                                        <span className='text-item__text-accent'>ежедневно</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.baby}
                                    </span>
                                    <span className='text-item__text'>
                                        Возраст детей: <span className='text-item__text-accent'>с 1,6 до 7 лет</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.food}
                                    </span>
                                    <span className='text-item__text'>
                                        Питание:{" "}
                                        <span className='text-item__text-accent'>
                                            сбалансированное 4-х разовое питание
                                        </span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.house}
                                    </span>
                                    <span className='text-item__text'>
                                        Помещение: <span className='text-item__text-accent'>800 кв.м</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.gym}
                                    </span>
                                    <span className='text-item__text'>
                                        Тренажёрный зал: <span className='text-item__text-accent'>с 4 лет</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.pool}
                                    </span>
                                    <span className='text-item__text'>
                                        Бассеин: <span className='text-item__text-accent'>с 3–4 лет</span>
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Об учреждении */}
                <section className='section section_mobile-indent_small about'>
                    <div className='section__wrap page__section-indent section__card bg-color'>
                        <h2 className='section__title section__title_with-decor'>Об учреждении</h2>
                        <div className='about__two-columns'>
                            <img
                                className='about__image'
                                src='http://ooo-ado.ru/wp-content/uploads/2021/06/265.jpg'
                                alt='Описание фотографии'
                                loading='lazy'
                            />
                            <div className='about__content'>
                                <div className='about__main-info'>
                                    <h3 className='about__title'>
                                        <span className='about__title-accent'>Булаева</span>
                                        Татьяна Александровна
                                    </h3>
                                    <p>Занимаемая должность: Заведующая</p>
                                    <p>Стаж работы по специальности: 24 года</p>
                                </div>
                                <div className='about__main-text'>
                                    <p>
                                        ФГБДОУ "Центр развития ребенка - детский сад № 43" Управления делами Президента
                                        Российской Федерации расположен в экологически чистом Западном районе г. Москвы.
                                    </p>
                                    <p>
                                        В детском саду № 43 реализуется уникальная образовательная программа, проводится
                                        качественная подготовка детей к школе, после которой дети с легкостью поступают
                                        в престижные школы. С детьми работают опытные и квалифицированные педагоги
                                        (воспитатели, учителя-логопеды, инструктор по физической культуре, тренер по
                                        плаванию, музыкальные руководители, педагог-психолог и педагоги дополнительного
                                        образования).
                                    </p>
                                </div>
                                <a
                                    href='#0'
                                    className='button button_theme_outline-main button_content_icon-arrow-next'
                                >
                                    <span className='button__text'>На страницу учреждения</span>
                                    <span className='button__icon'>{Icons.arrow_next}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Наши услуги */}
                <section className='section page__section-indent services'>
                    <div className='section__title-block section__card'>
                        <h2 className='section__title section__title_with-decor'>Наши услуги</h2>
                        <div className='section__main-text'>
                            <p>
                                Реализут образовательную программу дошкольного образования в рамках ФГОС в программу
                                «Развитие» НОУ учебный центр им. Л.А. Вангера
                            </p>
                        </div>
                    </div>
                    <Tabs>
                        <Tab title='Образовательные услуги'>
                            <div className='services__content'>
                                <ul className='services__list section__wrap'>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.bag}</span>
                                            <span className='text-item__text'>Подготовка детей к школе</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.growth}</span>
                                            <span className='text-item__text'>Ранее развитие (с 1,6лет)</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.art}</span>
                                            <span className='text-item__text'>Изостудия</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.sensorics}</span>
                                            <span className='text-item__text'>Сенсорика</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.math}</span>
                                            <span className='text-item__text'>Математика</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.brain}</span>
                                            <span className='text-item__text'>Логика</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.music_v2}</span>
                                            <span className='text-item__text'>Музыка, пение</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.dance}</span>
                                            <span className='text-item__text'>Музыкально-ритмические движения</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.lego}</span>
                                            <span className='text-item__text'>Конструирование</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.english}</span>
                                            <span className='text-item__text'>Английский язык</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.logoped}</span>
                                            <span className='text-item__text'>Занятия с логопедом</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.ecology}</span>
                                            <span className='text-item__text'>Экология</span>
                                        </p>
                                    </li>
                                </ul>
                                <Splide
                                    className='splide splide_size_wide splide_type_bottom-carousel'
                                    aria-label='Фотографии детского садика'
                                    options={{
                                        type: "loop",
                                        cloneStatus: false,
                                        pagination: false,
                                        arrows: true,
                                        autoplay: true,
                                        perPage: 1,
                                        focus: "center",
                                        updateOnMove: true,
                                        gap: ".5em",
                                        padding: "clamp(0rem, -7.1875rem + 35.9375vw, 35.9375rem)",
                                    }}
                                >
                                    <SplideSlide>
                                        <img
                                            src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                            alt='Описание изображения'
                                            className='corner-rounded corner-rounded_size_lg'
                                            loading='lazy'
                                        />
                                    </SplideSlide>
                                </Splide>
                            </div>
                        </Tab>
                        <Tab title='Оздоровительные услуги'>
                            <div className='services__content'>
                                <ul className='services__list section__wrap'>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.fitness_v4}</span>
                                            <span className='text-item__text'>Физкультурные занятий</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.fitness_v5}</span>
                                            <span className='text-item__text'>Занятия на свежем воздухе</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.pool}</span>
                                            <span className='text-item__text'>Бассеин</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.sand}</span>
                                            <span className='text-item__text'>Песочная терапия</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.sun}</span>
                                            <span className='text-item__text'>Утренняя гимнастика</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.fitness}</span>
                                            <span className='text-item__text'>Оздоровительная гимнастика</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.fitness_v3}</span>
                                            <span className='text-item__text'>Корригирующая гимнастика</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.gym_v2}</span>
                                            <span className='text-item__text'>Фитнес</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.basketball}</span>
                                            <span className='text-item__text'>Баскетбол</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.mini_football}</span>
                                            <span className='text-item__text'>Мини-футбол</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-item services__item'>
                                            <span className='text-item__icon'>{AdvantagesIcons.kinesiology}</span>
                                            <span className='text-item__text'>Кинезиология “МегаМозг”</span>
                                        </p>
                                    </li>
                                </ul>
                                <Splide
                                    className='splide splide_size_wide splide_type_bottom-carousel'
                                    aria-label='Фотографии детского садика'
                                    options={{
                                        type: "loop",
                                        cloneStatus: false,
                                        pagination: false,
                                        arrows: true,
                                        autoplay: true,
                                        perPage: 1,
                                        focus: "center",
                                        updateOnMove: true,
                                        gap: ".5em",
                                        padding: "clamp(0rem, -7.1875rem + 35.9375vw, 35.9375rem)",
                                    }}
                                >
                                    <SplideSlide>
                                        <img
                                            src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                            alt='Описание изображения'
                                            className='corner-rounded corner-rounded_size_lg'
                                        />
                                    </SplideSlide>
                                </Splide>
                            </div>
                        </Tab>
                    </Tabs>
                </section>
                {/* Наш коллектив */}
                <section className='section page__section-indent'>
                    <div className='section__wrap'>
                        <div className='section__title-block'>
                            <h2 className='section__title section__title_with-decor'>Наш коллектив</h2>
                            <a href='#0' className='button button_theme_outline-main button_content_icon-arrow-next'>
                                <span className='button__text'>Педагоги</span>
                                <span className='button__icon'>{Icons.arrow_next}</span>
                            </a>
                            <div className='section__main-text'>
                                <p>
                                    В нашем детском саду педагогический штат укомплектован на 100%. В педагогическом
                                    коллективе 31 педагог: 22 человека из них имеют высшее образование; 9 человек
                                    среднее профессиональное образование.
                                </p>
                            </div>
                        </div>
                        <Splide
                            className='splide splide_mobile_auto-width splide_indent-block'
                            aria-label='Фотографии педагогов детского садика'
                            options={{
                                type: "loop",
                                arrowPath:
                                    "M24.6183 20.3627C24.8187 20.1623 24.8187 19.8373 24.6183 19.6368L13.1799 8.19882C12.8413 7.85997 12.8416 7.31101 13.1799 6.97278L13.18 6.97261C13.5183 6.63422 14.0673 6.63399 14.4061 6.97278L26.8207 19.3872C26.9901 19.5568 27.0743 19.7763 27.0743 19.9997C27.0743 20.2233 26.9898 20.4432 26.8203 20.6128L14.4058 33.0269L14.4056 33.0271C14.0668 33.3661 13.5181 33.3658 13.18 33.0273L13.1796 33.0269C12.8412 32.6885 12.8412 32.1394 13.1795 31.8011L24.6183 20.3627Z",
                                cloneStatus: false,
                                pagination: false,
                                arrows: true,
                                autoplay: true,
                                perPage: 4,
                                updateOnMove: true,
                                gap: "var(--indent-2)",
                                padding: "var(--indent-1)",
                                breakpoints: {
                                    1460: {
                                        perPage: 3,
                                    },
                                    960: {
                                        perPage: 2,
                                    },
                                    576: {
                                        autoWidth: true,
                                        arrows: false,
                                    },
                                },
                            }}
                        >
                            <SplideSlide>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_people'>
                                        <img
                                            className='card__image'
                                            src='http://ooo-ado.ru/wp-content/uploads/2021/06/265.jpg'
                                            alt='Описание фотографии'
                                            loading='lazy'
                                        />
                                        <div className='card__content'>
                                            <h3 className='card__title'>
                                                <span className='card__title-accent'>Годик</span>
                                                Татьяна Михайловна
                                            </h3>
                                            <div className='card__main-text'>
                                                <p className='card__text'>Старший воспитатель</p>
                                                <p className='card__text'>Стаж работы: 29 лет</p>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </SplideSlide>
                        </Splide>
                    </div>
                </section>
                {/* Наши новости */}
                <section className='news page__section-indent section wave-decor wave-decor_place_top wave-decor_place_bottom bg-color bg-color_main-gradient'>
                    <div className='section__wrap'>
                        <div className='section__title-block section__title-block_theme_white'>
                            <h2 className='section__title section__title_with-decor'>Наши новости</h2>
                            <a href='#0' className='button button_theme_outline-white button_content_icon-arrow-next'>
                                <span className='button__text'>Новости</span>
                                <span className='button__icon'>{Icons.arrow_next}</span>
                            </a>
                        </div>
                        <ul className='news__card-deck'>
                            <li>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_article card_size_large'>
                                        <img
                                            className='card__image'
                                            src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                            alt='Описание фотографии'
                                            loading='lazy'
                                        />
                                        <div className='card__content'>
                                            <time className='card__date' dateTime='2022-02-01'>
                                                01.08.23г.
                                            </time>
                                            <h3 className='card__title'>Открытие нашего сада!</h3>
                                            <div className='card__main-content'>
                                                <p className='card__text'>
                                                    НАШ детский сад открыл двери для своих воспитанников!
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_article card_size_small'>
                                        <img
                                            className='card__image'
                                            src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                            alt='Описание фотографии'
                                            loading='lazy'
                                        />
                                        <div className='card__content'>
                                            <time className='card__date' dateTime='2022-02-01'>
                                                31.07.23г.
                                            </time>
                                            <h3 className='card__title'>
                                                Открытие ФГБДОУ «Центр развития ребёнка — детский сад № 43»...
                                            </h3>
                                            <div className='card__main-content'>
                                                <p className='card__text'></p>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_article card_size_small'>
                                        <img
                                            className='card__image'
                                            src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                            alt='Описание фотографии'
                                            loading='lazy'
                                        />
                                        <div className='card__content'>
                                            <time className='card__date' dateTime='2022-02-01'>
                                                01.09.23г.
                                            </time>
                                            <h3 className='card__title'>
                                                График проведения выпускных утренников в нашем детском саду График
                                                проведения выпускных утренников в нашем детском саду
                                            </h3>
                                            <div className='card__main-content'>
                                                <p className='card__text'>
                                                    НАШ детский сад открыл двери для своих воспитанников! НАШ детский
                                                    сад открыл двери для своих воспитанников! НАШ детский сад открыл
                                                    двери для своих воспитанников!
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_article card_size_small'>
                                        <img
                                            className='card__image'
                                            src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                            alt='Описание фотографии'
                                            loading='lazy'
                                        />
                                        <div className='card__content'>
                                            <time className='card__date' dateTime='2022-02-01'>
                                                02.05.23г.
                                            </time>
                                            <h3 className='card__title'>День Победы 2023 год</h3>
                                            <div className='card__main-content'>
                                                <p className='card__text'>Мы помним! Мы гордимся!</p>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_article card_size_small'>
                                        <img
                                            className='card__image'
                                            src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                            alt='Описание фотографии'
                                            loading='lazy'
                                        />
                                        <div className='card__content'>
                                            <time className='card__date' dateTime='2022-02-01'>
                                                17.02.23г.
                                            </time>
                                            <h3 className='card__title'>Масленица 2023 год</h3>
                                            <div className='card__main-content'>
                                                <p className='card__text'>Сегодня блины, а завтра весна!</p>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                            <li>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_article card_size_small'>
                                        <img
                                            className='card__image'
                                            src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                            alt='Описание фотографии'
                                            loading='lazy'
                                        />
                                        <div className='card__content'>
                                            <time className='card__date' dateTime='2022-02-01'>
                                                17.02.23г.
                                            </time>
                                            <h3 className='card__title'>Масленица 2023 год</h3>
                                            <div className='card__main-content'>
                                                <p className='card__text'>Сегодня блины, а завтра весна!</p>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Почему нас выбирают */}
                <section className='why page__section-indent section blobs'>
                    <div
                        className='blobs__item blobs__item_type_secondary blobs__item_theme_accent blobs__item_place_why-bottom-left'
                        aria-hidden='true'
                    ></div>
                    <div
                        className='blobs__item blobs__item_type_secondary blobs__item_theme_accent blobs__item_place_why-top-right'
                        aria-hidden='true'
                    ></div>
                    <div className='why__card section__wrap'>
                        <h2 className='section__title'>Почему нас выбирают:</h2>
                        <ul className='why__list'>
                            <li>за доброе и уважительное отношение к детям, за терпение и душевную теплоту</li>
                            <li>мы умеем завоёвывать доверие ребёнка, быть его надёжным другом</li>
                            <li>
                                мы всегда учитываем возрастные особенности дошкольника, а также индивидуальные
                                возможности каждого ребёнка
                            </li>
                            <li>мы много играем с детьми, предоставляем свободу действий и творчества</li>
                            <li>у нас каждый ребёнок «единственный»</li>
                            <li>
                                мы работаем более 60 лет, завоевали признание и уважение органов образования и родителей
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Наши фотографии */}
                <section className='gallery page__section-indent section'>
                    <div className='section__title-block section__wrap'>
                        <h2 className='section__title section__title_with-decor'>Наши фотографии</h2>
                        <a href='#0' className='button button_theme_outline-main button_content_icon-arrow-next'>
                            <span className='button__text'>Галерея</span>
                            <span className='button__icon'>{Icons.arrow_next}</span>
                        </a>
                    </div>
                    <div className='section__wrap section__wrap_size_large'>
                        <ul className='section__card-deck gallery__card-deck'>
                            <li>
                                <img
                                    className='gallery__image'
                                    src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663411385_5-mykaleidoscope-ru-p-portugaliya-azorskie-ostrova-krasivo-5.jpg'
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Наши видео */}
                <section className='gallery page__section-indent section bg-color clouds-decor clouds-decor_place_top clouds-decor_place_bottom'>
                    <div className='section__title-block section__wrap'>
                        <h2 className='section__title section__title_with-decor'>Видео</h2>
                        <a href='#0' className='button button_theme_outline-main button_content_icon-arrow-next'>
                            <span className='button__text'>Галерея</span>
                            <span className='button__icon'>{Icons.arrow_next}</span>
                        </a>
                    </div>
                    <Splide
                        className='splide splide_size_wide splide_type_center-carousel'
                        aria-label='Видео детского садика'
                        options={{
                            type: "slide",
                            cloneStatus: false,
                            pagination: true,
                            arrows: true,
                            autoplay: true,
                            perPage: 1,
                            focus: "center",
                            updateOnMove: true,
                            gap: ".5em",
                            padding: "clamp(0rem, -7.1875rem + 35.9375vw, 35.9375rem)",
                        }}
                    >
                        <SplideSlide>
                            <iframe
                                className='corner-rounded corner-rounded_size_lg'
                                src='https://www.youtube.com/embed/JiQVQIdoudU?si=FN19DOqq0iE9YusH'
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowfullscreen
                            ></iframe>
                        </SplideSlide>
                        <SplideSlide>
                            <iframe
                                className='corner-rounded corner-rounded_size_lg'
                                src='https://www.youtube.com/embed/JiQVQIdoudU?si=FN19DOqq0iE9YusH'
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowfullscreen
                            ></iframe>
                        </SplideSlide>
                        <SplideSlide>
                            <iframe
                                className='corner-rounded corner-rounded_size_lg'
                                src='https://www.youtube.com/embed/JiQVQIdoudU?si=FN19DOqq0iE9YusH'
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowfullscreen
                            ></iframe>
                        </SplideSlide>
                        <SplideSlide>
                            <iframe
                                className='corner-rounded corner-rounded_size_lg'
                                src='https://www.youtube.com/embed/JiQVQIdoudU?si=FN19DOqq0iE9YusH'
                                title='YouTube video player'
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowfullscreen
                            ></iframe>
                        </SplideSlide>
                    </Splide>
                </section>
            </main>
            {/* Подвал */}
            <footer className='footer page__footer section'>
                <div className='section__wrap footer__wrap'>
                    {/* Лого-компонент */}
                    <a className='footer__logo-link logo-link' href='./' aria-label='Логотип' />
                    <div className='footer__columns'>
                        <address className='footer__address'>
                            <a
                                className='footer__link footer__link_type_phone'
                                href='tel:84991493724'
                                rel='noreferrer noopener nofollow'
                            >
                                <span className='footer__link-icon'>{Icons.phone}</span>
                                <span className='footer__link-text'>+7 499 149-37-24</span>
                                <span className='footer__text-small'>Пн-пт с 7:00 до 19:00</span>
                            </a>
                            <a
                                className='footer__link footer__color-main'
                                href='#0'
                                target='_blank'
                                rel='noreferrer noopener nofollow'
                            >
                                <span className='footer__link-text'>г. Москва, ул. Академика Павлова, д. 14, к. 2</span>
                            </a>
                            <a
                                className='footer__link'
                                href='mailto:fgdou43@bk.ru'
                                target='_blank'
                                rel='noreferrer noopener nofollow'
                            >
                                <span className='footer__link-icon'>{Icons.email}</span>
                                <span className='footer__link-text footer__text-highlight'>fgdou43@bk.ru</span>
                            </a>
                            {/* Панель соцссылок */}
                            <ul className='footer__social-group social-group'>
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
                            </ul>
                        </address>
                        <menu className='footer__menu menu'>
                            <ul className='menu__list'>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        О нас
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Сведения об образовательной организации
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Программы
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Режим
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Расписание
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        О нас
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Сведения об образовательной организации
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Программы
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Режим
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Расписание
                                    </a>
                                </li>
                            </ul>
                        </menu>
                    </div>
                    <div className='footer__copyright'>
                        <p>
                            Федеральное государственное бюджетное дошкольное образовательное учреждение «Центр развития
                            ребёнка — детский сад № 43» Управления делами Президента Российской Федерации
                        </p>
                        <p>1958–2023 ©Все права защищены</p>
                    </div>
                </div>
            </footer>
        </BasicPage>
    );
};

export default IndexPage;
