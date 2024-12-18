import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { get } from '@/api/requests'


export default function AppointmentsTable({ appointments }) {
  const [doctors, setDoctors] = useState({});

  useEffect(() => {
    const loadDoctors = async () => {
      const doctors = await get('/static/json/doctors.json');

      const doctorsDict = Object.assign({}, ...doctors.map((x) => ({ [x.id]: { ...x } })));
      setDoctors(doctorsDict);
    }

    loadDoctors();

  }, [])

  return (
    <Table>
      <TableCaption>Listado de citas médicas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Fecha y Hora</TableHead>
          <TableHead>Doctor</TableHead>
          <TableHead>Paciente</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.map((appointment, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{appointment.schedule}</TableCell>
            <TableCell>{doctors[appointment.doctorId]?.name}</TableCell>
            <TableCell>{appointment.name}</TableCell>
            <TableCell className="text-right">{doctors[appointment.doctorId]?.hour_price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

