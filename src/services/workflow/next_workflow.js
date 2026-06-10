function next_workflow(task){
    let   current_workflow_index = task.current_workflow_index;
    const finall_index = task.workflow_stages.length - 1;
    if(current_workflow_index  === finall_index){
        task.progress_percent = 100;

        return({task:task ,status:"done"});
    }
    else{
        current_workflow_index = current_workflow_index + 1;
        const progress_percent = (current_workflow_index / task.workflow_stages.length)*100;
        const current_workflow_unit = task.workflow_stages[current_workflow_index].unit_id;
        task.current_workflow_index = current_workflow_index;
        task.progress_percent = progress_percent;
        task.current_workflow_unit = current_workflow_unit;
        return({task : task , status:'ordinary'});
    }
}


module.exports = next_workflow;