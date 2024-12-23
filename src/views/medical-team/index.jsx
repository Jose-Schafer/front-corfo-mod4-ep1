import DoctorCard from '@/components/doctor-card'

import { useDoctors } from "@/providers/DoctorsContext"

export default function MedicalTeam() {

  const { doctors, loading } = useDoctors();

  if (loading) {
    return (<h1>Loading ...</h1>)
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Equipo Médico</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {doctors.map((doctor, key) => (
          <DoctorCard key={key} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}
