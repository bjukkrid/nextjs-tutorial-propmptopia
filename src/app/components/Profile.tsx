import PromptCard from "./PromptCard";
import { FC } from "react";
type ProfileProps = {
  name: string;
  desc: string;
  data: any[]; // Replace 'any' with the appropriate type for the 'data' prop
  handleEdit?: (post: any) => void; // Replace 'any' with the appropriate type for the 'handleEdit' prop
  handleDelete?: (post: any) => void; // Replace 'any' with the appropriate type for the 'handleDelete' prop
};

const Profile: FC<ProfileProps> = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
