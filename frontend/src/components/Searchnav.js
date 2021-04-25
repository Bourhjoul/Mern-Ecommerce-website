import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { MdSearch } from 'react-icons/md'

const Searchnav = ({history}) => {
    const [keyword, setkeyword] = useState('')

    const Handlesearch = (e) => {
        if(keyword.trim() && e.which == 13){
            history.push(`/search/${keyword}`)
        }else{
        }
    }
    return (
        <InputGroup >
        <Input value = {keyword} onChange = {e=> setkeyword(e.target.value)} bgColor='white' placeholder='Search here ...'  onKeyPress = {Handlesearch} ></Input>
        <InputRightElement children={ <MdSearch/>} />
        </InputGroup>


                          
        
        
    

    )
}

export default Searchnav
