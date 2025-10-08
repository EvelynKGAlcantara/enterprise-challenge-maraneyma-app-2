import React, { createContext, useContext, useState } from "react";

const StudentsContext = createContext();

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const clearStudents = () => setStudents([]);

  return (
    <StudentsContext.Provider
      value={{ students, addStudent, removeStudent, clearStudents }}
    >
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error("useStudents deve ser usado dentro de um StudentsProvider");
  }
  return context;
}
