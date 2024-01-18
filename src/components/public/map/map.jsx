import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { motion } from "framer-motion";

const MapSection = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <YMaps>
                    <Map
                        state={{
                            center: [55.740882, 37.399416],
                            zoom: 17,
                        }}
                        width='100%'
                        height='clamp(25rem, 18.3824rem + 29.4118vw, 50rem)'
                    >
                        <Placemark
                            geometry={[55.740882, 37.399416]}
                            properties={{
                                iconContent: "Детский сад № 43 УДПРФ",
                            }}
                            options={{ preset: "islands#blueStretchyIcon" }}
                        />
                    </Map>
                </YMaps>
            </motion.section>
        </>
    );
};

export default MapSection;
