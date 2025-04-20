
import { Box, Stack, TextField, Typography, DialogContentText,DialogActions, Container, Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import CategoryCard from './CategoryCard'
import { useEffect, useState } from 'react'

function useTodos(){

    const defaultTodos = {
        "Personal":[{id:1,title:"Go to Gym",done:false}, {id:3,title:"Go buy vegetables",done:false}],
        "Work":[{id:5,title:"Go review PR",done:false}, {id:7,title:"Go buy new Mac",done:false}]}

    const [todos, setTodos] = useState(() => {
        const fromStorage = localStorage.getItem('todos')
        return fromStorage ? JSON.parse(fromStorage) : defaultTodos
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    return [todos, setTodos]
}

function Home(){

    const [todos, setTodos] = useTodos();
    const [openCategoryAdd, setopenCategoryAdd] = useState(false);
    const [openTodoAdd, setopenTodoAdd] = useState(false);
    const [newCategory, setNewCategory] = useState("")

    const handleAddCategoryOpen = () => {
        setopenCategoryAdd(true);
    }

    const handleAddCategoryClose = () => {
        setopenCategoryAdd(false);
        setNewCategory("")
    }
    
    function toggleTodo(idd){
        setTodos(prevTodos => {
            const newTodos = {}
            
            for (let category in prevTodos) {
                newTodos[category] = prevTodos[category].filter((todo, idx) => {
                    if (todo.id !== idd){
                        // return {...todo, done:!todo.done}
                        return true
                    }
                    return false
                    // return todo
                })
            }
            return newTodos

        })
    }

    function addNewTodo(category, newTodoText){
        setTodos((prevTodos) => {
            const newTodos = {}

            for (let categoryy in prevTodos){
                newTodos[categoryy] = prevTodos[categoryy]
                if (categoryy === category){
                    
                    newTodos[categoryy].push({
                        id:new Date().valueOf(),
                        title:newTodoText,
                        done:false
                    })
                }
            }
            return newTodos
        })
    }

    return <div>
        <div style={{ display:"flex", justifyContent:"center", padding:"20px" }}>
            <Typography variant='h4'>Todos App</Typography>
        </div>
        <Box component={"div"} sx={{p:2}}>
            <Stack spacing={3} direction={"row"} useFlexGap sx={{ justifyContent:"space-around", flexWrap: 'wrap' }}>
                {(Object.entries(todos).map(([category, categoryTodos]) => {
                    return <CategoryCard key={category} todos={categoryTodos} category={category} toggleTodo={toggleTodo} addTodo={addNewTodo} />
                }))}
            </Stack>
            <div style={{ display:"flex", justifyContent:"center", paddingTop:"20px" }}>
            <Button sx={{
                backgroundColor: "#B9CAE3", 
                color: "#F2F7FE"
            }}
            onClick={handleAddCategoryOpen}
            >Add Category</Button>
            <Dialog
                open={openCategoryAdd}
                onClose={handleAddCategoryClose}
                sx = {{
                    backgroundColor:"#F7F8FA"
                }}

            >
                <DialogTitle>Add Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a new Category for your tasks to be categorized easily
                    </DialogContentText>
                    <TextField
                    autoFocus
                    required
                    label="Category"
                    onChange={(e) => {setNewCategory(e.target.value)}}
                    placeholder='Personal'
                    id="new-category"
                    type='text'
                    variant='standard'
                    />
                    <DialogActions>
                        <Button onClick={handleAddCategoryClose}>Cancel</Button>
                        <Button 
                        type="button"
                        onClick={() => {
                            if (!(newCategory in todos)){
                                setTodos(prevTodos => {
                                    const newTodos = {}
                                    for (let category in todos){
                                        newTodos[category] = prevTodos[category]

                                    }
                                    newTodos[newCategory] = []
                                    return newTodos
                                })
                            }else{
                                console.log("Category already present")
                            }
                            handleAddCategoryClose()
                        }}
                        >Add</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            </div>
        </Box>
    </div>
}
    

export default Home
