/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",

    theme: {
        container: { center: true },
        screens: {
            
            af: "0px",// mobile
            as: "280px",// mobile
            sm: "640px",// mobile
            md: "768px",// tablet
            lg: "1024px",// desktop
            xl: "1280px",// large desktop
            "2xl": "1536px",
            "3xl": "1600px",
        },
        extend: {
            colors: {
                // Primary colors
                primaryShade6: "#430909",
                primaryShade5: "#5A0C0C",
                primaryShade4: "#700F0F",
                primaryShade3: "#871212",
                primaryShade2: "#9E1515",
                primaryShade1: "#B41818",
                primary: "#CB1B1B",
                tint7: "#E43434",
                tint6: "#F66262",
                tint5: "#FCA197",
                tint4: "#F6BBBB",
                tint3: "#F9D2D2",
                tint2: "#FCE8E8",
                tint1: "#FDF1F1",

                // Neutral colors
                black: "#0C0C0C",
                gray13: "#121212",
                gray12: "#212121",
                gray11: "#353535",
                gray10: "#505050",
                gray9: "#717171",
                gray8: "#909090",
                gray7: "#ADADAD",
                gray6: "#CBCBCB",
                gray5: "#D9D9D9",
                gray4: "#E1E1E1",
                gray3: "#EDEDED",
                gray2: "#F9F9F9",
                gray1: "#FAFAFA",
                white: "#FFFFFF",

                // State colors
                Error: "#C30000",
                ELight1: "#ED2E2E",
                ELight2: "#FFF2F2",

                Success: "00966D",
                SLight1: "00BA88",
                SLight2: "F3FDFA",

                Warning: "#A9791C",
                WLight1: "#F4B740",
                WLight2: "#FFF8E1",


            },
            boxShadow: {
                '3xl': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
                '4xl': 'rgba(0, 0, 0, 0.2) 0px 3px 10px;'
            }
        },
    },
    plugins: [],
};
