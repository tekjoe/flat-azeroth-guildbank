export const isAuthorized = () => {
  const jwt = localStorage.getItem("guild-bank-token");
  if (jwt) {
    return true;
  } else {
    return false;
  }
};
