import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import StudentCard from "../../components/StudentCard";

type Student = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
};

const initialStudents: Student[] = [
  {
    id: "1",
    name: "Ana Cruz",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/150?img=1",
    flagged: false,
  },
  {
    id: "2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/150?img=2",
    flagged: false,
  },
  {
    id: "3",
    name: "Cid Ramos",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/150?img=3",
    flagged: false,
  },
  {
    id: "4",
    name: "Dex Alonzo",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/150?img=4",
    flagged: false,
  },
  {
    id: "5",
    name: "Eli Tan",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/150?img=5",
    flagged: false,
  },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase()),
  );

  const toggleFlag = (id: string) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>

      <Text style={styles.subtitle}>
        Search and manage student advising records
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search students..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              photoUrl={student.photoUrl}
              flagged={student.flagged}
              onToggleFlag={toggleFlag}
            />
          ))
        ) : (
          <Text style={styles.emptyText}>No students found.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    marginBottom: 20,
    textAlign: "center",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    color: "#777",
    marginTop: 30,
    fontSize: 16,
  },
});
