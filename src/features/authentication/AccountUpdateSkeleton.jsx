const AccountUpdateSkeleton = () => {
  return (
    <div role="status" className="max-w-full animate-pulse">
      <div className="mb-8 flex items-center justify-center">
        <svg
          className="w-15 me-3 h-16 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </div>
      <div className="mb-8 h-8 w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-8 h-8 w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-8 h-8 rounded-md bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-8 h-8 w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-8 h-8 w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-8 w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default AccountUpdateSkeleton;
