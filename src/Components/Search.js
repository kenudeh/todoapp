



const Search = ({search, setSearch}) => {



    return (
        <main>
            <form 
                className="search" 
                onSubmit={(e)=>e.preventDefualt()}
            >
                <label htmlFor="search">Search</label>
                <input
                    id="search"
                    type="text"
                    role="searchbox"
                    placeholder="search items"
                    input={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </main>
    );
}
 
export default Search;