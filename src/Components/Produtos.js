import React from 'react';
import Head from './Head';
import styles from './Produtos.module.css';

const Produtos = () => {
  return (
    <div className={styles.produtos}>
      <Head title="Ranek" description="Home" />

      <h1>Produtos</h1>
    </div>
  );
};

export default Produtos;
