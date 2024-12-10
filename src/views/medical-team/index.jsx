import { useEffect, useState } from 'react'
import { get } from '@/api/requests'
import DoctorCard from '@/components/doctor-card'

export default function MedicalTeam() {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const loadDoctors = async () => {
      const doctors = await get('/static/json/doctors.json');
      setDoctors(doctors);
    }

    loadDoctors()
  }, [])

  console.log(doctors)

  if (!doctors) {
    return <h1>Loading ...</h1>
  }

  return (
    <div>
      <h1>Equipo Médico</h1>
      <div className="grid grid-cols-6 gap-1">
        {doctors.map((doctor, key) => (
          <DoctorCard key={key} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}
