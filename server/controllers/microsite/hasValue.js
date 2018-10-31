module.exports = (value = null) => {
  if (!value) return false;
  if (Array.isArray(value) && !value.length) return false;
  if (typeof value === "object" && !Object.keys(value).length) return false;

  return true;
};
