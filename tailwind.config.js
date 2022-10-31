module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#17161A",
      disabled: "#A6A6A6",
      gray: {
        disabled: "#EBEBEB",
        lighter: "#F2F2F2",
        light: "#999999",
        DEFAULT: "#808080",
        dark: "#666666",
        darker: "#242226",
      },
      primary: {
        light: "#7769b8",
        DEFAULT: "#28008C",
      },
      secondary: {
        light: "#9fdce0",
        DEFAULT: "#00bed7",
      },
      tertiary: {
        light: "#f3fbcd",
        DEFAULT: "#83be32",
        dark: "#548800",
      },
      danger: {
        light: "#ec7c8c",
        DEFAULT: "#df2440",
        dark: "#DB303F",
      },
    },
    fontSize: {
      xs: ["9px", "11.7px"],
      sm: ["12px", "15.84px"],
      base: ["14px", "21px"],
      md: ["16px", "24px"],
      lg: ["18px", "27px"],
      xl: ["28px", "33.89px"],
      "2xl": ["32px", "39px"],
    },
    fontFamily: {
      sans: "Inter",
      mono: "JetBrains Mono",
    },
    extend: {
      boxShadow: {
        light: "0px 2px 10px 0px #0000001A",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in .5s ease-in-out",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  safelist: [
    "ant-divider-horizontal",
    "ant-layout",
    "ant-layout-header",
    "ant-layout-footer",
    "ant-layout-content",
    "ant-typography",
    "ant-btn",
    "ant-btn-text",
    "ant-btn-primary",
    "ant-btn-dangerous",
    "ant-switch-checked",
    "ant-radio-inner",
    "ant-carousel",
    "ant-form-item",
    "ant-form-item-checkbox",
    "ant-form-item-label",
    "ant-form-item-control-input",
    "ant-input-affix-wrapper",
    "ant-input-affix-wrapper-focused",
    "ant-form-item-explain",
    "ant-form-item-explain-error",
    "ant-input",
    "ant-input-password",
    "ant-checkbox-wrapper",
    "ant-checkbox",
    "ant-checkbox-input",
    "ant-checkbox-inner",
    "ant-card",
    "ant-card-body",
    "ant-tooltip",
    "ant-tooltip-inner",
    "ant-tooltip-arrow",
    "ant-select-arrow",
    "ant-select-open",
    "ant-select-selector",
    "ant-select-dropdown",
    "ant-space",
    "ant-table",
    "ant-table-content",
    "ant-table-tbody",
    "ant-table-row",
    "ant-table-row-selected",
    "ant-table-cell",
    "anticon",
    "slick-dots",
    "slick-active",
    "ant-modal-mask",
    "ant-modal-body",
  ],
}
