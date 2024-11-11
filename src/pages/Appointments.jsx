import React, { useEffect, useState } from 'react';
import { getAppointments } from '../apiService';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <main className="flex-1 bg-green-100 p-10 h-screen">
      {/* Appointments & Consultations */}
      <h1 className="text-2xl font-bold mb-6 text-green-900">Appointments & Consultations</h1>

      {/* Submenu - Horizontal Form */}
      <div className="bg-white p-5 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center text-green-900 font-semibold text-lg">
          <span>Appt. ID</span>
          <span>Patient Name</span>
          <span>Date</span>
          <span>Time</span>
          <span>Actions</span> {/* Actions column */}
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="flex-grow overflow-y-auto">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment.app_id} className="bg-white p-5 rounded-lg shadow mt-4">
              <div className="flex justify-between items-center text-gray-700">
                <span>{appointment.app_id}</span>
                <span>{appointment.patient_name}</span>
                <span>{new Date(appointment.date).toLocaleDateString()}</span>
                <span>{appointment.time}</span>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-yellow-500 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-green-800">No appointments available.</p>
        )}
      </div>
    </main>
  );
};

export default Appointments;
