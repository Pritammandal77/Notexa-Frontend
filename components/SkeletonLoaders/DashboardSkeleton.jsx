const DashboardSkeleton = () => {
    return (
        <div className="min-h-screen bg-orange-50 p-6 mt-17 xl:px-25 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gray-300" />
                    <div className="space-y-2">
                        <div className="h-5 w-40 bg-gray-300 rounded" />
                        <div className="h-3 w-24 bg-gray-200 rounded" />
                    </div>
                </div>
            </div>

            {/* Stats Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow p-6"
                    >
                        <div className="h-4 w-24 bg-gray-200 rounded mb-3" />
                        <div className="h-8 w-20 bg-gray-300 rounded" />
                    </div>
                ))}
            </div>

            {/* Charts Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow p-6"
                    >
                        <div className="h-5 w-40 bg-gray-300 rounded mb-6" />
                        <div className="h-[260px] w-full bg-gray-200 rounded-xl" />
                    </div>
                ))}
            </div>

            {/* Withdraw History Skeleton */}
            <div className="bg-white rounded-2xl shadow p-6">
                <div className="h-5 w-48 bg-gray-300 rounded mb-6" />

                <div className="space-y-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="grid grid-cols-3 gap-4">
                            <div className="h-4 bg-gray-200 rounded" />
                            <div className="h-4 bg-gray-300 rounded" />
                            <div className="h-4 bg-gray-200 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardSkeleton;
