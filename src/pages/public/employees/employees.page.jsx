import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import useEmployeesStore from "../../../store/public/employeesStore";

import SingleImageWithPreview from "../../../components/general/single.image.with.preview/single.image.with.preview";
import BasicPage from "../../../components/public/basic.page/basic.page.component";

const EmployeesPage = () => {
    const store = useEmployeesStore();

    React.useEffect(() => {
        const fetchData = async () => {
            await store.loadAll();
        };

        fetchData();
    }, []);

    const Person = ({ person }) => {
        return (
            <li>
                <NavLink to={"" + person.ID} className='card-link'>
                    <article className='card card_type_people'>
                        <SingleImageWithPreview isPersonImage={true} image={person.photo} extraClass={"card__image"} />
                        <div className='card__content'>
                            <h3 className='card__title'>{person.fio}</h3>
                            <div className='card__main-text'>
                                <p className='card__text'>{person.position}</p>
                            </div>
                        </div>
                    </article>
                </NavLink>
            </li>
        );
    };

    return (
        <BasicPage loadings={[store]}>
            <Helmet>
                <title>Педагоги</title>
            </Helmet>
            <motion.section
                className='section page__section-indent'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className='section__wrap'>
                    <h1 className='section__title section__title_with-decor'>Руководство. Педагогический состав</h1>
                    {store.items.map((item) => {
                        return (
                            <div className='section__indent' key={item.category}>
                                <h2 className='section__subtitle'>{item.category}</h2>
                                <ul className='section__card-deck'>
                                    {item.persons.map((person) => {
                                        return <Person key={person.ID} person={person} />;
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </motion.section>
        </BasicPage>
    );
};

export default EmployeesPage;
