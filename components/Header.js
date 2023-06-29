import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src='/bnym_logo_white.png'
          alt='BNYM Logo'
          width={500}
          height={50}
        />
      </div>
    </header>
  );
}