import { Button } from "@/components/ui/button"
import { pause, setPause } from "@/lib/pause";

export function Admin() {
  return <Button variant="destructive" onClick={() => setPause(!pause)}>{pause}</Button>
}
