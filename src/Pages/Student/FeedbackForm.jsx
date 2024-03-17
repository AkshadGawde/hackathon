import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
const FeedbackForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
      console.log(data);
      navigate("/attendance"); 
  };

    return (
        <div className="border border-gray-300 max-w-sm mx-auto mt-8 p-5 pb-0 mb-5"> {/* Add border to the whole page */}
            <form onSubmit={handleSubmit(onSubmit)} className="">
                

                <div className="mb-4">
                    <label htmlFor="rating" className="text-sm ">
                        Rating (out of 5)
                    </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        {...register("rating")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black placeholder-black"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="feedback" className="block font-bold mb-2 ">
                        Feedback
                    </label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        {...register("feedback")}
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black placeholder-black"
                    ></textarea>
                </div>
                <div className="mb-4">
    <p className="block font-bold mb-2 ">Issues</p>

    <label className="flex items-center mb-2">
        <input
            type="checkbox"
            name="issues"
            value="Issue 1"
            {...register("issues")}
            className="form-checkbox text-indigo-600 h-5 w-5"
        />
        <span className="ml-2 text-sm ">Defective Product</span>
    </label>

    <label className="flex items-center mb-2">
        <input
            type="checkbox"
            name="issues"
            value="Issue 2"
            {...register("issues")}
            className="form-checkbox text-indigo-600 h-5 w-5"
        />
        <span className="ml-2 text-sm ">Delivery Late / Issue in delivery</span>
    </label>

    <label className="flex items-center mb-2">
        <input
            type="checkbox"
            name="issues"
            value="Issue 3"
            {...register("issues")}
            className="form-checkbox text-indigo-600 h-5 w-5"
        />
        <span className="ml-2 text-sm ">High Price</span>
    </label>

    <label className="flex items-center mb-2">
        <input
            type="checkbox"
            name="issues"
            value="Issue 4"
            {...register("issues")}
            className="form-checkbox text-indigo-600 h-5 w-5"
        />
        <span className="ml-2 text-sm ">Products Missing</span>
    </label>
</div>

                <div className="mb-6">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                        Submit Feedback
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FeedbackForm
