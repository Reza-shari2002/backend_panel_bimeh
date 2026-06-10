function matchunit(workflow_stages, units_id) {
  let match = 0;
  let matched = true;
  for (let i = 0; i < workflow_stages.length; i++) {
    for (let j = 0; j < units_id.length; j++) {
      if (workflow_stages[i].unit_id === units_id[j].id) {
        match++;
      }
    }
    if (match === 0) {
      matched = false;
    }
    match = 0;
  }

  return matched;
}

module.exports = matchunit;
