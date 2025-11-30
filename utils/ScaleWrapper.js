import { motion } from "framer-motion";

const ScaleWrapper = ({ children, delay = 0, repeat = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }} // Start: halka sa chhota + neeche
            whileInView={{ opacity: 1, scale: 1, y: 0 }} // Jab screen pe aayega tab chalega
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
            viewport={{ once: !repeat, amount: 0.3 }} // repeat=false -> sirf ek baar chalega, true -> har baar chalega
        >
            {children}
        </motion.div>
    );
};

export default ScaleWrapper;
