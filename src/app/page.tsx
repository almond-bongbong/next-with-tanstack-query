'use client';

import styles from './page.module.css';
import useDidMount from '@/app/hooks/use-did-mount';
import ClientOnlyComponent from '@/app/components/client-only-component';

export default function Home() {
  const isDidMount = useDidMount();

  return (
    <main className={styles.main}>
      <h1>Hello, Tanstack query</h1>

      {isDidMount && <ClientOnlyComponent />}
    </main>
  );
}
