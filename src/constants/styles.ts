export const Styles = {
  control: (styles: any) => ({
    ...styles,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "12rem",
    borderRadius: "5px",
    color: "white",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    backgroundColor: "#262626",
    cursor: "pointer",
    border: "2px solid #000000",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
    ":hover": {
      border: "2px solid #000000",
      boxShadow: "none",
    },
  }),
  option: (styles: any) => ({
    ...styles,
    color: "white",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    width: "100%",
    background: "#262626",
    ":hover": {
      backgroundColor: "#18181b",
      color: "#e4e4e7",
      cursor: "pointer",
    },
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: "#262626",
    maxWidth: "14rem",
    border: "2px solid #000000",
    borderRadius: "5px",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
  }),
  placeholder: (defaultStyles: any) => ({
    ...defaultStyles,
    color: "white",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: "white", // Change the text color here
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
  }),
};
