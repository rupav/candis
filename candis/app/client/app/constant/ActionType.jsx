const ActionType =
{
  App:
  {
     SIGNIN_REQUEST: 'ACTION_TYPE_APP_SIGNIN_REQUEST',
     SIGNIN_SUCCESS: 'ACTION_TYPE_APP_SIGNIN_SUCCESS',
       SIGNIN_ERROR: 'ACTION_TYPE_APP_SIGNIN_ERROR',
           SET_USER: 'ACTION_TYPE_APP_SET_USER',
    SIGNOUT_REQUEST: 'ACTION_TYPE_APP_SIGNOUT_REQUEST',
    SIGNOUT_SUCCESS: 'ACTION_TYPE_APP_SIGNOUT_SUCCESS',
      SIGNOUT_ERROR: 'ACTION_TYPE_APP_SIGNOUT_ERROR'
  },

  Asynchronous:
  {
             WRITE_REQUEST: 'ACTION_TYPE_ASYNCHRONOUS_WRITE_REQUEST',
             WRITE_SUCCESS: 'ACTION_TYPE_ASYNCHRONOUS_WRITE_SUCCESS',
               WRITE_ERROR: 'ACTION_TYPE_ASYNCHRONOUS_WRITE_ERROR',
              READ_REQUEST: 'ACTION_TYPE_ASYNCHRONOUS_READ_REQUEST',
              READ_SUCCESS: 'ACTION_TYPE_ASYNCHRONOUS_READ_SUCCESS',
                READ_ERROR: 'ACTION_TYPE_ASYNCHRONOUS_READ_ERROR',
      GET_RESOURCE_REQUEST: 'ACTION_TYPE_GET_RESOURCE_REQUEST',
      GET_RESOURCE_SUCCESS: 'ACTION_TYPE_GET_RESOURCE_SUCCESS',
        GET_RESOURCE_ERROR: 'ACTION_TYPE_GET_RESOURCE_ERROR'
  },

  Modal:
  {
    SHOW: 'ACTION_TYPE_MODAL_SHOW',
    HIDE: 'ACTION_TYPE_MODAL_HIDE'
  },
  
  DocumentProcessor:
  {
    SET_ACTIVE_DOCUMENT: 'ACTION_TYPE_SET_ACTIVE_DOCUMENT',
              SET_STAGE: 'ACTION_TYPE_DOCUMENT_SET_STAGE',
           REMOVE_STAGE: 'ACTION_TYPE_DOCUMENT_REMOVE_STAGE'
  },

  DataEditor:
  {
       INSERT_ROW: 'ACTION_TYPE_DATA_EDITOR_INSERT_ROW',
       SELECT_ROW: 'ACTION_TYPE_DATA_EDITOR_SELECT_ROW',
     DESELECT_ROW: 'ACTION_TYPE_DATA_EDITOR_DESELECT_ROW',
       DELETE_ROW: 'ACTION_TYPE_DATA_EDITOR_DELETE_ROW',
       UPDATE_ROW: 'ACTION_TYPE_DATA_EDITOR_UPDATE_ROW',
    INSERT_COLUMN: 'ACTION_TYPE_DATA_EDITOR_INSERT_COLUMN',
    DELETE_COLUMN: 'ACTION_TYPE_DATA_EDITOR_DELETE_COLUMN',
          REFRESH: 'ACTION_TYPE_DATA_EDITOR_REFRESH'
  },

  Pipeline:
  {
    RUN_REQUEST: 'ACTION_TYPE_PIPELINE_RUN_REQUEST',
    RUN_SUCCESS: 'ACTION_TYPE_PIPELINE_RUN_SUCCESS',
      RUN_ERROR: 'ACTION_TYPE_PIPELINE_RUN_ERROR',
DELETE_PIPELINE: 'ACTION_TYPE_DELETE_PIPELINE'
  },


               INSERT_TOOL: 'ACTION_TYPE_INSERT_TOOL',
             ON_HOVER_TOOL: 'ACTION_TYPE_ON_HOVER_TOOL',
}

export default ActionType
