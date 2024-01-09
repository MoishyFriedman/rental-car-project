import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function Table() {
  // const cars = [{""}];
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "license_plate",
      headerName: "license_plate",
      flex: 3,
    },
    {
      field: "seats_number",
      headerName: "seats_number",
      flex: 3,
    },
    {
      field: "description",
      headerName: "description",
      flex: 2,
    },
    {
      field: "manufacturer_model",
      headerName: "manufacturer_model",
      flex: 3,
    },
    {
      field: "color",
      headerName: "color",
      flex: 1,
    },
    {
      field: "year",
      headerName: "year",
      flex: 1,
    },
    {
      field: "location",
      headerName: "location",
      flex: 2,
    },
    {
      field: "availability",
      headerName: "availability",
      flex: 2,
    },
  ];

  return (
    <Box sx={{ margin: "20px", width: "80vh", height: "50vw" }}>
      <Box
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#424242",
            color: "#FAFAFA",
          },
          "& .MuiDataGrid-columnHeaders .MuiDataGrid-sortIcon": {
            color: "#FAFAFA",
          },
          "& .MuiDataGrid-columnHeaders .MuiIconButton-root .MuiSvgIcon-root": {
            color: "#FAFAFA",
          },
        }}
      >
        <DataGrid getRowId={(row: { id: string }) => row.id} rows={[]} columns={columns} />
      </Box>
    </Box>
  );
}
