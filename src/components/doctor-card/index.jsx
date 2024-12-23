import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import withModal from '@/hoc/modal'

import PropTypes from 'prop-types'

function DoctorCard({ doctor, openModal }) {

  const handleDoctorClick = () => {
    openModal(
      <div>
        <h2 className="text-lg font-bold">{doctor.name}</h2>
        <p>{doctor.specialty}</p>
        <p>Precio por hora: ${doctor.hour_price}</p>
      </div>
    );
  }

  return (
    <div onClick={() => handleDoctorClick(doctor)}>
      <Card className="max-w-sm w-full mx-auto shadow-lg rounded-lg overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover"
        />
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-bold">{doctor.name}</CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {doctor.specialty}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm text-gray-700">{`Experiencia: ${doctor.experience} años`}</p>
        </CardContent>
      </Card>
    </div>
  )
}

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    specialty: PropTypes.string.isRequired,
    hour_price: PropTypes.number.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired
};

export default withModal(DoctorCard)
