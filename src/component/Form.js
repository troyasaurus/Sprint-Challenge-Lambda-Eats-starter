import React, { useState } from 'react';
import {Card, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button} from 'reactstrap';
import Axios from 'axios';
import * as yup from 'yup'

const OrderForm = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState)
    const [formData, setFormData] = useState({
        name: '',
        number: 0, 
        sauce: '', 
        pepporoni: false,
        chicken: false,
        spinach: false,
        anchovies: false, 
        mushrooms: false, 
        pineapple: false, 
        special: ''

    });
    const schema = yup.object().shape({
        name: yup.string().required(),
        number: yup.number().required().positive().integer().min(1),
        sauce: yup.string().required(),
        pepporoni: yup.boolean(),
        chicken: yup.boolean(),
        special: yup.boolean(),
        anchovies: yup.boolean(),
        mushrooms: yup.boolean(),
        pineapple: yup.boolean(),
        

    })
    const submit = () => {
        schema.validate(formData.then(() => {
            Axios.post('https://reqres.in/api/users', formData.then ((res) => {
                console.log('posted data', res.data)
            }))
        }))
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleToppings = (e) => {
        setFormData({...formData, [e.target.name]: e.target.checked})
    }





    return(
        <>
        <Card color ='info'>
        <h2 style = {{color: 'white', margin: '5%'}}>
            Customize Your Pizza
        </h2>
        </Card>
        <Form data-cy='submit' onSubmit={(e) => {
            e.preventDefault()
            console.log(formData);
        }}style={{margin: '5%'}}>
        <FormGroup>
            <legend>Name</legend>
            <Input type='name' name='name' data-cy='name' value={formData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>{formData.number === 0? 'Size of Pizza' : formData.number}</DropdownToggle>
                <DropdownMenu>
                    <div onClick={() => {
                        toggle();
                        setFormData({...formData,number: 0})
                    }}>
                    Small
                    </div>
                    <div onClick={() => {
                        toggle();
                        setFormData({...formData,number: 1})
                    }}>Medium</div>
                    <div onClick={() => {
                        toggle();
                        setFormData({...formData,number: 2})
                    }}>Large</div>
                    
                </DropdownMenu>
                
            </Dropdown>
        </FormGroup>
        <FormGroup tag='fieldset'>
            <legend>Sauce</legend>
            <FormGroup check>
                <Label check>
                    <Input type='radio' name='suace' data-cy='checkbox1' value='Marinara' onChange={handleChange}/>
                    Marinara
                </Label>
            </FormGroup>

            <FormGroup check>
                <Label check>
                    <Input type='radio' name='suace'data-cy='checkbox2' value='Extra Cheesey'onChange={handleChange}/>
                    Extra Cheesey
                </Label>
            </FormGroup><FormGroup check>
                <Label check>
                    <Input type='radio' name='suace'data-cy='checkbox3' value='Alfredo'onChange={handleChange}/>
                    Alfredo
                </Label>
            </FormGroup>


            <FormGroup tag='fieldset'>
            <legend>Toppings</legend>
            <FormGroup check>
                <Label check>
                    <Input type='checkbox' name='pepporoni' checked={formData.pepporoni} onChange={handleToppings}/>
                    Pepporoni
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type='checkbox' name='chicken' checked={formData.chicken} onChange={handleToppings}/>
                    Grilled Chicken
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type='checkbox' name='spinach' checked={formData.spinach} onChange={handleToppings}/>
                    Spinach
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type='checkbox' name='anchovies' checked={formData.anchovies} onChange={handleToppings}/>
                    Anchovies
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type='checkbox' name='mushrooms' checked={formData.mushrooms} onChange={handleToppings}/>
                    Mushrooms
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type='checkbox' name='pineapple' checked={formData.pineapple} onChange={handleToppings}/>
                    Pineapple
                </Label>
            </FormGroup>
            

            </FormGroup>
        </FormGroup>
        <FormGroup>
            <legend>Special Instructions</legend>
            <Input type='textarea' name='special' value={formData.special} onChange={handleChange}/>
        </FormGroup>
        <Button>Submit</Button>
        </Form>
        </>
    )
}
export default OrderForm;