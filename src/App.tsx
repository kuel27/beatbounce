import type { Component } from 'solid-js';
import { onMount, createSignal } from 'solid-js';

import logo from './assets/logo/BeatBounce.png';
import styles from './App.module.css';

const App: Component = () => {
  const [jump, setJump] = createSignal(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      setJump(true);
      setTimeout(() => setJump(false), 1000); // Reset after 1 second
    }
  };

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={jump() ? `${styles.logo} ${styles.jump}` : styles.logo} alt="logo" />
        <h1>Beat, Bounce!</h1>
      </header>
    </div>
  );
};

export default App;