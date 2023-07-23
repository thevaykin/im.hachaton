export const eventCardStyle = {
  marginTop: "40px",
  position: "relative" as const,
  maxWidth: "360px",
  "&:hover": {
    transform: "scale(1.02)",
  },
};

export const eventCardDateStyle = {
  position: "absolute" as const,
  top: "10px",
  right: "10px",
  fontFamily: "Benzin-Regular",
  fontSize: "26px",
  fontWeight: 700,
  filter: "invert(50%)",
  mixBlendMode: "difference" as const,
  userSelect: "none" as const,
};

export const eventCardBodyStyle = {
  padding: 0,
  width: "360px",
  maxHeight: "400px",
  userSelect: "none" as const,
};

export const eventCardImageStyle = {
  width: "360px",
  height: "400px",
  borderRadius: "8px",
};

export const eventCardCoinStyle = {
  position: "absolute" as const,
  bottom: "20px",
  left: "20px",
  width: "60px",
  background: "#F07B3F",
  borderRadius: "30px",
};

export const eventCardUnderTextStyle = {
  paddingTop: "20px",
  color: "#000",
  fontFamily: "Benzin-Regular",
  maxWidth: "360px",
  fontSize: "22px",
  fontWeight: 700,
};
