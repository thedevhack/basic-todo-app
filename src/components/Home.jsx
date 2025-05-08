
import { Box, Stack, TextField, Typography, DialogContentText,DialogActions, Container, Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import CategoryCard from './CategoryCard'
import { useEffect, useState } from 'react'
import { atom, atomFamily, useRecoilValue, useRecoilState } from 'recoil'
import { todosCategoriesAtom, categoriesAtom }  from '../recoil/atoms'


function Home(){
    const [openCategoryAdd, setopenCategoryAdd] = useState(false);
    const [newCategory, setNewCategory] = useState("")


    const handleAddCategoryOpen = () => {
        setopenCategoryAdd(true);
    }

    const handleAddCategoryClose = () => {
        setopenCategoryAdd(false);
        setNewCategory("")
    }
    
    const [categories, setCategories] = useRecoilState(categoriesAtom);

    return <div>
        <div style={{ display:"flex", justifyContent:"center", padding:"20px" }}>
            <Typography variant='h4'>Todos App</Typography>
        </div>
        <Box component={"div"} sx={{p:2}}>
            <Stack spacing={3} direction={"row"} useFlexGap sx={{ justifyContent:"space-around", flexWrap: 'wrap' }}>
                {(categories.map((category) => {
                    return <CategoryCard key={category} category={category} />
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
                            if (!(newCategory in categories)){
                                setCategories(prevCategories => {
                                    const newCategories = []
                                    newCategories.push(...prevCategories, newCategory)
                                    return newCategories
                                })
                            }else{
                                console.log("Category already present")
                            }
                            console.log(categories)
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
