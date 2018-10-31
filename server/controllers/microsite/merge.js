/**
* Override values with parent only when child is empty,
**/

const populate = (child, parent) => {
  if (!child) return parent
  return child;
}

module.exports = (site = {}, parents = []) => {

  parentSites = parents.map(parent => {
    console.log(parent);
    return parent.site
  })
  // console.log(parentSites);
};
