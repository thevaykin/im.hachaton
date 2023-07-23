/// <reference types="@emotion/react/types/css-prop" />
export const GLOBAL_STYLES = {
  "@font-face": {
    fontFamily: "Benzin-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    src: `local("Benzin-Regular"), url("srcresources/fonts/Benzin-Regular.woff2") format("woff2"), url("src/resources/fonts/Benzin-Regular.woff") format("woff")`
  },

  "*": {
    boxSizing: "border-box",
  } as const,
  "html, body, #root": {
    margin: 0,
    padding: 0,
    height: "100%",
    background: "#f0f0f0",
    fontFamily: "Benzin-Regular"
  },
};