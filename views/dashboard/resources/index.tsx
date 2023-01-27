import useRole from "@views/auth/state/hooks/role";
import MentorResources from "./mentor";
import StudentResources from "./student";

const userResources = {
  MENTOR: MentorResources,
  STUDENT: StudentResources,
  ADMIN: MentorResources,
};

export const ResourcesView = () => {
  const Resources = useRole(userResources);
  return (
    <>
      <Resources />
    </>
  );
};

export default ResourcesView;
