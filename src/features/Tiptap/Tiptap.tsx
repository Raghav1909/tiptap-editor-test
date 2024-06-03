import { EditorProvider } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import MenuBar from "./MenuBar"

const extensions = [StarterKit]

const content = `<p>Hi</p>`

const Tiptap = () => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={content}
    ></EditorProvider>
  )
}

export default Tiptap
