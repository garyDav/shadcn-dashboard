'use client'

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { CircleFadingArrowUpIcon, GitBranch } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">button</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="default" disabled>disabled</Button>
      <Button onClick={() => { console.log('Hola Mundo') }}>click me</Button>
      <Button variant="success">success</Button>
      <Button variant="success" capitalize={false}>capitalize false</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <CircleFadingArrowUpIcon />
      </Button>
      <Button variant="outline" size="sm">
        <GitBranch /> New Branch
      </Button>
      <Button size="sm" variant="outline" disabled>
        <Spinner />
        Submit
      </Button>
    </div>
  )
}
