import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";
import { PersonListProps } from "./types/personTypes";

export const PersonList = ({ person }: PersonListProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 mx-auto">
      <div className="p-6 bg-white border border-gray-200 shadow-lg rounded-xl w-96">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Person Details
        </h2>

        <div className="flex items-center gap-2 text-lg font-medium text-gray-800">
          <FaUser className="text-blue-500" />
          <span>
            {person.name.first} {person.name.last}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-lg text-gray-700">
          <FaMapMarkerAlt className="text-red-500" />
          <span>
            {person.address.city}, {person.address.state}, {person.address.road}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-lg text-gray-700">
          <FaBriefcase className="text-green-500" />
          <span>{person.role}</span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-lg text-gray-700">
          <FaCalendarAlt className="text-purple-500" />
          <span>{person.age} years old</span>
        </div>

        <div
          className={`mt-4 text-lg font-semibold text-center px-4 py-2 rounded-lg ${
            person.age > 18
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {person.age > 18 ? "Adult" : "Child"}
        </div>
      </div>
    </div>
  );
};
