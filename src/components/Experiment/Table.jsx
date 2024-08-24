import { useState, useCallback, useEffect, useRef } from "react";
import "./Table.scss";
import TableContent from "./TableContent";
import Modal from "../common/Modal/Modal";
import TitleTable from "../common/TitleTable/TitleTable";

const createHeaders = (headers) => {
  return headers.map((item) => ({
    name: item.name,
    sortParam: item.param,
    ref: useRef(),
  }));
};

const Table = ({ headers, minCellWidth, users, setUsers }) => {
  const [user, setUser] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setUser({});
    setModalIsOpen(false);
  }

  const [tableHeight, setTableHeight] = useState("auto");
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);
  const columns = createHeaders(headers);

  useEffect(() => {
    setTableHeight(tableElement.current.offsetHeight);
  }, []);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e) => {
      const gridColumns = columns.map((col, i) => {
        if (i === activeIndex) {
          const width = e.clientX - col.ref.current.offsetLeft;

          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col.ref.current.offsetWidth}px`;
      });

      tableElement.current.style.gridTemplateColumns = `${gridColumns.join(
        " "
      )}`;
    },
    [activeIndex, columns, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  const resetTableCells = () => {
    tableElement.current.style.gridTemplateColumns = "";
  };

  return (
    <>
      {users.length > 0 ? (
        <div className="container">
          <div className="table-wrapper">
            <table className="resizeable-table" ref={tableElement}>
              <thead>
                <tr>
                  {columns.map((item, index) => (
                    <TitleTable
                      key={index}
                      item={item}
                      users={users}
                      setUsers={setUsers}
                      index={index}
                      tableHeight={tableHeight}
                      mouseDown={mouseDown}
                      activeIndex={activeIndex}
                    />
                  ))}
                </tr>
              </thead>
              <TableContent
                users={users}
                setUser={setUser}
                setModalIsOpen={setModalIsOpen}
              />
            </table>
          </div>
          <button className="button" onClick={resetTableCells}>
            Reset
          </button>
          <Modal
            modalIsOpen={modalIsOpen}
            user={user}
            closeModal={closeModal}
          />
        </div>
      ) : (
        <div className="table__messageWrap">
          <p className="table__message">Nothing yet</p>
        </div>
      )}
    </>
  );
};

export default Table;
