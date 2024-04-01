"use client"
import styles from './page.module.scss';

export default function Index() {
  return (
    <>
      <div className={styles.page}>
        <h1>Welcome to SinLess Games!</h1>
        <p>
          SinLess Games is a game development studio that creates highly
          immersive games with well-thought-out storylines and great graphics.
          Founded in February 2018 by Timothy A. Pierce, SinLess Games strives
          to change the gaming industry&apos;s focus from profit to immersive
          experiences. They offer services, including game design, development,
          testing, hosting, modding, and custom gaming PC builds. SinLess Games
          also runs a Minecraft server called Mobius Infernium, offering a
          unique and immersive gameplay experience. Join them on a journey where
          game immersion ranks supreme and dreams come true!
        </p>
      </div>
    </>
  );
}
