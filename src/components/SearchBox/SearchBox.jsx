import "./SearchBox.scss";


const SearchBox = ({handleInput}) => {
  return (

<div>
    <label htmlFor="input">NPC search...</label>
    <input onInput={handleInput} type="text" class="input" placeholder="NPC search..." />
</div>

  )
}

export default SearchBox