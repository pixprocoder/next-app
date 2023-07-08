import Modal from "@/components/Modal";
import { redirect } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";

const CreateProject = async () => {
  const session = await getCurrentUser();
  if (!session) redirect;
  return (
    <Modal>
      <h1 className="modal-head-text">create a new project</h1>
      <ProjectForm type="create" session={session} />
    </Modal>
  );
};

export default CreateProject;
