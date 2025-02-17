import { Typography } from "@/ui/components/atoms/Typography";

const LoadingUI = () => {
    return (
        <div className="my-auto flex flex-col gap-4 text-center sm:text-left">
            <Typography className="text-lg sm:text-2xl">
                Bringing the frontend magic to life!🚀
            </Typography>

            <Typography
                className="animate-pulse text-5xl sm:text-8xl"
                as="h2"
                variant="title"
            >
                Loading portfolio...
            </Typography>
        </div>
    );
};

export default LoadingUI;
