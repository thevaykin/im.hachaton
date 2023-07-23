export const containerStyle = {
  position: "relative" as const,
  background: "#f0f0f0",
  height: "100vh -100px)",
  maxWidth: "80%",
  margin: "0 auto",
};

export const headerStyle = {
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f0f0f0",
  fontSize: "40px",
  fontWeight: 700,
  paddingTop: "40px",
  fontFamily: "Benzin-Regular"
};

export const contentStyle = {
  display: "flex",
  justifyContent: "center",
  gap: 40,
  flexWrap: "wrap" as const,
  paddingBottom: "100px",
};

export const eventListFooterStyle = {
  position: "fixed" as const,
  display: "flex",
  width: "100%",
  background: "#f0f0f0",
  bottom: 0,
};

export const eventListFooterButtonWrapperStyle = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "20px",
  width: "80%",
  margin: "0 auto",
};

export const eventListFooterButtonStyle = {
  borderRadius: "15px",
  border: "2px solid #000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Benzin-Regular",
  fontSize: "22px",
  fontWeight: 600,
  color: "#000",
};

export const addModalStyle = {
  position: "fixed" as const,
  top: 0,
  zIndex: 1000,
  width: "100%",
  background: "#f0f0f0",
};

export const containerModalStyle = {
  width: "40%",
  margin: "0 auto",
  paddingTop: "30px",
};

export const addModalTitleStyle = {
  ...containerModalStyle,
  display: "flex",
  justifyContent: "center",
  fontSize: "32px",
  fontWeight: "600",
  fontFamily: "Benzin-Regular"
};

export const addModalFieldStyle = {
  marginLeft: "-12px",
};

export const addModalLabelStyle = {
  width: "200px",
  fontSize: "22px",
  fontWeight: "600",
  textAlign: "start" as const,
  fontFamily: "Benzin-Regular"
};

export const addModalFooter = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "20px",
  width: "40%",
  margin: "0 auto",
  padding: "30px 12px 0 0",
};
