import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import PropTypes from 'prop-types'

export default function DoctorCard({ doctor }) {
  return (
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
  )
}

DoctorCard.propTypes = {
  doctors: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired
    })
  )
};
