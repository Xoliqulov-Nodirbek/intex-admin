/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      margin:{
        navBarIcon:'14px',
      },
      padding:{
        headerInpPl:'38px',
        headerPaddingTopBottom:'19px',
        headerPaddingX:'30px',
      },
      width:{
        logoWidth:'180px',
        loginLogoWidth:'240px',
        sitebarWidth:'253px',
        supportWidth:'150px',
        headerInputWidth:'260px',
      },
      height:{
        logoHeight:'17px',
        logoLoginHeight:'22px',
      },
      backgroundColor:{
        loginBtn:"#2B3D90",
        navbarItemActive:"rgba(55, 125, 255, 0.05)",
        modalFixedBg:"rgba(0, 0, 0, 0.15)",
        languageBg:"#F2F2F2",
        newBtnBg:"#0BCC23",
        saleBtnBg:"#FF5C5C",
        xitProductBtnBg:"#FF3A3A",
        defaultBtnBg:"#F2F2F2",
        recomendBtnBg:"#22B0F8;",
        addProductSizeBtnBg:"#9CDAFF",
        headerInpBg:"#FBFBFC",
      },
      colors:{
        forgotPasswordColor:'#4F46E5',
        inputPleacholderColor:'#B4B6B8',
        ruUzUsColors:"#2B3D91",
        navBarColor:"#464A4D",
        navSubColor:'#B9B9B9',
        supportColor:'#109EF4',
      },
      lineHeight:{
        lead:'150%',
      },
    },
  },
  plugins: [],
}
