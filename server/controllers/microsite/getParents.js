const MicroSite = require("../../models/MicroSite");
const getRoot = require("./getRoot");

const getImmediateParent = (parentLocationCode = []) => {
  return MicroSite.findOne({
    locationCodes: {
      $all: parentLocationCode
    }
  });
};

const getAllParents = (acc = [], parentLocationCode = []) => {
  return getImmediateParent(parentLocationCode).then(data => {
    if (!data) {
      return acc;
    }

    acc.push(data);

    if (data.parentLocationCode.length) {
      return getAllParents(acc, data.parentLocationCode);
    }

    return acc;
  });
};

module.exports = (parentLocationCode = []) => {
  return Promise.all([getAllParents([], parentLocationCode), getRoot()]);
};
