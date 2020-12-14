import Head from 'next/head';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div>
      <Head children={<title>Create Next App</title>}></Head>

      <main></main>
    </div>
  );
}
