import { Card, Typography, Button, DialogTitle,Dialog, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material'
import { Stack } from '@mui/material'
import Todo from './Todo'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';


function CategoryCard({todos, category, toggleTodo, addTodo}){

    const [TodoAddDialogOpen, setTodoAddDialogOpen] = useState(false)
    const [newTodo, setNewTodo] = useState("")

    const openTodoAddDialog = () => {
        setTodoAddDialogOpen(true)
    }

    const closeTodoAddDialog = () => {
        setTodoAddDialogOpen(false)
        setNewTodo("")
    }


    return <Card sx={{ width:"320px", height:"250px", maxHeight:"250px", overflowY: "scroll", backgroundColor:"#fefeff", backdropFilter: 'blur(10px)',border: '1px solid rgba(255,255,255,0.3)',boxShadow: 3, borderRadius: 3, }}>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
            <Typography sx={{padding:"20px", fontWeight: 'bold' }} variant="h5">{category}</Typography>
            <Button size='small' sx={{
                backgroundColor: "#B9CAE3", 
                color: "#F2F7FE", 
                height: "32px", 
                marginTop: "20px", 
                marginRight: "16px",
                paddingX: 2,
                textTransform: 'none',
                fontSize: "20px"
            }}
            onClick={openTodoAddDialog}
            ><AddIcon fontSize="small" /></Button>
            <Dialog
                open={TodoAddDialogOpen}
                onClose={closeTodoAddDialog}

            
            >
                <DialogTitle>New Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a new Todo in Category of <b>{category}</b>
                    </DialogContentText>
                    <TextField
                    autoFocus
                    required
                    label="Todo Text"
                    placeholder='Maths Homework'
                    id='new-todo'
                    type='text'
                    onChange={(e) => {setNewTodo(e.target.value)}}
                    />

                </DialogContent>
                <DialogActions>
                    <Button variant='standard' onClick={closeTodoAddDialog}>Cancel</Button>
                    <Button variant='standard' onClick={() => {
                        addTodo(category, newTodo)
                        closeTodoAddDialog()
                    }}>Add</Button>
                </DialogActions>

            </Dialog>
        </div>
        <Stack spacing={1} sx={{ paddingTop:"3px" }}>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} toggleFunc={toggleTodo}/>
            })}
        </Stack>
    </Card>

}

export default CategoryCard
