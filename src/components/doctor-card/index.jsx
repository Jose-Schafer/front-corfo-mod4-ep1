import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function DoctorCard({ doctor }) {
  return (
    <Card className="w-48">
      <img src={doctor.image} />
      <CardHeader>
        <CardTitle>{doctor.name}</CardTitle>
        <CardDescription>{doctor.specialty}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{`Experiencia: ${doctor.experience} años`}</p>
      </CardContent>
    </Card>
  )
}
