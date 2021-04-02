import React from 'react'
import {NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,FormControl,FormLabel} from "@chakra-ui/react"
    const Filter = ({classac}) => {
        
    return (
        <div className = {`filterarea ${classac}`}>
        <div className = 'sortbydiv'>
            <h1> Sort By</h1>
            <ul>
                <li className = 'lined'>Default</li>
                <li className = 'lined'>Rating</li>
                <li className = 'lined'>Date</li>
                <li className = 'lined'>Low to high price</li>
                <li className = 'lined'>high to low price</li>
            </ul> 
        </div>
        <div className = 'pricediv'>
            <h1> Price</h1>
            <FormControl id="email">
                 <FormLabel>From :</FormLabel>
                <NumberInput bg = 'white' borderRadius="md" borderTopRadius="md" borderTopLeftRadius="md">
                 <NumberInputField />
                 <NumberInputStepper>
                 <NumberIncrementStepper />
                 <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
            </FormControl>
            <FormControl id="email">
                 <FormLabel>To :</FormLabel>
                <NumberInput bg = 'white' borderRadius="md" borderTopRadius="md" borderTopLeftRadius="md">
                 <NumberInputField />
                 <NumberInputStepper>
                 <NumberIncrementStepper />
                 <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
            </FormControl>
        </div>
        <div className ='colorsdiv'>
             <h1> Color</h1>
             <div className="col" style = {{backgroundColor : 'black'}}></div>BLACK<br/>
             <div className="col" style = {{backgroundColor : 'white'}}></div>WHITE<br/>
             <div className="col" style = {{backgroundColor : 'red'}}></div>RED<br/>
             <div className="col" style = {{backgroundColor : 'blue'}}></div>BLUE<br/>
             <div className="col" style = {{backgroundColor : 'grey'}}></div>GRY<br/>
 
        </div>
 
    </div>
    )
}
 
export default Filter