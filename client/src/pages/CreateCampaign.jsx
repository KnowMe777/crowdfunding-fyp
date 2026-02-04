import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { checkIfImage } from "../utils";
import { useStateContext } from "../context";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    deadline: "",
    target: "",
    image: "",
  });

  const handleFormFieldChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const exists = checkIfImage(form.image);

      if (!exists) {
        alert("Provide a valid image URL");
        setForm({ ...form, image: "" });
        setIsLoading(false);
        return;
      }

      await createCampaign(form);
      navigate("/profile");
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center py-12 px-4 sm:px-8 bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 sm:p-10">
        <h1 className="text-2xl sm:text-4xl font-semibold font-poppins mb-8 text-center">
          Create a New Campaign
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-2 font-outfit font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormFieldChange}
              placeholder="John Doe"
              className="px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-outfit font-medium">
              Campaign Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleFormFieldChange}
              placeholder="Save the Rainforest"
              className="px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-black"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-outfit font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleFormFieldChange}
              placeholder="Describe your project..."
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-black resize-none"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label className="mb-2 font-outfit font-medium">Deadline</label>
              <input
                type="date"
                name="deadline"
                value={form.deadline}
                onChange={handleFormFieldChange}
                className="px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-black"
                required
              />
            </div>

            <div className="flex flex-col flex-1">
              <label className="mb-2 font-outfit font-medium">
                Target (ETH)
              </label>
              <input
                type="number"
                name="target"
                value={form.target}
                onChange={handleFormFieldChange}
                placeholder="e.g. 1.3"
                step={0.1}
                className="px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-black"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-outfit font-medium">
              Campaign Image URL
            </label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleFormFieldChange}
              placeholder="https://example.com/image.jpg"
              className="px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-black"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-black text-white font-poppins rounded-lg hover:opacity-90 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Campaign"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateCampaign;
