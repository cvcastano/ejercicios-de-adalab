

function AddFruit(props) {

    return (
        <>
            <input
                value={props.value}
                onChange={props.handleInput} type="text"
            />
            <button onClick={props.addFruit}>Add</button>
        </>
    )
}

export default AddFruit