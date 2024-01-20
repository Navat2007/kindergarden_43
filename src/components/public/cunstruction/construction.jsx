import React from "react";
import { motion } from "framer-motion";

import Image_samo from "../../../images/construction__image.jpg";

const Construction = () => {
    return (
        <motion.section
            className='section page__section-indent'
            style={{ textAlign: "center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            <img
                style={{ marginInline: "auto", inlineSize: "min(40em, 80vw)" }}
                src={Image_samo}
                loading='lazy'
                alt='Дети собирают кубики сидя на полу'
            />
            <h1 className='section__subtitle'>Ведутся работы по созданию страницы...</h1>
        </motion.section>
    );
};

export default Construction;
