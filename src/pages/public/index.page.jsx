import React from "react";
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import createDOMPurify from "dompurify";

import useNewsStore from "../../store/public/newsStore";
import useEmployeesStore from "../../store/public/employeesStore";

import BasicPage from "../../components/public/basic.page/basic.page.component";
import Tabs from "../../components/public/tabs/tabs.component";
import Tab from "../../components/public/tabs/tab.component";
import News from "../../components/public/news/news";
import SingleImage from "../../components/general/single.image/single.image.with.preview";

import mainEmployeePhoto from "../../images/mainEmployee.jpg";
import mainSlider1 from "../../images/mainSlide1.jpg";
import mainSlider2 from "../../images/mainSlide2.jpg";
import {Icons, AdvantagesIcons} from "../../components/svgs";

import sevices__image_01 from "../../images/services__image_01.png";
import sevices__image_02 from "../../images/services__image_02.png";
import sevices__image_03 from "../../images/services__image_03.png";
import sevices__image_04 from "../../images/services__image_04.png";
import sevices__image_05 from "../../images/services__image_05.png";
import sevices__image_06 from "../../images/services__image_06.png";
import gallery__image_01 from "../../images/gallery__image_01.png";
import gallery__image_02 from "../../images/gallery__image_02.png";
import gallery__image_03 from "../../images/gallery__image_03.png";
import gallery__image_04 from "../../images/gallery__image_04.png";
import gallery__image_05 from "../../images/gallery__image_05.png";
import gallery__image_06 from "../../images/gallery__image_06.png";
import SingleImageWithPreview from "../../components/general/single.image.with.preview/single.image.with.preview";
import moment from "moment/moment";
import ServiceCard from "../../components/public/service.card/service.card";

const IndexPage = () => {
    const DOMPurify = createDOMPurify(window);

    const newsStore = useNewsStore();
    const employeesStore = useEmployeesStore();

    React.useEffect(() => {
        const fetchData = async () => {
            await newsStore.loadAllMain();
            await employeesStore.loadAll();
        };

        fetchData();
    }, []);

    return (
        <BasicPage>
            <Helmet>
                <title>Прогимназия № 43</title>
            </Helmet>
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
                            <h1 className='lead__title'>Прогимназия № 43</h1>
                            <div className='lead__main-text'>
                                <p>
                                    Мы осуществляем качественное воспитание и обучение детей благодаря подбору
                                    квалифицированных педагогов и использованию инновационных эффективных методик.
                                </p>
                                <p>
                                    Мы успешно создаём в детском саду атмосферу дома, мира удивительных открытий, мира
                                    творчества и познания.
                                </p>
                            </div>
                            <NavLink
                                to='/набор-и-условия-приёма'
                                className='button button_theme_outline-white button_content_icon-arrow-next'
                            >
                                <span className='button__text'>Набор и условия приема</span>
                                <span className='button__icon'>{Icons.arrow_next}</span>
                            </NavLink>
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
                            <SplideSlide className='lead__image'>
                                <img src={mainSlider1} alt='Описание изображения'/>
                            </SplideSlide>
                            <SplideSlide className='lead__image'>
                                <img src={mainSlider2} alt='Image 2'/>
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
                                        Группы: <span className='text-item__text-accent'>до 20 человек</span>
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
                <section className='section about --hide'>
                    <div className='section__wrap page__section-indent section__card bg-color'>
                        <h2 className='section__title section__title_with-decor'>Об учреждении</h2>
                        <div className='about__two-columns'>
                            <img
                                className='about__image'
                                src={mainEmployeePhoto}
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
                                    <p>Стаж работы по специальности: 24 года</p>
                                </div>
                                <div className='about__main-text'>
                                    <p>
                                        Прогимназия 43 Управления делами Президента
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
                                {/*<a*/}
                                {/*    href='#0'*/}
                                {/*    className='button button_theme_outline-main button_content_icon-arrow-next'*/}
                                {/*>*/}
                                {/*    <span className='button__text'>На страницу учреждения</span>*/}
                                {/*    <span className='button__icon'>{Icons.arrow_next}</span>*/}
                                {/*</a>*/}
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
                                Мы&nbsp;реализуем образовательную программу в&nbsp;соответствии с&nbsp;ФГОС
                                ДО&nbsp;и&nbsp;ФОП&nbsp;ДО.
                            </p>
                        </div>
                    </div>
                    <Tabs>
                        <Tab title='Образовательные программы НОО'>
                            <div className='services__content'>
                                <ul className='services__list section__wrap'>
                                    <ServiceCard title={"Рабочая программа труд (технология)"}
                                                 link={"https://43ds.ru//files/mediaFiles/86/ee80fab2-6e81-4f76-a35b-0d4c95a2b342/Рабочая%20программа%20труд%20(технология).pdf"}/>
                                    <ServiceCard title={"Рабочая программа по окружающему миру"}
                                                 link={"https://43ds.ru//files/mediaFiles/87/166949b8-ce06-4eeb-8cbe-eef9f2f4913c/Рабочая%20программа%20по%20окружающему%20миру.pdf"}/>
                                    <ServiceCard title={"Рабочая программа русский язык"}
                                                 link={"https://43ds.ru//files/mediaFiles/88/2317672d-0d5a-4a1b-b2ed-4ad6ab7e4fc2/Рабочая%20программа%20русский%20язык.pdf"}/>
                                    <ServiceCard title={"Рабочая программа по физической культуре"}
                                                 link={"https://43ds.ru//files/mediaFiles/89/766a7297-8e69-4c6c-8f44-f61a197afc8f/Рабочая%20программа%20по%20физической%20культуре.pdf"}/>
                                    <ServiceCard title={"Рабочая программа ОРКСЭ"}
                                                 link={"https://43ds.ru//files/mediaFiles/90/e138d6d7-9d72-4de5-9670-e11830f053e1/Рабочая%20программа%20ОРКСЭ.pdf"}/>
                                    <ServiceCard title={"Рабочая программа математика (ФОП)"}
                                                 link={"https://43ds.ru//files/mediaFiles/91/4c72d6c6-2f1d-4e54-876e-9897f4d71ad3/Рабочая%20программа%20математика%20(ФОП).pdf"}/>
                                    <ServiceCard title={"Рабочая программа литературное чтение"}
                                                 link={"https://43ds.ru//files/mediaFiles/92/84157d4f-5483-4c91-af87-8855fbc73ee1/Рабочая%20программа%20литературное%20чтение.pdf"}/>
                                    <ServiceCard title={"Рабочая программа иностранный язык (ФОП)"}
                                                 link={"https://43ds.ru//files/mediaFiles/93/2704efce-cbdc-4d8a-9172-a0a258e36bc3/Рабочая%20программа%20иностранный%20язык%20(ФОП).pdf"}/>
                                    <ServiceCard title={"Рабочая программа ИЗО (ФОП)"}
                                                 link={"https://43ds.ru//files/mediaFiles/94/5dd84e89-6026-452d-af03-95f938723615/Рабочая%20программа%20ИЗО%20(ФОП).pdf"}/>
                                    <ServiceCard title={"Рабочая программа музыка (ФОП)"}
                                                 link={"https://43ds.ru//files/mediaFiles/95/22bad82c-7763-4a40-9abc-743c557e6d23/Рабочая%20программа%20музыка%20(ФОП).pdf"}/>
                                </ul>
                                <Splide
                                    className='splide splide_size_wide splide_type_bottom-carousel --hide'
                                    aria-label='Фотографии'
                                    options={{
                                        type: "loop",
                                        cloneStatus: false,
                                        pagination: false,
                                        arrows: true,
                                        autoplay: true,
                                        perPage: 3,
                                        focus: "center",
                                        updateOnMove: true,
                                        gap: ".5em",
                                        breakpoints: {
                                            1000: {
                                                perPage: 2,
                                            },
                                            480: {
                                                perPage: 1,
                                                padding: "var(--inline-indent)",
                                            },
                                        },
                                    }}
                                >
                                    <SplideSlide>
                                        <img
                                            src={sevices__image_01}
                                            alt='Описание изображения'
                                            className='corner-rounded corner-rounded_size_lg'
                                            loading='lazy'
                                        />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img
                                            src={sevices__image_02}
                                            alt='Описание изображения'
                                            className='corner-rounded corner-rounded_size_lg'
                                            loading='lazy'
                                        />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img
                                            src={sevices__image_03}
                                            alt='Описание изображения'
                                            className='corner-rounded corner-rounded_size_lg'
                                            loading='lazy'
                                        />
                                    </SplideSlide>
                                </Splide>
                            </div>
                        </Tab>
                        <Tab title='Дополнительные образовательные программы ДО'>
                            <div className='services__content'>
                                <ul className='services__list section__wrap'>
                                    <ServiceCard
                                        title={"Рабочая программа мультстудии"}
                                        link={"https://43ds.ru//files/mediaFiles/77/17a0fbe1-468a-447e-9c50-79f25bcf8232/программа%20мультстудии.pdf"}/>
                                    <ServiceCard
                                        title={"Рабочая программа творческой мастерской"}
                                        link={"https://43ds.ru//files/mediaFiles/78/2ce454a6-bfbb-41c7-a4b3-992bf20fd2dc/Программа%20творческой%20мастерской.pdf"}
                                    />
                                    <ServiceCard
                                        title={"Рабочая программа ОФП̆"}
                                        link={"https://43ds.ru//files/mediaFiles/79/dbb0c6a0-4155-45a3-ace0-d722298463fb/Программа%20ОФП.pdf"}
                                    />
                                    <ServiceCard
                                        title={"Рабочая программа по тхэквондо"}
                                        link={"https://43ds.ru//files/mediaFiles/110/b1163726-a532-444f-a736-35a902c3b7b0/Рабочая%20программа%20по%20тхэквондо.pdf"}
                                    />
                                    <ServiceCard
                                        title={"Рабочая программа шашки"}
                                        link={"https://43ds.ru//files/mediaFiles/111/e3634853-f4f0-4249-a335-9914d5e0f3d2/Рабочая%20программа%20шашки.pdf"}
                                    />
                                </ul>
                                <Splide
                                    className='splide splide_size_wide splide_type_bottom-carousel --hide'
                                    aria-label='Фотографии детского садика'
                                    options={{
                                        type: "loop",
                                        cloneStatus: false,
                                        pagination: false,
                                        arrows: true,
                                        autoplay: true,
                                        perPage: 3,
                                        focus: "center",
                                        updateOnMove: true,
                                        gap: ".5em",
                                        breakpoints: {
                                            1000: {
                                                perPage: 2,
                                            },
                                        },
                                    }}
                                >
                                    <SplideSlide>
                                        <img
                                            src={sevices__image_04}
                                            alt='Описание изображения'
                                            className='corner-rounded corner-rounded_size_lg'
                                        />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img
                                            src={sevices__image_05}
                                            alt='Описание изображения'
                                            className='corner-rounded corner-rounded_size_lg'
                                        />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <img
                                            src={sevices__image_06}
                                            alt='Описание изображения'
                                            className='corner-rounded corner-rounded_size_lg'
                                        />
                                    </SplideSlide>
                                </Splide>
                            </div>
                        </Tab>
                        <Tab title='Дополнительные образовательные программы ДО НОО'>
                            <div className='services__content'>
                                <ul className='services__list section__wrap'>
                                    <ServiceCard title={"Изо студия рабочая программа"} link={"https://43ds.ru//files/mediaFiles/80/9df6a24c-7ac1-4bb0-8a49-948e08350df4/ИЗО%20СТУДИЯ%20рабочая%20программа.pdf"}/>
                                    <ServiceCard title={"Робототехника рабочая программа"} link={"https://43ds.ru//files/mediaFiles/81/2511c3f8-2276-43bb-ba77-39c6db0d3535/РОБОТОТЕХНИКА%20рабочая%20программа.pdf"}/>
                                    <ServiceCard title={"Современный танец рабочая программа"} link={"https://43ds.ru//files/mediaFiles/82/76162f0e-b58b-4f5b-b77e-04a25ee62923/СОВРЕМЕННЫЙ%20ТАНЕЦ%20рабочая%20программа.pdf"}/>
                                    <ServiceCard title={"Театральная студия рабочая программа"} link={"https://43ds.ru//files/mediaFiles/83/c434ea80-4a04-418b-bd55-de8f2381e04b/ТЕАТРАЛЬНАЯ%20СТУДИЯ%20рабочая%20программа.pdf"}/>
                                    <ServiceCard title={"Шахматы рабочая программа"} link={"https://43ds.ru//files/mediaFiles/84/ddbac00e-3b1d-4f57-8d93-adeec7cf29d4/ШАХМАТЫ%20рабочая%20программа.pdf"}/>
                                </ul>
                            </div>
                        </Tab>
                    </Tabs>
                </section>
                {/* Наш коллектив */}
                <section className='section page__section-indent'>
                    <div className='section__wrap'>
                        <div className='section__title-block'>
                            <h2 className='section__title section__title_with-decor'>Наш коллектив</h2>
                            <NavLink
                                className={"button button_theme_outline-main button_content_icon-arrow-next"}
                                to='/сотрудники'
                            >
                                <span className='button__text'>Педагоги</span>
                                <span className='button__icon'>{Icons.arrow_next}</span>
                            </NavLink>
                            <div className='section__main-text'>
                                <p>
                                    В нашем детском саду педагогический штат укомплектован на 100%. В педагогическом
                                    коллективе 31 педагог: 22 человека из них имеют высшее образование; 9 человек
                                    среднее профессиональное образование.
                                </p>
                            </div>
                        </div>
                        <Splide
                            className='splide splide_mobile_auto-width splide_indent-block splide_arrows_wide-indent'
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
                                gap: "var(--indent-block-medium)",
                                padding: "var(--indent-block-small)",
                                breakpoints: {
                                    1000: {
                                        perPage: 3,
                                        arrows: false,
                                    },
                                    768: {
                                        perPage: 3,
                                        arrows: false,
                                    },
                                    480: {
                                        autoWidth: true,
                                        arrows: false,
                                    },
                                },
                            }}
                        >
                            {employeesStore.items.map((category) => {
                                return category.persons.map((person) => (
                                    <SplideSlide key={window.global.makeid()}>
                                        <NavLink to={`/сотрудники/${person.ID}`} className='card-link'>
                                            <article className='card card_type_people'>
                                                <SingleImage image={person.photo} extraClass={"card__image"}/>
                                                <div className='card__content'>
                                                    <h3 className='card__title'>
                                                        <span className='card__title-accent'>
                                                            {person.fio.split(" ")[0]}
                                                        </span>
                                                        {person.fio.split(" ")[1] + " " + person.fio.split(" ")[2]}
                                                    </h3>
                                                    <div className='card__main-text'>
                                                        <p className='card__text'>{person.position}</p>
                                                        {/*<p className='card__text'>Стаж работы: 29 лет</p>*/}
                                                    </div>
                                                </div>
                                            </article>
                                        </NavLink>
                                    </SplideSlide>
                                ));
                            })}
                        </Splide>
                    </div>
                </section>
                {/* Наши новости */}
                {
                    newsStore.itemsMain.length > 0
                    &&
                    <section
                        className='news page__section-indent section wave-decor wave-decor_place_top wave-decor_place_bottom bg-color bg-color_main-gradient'>
                        <div className='section__wrap'>
                            <div className='section__title-block section__title-block_theme_white'>
                                <h2 className='section__title section__title_with-decor'>Наши новости</h2>
                                <NavLink className={"button button_theme_outline-white button_content_icon-arrow-next"}
                                         to='/новости'>
                                    <span className='button__text'>Новости</span>
                                    <span className='button__icon'>{Icons.arrow_next}</span>
                                </NavLink>
                            </div>
                            <ul className='news__card-deck'>
                                {newsStore.itemsMain.map((item) => {
                                    return (
                                        <li key={item.ID}>
                                            <NavLink className={"card-link"} to={"/новости/" + item.ID}>
                                                <article className='card card_type_article'>
                                                    <SingleImageWithPreview
                                                        image={item.preview_image}
                                                        extraClass={"card__image"}
                                                    />
                                                    <div className='card__content'>
                                                        <div className='card__title-block'>
                                                            <time dateTime={item.date} className='card__date'>
                                                                {moment(item.date).format("DD.MM.YYYY")}
                                                            </time>
                                                            <h3 className='card__title'>{item.preview_title}</h3>
                                                        </div>
                                                        <div
                                                            className='card__main-content'
                                                            dangerouslySetInnerHTML={{
                                                                __html: DOMPurify.sanitize(item.preview_text),
                                                            }}
                                                        />
                                                    </div>
                                                </article>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </section>
                }
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
                        <h2 className='section__title'>Почему нас выбирают:</h2>
                        <ul className='why__list'>
                            <li>за доброе и уважительное отношение к детям, за терпение и душевную теплоту</li>
                            <li>мы умеем завоёвывать доверие ребёнка, быть его надёжным другом</li>
                            <li>
                                мы всегда учитываем возрастные особенности дошкольника, а также индивидуальные
                                возможности каждого ребёнка
                            </li>
                            <li>мы много играем с детьми, предоставляем свободу действий и творчества</li>
                            <li>у нас каждый ребёнок «единственный»</li>
                            <li>
                                мы работаем более 60 лет, завоевали признание и уважение органов образования и родителей
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
                                    src={gallery__image_01}
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src={gallery__image_02}
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src={gallery__image_03}
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src={gallery__image_04}
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src={gallery__image_05}
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                            <li>
                                <img
                                    className='gallery__image'
                                    src={gallery__image_06}
                                    alt='Описание фотографии'
                                    loading='lazy'
                                />
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Наши видео */}
                {/*<section className='gallery page__section-indent section bg-color clouds-decor clouds-decor_place_top clouds-decor_place_bottom'>*/}
                {/*    <div className='section__title-block section__wrap'>*/}
                {/*        <h2 className='section__title section__title_with-decor'>Видео</h2>*/}
                {/*        <a href='#0' className='button button_theme_outline-main button_content_icon-arrow-next'>*/}
                {/*            <span className='button__text'>Видео</span>*/}
                {/*            <span className='button__icon'>{Icons.arrow_next}</span>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <Splide*/}
                {/*        className='splide splide_size_wide splide_type_center-carousel'*/}
                {/*        aria-label='Видео детского садика'*/}
                {/*        options={{*/}
                {/*            type: "loop",*/}
                {/*            cloneStatus: false,*/}
                {/*            pagination: false,*/}
                {/*            arrows: true,*/}
                {/*            autoplay: true,*/}
                {/*            perPage: 3,*/}
                {/*            focus: "center",*/}
                {/*            updateOnMove: true,*/}
                {/*            gap: ".5em",*/}
                {/*            breakpoints: {*/}
                {/*                1000: {*/}
                {/*                    perPage: 2,*/}
                {/*                },*/}
                {/*                480: {*/}
                {/*                    perPage: 1,*/}
                {/*                    padding: "var(--inline-indent)",*/}
                {/*                },*/}
                {/*            },*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <SplideSlide>*/}
                {/*            <VideoPlayer*/}
                {/*                extraClass={"iframe-item"}*/}
                {/*                source={"https://www.youtube.com/embed/JiQVQIdoudU?si=FN19DOqq0iE9YusH"}*/}
                {/*            />*/}
                {/*        </SplideSlide>*/}
                {/*        <SplideSlide>*/}
                {/*            <VideoPlayer*/}
                {/*                extraClass={"iframe-item"}*/}
                {/*                source={"https://www.youtube.com/embed/JiQVQIdoudU?si=FN19DOqq0iE9YusH"}*/}
                {/*            />*/}
                {/*        </SplideSlide>*/}
                {/*        <SplideSlide>*/}
                {/*            <VideoPlayer*/}
                {/*                extraClass={"iframe-item"}*/}
                {/*                source={"https://www.youtube.com/embed/JiQVQIdoudU?si=FN19DOqq0iE9YusH"}*/}
                {/*            />*/}
                {/*        </SplideSlide>*/}
                {/*    </Splide>*/}
                {/*</section>*/}
                {/*/!* Отзывы о нас *!/*/}
                <section className='section page__section-indent'>
                    <div className='section__wrap'>
                        <div className='section__title-block'>
                            <h2 className='section__title section__title_with-decor'>Отзывы о нас</h2>
                            <a href='#0' className='button button_theme_outline-main button_content_icon-arrow-next'>
                                <span className='button__text'>Отзывы о нас</span>
                                <span className='button__icon'>{Icons.arrow_next}</span>
                            </a>
                        </div>
                        <Splide
                            className='splide splide_mobile_auto-width splide_indent-block splide_pagination_grey splide_arrows_wide-indent'
                            aria-label='Отзывы родителей о детском садике'
                            options={{
                                type: "loop",
                                arrowPath:
                                    "M24.6183 20.3627C24.8187 20.1623 24.8187 19.8373 24.6183 19.6368L13.1799 8.19882C12.8413 7.85997 12.8416 7.31101 13.1799 6.97278L13.18 6.97261C13.5183 6.63422 14.0673 6.63399 14.4061 6.97278L26.8207 19.3872C26.9901 19.5568 27.0743 19.7763 27.0743 19.9997C27.0743 20.2233 26.9898 20.4432 26.8203 20.6128L14.4058 33.0269L14.4056 33.0271C14.0668 33.3661 13.5181 33.3658 13.18 33.0273L13.1796 33.0269C12.8412 32.6885 12.8412 32.1394 13.1795 31.8011L24.6183 20.3627Z",
                                cloneStatus: false,
                                pagination: true,
                                arrows: true,
                                autoplay: true,
                                perPage: 3,
                                updateOnMove: true,
                                gap: "var(--indent-block-medium)",
                                padding: "var(--indent-block-small)",
                                breakpoints: {
                                    1460: {
                                        arrows: false,
                                    },
                                    960: {
                                        perPage: 2,
                                        arrows: false,
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
                                    <article className='card card_type_review'>
                                        <div className='card__content'>
                                            <div className='card__title-block'>
                                                <h3 className='card__title'>Анна</h3>
                                                <time className='card__date' dateTime='2022-10-10'>
                                                    8 ноября 2023 г.
                                                </time>
                                            </div>
                                            <div className='card__main-text'>
                                                <p className='card__text'>
                                                    Здравствуйте.Благодарю воспитателей, 2-ясельной группы, Прыгункову
                                                    Любовь Александровну, Ситникову Елену Вячеславовну и помощницу
                                                    воспитателяЗа доброту, терпение и чуткость к каждому малышу. Детки
                                                    познакомились друг с другом, полюбили воспитателей. Адаптация прошла
                                                    быстро.Спасибо за фотографии, которые делают на занятиях. Большая
                                                    радость для родителей ❤️
                                                </p>
                                            </div>
                                            <button className='button button_theme_fill-light-main'>
                                                <span className='button__text'>Читать полностью</span>
                                            </button>
                                        </div>
                                    </article>
                                </a>
                            </SplideSlide>
                            <SplideSlide>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_review'>
                                        <div className='card__content'>
                                            <div className='card__title-block'>
                                                <h3 className='card__title'>Таранова Татьяна Сергеевна</h3>
                                                <time className='card__date' dateTime='2022-10-10'>
                                                    8 ноября 2023 г.
                                                </time>
                                            </div>
                                            <div className='card__main-text'>
                                                <p className='card__text'>
                                                    Уважаемые Светлана Анатольевна и Анастасия Александровна! Огромное
                                                    вам спасибо за ваш каждодневный труд, заботу и любовь к детям! И за
                                                    чудесный осенний праздник! Также благодарность музыкальному
                                                    работнику и хореографу — все номера на высоком уровне, слаженно,
                                                    красиво!
                                                </p>
                                            </div>
                                            <button className='button button_theme_fill-light-main'>
                                                <span className='button__text'>Читать полностью</span>
                                            </button>
                                        </div>
                                    </article>
                                </a>
                            </SplideSlide>
                            <SplideSlide>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_review'>
                                        <div className='card__content'>
                                            <div className='card__title-block'>
                                                <h3 className='card__title'>Виктория Волкова</h3>
                                                <time className='card__date' dateTime='2022-10-10'>
                                                    8 ноября 2023 г.
                                                </time>
                                            </div>
                                            <div className='card__main-text'>
                                                <p className='card__text'>
                                                    «Мой ребёнок с удовольствием идёт в Прогимназию 43» – фраза, которую
                                                    мечтает сказать каждая мама. Нам повезло, мы можем произнести эти
                                                    слова.Каждый родитель знает, насколько волнующим и нервным может
                                                    быть период адаптации! Наши уже любимые и прекрасные Прыгункова
                                                    Любовь Александровна, Ситникова Елена Вячеславовна, Орехова Татьяна
                                                    Юрьевна совершили маленькое чудо для нашей…
                                                </p>
                                            </div>
                                            <button className='button button_theme_fill-light-main'>
                                                <span className='button__text'>Читать полностью</span>
                                            </button>
                                        </div>
                                    </article>
                                </a>
                            </SplideSlide>
                            <SplideSlide>
                                <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                    <article className='card card_type_review'>
                                        <div className='card__content'>
                                            <div className='card__title-block'>
                                                <h3 className='card__title'>Анна</h3>
                                                <time className='card__date' dateTime='2022-10-10'>
                                                    8 ноября 2023 г.
                                                </time>
                                            </div>
                                            <div className='card__main-text'>
                                                <p className='card__text'>
                                                    Здравствуйте.Благодарю воспитателей, 2-ясельной группы, Прыгункову
                                                    Любовь Александровну, Ситникову Елену Вячеславовну и помощницу
                                                    воспитателяЗа доброту, терпение и чуткость к каждому малышу. Детки
                                                    познакомились друг с другом, полюбили воспитателей. Адаптация прошла
                                                    быстро.Спасибо за фотографии, которые делают на занятиях. Большая
                                                    радость для родителей ❤️
                                                </p>
                                            </div>
                                            <button className='button button_theme_fill-light-main'>
                                                <span className='button__text'>Читать полностью</span>
                                            </button>
                                        </div>
                                    </article>
                                </a>
                            </SplideSlide>
                        </Splide>
                    </div>
                </section>
            </main>
        </BasicPage>
    );
};

export default IndexPage;
