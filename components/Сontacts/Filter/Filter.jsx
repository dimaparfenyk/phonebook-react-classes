import { FilterStyled, Label } from "./Filter.styled";

const Filter = ({ onChange }) => {
  return (
    <>
      <Label>
        Find contacts by name
        <FilterStyled type="text" onChange={onChange} />
      </Label>
    </>
  );
};

export default Filter;
