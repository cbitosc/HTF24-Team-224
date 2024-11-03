  
  const Userattendancepage = () => {
    const data = [
      { date: '22 OCT, 2020', checkIn: '05:51 am', checkOut: '12:01 pm', status: 'PRESENT' },
      { date: '1 FEB, 2020', checkIn: '01:08 pm', checkOut: '05:49 pm', status: 'PRESENT' },
      { date: '8 SEP, 2020', checkIn: '05:36 pm', checkOut: '11:23 pm', status: 'LEAVE' },
      { date: '21 SEP, 2020', checkIn: '11:49 pm', checkOut: '07:40 am', status: 'PRESENT' },
      { date: '17 OCT, 2020', checkIn: '02:02 am', checkOut: '11:49 pm', status: 'LEAVE' },
      { date: '24 MAY, 2020', checkIn: '02:34 am', checkOut: '10:41 pm', status: 'PRESENT' },
    ];
  
    return (
      <div className="p-6 lg:p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-6">Attendance</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <Card icon="👤" title="Akhil Kumar" subtitle="Software Developer" />
          <Card icon="🆔" title="Student ID" subtitle="160121749050" />
          <Card icon="📅" title="Joining Date" subtitle="12 January 2015" />
          <Card icon="🏢" title="Department" subtitle="CET" />
          <Card icon="⏰" title="Total Events Attended" subtitle="6" />
          <Card icon="🕒" title="Scheduled Events" subtitle="3" />
          <Card icon="🕤" title="Today's Events" subtitle="0" />
          <Card icon="🍽️" title="Favourite Club" subtitle="Kreeda" />
        </div>
  
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">DATE</th>
                <th className="py-2 px-4 border-b">CHECK IN</th>
                <th className="py-2 px-4 border-b">CHECK OUT</th>
                <th className="py-2 px-4 border-b">STATUS</th>
                <th className="py-2 px-4 border-b">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index} className="text-center hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{entry.date}</td>
                  <td className="py-2 px-4 border-b">{entry.checkIn}</td>
                  <td className="py-2 px-4 border-b">{entry.checkOut}</td>
                  <td className={`py-2 px-4 border-b ${entry.status === 'LEAVE' ? 'text-red-500' : 'text-green-500'}`}>
                    {entry.status}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button className="text-blue-500 hover:underline">
                      📝
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="flex justify-between items-center mt-6">
          <span className="text-gray-500">Showing 1 to 6 of 6 entries</span>
          <div className="flex space-x-2">
            {[...Array(6).keys()].map(num => (
              <button key={num} className="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-200">
                {num + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };


  const Card = ({ icon, title, subtitle }) => (
    <div className="flex items-center p-4 bg-white shadow rounded-lg">
      <span className="text-3xl">{icon}</span>
      <div className="ml-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );

  
  export default Userattendancepage;