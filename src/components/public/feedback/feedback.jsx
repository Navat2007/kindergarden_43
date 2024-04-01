import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import useFeedbackStore from "../../../store/feedbackStore";

import AlertPopup from "../../general/alert.popup/alert.popup";

const Feedback = () => {
    const [notif, setNotif] = React.useState(<></>);
    const { register, handleSubmit, setFocus } = useForm();
    const feedbackStore = useFeedbackStore();

    const onSubmit = async (data) => {
        await feedbackStore.sendFeedback(data);

        setNotif(
            <AlertPopup
                text='Запрос успешно отправлен'
                state='success'
                timerInSeconds={3}
                opened={true}
                onClose={() => setNotif(<></>)}
            />
        );
    };

    return (
        <>
            <motion.section
                className='feedback section bg-color bg-color_main-gradient'
                id="feedback-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className='page__section-indent section__wrap'>
                    <div className='section__card bg-color feedback__card'>
                        <form className='feedback__form' onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='section__title feedback__title'>Задайте Ваш вопрос</h2>
                            <div className='section__main-text feedback__main-text'>
                                Оставьте ваши контактные данные, мы обязательно свяжемся с вами и ответим на все вопросы
                            </div>
                            <div className="feedback__fields">
                                <div className="feedback__fields-wrap">
                                    <input
                                        id='name'
                                        className='field feedback__field'
                                        type='text'
                                        name='name'
                                        autoComplete='name'
                                        required
                                        placeholder='Ваше имя...'
                                        {...register("name", {
                                            required: "Поле обязательно к заполнению",
                                        })}
                                    />
                                    <input
                                        id='phone'
                                        className='field feedback__field'
                                        type='tel'
                                        name='phone'
                                        autoComplete='phone'
                                        required
                                        placeholder='+7(___)___-__-__'
                                        pattern='\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'
                                        {...register("phone", {
                                            required: "Поле обязательно к заполнению",
                                        })}
                                    />
                                </div>
                                <textarea
                                    id='message'
                                    className='field feedback__field'
                                    rows='4'
                                    name='message'
                                    placeholder='Введите Ваш вопрос...'
                                    {...register("message")}
                                />
                                <div className='feedback__checkbox-box'>
                                    <input type='checkbox' id='privacy' required />
                                    <label htmlFor='privacy'>Даю своё согласие на обработку персональных данных</label>
                                </div>
                                <span className='feedback__span-text'>Необходимо заполнить номер телефона</span>
                                <button className='button button_theme_fill-main' type='submit'>
                                    <span className='button__text'>Отправить</span>
                                </button>
                            </div>
                        </form>
                        <div className="feedback__decor"></div>
                    </div>
                </div>
            </motion.section>
            {notif}
        </>
    );
};

export default Feedback;
