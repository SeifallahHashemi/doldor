import React from "react";

function Loading() {
  return (
    <div role="status" className="space-y-2.5 animate-pulse w-full py-8">
      {Array(12)
        .fill(0)
        .map((_, i) => {
          return (
            <div className="grid grid-cols-11 w-full" key={crypto.randomUUID()}>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 w-32"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-8 ms-2 bg-gray-300 dark:bg-gray-600"></div>
            </div>
          );
        })}
        <div className="grid grid-cols-11 w-full">
              <div className="h-20 bg-gray-200 dark:bg-gray-700 w-32"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-20 ms-2 bg-gray-300 dark:bg-gray-600"></div>
            </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Loading;
