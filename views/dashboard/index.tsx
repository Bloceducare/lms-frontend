import AdminDash from "@components/adminDash";
import MentorDash from "@components/mentorDash";
import StudentDash from "@components/studentDash";
import useRole from "@views/auth/state/hooks/role";

const userDash = {
  MENTOR: MentorDash,
  STUDENT: StudentDash,
  ADMIN: AdminDash,
};

const DashboardView = () => {
  const Dash = useRole(userDash);
  return (
    <>
      <Dash />
    </>
  );
};

export default DashboardView;
