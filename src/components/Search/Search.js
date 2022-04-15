import { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input'
import './Search.css';

export default function Search({ onSearch, onSelectCity, results }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (results) {
      setShowSuggestions(true);
    }
  }, [results])

  const selectCity = (selected) => {
    onSelectCity(selected);
    setSearchString(`${selected.name}, ${selected.country}`);
    setShowSuggestions(false);
  }

  const renderSuggestionsPopup = (results) => {
    if (!results.length) {
      return (
        <div className='suggestions_wrapper'>No results found</div>
      )
    }
    return (
      <div className='suggestions_wrapper'>
        {results && results.map((result, index) => {
          return <div key={index} onClick={() => selectCity(result)}>{result.name}, {result.country}</div>
        })}
      </div>
    )
  }

  return (
    <>
      <div className='search_wrapper'>
        <DebounceInput
          className=''
          value={searchString}
          placeholder='Enter city'
          minLength={1}
          debounceTimeout={500}
          onChange={event => onSearch(event.target.value)}
        />
        {showSuggestions && renderSuggestionsPopup(results)}
      </div>
    </>
  )
};