import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Color Start
      colors: {
        primaryColor: "#1D293F",
        secondaryColor: "#212529",
        bdrColor: "#99A3AD",
        afterColor: "#F5A623",
        searchColor: "#28B0A6",
        heardBg: "#FBFBFB",
        heardColor: "#546179",
        wishListBgColor: "#F5F5F3",
        inpColor: "rgba(153, 163, 173, 1)",
        inpBg: "rgba(255, 255, 255, 1)",
        btnBg: "rgba(40, 176, 166, 1)",
        acBdr: "#E9ECEF",
        acTxt: "#9AA5B1",
        overlay: "#6c757d, rgba(0,0,0,0.5)",
        overlayTwo: "#00000066",
        dColor: "#FA3E2C",
        tBtnBg: "#28b0a714",
      },
      // Color End
      // Max whdth Start
      maxWidth: {
        container: "1600px",
        QContainer: "1328px",
      },
      // Max whdth End

      // Font Family Start
      fontFamily: {
        pop: ["Poppins"],
        Inter: ["Inter"],
      },
      // Font Family End

      // Spacing Start
      spacing: {
        s300: "300px !important",
        s48: "48px !important",
        s136: "136px",
        s350: "350px",
        s1328: "1328px",
        s72: "72px",
        s112: "112px",
        s376: "376px",
        s293: "293px",
        s10: "10px",
        s6: "6px",
        s512: "512px",
        s360: "360px",
        s120: "120px",
        s2100: "2100px",
        s240: "240px",
      },
      // Spacing End

      // Border Radius Start
      borderRadius: {
        r28: "28px",
        r20: "20px",
        r32: "32px",
      },
      // Border Redius Start

      // Font Size Start
      fontSize: {
        t128: "128px",
        t40: "40px",
        t32: "32px",
        t56: "56px",
      },
      // Font Size End

      // Box Shadow Start
      boxShadow: {
        locationShadow: "0px 43px 66px rgba(0,0,0,0.07)",
        category: "0px 2px 4px rgba(14,86,124,0.16)",
        trendingCard: "0px 2px 4px rgba(14,86,124,0.16)",
        heartShadow: "0px 4px 8px rgba(44,44,44,0.1)",
        inpShadow: "0px 32px 84px rgba(14,86,124,0.16)",
      },
      // Box Shadow End
    },
  },
  plugins: [],
  presets: [keepPreset],
};
