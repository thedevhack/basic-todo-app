import { Box, Radio, Typography, Card, Checkbox, FormControlLabel } from '@mui/material'
import { todosCategoriesAtom } from '../recoil/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'


function Todo({category, idd1, title}){
    const setTodos = useSetRecoilState(todosCategoriesAtom(category))
    // var todo = null;
    // for (let i=0;i<todos.length;i++){
    //   if (todos[i].id === idd1){
    //     todo = todos[i]
    //   }
    // }
    // function toggleTodo(todo){
    //     todo?.done = !(todo?.done) || false
    // }

  const toggleTodo = (idd) => {
      setTodos(prevTodos => {
          const newTodos = []
          prevTodos.map(todo => {
              todo.id !== idd ? newTodos.push(todo) : console.log("Removed todo")
          })
          return newTodos
      })
  }

  // const toggleTodo = (idd1) => {
  //   console.log(idd1)
  // }

  // const setTodos = 

    return <FormControlLabel
    sx = {{
        paddingLeft:1
    }}
    control={
      <Checkbox onChange={() => {toggleTodo(idd1)}} />
    }
    label={
      <Typography sx={{
        textDecoration: 'none',
        color: 'black',
        fontWeight: 500,
      }}>
        {title}
      </Typography>
    }
  />
}

export default Todo
