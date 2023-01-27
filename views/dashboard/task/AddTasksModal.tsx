import { Modal } from "flowbite-react";
import Input from "@components/commons/input";
import Button from "@components/commons/button";
import { useForm } from "react-hook-form";
import { createTasksSchema, validationOpt } from "schema";
import Select from "@components/commons/select";
import {
  useCreateTaskMutation,
  useGetCohortsQuery,
  useGetTracksQuery,
  useGetUsersQuery,
  useGetGroupsQuery,
} from "@services/api";
import { toast } from "react-toastify";
import { IModal } from "interface";
import TextArea from "@components/commons/textarea";
import { trimForSelect } from "utils";

const validationOption = validationOpt(createTasksSchema);

const AddTasksModal = ({ show = false, setShow }: IModal) => {
  const onClick = () => {
    setShow((state: boolean) => !state);
    reset();
  };

  // const { data: userData } = useGetUsersQuery(90);
  const [createTaskMutation] = useCreateTaskMutation();

  const { data: cohortData } = useGetCohortsQuery(90);
  const { data: groupData } = useGetGroupsQuery(90);

  const { data: trackData } = useGetTracksQuery();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    getValues,
    control,
    reset,
    // @ts-ignore
  } = useForm<any>(validationOption);

  const onSubmit = async (values) => {
    try {
      await createTaskMutation(values);

      // successful create task
      onClick();
      toast.success("User Created SUccessfully");
    } catch (e) {
      toast.error("Error Creating Task. Try Again");
      console.log(e, "error updatinf");
    }
  };

  return (
    <>
      <Modal show={show} size="md" popup={true} onClose={onClick}>
        <Modal.Header>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-8  ">
            Create Task
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="px-6 pb-4 max-h-[28rem] overflow-scroll overflow-x-hidden">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="block mb-4">
                <Input
                  lowerCase={false}
                  register={register}
                  disabled={isSubmitting}
                  currentValue={getValues("title")}
                  placeholder="Enter a First Name"
                  name="title"
                  label="Title"
                  errors={errors}
                />
              </div>

              <div className=" mb-3">
                <TextArea
                  label="Describe the Task"
                  register={register}
                  disabled={isSubmitting}
                  name="description"
                  errors={errors}
                  currentValue={getValues("description")}
                  required
                />
              </div>

              <div className="block mb-4">
                <Select
                  name="group_id"
                  register={register}
                  disabled={isSubmitting}
                  errors={errors}
                  label="Group"
                  currentValue={getValues("group_id")}
                  options={trimForSelect(groupData)}
                />
              </div>
              <div className="block mb-4">
                <Select
                  name="cohort_id"
                  register={register}
                  disabled={isSubmitting}
                  errors={errors}
                  label="Cohort"
                  currentValue={getValues("cohort_id")}
                  options={trimForSelect(cohortData)}
                />
              </div>
              <div className="block mb-4">
                <Select
                  name="track_id"
                  register={register}
                  disabled={isSubmitting}
                  errors={errors}
                  label="Track"
                  currentValue={getValues("track_id")}
                  options={trimForSelect(trackData)}
                />
              </div>

              <div className="">
                <Button
                  disabled={!isValid || !isDirty || isSubmitting}
                  type="submit"
                  className="w-full bg-brand-green-three/90 text-white font-bold"
                >
                  {isSubmitting ? "Loading" : " Create Task"}
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddTasksModal;
