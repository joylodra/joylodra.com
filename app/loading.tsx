const Loading = () => {
  return (
    <div>
      <div className="animate-pulse flex flex-col gap-7">
        <div className="rounded bg-neutral-100 dark:bg-[#262626] h-12 w-1/4 mb-3" />

        <div className="rounded bg-neutral-100 dark:bg-[#262626] h-7 w-1/2" />

        <div className="flex flex-col gap-3">
          <div className="rounded bg-neutral-100 dark:bg-[#262626] h-5 w-full" />
          <div className="rounded bg-neutral-100 dark:bg-[#262626] h-5 w-full" />
          <div className="rounded bg-neutral-100 dark:bg-[#262626] h-5 w-1/4" />
        </div>

        <div className="rounded bg-neutral-100 dark:bg-[#262626] h-7 w-1/2" />

        <div className="flex flex-col gap-3">
          <div className="rounded bg-neutral-100 dark:bg-[#262626] h-5 w-full" />
          <div className="rounded bg-neutral-100 dark:bg-[#262626] h-5 w-full" />
          <div className="rounded bg-neutral-100 dark:bg-[#262626] h-5 w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
