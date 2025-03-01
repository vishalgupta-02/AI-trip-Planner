import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3 justify-center gap-12">
      <div className="flex justify-between items-center m-6">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-8 w-[200px]" />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <Skeleton className="h-8 w-[500px]" />
        <Skeleton className="h-8 w-[400px]" />
        <Skeleton className="h-8 w-[200px]" />
      </div>
      <div className="flex justify-center items-center">
        <Skeleton className="h-6 w-[250px]" />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <Skeleton className="h-4 w-[600px]" />
        <Skeleton className="h-4 w-[600px]" />
        <Skeleton className="h-4 w-[500px]" />
      </div>
      <div className="flex justify-center items-center m-6">
        <Skeleton className="h-8 w-[100px]" />
      </div>

      <div className="flex justify-center items-center m-6">
        <Skeleton className="h-[540px] w-[960px] rounded-xl" />
      </div>
      <div className="flex justify-between items-center gap-6 m-6">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
};

export default SkeletonCard;
