import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <div>
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="default" disabled>Disabled</Button>
    </div>
  )
}
