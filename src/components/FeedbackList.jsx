import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {

    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>NO Feedback Yet</p>
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>

                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>

                ))}
            </AnimatePresence>
        </div>
    )
    // Below code is same like above. the above code contains animation while below code does not contain any animation.
    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             <FeedbackItem key={item.id} item={item}
    //                 handleDelete={(handleDelete)} />

    //         ))}
    //     </div>
    // )  
}



export default FeedbackList