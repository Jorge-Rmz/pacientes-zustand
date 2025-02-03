import { toast } from "react-toastify";
import { Patient } from "../interface";
import { usePatientStore } from "../store/store";
import PatientDetailItem from "./PatientDetailItem";

interface PatientDetailsProps {
    patient: Patient;
}
export default function PatientDetails({ patient }: PatientDetailsProps) {
    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id);
        toast.error('Patient delete correctly')
    }
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label='ID' value={patient.id} />
            <PatientDetailItem label='Nombre' value={patient.name} />
            <PatientDetailItem label='Propietario' value={patient.caretaker} />
            <PatientDetailItem label='Email' value={patient.email} />
            <PatientDetailItem label='Date' value={patient.date.toString()} />
            <PatientDetailItem label='Sintomas' value={patient.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => getPatientById(patient.id)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleClick}
                >Eliminar</button>
            </div>
        </div>
    )
}
