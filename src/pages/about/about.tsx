import { ReactElement } from "react";
import styles from "./about.module.scss";
import PageTitle from "../../components/page-title/page-title";
import Story from "../../components/story/story";
import Policy from "../../components/policy/policy";
import Comments from "../../components/comments/comments";

export default function About(): ReactElement {
  return (
    <main className={styles.about}>
      <PageTitle title="О нас" link="/about" />
      <Story />
      <Policy />
      <Comments />
    </main>
  );
}
