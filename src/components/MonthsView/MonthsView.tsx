import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { motion } from "framer-motion";
import styles from "./MonthsView.module.css";

interface Props {
  selectedDate: Dayjs | null;
  calendarDate: Dayjs;
  handleMonthSelect: (arg0: number) => void;
}

export const MonthsView: React.FC<Props> = ({
  selectedDate,
  calendarDate,
  handleMonthSelect,
}) => {
  return (
    <motion.ul
      className={styles.monthList}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {dayjs.monthsShort().map((month, i) => (
        <li key={i}>
          <motion.button
            className={styles.itemSelectButton}
            whileHover={
              selectedDate?.get("month") === i &&
              selectedDate?.get("year") === calendarDate.get("year")
                ? {}
                : {
                    backgroundColor: "#f1f1f1",
                  }
            }
            animate={
              selectedDate?.get("month") === i &&
              selectedDate?.get("year") === calendarDate.get("year")
                ? { backgroundColor: "#2984ce", color: "#fff" }
                : {}
            }
            transition={{ duration: 0.25 }}
            onClick={() => handleMonthSelect(i)}
          >
            {month}
          </motion.button>
        </li>
      ))}
    </motion.ul>
  );
};
