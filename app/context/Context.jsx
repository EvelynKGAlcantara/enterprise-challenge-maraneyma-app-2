import React, { createContext, useContext, useState } from "react";

const StudentsContext = createContext();

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [championships, setChampionships] = useState([]);
  const [championshipType, setChampioshipType] = useState();
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState();
  const [selectChampionship, setSelectChampionship] = useState();
  const [selectedMatch, setSelectedMatch] = useState();

  const [matches, setMatches] = useState({
    faseA: [
      {
        id: 1,
        team1: "Equipe 1",
        team2: "Equipe 2",
        score1: 3,
        score2: 5,
        status: "finished",
        date: "02/10/2025",
        hour: "15:00",
        winner: "Equipe 2",
      },
      {
        id: 2,
        team1: "Equipe 1",
        team2: "Equipe 2",
        score1: 8,
        score2: 2,
        status: "finished",
        date: "02/10/2025",
        hour: "15:00",
        winner: "Equipe 1",
      },
    ],
    faseB: [
      {
        id: 3,
        team1: "Equipe 1",
        team2: "Equipe 2",
        score1: 0,
        score2: 0,
        status: "waiting",
      },
      {
        id: 4,
        team1: "Equipe 1",
        team2: "Equipe 2",
        score1: 0,
        score2: 0,
        status: "waiting",
      },
    ],
    final: [
      {
        id: 5,
        team1: "Equipe 1",
        team2: "Equipe 2",
        score1: 0,
        score2: 0,
        status: "waiting",
      },
      {
        id: 6,
        team1: "Equipe 1",
        team2: "Equipe 2",
        score1: 0,
        score2: 0,
        status: "waiting",
      },
    ],
  });

  const updateMatchStatus = (id, newStatus, score1, score2) => {
    setMatches((prevMatches) => {
      // percorre as fases (faseA, faseB, final)
      const updated = Object.keys(prevMatches).reduce((acc, fase) => {
        acc[fase] = prevMatches[fase].map((match) =>
          match.id === id
            ? { ...match, status: newStatus, score1, score2 }
            : match
        );
        return acc;
      }, {});
      return updated;
    });
  };

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const addTeams = (team) => {
    setTeams((prev) => [...prev, { id: prev?.lenght + 1, ...team }]);
  };
  const removeTeams = (id) => {
    setTeams((prev) => prev.filter((t) => t.id !== id));
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

  const startSelectedChampionship = () => {
    if (!selectChampionship) return;
    setChampionships((prev) =>
      prev.map((c) =>
        c.id === selectChampionship && c.status === "waiting"
          ? { ...c, status: "inProgress" }
          : c
      )
    );
  };

  const finishedSelectedChampionship = () => {
    if (!selectChampionship) return;
    setChampionships((prev) =>
      prev.map((c) =>
        c.id === selectChampionship && c.status === "inProgress"
          ? { ...c, status: "finished" }
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
        startSelectedChampionship,
        finishedSelectedChampionship,
        addTeams,
        setTeamName,
        removeTeams,
        teamName,
        teams,
        setChampionships,
        selectChampionship,
        setSelectChampionship,
        selectedMatch,
        setSelectedMatch,
        matches,
        setMatches,
        updateMatchStatus,
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
