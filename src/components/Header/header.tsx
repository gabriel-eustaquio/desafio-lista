import Image from "next/image";
import styles from "@/components/Header/styles.module.scss";

export default function Header() {
  return (
    <header className={`${styles.container} ${styles.header}`}>
      <Image src="/images/focalpoint.svg" width={150} height={36} alt="Logo" priority/>
      <h1>Bem-vindo de volta, Marcus</h1>
      <span>Segunda, 01 de dezembro de 2025</span>
    </header>
  )
}