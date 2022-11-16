const Dropdown = ()=>{
  return (
    <div className="dropdownCon">
      <select>
      <option >Filter</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Cottage">Cottage</option>
        <option value="Castle">Castle</option>
        <option value="Fantasy city">Fantasy city</option>
        <option value="Beach">Beach</option>
        <option value="Cabins">Cabins</option>
        <option value="Off grid">Off grid</option>
        <option value="Farm">Farm</option>
      </select>
    </div>
  )
}
export default Dropdown