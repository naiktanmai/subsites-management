const mongoose = require("mongoose");
let Schema = mongoose.Schema;

/**
data type of site should be enforced to
Map { groupLevelKey: {
        valueLevelKey: Mixed,
        .
        .

      },
    .
    .
    }
**/

const microSiteSchema = new Schema(
  {
    locationCodes: [String],
    parentLocationCode: [String], //parent location code; one level higher, could be used for statewide site
    site: Object
  },
  { timestamps: true }
);

microSiteSchema.statics.getMicroSite = function getMicroSite(locationCode) {
  return this.findOne({
    locationCodes: {
      $in: [locationCode]
    }
  }).then(microSite => {
    if (!microSite)
      return this.findOne({
        locationCodes: []
      });
    return microSite;
  });
};

const MicroSite = mongoose.model("MicroSite", microSiteSchema);

module.exports = MicroSite;
