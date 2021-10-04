export default {
  colors: {
    text: "#333",
    headerBackground: "black",
    headerText: "white",
    paperBackgroundColor: "white",
    paperHoverBackgroundColor: "#fcfcfc",
    paperHeadingColor: "grey",
    paperHoverHeadingColor: "#00d27d",
    paperBorderColor: "#D3D3D3",
    paperDescriptionColor: "rgb(86, 88, 103)",
    collectionBackgroundColor: "white",
    collectionHeading: "#3a3c4c",
    collectionDescription: "#565867",
    breadcrumbLinkTextColor: "#4f5e6b",
    breadcrumbHoverLinkTextColor: "#242a30",
    breadcrumbTextColor: "#8f919d",
    articleTextColor: "#565867",
    articleDescriptionColor: "#8f919d",
    background: "#fff",
    primary: "#00d27d",
    secondary: "#06FF9A",
    muted: "#00d27d",
    iconColor: "grey",
    logoColor: "white",
  
  },
  radii: [0, 2, 4, 8],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    small: 1.2,
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  /* Styles for MDX */
  styles: {
    // the keys used here reference elements in MDX
    h1: {
      // the style object for each element
      // can reference other values in the theme
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
    },
    a: {
      color: "primary",
      ":hover, :focus": {
        color: "secondary",
      },
    },
    blockquote: {
      marginLeft: "1.75rem",
    },
    // more styles can be added as needed
  },
}
