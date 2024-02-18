import React from "react";

function TestimonialCard() {
  return (
        <blockquote className="bg-white rounded-lg py-20 p-6 shadow-lg sm:p-8">
          <div className="flex items-center gap-4">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="size-14 rounded-full object-cover"
            />

            <div>
              <div className="flex justify-center gap-0.5 text-agree"></div>
              <p className="mt-0.5 text-lg font-medium text-gray-900">
                Chissaite Gotine
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil
            fugit deleniti. Earum libero delectus ipsam alias culpa fugiat
            officia numquam, eos odio, qui commodi maiores dolor iure blanditiis
            illum?
          </p>
        </blockquote>
  );
}

export default TestimonialCard;
