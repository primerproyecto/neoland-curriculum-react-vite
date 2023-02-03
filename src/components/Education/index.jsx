import React from "react";
import styles from  "./index.module.css";

const Education = ({ education }) => {
  return (
    <div>
      <div className={`${styles.education}`}>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className={styles.name}>📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;