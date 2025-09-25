import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { updateCurrentRole } from "../../services/roleService";
import { toast } from "react-toastify";
import _ from "lodash";

const ModalRole = (props) => {
  const { show, onHide, dataModalRole } = props;

  const defaultRoleData = {
    id: "",
    url: "",
    description: "",
  };

  const [roleData, setRoleData] = useState(defaultRoleData);

  useEffect(() => {
    if (dataModalRole) {
      setRoleData(dataModalRole);
    }
  }, [dataModalRole]);

  const handleOnChangeInput = (value, name) => {
    let _roleData = _.cloneDeep(roleData);
    _roleData[name] = value;
    setRoleData(_roleData);
  };

  const handleUpdateRole = async () => {
    let res = await updateCurrentRole(roleData);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      onHide(); // đóng modal
    } else {
      toast.error(res.EM);
    }
  };

  const handleClose = () => {
    onHide();
    setRoleData(defaultRoleData);
  };

  return (
    <Modal show={show} onHide={() => handleClose()} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-12 form-group">
            <label>URL:</label>
            <input
              className="form-control"
              type="text"
              value={roleData.url}
              onChange={(e) => handleOnChangeInput(e.target.value, "url")}
            />
          </div>
          <div className="col-12 form-group mt-3">
            <label>Description:</label>
            <input
              className="form-control"
              type="text"
              value={roleData.description}
              onChange={(e) =>
                handleOnChangeInput(e.target.value, "description")
              }
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleUpdateRole()}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRole;
