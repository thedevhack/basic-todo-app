import { Box, Radio, Typography, Card, Checkbox, FormControlLabel } from '@mui/material'



function Todo({todo, toggleFunc}){

    // function toggleTodo(todo){
    //     todo?.done = !(todo?.done) || false
    // }
    return <FormControlLabel
    sx = {{
        paddingLeft:1
    }}
    control={
      <Checkbox checked={todo.done} onChange={() => {toggleFunc(todo.id)}} />
    }
    label={
      <Typography sx={{
        textDecoration: todo.done ? 'line-through' : 'none',
        color: todo.done ? 'gray' : 'black',
        fontWeight: 500,
      }}>
        {todo.title}
      </Typography>
    }
  />
}

export default Todo
