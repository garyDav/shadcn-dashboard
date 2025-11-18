'use client'

import { useEffect, useState } from 'react'

import { Calendar } from "@/components/ui/calendar";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeZone, setTimeZone] = useState<string | undefined>(undefined)
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString('es-Es', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  useEffect(() => {
    queueMicrotask(() => {
      setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
    })
  }, [])

  return (
    <div className='flex-col sm:flex-wrap sm:flex sm:flex-row gap-4'>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        timeZone={timeZone}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        timeZone={timeZone}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
        disabled={(date) => date < new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        timeZone={timeZone}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />

      <div>
        <h1 className='text-3xl'>Información</h1>
        <div className='border-b'></div>
        <p>{smallDate}</p>
        <p>{multipleDates?.map(date => date.toLocaleDateString()).join(', ')}</p>
      </div>
    </div>
  )
}

