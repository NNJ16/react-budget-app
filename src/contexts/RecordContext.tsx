import { createContext, ReactNode, useState, useEffect } from "react";
import API from "../components/api";

type RecordContextProps = {
  children: ReactNode;
};

type RecordElement = {
  id: string;
  label: string;
  amount: number;
  type: string;
  dateCreated: Date;
  category: string;
};

type RecordContextType = {
  records: RecordElement[];
  setRecord: (Record: RecordElement[]) => void;
  addRecordElement: (element: RecordElement) => void;
  editRecordElement: (element: RecordElement) => void;
  deleteRecordElement: (id: string) => void;
};

const RecordContext = createContext<RecordContextType>({
  records: [],
  setRecord: (Record: RecordElement[]) => {},
  addRecordElement: (element: RecordElement) => {},
  editRecordElement: (element: RecordElement) => {},
  deleteRecordElement: (id: string) => {},
});

export function RecordContextProvider({ children }: RecordContextProps) {
  const [record, setRecord] = useState<RecordElement[]>([]);

  function setRecordHandler(record: RecordElement[]) {
    setRecord(record);
  }

  useEffect(() => {
    const fetchRecords = async () => {
      API.get("records")
        .then((res) => {
          if (res.data.data) {
            setRecord(res.data.data);
          }
        })
        .catch((err) => {});
    };
    fetchRecords();
  }, []);

  // takes in a RecordElement item and adds it to the Record
  function addRecordElementHandler(element: RecordElement) {
    setRecord((prev: RecordElement[]) => {
      return [
        {
          label: element.label,
          amount: element.amount,
          type: element.type,
          id: element.id,
          dateCreated: element.dateCreated,
          category: element.category,
        },
        ...prev,
      ];
    });
    API.post("records", element)
      .then((res) => {
        if (res.data) {
        }
      })
      .catch((err) => {});
  }

  // takes in an ID and deletes the Record element with that ID
  function deleteRecordElementHandler(id: string) {
    setRecord((prev) => {
      return prev.filter((h) => h.id !== id);
    });
    API.delete(`records/${id}`)
      .then((res) => {
        if (res.data) {
        }
      })
      .catch((err) => {});
  }

  function editRecordElementHandler(element: RecordElement) {
    setRecord((prev) => {
      return prev.filter((h) => h.id !== element.id);
    });
    setRecord((prev: RecordElement[]) => {
        return [
          {
            label: element.label,
            amount: element.amount,
            type: element.type,
            id: element.id,
            dateCreated: element.dateCreated,
            category: element.category,
          },
          ...prev,
        ];
      });
    API.patch("records", element)
      .then((res) => {
        if (res.data) {
        }
      })
      .catch((err) => {});
  }


  const context = {
    records: record,
    setRecord: setRecordHandler,
    addRecordElement: addRecordElementHandler,
    editRecordElement: editRecordElementHandler,
    deleteRecordElement: deleteRecordElementHandler,
  };

  return (
    <RecordContext.Provider value={context}>{children}</RecordContext.Provider>
  );
}

export default RecordContext;
