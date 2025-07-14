
const Select = () => {
    const style = {
        width: '20%',
        height: '40px',
    }
    const items = ['Admin', 'Super Admin', 'Author', 'Editor']
    return(
        <div>
            <select style={style}>
                {
                    items.map((item, i) => {
                        return <option value={i.toString()}>{item}</option>
                    })
                }
            </select>
        </div>
    );
}


export default Select;
