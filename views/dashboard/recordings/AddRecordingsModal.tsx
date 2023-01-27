import { Modal } from "flowbite-react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { createRecordingsSchema, validationOpt } from "schema";
import { IModal } from "interface";
import Input from "@components/commons/input";
import Button from "@components/commons/button";
import {
  useCreateRecordingMutation,
  useGetCohortsQuery,
  useGetTracksQuery,
} from "@services/api";
import { trimForSelect } from "utils";
import Select from "@components/commons/select";
import TextArea from "@components/commons/textarea";

const validationOption = validationOpt(createRecordingsSchema);

const AddRecordings = ({ show = false, setShow }: IModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    getValues,
    control,
    reset,
    // @ts-ignore
  } = useForm<any>(validationOption);
  const [createRecordingsMutation] = useCreateRecordingMutation();
  const { data: trackData } = useGetTracksQuery();
  const { data: cohortData } = useGetCohortsQuery(90);
  console.log(trackData, "track data");

  const onClick = () => {
    setShow((state: boolean) => !state);
    reset();
  };

  const submit = async (value) => {
    try {
      await createRecordingsMutation({
        ...value,
        recording_number: 5,
        cohort_id: +value.cohort_id,
        track_id: +value.track_id,
      });
      // console.log(
      //   {
      //     ...value,
      //     recording_number: 5,
      //     cohort_id: +value.cohort_id,
      //     track_id: +value.track_id,
      //   },
      //   "data >>><<"
      // );
      onClick();
      toast.success("Recordings Uploaded Successfully");
    } catch (e) {
      toast.error("Error Uploading Recordings, Try Again");
      console.log(e);
    }
    // console.log(value, "value !!!!");
  };
  return (
    <>
      <Modal show={show} size="md" popup={true} onClose={onClick}>
        <Modal.Header>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-8  ">
            Upload Recordings
          </h3>
        </Modal.Header>
        <Modal.Body>
          <div className="max-h-[28rem] overflow-scroll overflow-x-hidden">
            <form onSubmit={handleSubmit(submit)}>
              <div className="block mb-4 ">
                <Input
                  lowerCase={false}
                  register={register}
                  disabled={isSubmitting}
                  currentValue={getValues("title")}
                  placeholder="Enter Recording Title"
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
                  label="Recording Link"
                  errors={errors}
                />
              </div>

              <div className=" mb-4">
                <TextArea
                  label="Describe the content of this upload"
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
                  name="track_id"
                  register={register}
                  disabled={isSubmitting}
                  errors={errors}
                  label="Track"
                  currentValue={getValues("track_id")}
                  options={trimForSelect(trackData)}
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

              <div>
                <Button
                  disabled={!isValid || !isDirty || isSubmitting}
                  type="submit"
                  className="w-full bg-brand-green-three/90 text-white font-bold"
                >
                  {isSubmitting ? "Loading" : " Create Recording"}
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddRecordings;
