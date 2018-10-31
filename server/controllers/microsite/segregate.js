const hasValue = require("./hasValue");

module.exports = (site = {}) => {
  /**
  loop over groupings level eg. header, footer
  **/
  Object.keys(site).forEach(groupKey => {
    //checking if group level key has a value, needs to be a Object
    if (hasValue(site[groupKey])) {
      /**
      loop over value level eg. header.logo, header.phoneNumber
      **/
      Object.keys(site[groupKey]).forEach(valueKey => {
        if (!hasValue(site[groupKey][valueKey]))
          delete site[groupKey][valueKey];
      });
    } else {
      delete site[groupKey];
    }
  });
  return site;
};
