import chroma from "chroma-js";

export default {
  ColorBox: {
    width: "20%",
    height: props => (props.showFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s",
      cursor: "pointer"
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.3 ? "black" : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.1 ? "white" : "black"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.3 ? "darkslategray" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    color: "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.3 ? "darkslategray" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    outline: "none",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: 0
  },
  boxContent: {
    position: "absolute",
    width: "90%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "10px"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)"
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "15",
    position: "absolute",
    transition: "transform 0.6s ease-in-out"
  },
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px 0 black",
      background: "rgba(255, 255, 255, 0.3)",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase"
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    }
  },
  copyMsgShow: {
    position: "fixed",
    left: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "1",
    color: "white",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
};
