const Dropdown = ({setDropDown})=>{
  return (
    <div className="dropdownCon">
      <select>
        <options value="Restaurant">Restaurant</options>
        <options value="Cottage">Cottage</options>
        <options value="Castle">Castle</options>
        <options value="Fantasy city">Fantasy city</options>
        <options value="Beach">Beach</options>
        <options value="Cabins">Cabins</options>
        <options value="Off grid">Off grid</options>
        <options value="Farm">Farm</options>
      </select>
    </div>
  )
}
export default Dropdown