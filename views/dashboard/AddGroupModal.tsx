import { Modal } from "flowbite-react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { createGroup, validationOpt } from "schema";
import { IModal } from "interface";
import Input from "@components/commons/input";
import Button from "@components/commons/button";
import { useCreateGroupMutation } from "@services/api";

const validationOption = validationOpt(createGroup);

const AddGroupModal = ({ show = false, setShow }: IModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    getValues,
    control,
    reset,
    // @ts-ignore
  } = useForm<any>(validationOption);
  const [createGroupMutation] = useCreateGroupMutation();

  const onClick = () => {
    setShow((state: boolean) => !state);
    reset();
  };

  const submit = async (value) => {
    try {
      const response = await createGroupMutation(value).unwrap();

      onClick();
      toast.success("Group Created Successfully");
    } catch (e) {
      // const error = JSON.parse(JSON.stringify(e))
      console.log(e);
    }
    console.log(value, "value !!!!");
  };
  return (
    <>
      <Modal show={show} size="md" popup={true} onClose={onClick}>
        <Modal.Header>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-8  ">
            Add Group
          </h3>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(submit)}>
            <div className="block mb-4">
              <Input
                lowerCase={false}
                register={register}
                disabled={isSubmitting}
                currentValue={getValues("name")}
                placeholder="Enter Group Name"
                name="name"
                label="Group Name"
                errors={errors}
              />
            </div>
            <div>
              <Button
                disabled={!isValid || !isDirty || isSubmitting}
                type="submit"
                className="w-full bg-brand-green-three/90 text-white font-bold"
              >
                {isSubmitting ? "Loading" : " Create Group"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddGroupModal;
