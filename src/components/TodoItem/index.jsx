import React, { useState } from 'react'

import { Input, Button } from 'antd'
import { STATUS } from '../../config/status'

const ToDoItem = (props) => {

    const [todoItem, setTodoItem] = useState({})

    const { onSubmit } = props

    const handleSubmit = () => {
        console.log(todoItem);
        onSubmit && onSubmit(todoItem)
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setTodoItem({
            id: Math.random(),
            content: event.target.value,
            status: STATUS.IS_CREATE
        })
        handleSubmit()
    }

    return (
        <div className='todo-item-input'>
            <Input value={todoItem.content} onPressEnter={handleSubmit} onChange={handleChange} />
            <Button size='large' type='primary' onClick={handleSubmit}>提交</Button>
        </div>
    )
}

export default ToDoItem