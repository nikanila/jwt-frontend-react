import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import {
  fetchAllRoles,
  deleteRole,
} from "../../services/roleService";
import { toast } from "react-toastify";
import ModalRole from "./ModalRole";

const TableRole = forwardRef((props, ref) => {
  const [listRoles, setListRoles] = useState([]);

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataModalRole, setDataModalRole] = useState(null);

  useEffect(() => {
    getAllRoles();
  }, []);

  useImperativeHandle(ref, () => ({
    fetchListRoleAgain() {
      getAllRoles();
    },
  }));

  const handleEditRole = (role) => {
    setDataModalRole(role);
    setIsShowModalEdit(true);
  };

  const getAllRoles = async () => {
    let data = await fetchAllRoles();
    if (data && data.EC === 0) {
      setListRoles(data.DT);
    }
  };

  const handleDeleteRole = async (role) => {
    let data = await deleteRole(role);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      await getAllRoles();
    }
  };

  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">URL</th>
            <th scope="col">Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listRoles && listRoles.length > 0 ? (
            <>
              {listRoles.map((item, index) => {
                return (
                  <tr key={`row-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.url}</td>
                    <td>{item.description}</td>

                    <td>
                      <span
                        title="Edit"
                        className="edit me-2"
                        onClick={() => handleEditRole(item)}
                      >
                        <i className="fa fa-pencil"></i>
                      </span>
                      <span
                        title="Delete"
                        className="delete"
                        onClick={() => handleDeleteRole(item)}
                      >
                        <i className="fa fa-trash-o"></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <>
              <tr>
                <td colSpan={4} align="center">
                  Not found roles
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <ModalRole
        show={isShowModalEdit}
        onHide={async () => {
          setIsShowModalEdit(false);
          await getAllRoles(); 
        }}
        dataModalRole={dataModalRole}
      />
    </>
  );
});

export default TableRole;
