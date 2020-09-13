export const initialState = Object.freeze({
  make: "",
  model: "",
  mileage: "",
});

export const fields = [
  {
    field_name: "body",
    field_type: "Select",
    label: "filters.body",
  },
  {
    field_name: "make",
    field_type: "Select",
    label: "filters.make",
  },
  {
    field_name: "transmission",
    field_type: "Select",
    label: "filters.transmission",
  },
];
