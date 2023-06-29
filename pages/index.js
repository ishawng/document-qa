import Head from 'next/head';
import Header from '../components/Header';
import FileUploader from '../components/FileUploader';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handleFileSelect = (file) => {
    console.log(file);
  };

  return (
    <container>
      <Head>
        <title>Document QA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h2>
          Get started by uploading a file
        </h2>
        <FileUploader
          handleChange={handleFileSelect}
          name='file'
          types={['pdf']}
          required
        />
      </main>
    </container>
  )
}
