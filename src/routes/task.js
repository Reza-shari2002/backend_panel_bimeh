const express = require('express');
const iplimiter = require('../config/Iplimiter');
const token_verify = require('../middlewares/Tokenverify/Tokenverify');
const validateaddWorkflow = require('../middlewares/task/validationaddWorkflow');
const validateupdateWorkflow = require('../middlewares/task/validationupdateWorkflow')
const addtask = require('../controllers/task/addtask');
const checkpermission = require('../genertic middlewares/checkPermission');
const readtask = require('../controllers/task/readtask');
const checkbody = require('../genertic middlewares/checkbody');
const checkadmin = require('../genertic middlewares/checkadmin');
const diffworkflow = require('../middlewares/task/diffworkflow');
const updatetask = require('../controllers/task/updatetask');
const checkDataChanged = require('../middlewares/task/checkDataChanged');
const next = require('../controllers/task/next');
const checktasknotcompleted = require('../middlewares/task/checktasknotcompleted');
const checktaskcanbereturned = require('../middlewares/task/checktaskcanbereturned');
const return_task = require('../controllers/task/return_task');
const deletetask = require('../controllers/task/deletetask');
const checktasknotdeleted = require('../middlewares/task/checktasknotdeleted');

const router = express.Router();


router.post('/',iplimiter,token_verify,checkadmin('create task'),checkbody('create task'),validateaddWorkflow,addtask);

router.get('/:task_id',iplimiter,token_verify,checkpermission('read_task'),readtask);

router.put('/:task_id',iplimiter,token_verify,checkadmin('update task'),checkpermission('update_task'),checktasknotcompleted,checkbody('update task'),checkDataChanged,validateupdateWorkflow , diffworkflow , updatetask);

router.patch('/:task_id/next',iplimiter,token_verify,checkadmin('create task'),checkpermission('next'),checktasknotcompleted,checkbody('next'),next)

router.patch('/:task_id/return',iplimiter,token_verify,checkadmin('create task'),checkpermission('return'),checktaskcanbereturned,checkbody('return'),return_task)

router.delete('/:task_id',iplimiter,token_verify,checkadmin('delete task'),checkpermission('delete'),checktasknotdeleted,deletetask);

module.exports = router;