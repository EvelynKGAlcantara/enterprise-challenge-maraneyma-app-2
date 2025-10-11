import React, { createContext, useContext, useState } from "react";

const StudentsContext = createContext();

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [championships, setChampionships] = useState([]);
  const [championshipType, setChampioshipType] = useState();

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const addChampionship = (data) => {
    setChampionships((prev) => [
      ...prev,
      { id: prev?.length + 1, status: "waiting", ...data },
    ]);
  };

  const startChampionship = (id) => {
    setChampionships((prev) =>
      prev.map((c) =>
        c.id === id && c.status === "waiting"
          ? { ...c, status: "inProgress" }
          : c
      )
    );
  };

  const clearStudents = () => setStudents([]);

  return (
    <StudentsContext.Provider
      value={{
        championshipType,
        students,
        addStudent,
        removeStudent,
        clearStudents,
        addChampionship,
        championships,
        startChampionship,
        handlers: {
          setChampioshipType,
        },
      }}
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
