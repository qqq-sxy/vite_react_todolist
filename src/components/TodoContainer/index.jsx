import React from 'react'
import { List } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { STATUS } from '../../config/status'


const ToDoContainer = (props) => {

    const { todos = [], onOperate, filterStatus } = props;

    const handleOperate = (operate, item) => {
        switch(operate) {
            case 'is-delete':
                onOperate && onOperate({
                    ...item,
                    status: STATUS.IS_DELETE
                })
                break;
            case 'is-done':
                onOperate && onOperate({
                    ...item,
                    status: item.status === STATUS.IS_DONE? STATUS.IS_CREATE : STATUS.IS_DONE
                })
                break;
            default:
                break;
        }
    }

    const showTodos = todos.filter(todo => {
        return todo.id && (todo.status !== STATUS.IS_DELETE) && filterStatus.indexOf(todo.status.toString()) > -1
    }) 

    return (
        <div className='todo-container'>
            <List
                dataSource={showTodos}
                renderItem={
                    todo => (
                        <List.Item className={todo.status === STATUS.IS_DONE? 'todo-container-list-done' : 'todo-container-list'}>
                            {todo.content}
                            <div className='todo-item-operat'>
                                <CloseOutlined onClick={() => handleOperate("is-delete",todo)}/>
                                <CheckOutlined onClick={() => handleOperate("is-done",todo)}/>
                            </div>
                        </List.Item>
                    )
                }
            />
        </div>
    )
}

export default ToDoContainer