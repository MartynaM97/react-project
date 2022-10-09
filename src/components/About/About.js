import styles from "./About.module.scss";
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
  return (
    <div>
      <PageTitle>ABOUT</PageTitle>
      <p className={styles.subtitle}>Hello! Are you interested in React? </p>
    </div>
  );
};

export default About;
