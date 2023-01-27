import useRole from "@views/auth/state/hooks/role";
import MentorRecordings from "./mentor";
import StudentRecordings from "./student";

const userRecordings = {
  MENTOR: MentorRecordings,
  STUDENT: StudentRecordings,
  ADMIN: MentorRecordings,
};

const RecordingsView = () => {
  const CurrentView = useRole(userRecordings);

  return (
    <>
      <CurrentView />
    </>
  );
};

export default RecordingsView;
