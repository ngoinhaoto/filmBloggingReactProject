// CategoriesSelect.js
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const CategoriesSelect = ({ selectedItems, handleCategoryChange, errors }) => {
  return (
    <div className="flex items-center mb-6">
      <Select
        label="Categories"
        placeholder="Select multiple"
        selectionMode="multiple"
        className="max-w-xs"
        variant="bordered"
        selectedKeys={selectedItems}
        onSelectionChange={handleCategoryChange}
        isInvalid={errors.categoriesBoolean}
        errorMessage={errors.categories}
      >
        <SelectItem key="horror" value="horror">
                Horror
              </SelectItem>
              <SelectItem key="fantasy" value="fantasy">
                Fantasy
              </SelectItem>
              <SelectItem key="action" value="action">
                Action
              </SelectItem>
              <SelectItem key="experimental" value="experimental">
                Experimental
              </SelectItem>
              <SelectItem key="comedy" value="comedy">
                Comedy
              </SelectItem>
              <SelectItem key="romance" value="romance">
                Romance
        </SelectItem>
      </Select>
    </div>
  );
};

export default CategoriesSelect;
