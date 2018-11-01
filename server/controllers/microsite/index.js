const MicroSite = require("../../models/MicroSite");
const getParents = require("./getParents");
const merge = require("./merge");

MicroSite.getMicroSite("NJ150").then(data => {
  getParents(data.parentLocationCode).then(parents => {
    let mergedData = merge(data, parents);
    console.log(mergedData);
  });
});
