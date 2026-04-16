export default function Banner() {
  return (
    <section className="bg-[#f8fafc] py-10 text-center max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-slate-500 max-w-md mx-auto mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      <button className="bg-[#244d3f] text-white px-6 py-2 rounded-md font-medium hover:bg-[#152e29] transition-colors mb-12">
        + Add a Friend
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-4xl font-bold text-[#244d3f] mb-2">10</div>
          <div className="text-gray-500 font-medium text-sm">Total Friends</div>
        </div>
        
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-4xl font-bold text-[#244d3f] mb-2">3</div>
          <div className="text-gray-500 font-medium text-sm">On Track</div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-4xl font-bold text-[#244d3f] mb-2">6</div>
          <div className="text-gray-500 font-medium text-sm">Need Attention</div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-4xl font-bold text-[#244d3f] mb-2">12</div>
          <div className="text-gray-500 font-medium text-sm">Interactions This Month</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 border-b-2 border-gray-200"></div>
    </section>
  );
}