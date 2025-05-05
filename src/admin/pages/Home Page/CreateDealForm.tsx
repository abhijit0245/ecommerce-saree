import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { createDeal } from '../../../Redux Toolkit/Admin/DealSlice';

const CreateDealForm = () => {
  const { homePage } = useAppSelector(store => store);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      discount: 0,
      categoryId: "", // store selected category ID
    },
    onSubmit: (values) => {
      const selectedCategory = homePage.homePageData?.dealCategories.find(
        (cat) => cat.id === Number(values.categoryId)
      );

      if (!selectedCategory) {
        alert("Invalid category selected");
        return;
      }

      dispatch(createDeal({
        discount: values.discount,
        category: selectedCategory, // ✅ send full category object (includes image)
      }));
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ maxWidth: 500, margin: "auto", padding: 3 }}
      className="space-y-6"
    >
      <Typography className='text-center' variant="h4" gutterBottom>
        Create Deal
      </Typography>

      {/* Discount Field */}
      <TextField
        fullWidth
        id="discount"
        name="discount"
        label="Discount"
        type="number"
        value={formik.values.discount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
      />

      {/* Category Selector */}
      <FormControl
  fullWidth
  error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}
  required
>
  <InputLabel id="category-label">Category</InputLabel>
  <Select
    labelId="category-label"
    id="categoryId"
    name="categoryId"
    value={formik.values.categoryId}
    onChange={formik.handleChange}
    label="Category"
  >
    {homePage.homePageData?.dealCategories
      .filter((cat) => cat.section === "DEALS") // ✅ show only DEALS
      .map((item) => (
        <MenuItem key={item.categoryId} value={item.categoryId}>
          {item.name}
        </MenuItem>
      ))}
  </Select>
  {formik.touched.categoryId && formik.errors.categoryId && (
    <FormHelperText>{formik.errors.categoryId}</FormHelperText>
  )}
</FormControl>


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

export default CreateDealForm;
