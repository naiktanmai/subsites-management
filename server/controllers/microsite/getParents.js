const MicroSite = require("../../models/MicroSite");
const getRootMicroSite = require("./getRootMicroSite");

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
  return getAllParents([], parentLocationCode).then((data = []) => {
    return getRootMicroSite().then((rootData = {}) => {
      data.push(rootData);
      return data;
    });
  });
};
