import React from 'react';

const Questions = () => {
    return (
      <div className="my-6">
        <h1 className="text-3xl font-semibold">
          3 questions you need to know about React
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-2">
          <div className="p-5 border border-dotted border-blue-400  hover:shadow-md">
            <h3 className="text-2xl font-semibold mb-3">
              Q1: How does React Work?
            </h3>
            <p className="text-lg text-justify font-medium">
              At its very core, React basically maintains a tree for you. This
              tree is able to do efficient diff computations on the nodes. Think
              of your HTML code as a tree. In fact, that is exactly how the
              browser treats your DOM. React allows you to effectively
              re-construct your DOM in JavaScript and push only those changes to
              the DOM which have actually occurred.
            </p>
          </div>
          <div className="p-5 border border-dotted border-blue-400  hover:shadow-md">
            <h3 className="text-2xl font-semibold mb-3">
              Q2: What are the difference between props and state?
            </h3>
            <p className="text-lg text-justify font-medium">
              Props are used to pass data from one component to another. The
              state is a local data storage that is local to the component only
              and cannot be passed to other components. Props is only readable you can change it property on the other hand you can change the state.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Questions;