const Button = ({name}) => {
  return (
    <button className="text-white dark:bg-sky-600 dark:text-neutral-200 dark:hover:bg-sky-300 dark:hover:text-neutral-950 bg-neutral-800 hover:bg-neutral-900 transition p-2 rounded-md">
      {name}
    </button>
  );
};

export default Button;
