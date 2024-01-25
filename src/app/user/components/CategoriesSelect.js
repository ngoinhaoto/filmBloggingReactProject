// CategoriesSelect.js
"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

import Category from "../../../components/Category";

const CategoriesSelect = ({ selectedItems, handleCategoryChange, errors }) => {
  const categories = Category();
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
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default CategoriesSelect;
