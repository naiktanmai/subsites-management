const MicroSite = require("../../models/MicroSite");

module.exports = () => {
  return MicroSite.findOne({
    locationCodes: []
  })
}
