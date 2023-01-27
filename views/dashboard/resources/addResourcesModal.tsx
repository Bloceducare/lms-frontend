import { Modal } from "flowbite-react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { createResourcesSchema, validationOpt } from "schema";
import { IModal } from "interface";
import Input from "@components/commons/input";
import Button from "@components/commons/button";
import { useCreateResourceMutation } from "@services/api";

const validationOption = validationOpt(createResourcesSchema);

const AddReso = ({ show = false, setShow }: IModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    getValues,
    control,
    reset,
    // @ts-ignore
  } = useForm<any>(validationOption);
  const [createResourceMutation] = useCreateResourceMutation();

  const onClick = () => {
    setShow((state: boolean) => !state);
    reset();
  };

  const submit = async (value) => {
    try {
      await createResourceMutation(value);

      onClick();
      toast.success("Resource Created Successfully");
    } catch (e) {
      toast.error("Error Creating Resource, Try Again");
      console.log(e);
    }
    console.log(value, "value !!!!");
  };
  return (
    <>
      <Modal show={show} size="md" popup={true} onClose={onClick}>
        <Modal.Header>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-8  ">
            Add Resources
          </h3>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(submit)}>
            <div className="block mb-4">
              <Input
                lowerCase={false}
                register={register}
                disabled={isSubmitting}
                currentValue={getValues("title")}
                placeholder="Enter Resource Title"
                name="title"
                label="Title"
                errors={errors}
              />
            </div>

            <div className="block mb-4">
              <Input
                lowerCase={false}
                register={register}
                disabled={isSubmitting}
                currentValue={getValues("link")}
                placeholder="Enter A Valid link"
                name="link"
                label="Resource Link"
                errors={errors}
              />
            </div>

            <div>
              <Button
                disabled={!isValid || !isDirty || isSubmitting}
                type="submit"
                className="w-full bg-brand-green-three/90 text-white font-bold"
              >
                {isSubmitting ? "Loading" : " Create Resource"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddReso;
