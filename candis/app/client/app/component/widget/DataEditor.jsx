import React          from 'react'
import { connect }    from 'react-redux'
import ReactDataGrid  from 'react-data-grid'

import config         from '../../config'

import ToolBar        from './ToolBar'

import { row, column } from '../../action/DataEditorAction'
import { getResource } from '../../action/AsynchronousAction'
import { getFiles }    from '../../util'
import store from '../../Store';

class DataEditor extends React.Component {
  constructor (props) {
    super (props)

    this.tools =
    [
      {
           icon: `${config.routes.icons}/insert-row.png`,
        tooltip: 'Insert Row',
        onClick: (props) => {
          const meta     = { }
          const position = props.rows.length

          props.columns.forEach((column) => { meta[column.key] = "" })

          props.row.insert(position, meta)
        }
      },
      {
           icon: `${config.routes.icons}/insert-column.png`,
        tooltip: 'Insert Column',
        onClick: (props) => {
          bootbox.prompt({
                title: '<span class="font-bold">Column Name</span>',
            inputType: 'text',
              buttons:
              {
                cancel:  { label: "Cancel", className: "btn-sm btn-primary" },
                confirm: { label: "Create", className: "btn-sm btn-success" }
              },
                size: "small",
              animate: false,
            callback: (name) => {
              const meta     = { key: name, name: name, editable: true }
              const position = props.columns.length - 1

              props.column.insert(position, meta)
            }
          })
          
        }
      },
      {
           icon: `${config.routes.icons}/delete-row.png`,
        tooltip: 'Delete Row',
        onClick: (props) => {
          props.rows.forEach((meta, index) => {
            if ( meta.selected ) {

              props.row.delete(index, meta)
            }
          })
        }
      },
      {
           icon: `${config.routes.icons}/delete-column.png`,
        tooltip: 'Delete Column',
        onClick: (props)  => {
          const options   = props.columns.map(({ key, name }) => {
            return { text: name, value: key }
          })

          bootbox.prompt({
                   title: '<span class="font-bold">Column Name</span>',
               inputType: 'select',
            inputOptions: options,
                 buttons:
                  {
                    cancel:  { label: "Cancel", className: "btn-sm btn-primary" },
                    confirm: { label: "Delete", className: "btn-sm btn-danger" }
                  },
                    size: "small",
                animate: false,
                callback: (key) => {
                  if ( key  !== null ) {
                    props.column.delete(key)
                  }
                }
          })
        }
      },
      {
           icon: `${config.routes.icons}/reload.png`,
        tooltip: 'Refresh',
        onClick: (props) => {
          props.getResource()
        }
      },
      {
            icon: `${config.routes.icons}/load-rows.png`,
        tooltip: 'Load All',
        onClick: (props) => {
          toastr.warning('To be implemented.')
        }
      }
    ]
  }

  render ( ) {
    const props  = this.props

    return (
      <div>
        <div className="panel panel-default no-background no-border no-shadow">
          <div className="panel-body">
            <div className="text-right">
              <ToolBar tools={this.tools} onClick={(tool) => {
                tool.onClick(props)
              }}/>
            </div>
          </div>
        </div>
        <div>
          <ReactDataGrid
             enableCellSelect={true}
                      columns={props.columns}
                    rowGetter={(index) => { return props.rows[index] }}
                    rowsCount={props.rows.length}
                 rowSelection={{
                        showCheckbox: true,
                   enableShiftSelect: true,
                      onRowsSelected: (rows) => {
                        rows.forEach((meta)  => {

                          props.row.select(meta.rowIdx, meta.row)
                        })
                      },
                    onRowsDeselected: (rows) => {
                      rows.forEach((meta)  => {

                        props.row.deselect(meta.rowIdx, meta.row)
                      })
                    },
                            selectBy: { isSelectedKey: 'selected' }
                 }}
            onGridRowsUpdated={({ fromRow, toRow, updated }) => {
              
              props.row.update(fromRow, toRow, updated).then(() => {
                
                console.log("props.rows are now!", props.rows)  // Still not updated
                // store.getState().dataEditor.rows  // this statement have updated rows, even without using the Promise.
                
                props.onChange({ columns: props.columns, rows: props.rows })
              })
            }}/>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const dataEditor    = state.dataEditor

  return {
       rows: dataEditor.rows,
    columns: dataEditor.columns
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    row: {
      update: (fromRow, toRow, updated) => new Promise ((resolve) => {
        const action = row.update(fromRow, toRow, updated)
        dispatch(action)
        resolve()
      }),
      insert: (position, meta)=> {
        const action = row.insert(position, meta)
        dispatch(action)
      },
      delete: (index, meta)=> {
        const action = row.delete(index, meta)
        dispatch(action)
      },
      select: (rowIdx, row) => {
        const action = row.select(rowIdx, row)
        dispatch(action)
      },
      deselect: (rowIdx, row) => {
        const action = row.deselect(rowIdx, row)
        dispatch(action)
      }
    },
    column: {
      insert: (position, meta)=> {
        const action = column.insert(position, meta)
        dispatch(action)
      },
      delete: (key)=> {
        const action = column.delete(key)
        dispatch(action)
      }
    },
    getResource: () => {
      const action = getResource()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataEditor)
