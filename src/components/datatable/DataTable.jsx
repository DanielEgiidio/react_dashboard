import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Funções",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">Ver</div>
            <div className="deleteButton">Deletar</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
