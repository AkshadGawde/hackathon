import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const FeedbackForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const onSubmit = (data) => {
    console.log({ ...data, rating });
    navigate('/attendance');
  };

  return (
    <div className="border border-gray-300 max-w-sm mx-auto mt-8 p-5 pb-0 mb-5">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-4 flex items-center">
          <label htmlFor="rating" className="block font-bold mb-2 pr-2">
            Rating:
          </label>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => handleStarClick(value)}
              className="cursor-pointer"
            >
              {value <= rating ? (
                <AiFillStar className="text-yellow-500 text-2xl" /> // Increase size with text-2xl class
              ) : (
                <AiOutlineStar className="text-2xl" /> // Increase size with text-2xl class
              )}
            </span>
          ))}
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
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              name="issues"
              value="Issue 4"
              {...register("issues")}
              className="form-checkbox text-indigo-600 h-5 w-5"
            />
            <span className="ml-2 text-sm ">Others</span>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block font-bold mb-2">
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            {...register('feedback')}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black placeholder-black"
          ></textarea>
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
