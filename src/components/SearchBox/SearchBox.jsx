import "./SearchBox.scss";


const SearchBox = ({handleInput}) => {
  return (

<div className="search">
    <label className="search__label" htmlFor="input">NPC search</label> <br />
    <input className="search__box" onInput={handleInput} type="text" class="input" placeholder="..." />
</div>

  )
}

export default SearchBox