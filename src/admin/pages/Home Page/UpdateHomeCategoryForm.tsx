import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Box,
  FormHelperText,
} from "@mui/material";

import { mainCategory } from "../../../data/category/mainCategory";
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo"; // Saree types
import { useAppDispatch } from "../../../Redux Toolkit/Store";
import { updateHomeCategory } from "../../../Redux Toolkit/Admin/AdminSlice";
import { HomeCategory } from "../../../types/homeDataTypes";

// ✅ Validation schema
const validationSchema = Yup.object({
  image: Yup.string().required("Image is required"),
  category: Yup.string().required("Category is required"),
});

const categoryTwo: { [key: string]: any[] } = {
  women: [
    {
      name: "Udipi Saree Empower",
      categoryId: "women_saree",
      parentCategoryId: "women",
      level: 2,
    },
  ],
};

const categoryThree: { [key: string]: any[] } = {
  women: womenLevelTwo, // Banarasi, Kanjeevaram, etc.
};

const UpdateHomeCategoryForm = ({
  category,
  handleClose,
}: {
  category: HomeCategory | undefined;
  handleClose: () => void;
}) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      image: "",
      category: "",
      category2: "",
      category3: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values, category);
      if (category?.id) {
        dispatch(
          updateHomeCategory({
            id: category.id,
            data: { image: values.image, categoryId: values.category3 },
          })
        );
      }
      handleClose();
    },
  });

  const childCategory = (category: any[], parentCategoryId: string) => {
    return category.filter((child) => child.parentCategoryId === parentCategoryId);
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ maxWidth: 500, margin: "auto", padding: 3 }}
      className="space-y-6"
    >
      <Typography variant="h4" gutterBottom>
        Update Category
      </Typography>

      {/* Image Field */}
      <TextField
        fullWidth
        id="image"
        name="image"
        label="Image URL"
        value={formik.values.image}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image && formik.errors.image}
      />

      {/* Category 1 */}
      <FormControl
        fullWidth
        error={formik.touched.category && Boolean(formik.errors.category)}
        required
      >
        <InputLabel id="category1-label">Category</InputLabel>
        <Select
          labelId="category1-label"
          id="category1"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          label="Category"
        >
          {mainCategory.map((item) => (
            <MenuItem key={item.categoryId} value={item.categoryId}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.category && formik.errors.category && (
          <FormHelperText>{formik.errors.category}</FormHelperText>
        )}
      </FormControl>

      {/* Category 2 (Saree) */}
      {formik.values.category && (
        <FormControl fullWidth required>
          <InputLabel id="category2-label">Second Category</InputLabel>
          <Select
            labelId="category2-label"
            id="category2"
            name="category2"
            value={formik.values.category2}
            onChange={formik.handleChange}
            label="Second Category"
          >
            {categoryTwo[formik.values.category]?.map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryId}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Category 3 (Saree Types) */}
      {formik.values.category2 && (
        <FormControl fullWidth required>
          <InputLabel id="category3-label">Third Category</InputLabel>
          <Select
            labelId="category3-label"
            id="category3"
            name="category3"
            value={formik.values.category3}
            onChange={formik.handleChange}
            label="Third Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {childCategory(
              categoryThree[formik.values.category],
              formik.values.category2
            )?.map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryId}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Submit Button */}
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ py: ".9rem" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default UpdateHomeCategoryForm;
