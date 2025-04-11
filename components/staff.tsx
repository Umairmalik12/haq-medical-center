import React from "react";
import { User } from "lucide-react"; // Importing icon for staff members

const staffMembers = [
  { name: "Asif Sardar", designation: "Admin" },
  { name: "Malik Umair", designation: "IT Manager (MPHIL Scholar)" },
  { name: "Malik Umair", designation: "CEO of Pharmacy" },
  { name: "Malik Nouman", designation: "CEO of Pharmacy" },
  { name: "Munir Ahmed", designation: "O.T.T Receptionist" },
  { name: "Zahid Shah", designation: "O.T.T" },
  { name: "Umar", designation: "O.P.D Assistant" },
  { name: "Tahir", designation: "Receptionist" },
  { name: "Iqra", designation: "LHV" },
  { name: "Rashida Maqsood", designation: "Cleaner" },
  { name: "Irfan", designation: "Ward Boy" },
  { name: "Zahid", designation: "Cleaner" },
  { name: "Kalsoom BB", designation: "Receptionist" },
  { name: "Kalsoom", designation: "Lab (S) Pharmacy" },
  { name: "Shahnaz", designation: "Lab Technician" },
  { name: "Mujahid", designation: "Evening Lab" },
  { name: "Ismail", designation: "OT Technician & Pharmacist" },
  { name: "Tasawar", designation: "Cleaner" },
  { name: "Nasrullah", designation: "Ward Staff" },
  { name: "Samina", designation: "Dispenser" },
  { name: "Hafeez", designation: "Cleaner" },
  { name: "Ammar", designation: "Cleaner" },
];

const Staff = () => {
  return (
    <section id="staff" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">Staff Members</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed mx-auto">
            Meet our dedicated team who are always ready to assist.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {staffMembers.map((staff, index) => (
            <div key={index} className="space-y-4 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <User className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{staff.name}</h3>
                  <p className="text-gray-500">{staff.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
