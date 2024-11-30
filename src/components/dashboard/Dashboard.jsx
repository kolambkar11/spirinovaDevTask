export default function Dashboard() {
  return (
    <div className="lg:pl-72">
      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-blue-950">Dashboard</h2>
          <div className="w-full bg-white h-36 p-4 rounded-2xl mt-8 border border-slate-200"></div>
          <div className="flex gap-5">
            <div className="w-1/2 bg-white h-36 p-4 rounded-2xl mt-8 border border-slate-200">
              Running Jobs
            </div>
            <div className="w-1/2 bg-white h-36 p-4 rounded-2xl mt-8 border border-slate-200">
              Running Frames
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
