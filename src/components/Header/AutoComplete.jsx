import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './AutoComplete.css'
import { Cities } from "./Cities";
function AutoComplete() {

    const items = [
        {
          id: 0,
          name: 'Faridabad'
        },
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'Basic'
        },
        {
          id: 3,
          name: 'PHP'
        },
        {
          id: 4,
          name: 'Java'
        }
      ]
    
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return item
        // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
      }

      

    return (
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={Cities}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            showIcon={false}
            maxResults={10}
            autoFocus={true}
            
            inputSearchString="Faridabad"
            placeholder="Enter Location "
            styling={{
                boxShadow: "none",
                border: "none",
                height: "0px",
                width: "0px",
                fontFamily: "Open Sans",
                zIndex: 2,
                color:"#3c4852",
                
            }}
          />
        </div>
    )
}

export default AutoComplete
