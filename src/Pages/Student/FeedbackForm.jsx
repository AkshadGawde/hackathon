import React from 'react'
import { useForm } from 'react-hook-form'

const FeedbackForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="border border-gray-300 max-w-sm mx-auto mt-8 p-8 rounded-lg"> {/* Add rounded borders */}
            <form onSubmit={handleSubmit(onSubmit)} className="text-gray-500">
                <div className="mb-4">
                    <label htmlFor="rating" className="text-sm text-gray-500">
                        Rating (out of 5)
                    </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        {...register("rating")}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="feedback" className="block font-bold mb-2 text-gray-500">
                        Feedback
                    </label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        {...register("feedback")}
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>
                <div className="mb-4">
    <p className="block font-bold mb-2 text-gray-500">Issues</p>
    <label className="inline-flex items-center mb-2">
        <input
            type="checkbox"
            name="issues"
            value="Issue 1"
            {...register("issues")}
            className="form-checkbox text-indigo-600 h-5 w-5"
        />
        <span className="ml-2 text-sm text-gray-500">Defective Product</span>
    </label>
    <label className="inline-flex items-center mb-2">
        <input
            type="checkbox"
            name="issues"
            value="Issue 2"
            {...register("issues")}
            className="form-checkbox text-indigo-600 h-5 w-5"
        />
        <span className="ml-2 text-sm text-gray-500">Delivery Late / Issue in delivery</span>
    </label>
    <label className="inline-flex items-center mb-2">
        <input
            type="checkbox"
            name="issues"
            value="Issue 3"
            {...register("issues")}
            className="form-checkbox text-indigo-600 h-5 w-5"
        />
        <span className="ml-2 text-sm text-gray-500">High Price</span>
    </label>
    <label className="inline-flex items-center mb-2">
        <input
            type="checkbox"
            name="issues"
            value="Issue 4"
            {...register("issues")}
            className="form-checkbox text-indigo-600 h-5 w-5"
        />
        <span className="ml-2 text-sm text-gray-500">Products Missing</span>
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
