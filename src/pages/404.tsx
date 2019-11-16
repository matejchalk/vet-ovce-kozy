import React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import i18n from '../i18n.json';
import styles from './404.module.scss';

const NotFoundPage = () => {
  const {
    other: { pageNotFound },
    buttons: { backToHome },
  } = i18n;
  return (
    <Layout>
      <section className={styles.section}>
        <main className={styles.card}>
          <h2 className={styles.title}>{pageNotFound}</h2>
          <Button text={backToHome} path="/" />
        </main>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
