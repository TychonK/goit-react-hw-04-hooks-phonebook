export function Filter({handleSearch, filter}) {
    const filterNew = (e) => {
        handleSearch(e)
    }

    return (
        <input
            type="search"
            name="nameSearch"
            value={filter}
            placeholder="Enter name"
            onChange={filterNew}
        />
    )
}