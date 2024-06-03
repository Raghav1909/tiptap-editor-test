import { Button } from "@/components/ui/button"
import { Bold, Italic, Strikethrough, Underline } from "lucide-react"
import "./menubar.css"

export default function MenuBar() {
  return (
    <div>
      <h2 style={{ fontSize: "32px", paddingBottom: "0.5em" }}>
        Edit Options:
      </h2>
      <div>
        <Button className="btn">
          <Bold />
        </Button>
        <Button>
          <Italic />
        </Button>
        <Button>
          <Underline />
        </Button>
        <Button>
          <Strikethrough />
        </Button>
        <Button>Test</Button>
        <Button>Test</Button>
        <Button>Test</Button>
      </div>
    </div>
  )
}
