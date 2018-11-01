const segregate = require("./segregate");
const hasValue = require("./hasValue");

/**
 * Override values with parent only when child is empty,
 **/

const populate = (child, parent) => {
  if (!child) return parent;
  return child;
};

const mergeSites = (child = {}, parent = {}) => {
  Object.keys(child).forEach(childGroupLevKey => {
    if (hasValue(parent[childGroupLevKey])) {
      Object.keys(child[childGroupLevKey]).forEach(childValueLevelKey => {
        parent[childGroupLevKey][childValueLevelKey] =
          child[childGroupLevKey][childValueLevelKey];
      });
    } else {
      parent[childGroupLevKey] = child[childGroupLevKey];
    }
  });
  return parent;
};

module.exports = (site = {}, parents = []) => {
  site = segregate(site.site); // remove value level keys with values {}, [], falsy values
  let parentSites = parents.map(parent => {
    return segregate(parent.site);
  });
  parentSites.unshift(site);

  const reducer = (accumulator, currentValue) =>
    mergeSites(accumulator, currentValue);
  return parentSites.reduce(reducer);
};
