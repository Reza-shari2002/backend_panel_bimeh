function diff(oldworkflow_stages, newworkflow_stages, oldIndex, newIndex) {
  const oldIds = oldworkflow_stages.map((s) => s.unit_id);
  const newIds = newworkflow_stages.map((s) => s.unit_id);

  const oldSet = new Set(oldIds);
  const newSet = new Set(newIds);

  const added_units = newIds.filter((id) => !oldSet.has(id));
  const deleted_units = oldIds.filter((id) => !newSet.has(id));
  let fixed_units = newIds.filter((id) => oldSet.has(id));

  const current_workflow = [];

  const oldCurrent = oldworkflow_stages[oldIndex];
  const newCurrent = newworkflow_stages[newIndex];

  if (oldCurrent.unit_id !== newCurrent.unit_id) {
    current_workflow.push({
      newcurrent_unit_id: newCurrent.unit_id,
      oldcurrent_unit_id: oldCurrent.unit_id,
    });
    fixed_units = fixed_units.filter(
      (id) => id !== oldCurrent.unit_id && id !== newCurrent.unit_id,
    );
  }

  return {
    added_units: [...new Set(added_units)],
    deleted_units: [...new Set(deleted_units)],
    fixed_units: [...new Set(fixed_units)],
    new_current_workflow: current_workflow,
  };
}

module.exports = diff;
