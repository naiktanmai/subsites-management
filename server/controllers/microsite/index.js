const MicroSite = require("../../models/MicroSite");
const segregate = require("./segregate");
const getParents = require("./getParents");
const merge = require('./merge');

MicroSite.getMicroSite("NJ150").then(data => {
  data.site = segregate(data.site); // remove value level keys with values {}, [], falsy values
  getParents(data.parentLocationCode).then(parents => {
    merge(data, parents)
  });
});
